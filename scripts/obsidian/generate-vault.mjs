import { createServer } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join, dirname, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const VAULT_DIR = join(ROOT, "obsidian-vault");
const CONFIG_PATH = join(__dirname, "config.json");
const MD_FILES_DIR = join(ROOT, "src", "md files");
const MANIFEST_PATH = join(VAULT_DIR, ".generated-manifest.json");

const CLEAN_MODE = process.argv.includes("--clean");

const MOC_DIR = "00 - Maps of Content";
const PROJECTS_DIR = "01 - Projects";
const SKILLS_DIR = "02 - Skills";
const COMPANIES_DIR = "03 - Companies";
const MEDIA_DIR = "04 - Media Notes";
const TEMPLATES_DIR = "05 - Templates";
const ATTACHMENTS_DIR = "attachments";

const DIRS = [MOC_DIR, PROJECTS_DIR, SKILLS_DIR, COMPANIES_DIR, MEDIA_DIR, TEMPLATES_DIR, ATTACHMENTS_DIR];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeFilename(name) {
  return name.replace(/[/\\?%*:|"<>]/g, "-");
}

function readJSON(path) {
  return JSON.parse(readFileSync(path, "utf-8"));
}

function readMarkdownFiles(dir) {
  if (!existsSync(dir)) return {};
  const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
  const notes = {};
  for (const file of files) {
    const content = readFileSync(join(dir, file), "utf-8");
    const name = file.replace(/\.md$/, "");
    notes[name] = content;
  }
  return notes;
}

function extractTitleFromMd(content) {
  const match = content.match(/^#\s+(.+)/m);
  return match ? match[1].trim() : null;
}

function extractSection(content, sectionTitle) {
  const escaped = sectionTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`## ${escaped}\\s*\\n([^#]*(?:\\n(?!#\\s)[^#]*)*)`, "m");
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function extractYamlLike(content, key) {
  const regex = new RegExp(`${key}:\\s*(.+)`, "m");
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function toTag(str) {
  return "#" + slugify(str);
}

function toWikilink(name) {
  return `[[${name}]]`;
}

function sortObjectKeys(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return obj;
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = sortObjectKeys(obj[key]);
      return acc;
    }, {});
}

function yamlFrontmatter(obj) {
  const sorted = sortObjectKeys(obj);
  let yaml = "---\n";
  for (const [key, value] of Object.entries(sorted)) {
    if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      for (const item of value) {
        yaml += `  - ${item}\n`;
      }
    } else if (typeof value === "string") {
      if (value.includes("\n")) {
        yaml += `${key}: |\n`;
        for (const line of value.split("\n")) {
          yaml += `  ${line}\n`;
        }
      } else {
        yaml += `${key}: ${value}\n`;
      }
    } else if (value !== null && value !== undefined) {
      yaml += `${key}: ${value}\n`;
    }
  }
  yaml += "---\n";
  return yaml;
}

function detectedSkills(config, projectTech) {
  const skills = [];
  for (const [category, techList] of Object.entries(config.skillCategories)) {
    for (const tech of projectTech) {
      if (techList.some((t) => t.toLowerCase() === tech.toLowerCase())) {
        if (!skills.includes(category)) skills.push(category);
        break;
      }
    }
  }
  if (skills.length === 0 && projectTech.length > 0) {
    skills.push(projectTech[0]);
  }
  return skills;
}

function slugifiedTitleMatch(mdName, project) {
  const mdSlug = slugify(mdName.replace(/_/g, " "));
  const projectSlug = slugify(project.title.replace(/_/g, " "));
  if (mdSlug === projectSlug) return true;
  if (mdSlug.includes(projectSlug) || projectSlug.includes(mdSlug)) return true;
  return false;
}

function matchNotesToProjects(notes, projects, config) {
  const mapping = {};
  const explicitMappings = config.explicitNoteMappings || {};

  for (const [mdName, content] of Object.entries(notes)) {
    const explicitTarget = explicitMappings[mdName];
    if (explicitTarget) {
      const found = projects.find((p) => p.id === explicitTarget);
      if (found) {
        mapping[mdName] = found;
        continue;
      }
    }

    const mdTitle = extractTitleFromMd(content);
    if (mdTitle) {
      const byTitle = projects.find(
        (p) => p.title.toLowerCase() === mdTitle.toLowerCase(),
      );
      if (byTitle) {
        mapping[mdName] = byTitle;
        continue;
      }
    }

    if (mdTitle) {
      const looseMatch = projects.find((p) => {
        const pSlug = slugify(p.title);
        const mSlug = slugify(mdTitle);
        return pSlug.includes(mSlug) || mSlug.includes(pSlug);
      });
      if (looseMatch) {
        mapping[mdName] = looseMatch;
        continue;
      }
    }

    const bySlug = projects.find((p) => slugifiedTitleMatch(mdName, p));
    if (bySlug) {
      mapping[mdName] = bySlug;
      continue;
    }
  }

  return mapping;
}

function detectCompanies(project, config) {
  const companies = new Set();
  const allText = [
    project.title,
    project.summary,
    project.attributionNote || "",
    ...(project.productContext || []).map((c) => c.label),
    project.role,
    ...project.tech,
    ...project.platform,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  for (const [company, aliases] of Object.entries(config.companyAliases)) {
    for (const alias of aliases) {
      if (allText.includes(alias.toLowerCase())) {
        companies.add(company);
        break;
      }
    }
  }

  if (project.attributionNote && project.attributionNote.toLowerCase().includes("bedo")) {
    companies.add("BEDO");
  }

  return [...companies].sort();
}

function scanForNDARisks(project, matchedMdContent, config) {
  const rules = config.ndaRules;

  const sourceText = [
    project.summary,
    project.attributionNote || "",
    project.problem,
    project.solution,
    ...(project.challenges || []),
    ...(project.impact || []),
    ...(project.highlights || []),
    ...(project.technicalHighlights || []),
    ...(project.overview || []),
    ...(project.productContext || []).map((c) => c.label),
    matchedMdContent || "",
  ]
    .filter(Boolean)
    .join("\n");

  const highRiskHits = [];
  const mediumRiskHits = [];

  for (const pattern of rules.highRiskPatterns) {
    const regex = new RegExp(pattern, "gi");
    const matches = sourceText.match(regex);
    if (matches) highRiskHits.push(...matches);
  }

  for (const pattern of rules.mediumRiskPatterns) {
    const regex = new RegExp(pattern, "gi");
    const matches = sourceText.match(regex);
    if (matches) mediumRiskHits.push(...matches);
  }

  if (rules.contentFlags.codeBlocks) {
    const codeBlockCount = (matchedMdContent || "").match(/```/g);
    if (codeBlockCount && codeBlockCount.length >= 2) mediumRiskHits.push("code-blocks");
  }

  if (rules.contentFlags.privateUrls) {
    const privateUrlRegex = /https?:\/\/(localhost|127\.0\.0\.1|192\.168\.|10\.\d+\.)/gi;
    const matches = sourceText.match(privateUrlRegex);
    if (matches) mediumRiskHits.push(...matches);
  }

  if (rules.contentFlags.localPaths) {
    const localPathRegex = /[cC]:\\[^\s,.!?)]+|[a-zA-Z]:\\[^\s,.!?)]+/g;
    const matches = matchedMdContent ? matchedMdContent.match(localPathRegex) : null;
    if (matches) mediumRiskHits.push(...matches);
  }

  if (highRiskHits.length > 0) {
    return { risk: "needs-review", reasons: [...new Set(highRiskHits)].slice(0, 5) };
  }

  if (mediumRiskHits.length > 0) {
    return { risk: "needs-review", reasons: [...new Set(mediumRiskHits)].slice(0, 5) };
  }

  return { risk: "low", reasons: [] };
}

function buildProjectNote(project, matchedMdContent, config, allProjects) {
  const id = project.id;
  const title = project.title;
  const category = project.category;
  const role = project.role;
  const tech = project.tech || [];
  const platforms = project.platform || [];
  const timeline = project.timeline || "";

  const ndaResult = scanForNDARisks(project, matchedMdContent, config);
  const ndaRisk = ndaResult.risk;

  const companies = detectCompanies(project, config);
  const skills = detectedSkills(config, tech);

  let summary = project.summary || "";
  let roleDetail = role;
  let whatIBuilt = "";
  let simulatedBehaviors = [];
  let stationBreakdown = [];
  let technicalHighlights = project.technicalHighlights || [];
  let overview = project.overview || [];

  if (matchedMdContent) {
    const mdTitle = extractTitleFromMd(matchedMdContent);
    if (!summary && mdTitle) summary = mdTitle;

    const mdSummary = extractYamlLike(matchedMdContent, "Short Card Summary");
    if (mdSummary) summary = mdSummary;

    const mdWhatIBuilt = extractSection(matchedMdContent, "What I Built");
    if (mdWhatIBuilt) whatIBuilt = mdWhatIBuilt;

    const mdRoleDetail = extractSection(matchedMdContent, "My Role");
    if (mdRoleDetail) roleDetail = mdRoleDetail.replace(/^Unity Developer/m, "").trim() || role;
  }

  if (project.simulatedBehaviors) {
    simulatedBehaviors = project.simulatedBehaviors;
  } else if (matchedMdContent) {
    const mdSimulated = extractSection(matchedMdContent, "Simulated Behaviors");
    if (mdSimulated) {
      simulatedBehaviors = [{ title: "Simulated Behaviors", bullets: mdSimulated.split("\n").filter((l) => l.trim().startsWith("-")).map((l) => l.replace(/^-\s*/, "")) }];
    }
  }

  if (project.stationBreakdown) {
    stationBreakdown = project.stationBreakdown;
  } else if (matchedMdContent) {
    const mdStationBreakdown = extractSection(matchedMdContent, "Station Breakdown");
    if (mdStationBreakdown) {
      stationBreakdown = [{ title: "Station Breakdown", description: "", bullets: mdStationBreakdown.split("\n").filter((l) => l.trim().startsWith("-")).map((l) => l.replace(/^-\s*/, "")) }];
    }
  }

  if (whatIBuilt && !technicalHighlights.length) {
    technicalHighlights = whatIBuilt.split("\n").filter((l) => l.trim().startsWith("-")).map((l) => l.replace(/^-\s*/, ""));
  }

  let body = `# ${title}\n\n`;

  body += "## Summary\n\n";
  body += `${summary}\n\n`;

  body += "## My Role\n\n";
  body += `${roleDetail}\n\n`;

  if (tech.length > 0) {
    body += "## Technologies Used\n\n";
    for (const t of tech) {
      body += `- ${toWikilink(t)}\n`;
    }
    body += "\n";
  }

  if (whatIBuilt) {
    body += "## What I Built\n\n";
    body += `${whatIBuilt}\n\n`;
  }

  if (simulatedBehaviors.length > 0) {
    body += "## Simulated / Implemented Behavior\n\n";
    for (const behavior of simulatedBehaviors) {
      if (behavior.title) {
        body += `### ${behavior.title}\n\n`;
      }
      if (behavior.bullets) {
        for (const bullet of behavior.bullets) {
          body += `- ${bullet}\n`;
        }
        body += "\n";
      }
    }
  }

  if (project.media && project.media.length > 0) {
    body += "## Media\n\n";
    for (const media of project.media) {
      const mediaTitle = media.title || media.id || "Media";
      body += `- ${mediaTitle}`;
      if (media.type === "youtube" && media.youtubeId) {
        body += ` (${media.youtubeId})`;
      }
      body += "\n";
    }
    body += "\n";
  }

  if (project.demoUrl) {
    body += `- Demo: ${project.demoUrl}\n`;
  }
  if (project.caseStudyUrl) {
    body += `- Case Study: ${project.caseStudyUrl}\n`;
  }
  if (project.githubUrl) {
    body += `- GitHub: ${project.githubUrl}\n`;
  }

  body += "\n## NDA Notes\n\n";
  body += "This note was generated from public portfolio data.\n\n";

  if (skills.length > 0) {
    body += "## Related Skills\n\n";
    for (const skill of skills) {
      body += `- ${toWikilink(skill)}\n`;
    }
    body += "\n";
  }

  const relatedProjects = allProjects
    .filter((p) => p.id !== id)
    .filter((p) => {
      const sharedTech = p.tech.filter((t) => tech.includes(t));
      return sharedTech.length > 0;
    })
    .sort((a, b) => b.tech.filter((t) => tech.includes(t)).length - a.tech.filter((t) => tech.includes(t)).length)
    .slice(0, 5);

  if (relatedProjects.length > 0) {
    body += "## Related Projects\n\n";
    for (const rp of relatedProjects) {
      body += `- ${toWikilink(rp.title)}\n`;
    }
    body += "\n";
  }

  body += "## Source References\n\n";
  body += `- Project ID: \`${id}\`\n`;
  if (project.productContext && project.productContext.length > 0) {
    body += "- Product Context:\n";
    for (const ctx of project.productContext) {
      body += `  - ${ctx.label}`;
      if (ctx.url) body += ` (${ctx.url})`;
      body += "\n";
    }
  }
  body += "\n";

  const tags = ["#project", toTag(category)];
  for (const t of tech.slice(0, 8)) tags.push(toTag(t));
  if (ndaRisk === "needs-review") {
    tags.push("#needs-review");
  } else {
    tags.push("#nda-safe");
  }
  tags.sort();

  const frontmatter = {
    type: "project",
    status: "portfolio-ready",
    company: companies.length > 0 ? companies.join(", ") : "",
    category,
    role,
    platforms,
    technologies: tech,
    timeline,
    nda_risk: ndaRisk,
    source: id,
    tags: tags.join(" "),
  };

  return yamlFrontmatter(frontmatter) + body;
}

function buildSkillNotes(allProjects, config) {
  const skillMap = {};
  for (const category of Object.keys(config.skillCategories)) {
    skillMap[category] = { projects: [], techs: config.skillCategories[category] };
  }

  for (const project of allProjects) {
    for (const [category, techList] of Object.entries(config.skillCategories)) {
      for (const tech of project.tech) {
        if (techList.some((t) => t.toLowerCase() === tech.toLowerCase())) {
          if (!skillMap[category].projects.includes(project.title)) {
            skillMap[category].projects.push(project.title);
          }
          break;
        }
      }
    }
  }

  const notes = {};
  for (const [skillName, data] of Object.entries(skillMap)) {
    if (data.projects.length === 0) continue;

    const tags = ["#skill", ...data.techs.map((t) => toTag(t))].sort();

    let body = `# ${skillName}\n\n`;
    body += "## Overview\n\n";
    body += `Skills and technologies in the **${skillName}** category.\n\n`;
    body += "## Related Technologies\n\n";
    for (const tech of data.techs) {
      body += `- ${tech}\n`;
    }
    body += "\n";
    body += "## Projects Using These Skills\n\n";
    for (const projectTitle of data.projects.sort()) {
      body += `- ${toWikilink(projectTitle)}\n`;
    }
    body += "\n";

    const frontmatter = {
      type: "skill",
      status: "portfolio-ready",
      technologies: data.techs,
      project_count: data.projects.length,
      tags: tags.join(" "),
    };

    notes[skillName] = yamlFrontmatter(frontmatter) + body;
  }

  return notes;
}

function buildCompanyNotes(allProjects, config) {
  const companyMap = {};
  for (const project of allProjects) {
    const companies = detectCompanies(project, config);
    for (const company of companies) {
      if (!companyMap[company]) companyMap[company] = [];
      companyMap[company].push(project.title);
    }
  }

  const notes = {};
  for (const [company, projects] of Object.entries(companyMap)) {
    const aliases = config.companyAliases[company] || [];

    const tags = ["#company", toTag(company)].sort();

    let body = `# ${company}\n\n`;
    body += "## Overview\n\n";
    body += `Company / client referenced in portfolio projects.\n\n`;
    if (aliases.length > 0) {
      body += "## Known Aliases\n\n";
      for (const alias of aliases) {
        body += `- ${alias}\n`;
      }
      body += "\n";
    }
    body += "## Related Projects\n\n";
    for (const projectTitle of projects.sort()) {
      body += `- ${toWikilink(projectTitle)}\n`;
    }
    body += "\n";

    const frontmatter = {
      type: "company",
      status: "portfolio-ready",
      aliases: aliases.slice(0, 5),
      project_count: projects.length,
      tags: tags.join(" "),
    };

    notes[company] = yamlFrontmatter(frontmatter) + body;
  }

  return notes;
}

function buildMOCNotes(allProjects, skillNotes, companyNotes, ndaSafeProjects) {
  const notes = {};

  const projectTitles = allProjects.map((p) => p.title).sort();

  let portfolioBody = `# Portfolio Projects\n\n`;
  portfolioBody += "## Overview\n\n";
  portfolioBody += `This vault contains **${allProjects.length}** portfolio projects.\n\n`;
  portfolioBody += "## All Projects\n\n";
  for (const title of projectTitles) {
    portfolioBody += `- ${toWikilink(title)}\n`;
  }
  portfolioBody += "\n";
  portfolioBody += "## By Category\n\n";
  const categories = {};
  for (const project of allProjects) {
    const cat = project.category;
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(project.title);
  }
  for (const [cat, titles] of Object.entries(categories).sort()) {
    portfolioBody += `### ${cat}\n\n`;
    for (const title of titles.sort()) {
      portfolioBody += `- ${toWikilink(title)}\n`;
    }
    portfolioBody += "\n";
  }
  notes["Portfolio Projects"] = yamlFrontmatter({
    type: "moc",
    status: "portfolio-ready",
    project_count: allProjects.length,
    tags: "#moc #projects",
  }) + portfolioBody;

  let skillsBody = `# Skills Map\n\n`;
  skillsBody += "## Overview\n\n";
  skillsBody += `This vault covers **${Object.keys(skillNotes).length}** skill areas.\n\n`;
  skillsBody += "## All Skills\n\n";
  for (const skillName of Object.keys(skillNotes).sort()) {
    skillsBody += `- ${toWikilink(skillName)}\n`;
  }
  skillsBody += "\n";
  notes["Skills Map"] = yamlFrontmatter({
    type: "moc",
    status: "portfolio-ready",
    skill_count: Object.keys(skillNotes).length,
    tags: "#moc #skills",
  }) + skillsBody;

  let companiesBody = `# Companies and Clients\n\n`;
  companiesBody += "## Overview\n\n";
  companiesBody += `Companies and clients referenced in portfolio projects.\n\n`;
  companiesBody += "## All Companies\n\n";
  for (const companyName of Object.keys(companyNotes).sort()) {
    companiesBody += `- ${toWikilink(companyName)}\n`;
  }
  companiesBody += "\n";
  notes["Companies and Clients"] = yamlFrontmatter({
    type: "moc",
    status: "portfolio-ready",
    company_count: Object.keys(companyNotes).length,
    tags: "#moc #companies",
  }) + companiesBody;

  let ndaBody = `# NDA Safe Portfolio Notes\n\n`;
  ndaBody += "## Overview\n\n";
  ndaBody += `Projects that passed the NDA scanner with low risk.\n\n`;
  ndaBody += "## Safe Projects\n\n";
  const safeTitles = ndaSafeProjects.map((p) => p.title).sort();
  if (safeTitles.length === 0) {
    ndaBody += "_No projects are currently flagged as NDA-safe._\n\n";
  } else {
    for (const title of safeTitles) {
      ndaBody += `- ${toWikilink(title)}\n`;
    }
  }
  ndaBody += "\n";
  ndaBody += "## Notes\n\n";
  ndaBody += "Projects marked as `nda_risk: low` are considered safe for public sharing.\n";
  ndaBody += "Projects marked as `nda_risk: needs-review` should be reviewed before external use.\n\n";
  notes["NDA Safe Portfolio Notes"] = yamlFrontmatter({
    type: "moc",
    status: "portfolio-ready",
    safe_count: safeTitles.length,
    tags: "#moc #nda",
  }) + ndaBody;

  return notes;
}

function buildMediaNotes(allProjects) {
  const notes = {};
  for (const project of allProjects) {
    if (!project.media || project.media.length === 0) continue;
    for (const media of project.media) {
      if (!media.youtubeId) continue;
      const noteName = `YouTube - ${media.title || media.id}`;
      let body = `# ${noteName}\n\n`;
      body += "## Media Reference\n\n";
      body += `- **Type:** ${media.type}\n`;
      body += `- **Project:** ${toWikilink(project.title)}\n`;
      if (media.youtubeId) body += `- **URL:** ${media.youtubeId}\n`;
      if (media.caption) body += `- **Caption:** ${media.caption}\n`;
      body += "\n";

      const tags = ["#media", "#youtube", toTag(project.title)].sort();

      notes[noteName] = yamlFrontmatter({
        type: "media",
        status: "reference",
        source_project: project.id,
        media_type: media.type,
        tags: tags.join(" "),
      }) + body;
    }
  }
  return notes;
}

function buildTemplateNotes() {
  const notes = {};

  let projectTemplate = `# \${TITLE}\n\n`;
  projectTemplate += yamlFrontmatter({
    type: "project",
    status: "portfolio-ready",
    company: "",
    category: "",
    role: "",
    platforms: [],
    technologies: [],
    timeline: "",
    nda_risk: "low",
    source: "",
    tags: "#project",
  });
  projectTemplate += `# \${TITLE}\n\n`;
  projectTemplate += "## Summary\n\n";
  projectTemplate += "## My Role\n\n";
  projectTemplate += "## Technologies Used\n\n";
  projectTemplate += "## What I Built\n\n";
  projectTemplate += "## Simulated / Implemented Behavior\n\n";
  projectTemplate += "## Media\n\n";
  projectTemplate += "## NDA Notes\n\n";
  projectTemplate += "## Related Skills\n\n";
  projectTemplate += "## Related Projects\n\n";
  projectTemplate += "## Source References\n\n";
  notes["Project Template"] = projectTemplate;

  let skillTemplate = `# \${SKILL_NAME}\n\n`;
  skillTemplate += yamlFrontmatter({
    type: "skill",
    status: "portfolio-ready",
    technologies: [],
    project_count: 0,
    tags: "#skill",
  });
  skillTemplate += "# \${SKILL_NAME}\n\n";
  skillTemplate += "## Overview\n\n";
  skillTemplate += "## Related Technologies\n\n";
  skillTemplate += "## Projects Using This Skill\n\n";
  notes["Skill Template"] = skillTemplate;

  return notes;
}

function buildComponentNotes(unmatchedMdNotes, config, allProjects) {
  const parentProjectMappings = config.parentProjectMappings || {};
  const notes = {};

  for (const [mdName, mdContent] of Object.entries(unmatchedMdNotes)) {
    const parentProjectId = parentProjectMappings[mdName];
    const parentProject = parentProjectId
      ? allProjects.find((p) => p.id === parentProjectId)
      : null;

    let title = extractYamlLike(mdContent, "Project Title") || "";
    if (!title) {
      const ptMatch = mdContent.match(/## Project Title\s*\n([^\n]+)/);
      if (ptMatch) title = ptMatch[1].trim();
    }
    if (!title) title = extractTitleFromMd(mdContent) || mdName.replace(/_/g, " ");
    // Clean up instruction-style prefixes
    title = title.replace(/^Add Portfolio Project:\s*/i, "").trim();

    let category = extractYamlLike(mdContent, "## Category") || "";
    if (!category) {
      const catMatch = mdContent.match(/## Category\s*\n([^\n]+)/);
      if (catMatch) category = catMatch[1].trim();
    }

    let summary = extractYamlLike(mdContent, "Short Summary") || extractYamlLike(mdContent, "Short Card Summary") || "";

    let whatIBuilt = extractSection(mdContent, "What I Built") || "";
    let simulatedBehaviors = extractSection(mdContent, "Simulated Behaviors") || "";
    let simulatedComponents = extractSection(mdContent, "Simulated Components") || "";
    let technicalHighlights = extractSection(mdContent, "Technical Highlights") || "";
    let featureCards = extractSection(mdContent, "Feature Cards") || "";
    let overview = extractSection(mdContent, "Module Overview Copy") || extractSection(mdContent, "Project Overview Copy") || "";

    const ndaResult = scanForNDARisks(
      { summary, ...(parentProject || {}), challenges: [], impact: [], highlights: [], overview: [], technicalHighlights: [] },
      mdContent,
      config,
    );
    const ndaRisk = ndaResult.risk;

    let body = `# ${title}\n\n`;

    if (parentProject) {
      body += `> Part of: ${toWikilink(parentProject.title)}\n\n`;
    }

    if (summary) {
      body += "## Summary\n\n";
      body += `${summary}\n\n`;
    }

    if (overview) {
      body += "## Overview\n\n";
      body += `${overview}\n\n`;
    }

    if (whatIBuilt) {
      body += "## What I Built\n\n";
      body += `${whatIBuilt}\n\n`;
    }

    if (simulatedComponents) {
      body += "## Simulated Components\n\n";
      body += `${simulatedComponents}\n\n`;
    }

    if (simulatedBehaviors) {
      body += "## Simulated Behaviors\n\n";
      body += `${simulatedBehaviors}\n\n`;
    }

    if (featureCards) {
      body += "## Features\n\n";
      body += `${featureCards}\n\n`;
    }

    if (technicalHighlights) {
      body += "## Technical Highlights\n\n";
      body += `${technicalHighlights}\n\n`;
    }

    if (parentProject) {
      body += "## Parent Project\n\n";
      body += `${toWikilink(parentProject.title)}\n\n`;
    }

    const tags = ["#project", "#component"];
    if (category) tags.push(toTag(category));
    if (ndaRisk === "needs-review") {
      tags.push("#needs-review");
    } else {
      tags.push("#nda-safe");
    }
    tags.sort();

    const techTags = [];
    const techMatch = mdContent.match(/Tags:\s*([^\n]+)/);
    if (techMatch) {
      for (const t of techMatch[1].split(",").map((s) => s.trim())) {
        techTags.push(t);
      }
    }

    const frontmatter = {
      type: "component",
      status: "portfolio-ready",
      category: category || "",
      source: parentProjectId || mdName,
      parent_project: parentProject?.title || "",
      nda_risk: ndaRisk,
      tags: tags.join(" "),
    };

    notes[title] = yamlFrontmatter(frontmatter) + body;
  }

  return notes;
}

function writeVaultFile(relativePath, content) {
  const fullPath = join(VAULT_DIR, relativePath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content, "utf-8");
}

async function loadProjects() {
  process.stdout.write("Loading project data via Vite SSR...\n");
  try {
    const server = await createServer({
      root: ROOT,
      server: { middlewareMode: true },
      appType: "custom",
      logLevel: "silent",
    });
    const module = await server.ssrLoadModule("/src/data/projects.ts");
    await server.close();
    process.stdout.write("  Loaded projects from Vite SSR.\n");
    return module;
  } catch (err) {
    process.stdout.write(`  Vite SSR failed: ${err.message}\n`);
    process.stdout.write("  Attempting direct import...\n");
    try {
      const module = await import(join(ROOT, "src", "data", "projects.ts"));
      return module;
    } catch (err2) {
      throw new Error(
        `Could not load project data. Vite SSR and direct import both failed.\n` +
          `  Vite SSR: ${err.message}\n` +
          `  Direct: ${err2.message}\n` +
          `Try running from the project root with Node >= 18.`,
      );
    }
  }
}

async function main() {
  process.stdout.write("=== Obsidian Vault Generator ===\n\n");

  const config = readJSON(CONFIG_PATH);

  if (CLEAN_MODE) {
    process.stdout.write("Clean mode enabled.\n");
    if (existsSync(VAULT_DIR)) {
      const entries = readdirSync(VAULT_DIR);
      let cleaned = 0;

      if (existsSync(MANIFEST_PATH)) {
        const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
        const generatedFiles = manifest.files || [];
        for (const file of generatedFiles) {
          const filePath = join(VAULT_DIR, file);
          if (existsSync(filePath)) {
            rmSync(filePath);
            cleaned++;
          }
        }

        for (const dir of DIRS) {
          const dirPath = join(VAULT_DIR, dir);
          if (existsSync(dirPath)) {
            const remaining = readdirSync(dirPath);
            if (remaining.length === 0) {
              rmSync(dirPath, { recursive: true });
            }
          }
        }

        if (existsSync(MANIFEST_PATH)) rmSync(MANIFEST_PATH);
      } else {
        for (const entry of entries) {
          if (entry === ".gitkeep") continue;
          const entryPath = join(VAULT_DIR, entry);
          rmSync(entryPath, { recursive: true });
          cleaned++;
        }
      }

      process.stdout.write(`  Cleaned ${cleaned} generated files.\n`);
    } else {
      process.stdout.write("  Vault directory does not exist. Nothing to clean.\n");
    }
    process.stdout.write("\n");
  }

  mkdirSync(VAULT_DIR, { recursive: true });
  for (const dir of DIRS) {
    mkdirSync(join(VAULT_DIR, dir), { recursive: true });
  }

  const projectsModule = await loadProjects();
  const allProjects = projectsModule.projects || [];

  if (allProjects.length === 0) {
    process.stdout.write("ERROR: No projects found in project data.\n");
    process.exit(1);
  }

  process.stdout.write(`  Found ${allProjects.length} projects.\n`);

  const rawNotes = readMarkdownFiles(MD_FILES_DIR);
  process.stdout.write(`  Found ${Object.keys(rawNotes).length} raw markdown notes.\n`);

  const noteMappings = matchNotesToProjects(rawNotes, allProjects, config);
  process.stdout.write(`  Matched ${Object.keys(noteMappings).length} notes to projects.\n`);

  process.stdout.write("\nGenerating vault...\n");

  const generatedFiles = [];

  const projectNotes = {};
  const ndaResults = {};

  for (const project of allProjects) {
    const matchedMdName = Object.entries(noteMappings).find(([, p]) => p.id === project.id)?.[0];
    const matchedMdContent = matchedMdName ? rawNotes[matchedMdName] : null;
    const noteContent = buildProjectNote(project, matchedMdContent, config, allProjects);
    const filename = safeFilename(project.title) + ".md";
    const relativePath = join(PROJECTS_DIR, filename);
    projectNotes[project.id] = { content: noteContent, path: relativePath };
    ndaResults[project.id] = scanForNDARisks(project, matchedMdContent, config);
  }

  for (const [id, note] of Object.entries(projectNotes)) {
    writeVaultFile(note.path, note.content);
    generatedFiles.push(note.path);
    const nda = ndaResults[id];
    const flag = nda.risk === "needs-review" ? " ⚠ needs-review" : " ✓ safe";
    process.stdout.write(`  [Project] ${id}${flag}\n`);
  }

  const skillNotes = buildSkillNotes(allProjects, config);
  for (const [skillName, content] of Object.entries(skillNotes)) {
    const filename = safeFilename(skillName) + ".md";
    const relativePath = join(SKILLS_DIR, filename);
    writeVaultFile(relativePath, content);
    generatedFiles.push(relativePath);
    process.stdout.write(`  [Skill]   ${skillName}\n`);
  }

  const companyNotes = buildCompanyNotes(allProjects, config);
  for (const [companyName, content] of Object.entries(companyNotes)) {
    const filename = safeFilename(companyName) + ".md";
    const relativePath = join(COMPANIES_DIR, filename);
    writeVaultFile(relativePath, content);
    generatedFiles.push(relativePath);
    process.stdout.write(`  [Company] ${companyName}\n`);
  }

  const ndaSafeProjects = allProjects.filter((p) => ndaResults[p.id]?.risk === "low");
  const mocNotes = buildMOCNotes(allProjects, skillNotes, companyNotes, ndaSafeProjects);
  for (const [mocName, content] of Object.entries(mocNotes)) {
    const filename = safeFilename(mocName) + ".md";
    const relativePath = join(MOC_DIR, filename);
    writeVaultFile(relativePath, content);
    generatedFiles.push(relativePath);
    process.stdout.write(`  [MOC]     ${mocName}\n`);
  }

  const mediaNotes = buildMediaNotes(allProjects);
  for (const [mediaName, content] of Object.entries(mediaNotes)) {
    const filename = safeFilename(mediaName) + ".md";
    const relativePath = join(MEDIA_DIR, filename);
    writeVaultFile(relativePath, content);
    generatedFiles.push(relativePath);
    process.stdout.write(`  [Media]   ${mediaName}\n`);
  }

  const matchedMdNames = new Set(Object.keys(noteMappings));
  const unmatchedMdNotes = {};
  for (const [mdName, content] of Object.entries(rawNotes)) {
    if (!matchedMdNames.has(mdName)) {
      unmatchedMdNotes[mdName] = content;
    }
  }

  if (Object.keys(unmatchedMdNotes).length > 0) {
    process.stdout.write(`\n  Generating ${Object.keys(unmatchedMdNotes).length} sub-module component notes...\n`);
    const componentNotes = buildComponentNotes(unmatchedMdNotes, config, allProjects);
    for (const [compName, content] of Object.entries(componentNotes)) {
      const filename = safeFilename(compName) + ".md";
      const relativePath = join(PROJECTS_DIR, filename);
      writeVaultFile(relativePath, content);
      generatedFiles.push(relativePath);
      process.stdout.write(`  [Component] ${compName}\n`);
    }
  }

  const templateNotes = buildTemplateNotes();
  for (const [templateName, content] of Object.entries(templateNotes)) {
    const filename = safeFilename(templateName) + ".md";
    const relativePath = join(TEMPLATES_DIR, filename);
    writeVaultFile(relativePath, content);
    generatedFiles.push(relativePath);
    process.stdout.write(`  [Template] ${templateName}\n`);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    generator: "scripts/obsidian/generate-vault.mjs",
    projectCount: allProjects.length,
    files: generatedFiles.sort(),
  };
  writeVaultFile(".generated-manifest.json", JSON.stringify(manifest, null, 2));

  process.stdout.write(`\n=== Done. Generated ${generatedFiles.length} files. ===\n`);

  const needsReview = allProjects.filter((p) => ndaResults[p.id]?.risk === "needs-review");
  if (needsReview.length > 0) {
    process.stdout.write(`\n⚠ ${needsReview.length} project(s) flagged for NDA review:\n`);
    for (const p of needsReview) {
      const reasons = ndaResults[p.id].reasons;
      process.stdout.write(`  - ${p.title}: ${reasons.join(", ")}\n`);
    }
  }
}

main().catch((err) => {
  process.stderr.write(`\nERROR: ${err.message}\n`);
  if (err.stack) process.stderr.write(`${err.stack.split("\n").slice(1).join("\n")}\n`);
  process.exit(1);
});
