import { createServer } from "vite";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "..");
const CONFIG_PATH = join(__dirname, "config.json");
const CONFIG = JSON.parse(readFileSync(CONFIG_PATH, "utf8"));

const VAULT_DIR = join(ROOT, CONFIG.vaultDir || "obsidian-vault");
const SOURCE_NOTES_DIR = join(ROOT, CONFIG.sourceNotesDir || "src/md files");
const MANIFEST_PATH = join(VAULT_DIR, ".generated-manifest.json");

const CLEAN_MODE = process.argv.includes("--clean");

const DIRS = {
  moc: "00 - Maps of Content",
  projects: "01 - Projects",
  skills: "02 - Skills",
  companies: "03 - Companies",
  media: "04 - Media Notes",
  templates: "05 - Templates",
  attachments: "attachments",
};

const GENERATED_BY = "scripts/obsidian/generate-vault.mjs";

const projectNoteMap = new Map();
const skillNoteMap = new Map();
const companyNoteMap = new Map();
const writtenFiles = [];

function log(message = "") {
  console.log(message);
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function normalizeSlash(path) {
  return path.replace(/\\/g, "/");
}

function relativeVaultPath(path) {
  return normalizeSlash(relative(VAULT_DIR, path));
}

function slugify(text) {
  return String(text || "")
    .normalize("NFKD")
    .replace(/[^\w\s#.+/-]/g, "")
    .toLowerCase()
    .replace(/c#/g, "csharp")
    .replace(/node\.js/g, "nodejs")
    .replace(/[/+&]+/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeFilename(name) {
  return String(name || "Untitled")
    .replace(/[<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/\s+-\s+/g, " - ")
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .trim();
}

function notePath(dir, title) {
  return join(VAULT_DIR, dir, `${safeFilename(title)}.md`);
}

function wikilink(title) {
  return `[[${safeFilename(title)}]]`;
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function sorted(values) {
  return [...values].sort((a, b) => String(a).localeCompare(String(b)));
}

function compactLines(lines) {
  return lines.filter((line) => line !== null && line !== undefined).join("\n");
}

function bulletList(items, fallback = "- Not available yet.") {
  const values = uniq((items || []).filter(Boolean));
  return values.length ? values.map((item) => `- ${item}`).join("\n") : fallback;
}

function wikilinkList(items, fallback = "- Not available yet.") {
  const values = uniq((items || []).filter(Boolean));
  return values.length ? values.map((item) => `- ${wikilink(item)}`).join("\n") : fallback;
}

function plainText(value) {
  if (!value) return "";
  return String(value)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function firstParagraph(text) {
  const clean = plainText(text);
  if (!clean) return "";
  return clean.split(/\n\s*\n/)[0].replace(/\n/g, " ").trim();
}

function sentence(text) {
  const clean = firstParagraph(text);
  if (!clean) return "";
  const match = clean.match(/^(.+?[.!?])(\s|$)/);
  return match ? match[1].trim() : clean;
}

function truncate(text, max = 420) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 3).replace(/\s+\S*$/, "")}...`;
}

function titleFromMarkdown(content) {
  const match = plainText(content).match(/^#\s+(.+)$/m);
  return match ? match[1].trim().replace(/^Add Portfolio Project:\s*/i, "") : null;
}

function section(content, title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`^##\\s+${escaped}\\s*$([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "im");
  const match = content.match(regex);
  return match ? plainText(match[1]) : "";
}

function anySection(content, titles) {
  for (const title of titles) {
    const found = section(content, title);
    if (found) return found;
  }
  return "";
}

function markdownBullets(text, limit = 8) {
  const bullets = plainText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
  return uniq(bullets).slice(0, limit);
}

function paragraphBullets(text, limit = 5) {
  const clean = plainText(text);
  if (!clean) return [];
  const directBullets = markdownBullets(clean, limit);
  if (directBullets.length) return directBullets;
  return clean
    .split(/\n\s*\n/)
    .map((p) => truncate(p, 220))
    .filter(Boolean)
    .slice(0, limit);
}

function frontmatterValue(value) {
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `\n${value.map((item) => `  - ${quoteYaml(item)}`).join("\n")}`;
  }
  if (value === null || value === undefined || value === "") return '""';
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  return quoteYaml(value);
}

function quoteYaml(value) {
  const text = String(value);
  if (/^[a-zA-Z0-9_./ -]+$/.test(text) && !text.includes(": ") && !text.startsWith("#")) {
    return text;
  }
  return JSON.stringify(text);
}

function frontmatter(data) {
  const keys = Object.keys(data).sort();
  const lines = ["---"];
  for (const key of keys) {
    lines.push(`${key}: ${frontmatterValue(data[key])}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function tagFor(value) {
  const special = {
    "C#": "csharp",
    "VR / AR": "xr",
    "UI / Architecture": "ui-architecture",
    "Simulation & Digital Twin": "simulation-digital-twin",
  };
  const tag = special[value] || slugify(value);
  return tag ? `#${tag}` : "";
}

function writeGenerated(absPath, content) {
  ensureDir(dirname(absPath));
  const body = `${content.trimEnd()}\n`;
  writeFileSync(absPath, body, "utf8");
  writtenFiles.push(relativeVaultPath(absPath));
}

function readSourceNotes() {
  if (!existsSync(SOURCE_NOTES_DIR)) return [];
  return readdirSync(SOURCE_NOTES_DIR)
    .filter((file) => file.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const key = file.replace(/\.md$/i, "");
      const content = readFileSync(join(SOURCE_NOTES_DIR, file), "utf8");
      return {
        key,
        file,
        title: titleFromMarkdown(content) || key.replace(/[_-]+/g, " "),
        content,
      };
    });
}

async function loadProjects() {
  let server;
  try {
    server = await createServer({
      root: ROOT,
      logLevel: "silent",
      server: { middlewareMode: true },
      appType: "custom",
    });
    const mod = await server.ssrLoadModule("/src/data/projects.ts");
    return mod.projects || mod.publicProjects || [];
  } finally {
    if (server) await server.close();
  }
}

function matchRawNotes(projects, rawNotes) {
  const byProject = new Map(projects.map((project) => [project.id, []]));
  const componentNotes = [];
  const unmatched = [];
  const componentConfig = CONFIG.componentNotes || {};

  for (const note of rawNotes) {
    const configuredComponent = componentConfig[note.key];
    if (configuredComponent) {
      componentNotes.push({ ...note, ...configuredComponent });
    }

    const explicit = CONFIG.rawNoteMappings?.[note.key];
    if (explicit && byProject.has(explicit)) {
      byProject.get(explicit).push({ ...note, reason: "explicit config mapping" });
      continue;
    }

    const noteSlug = slugify(`${note.key} ${note.title}`);
    const matched = projects.find((project) => {
      const candidates = [
        project.id,
        project.title,
        ...(project.aliases || []),
        project.caseStudyUrl || "",
      ].map(slugify);
      return candidates.some((candidate) => candidate && (noteSlug.includes(candidate) || candidate.includes(noteSlug)));
    });

    if (matched) {
      byProject.get(matched.id).push({ ...note, reason: "slug/title/alias match" });
    } else if (!configuredComponent) {
      unmatched.push(note);
    }
  }

  return { byProject, componentNotes, unmatched };
}

function projectCompanies(project) {
  const text = [
    project.title,
    project.summary,
    project.role,
    project.category,
    project.attributionNote,
    ...(project.productContext || []).map((item) => item.label),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return sorted(
    Object.entries(CONFIG.companyAliases || {})
      .filter(([, aliases]) => aliases.some((alias) => text.includes(alias.toLowerCase())))
      .map(([company]) => company),
  );
}

function projectSkillGroups(project) {
  const tech = project.tech || [];
  const matches = [];
  for (const [skill, details] of Object.entries(CONFIG.skillNotes || {})) {
    const aliases = details.aliases || [skill];
    if (tech.some((item) => aliases.some((alias) => item.toLowerCase() === alias.toLowerCase()))) {
      matches.push(skill);
    }
  }
  return matches.length ? matches : tech.slice(0, 4);
}

function scanNda(project, rawNotes = []) {
  const text = [
    project.title,
    project.summary,
    project.problem,
    project.solution,
    project.attributionNote,
    ...(project.highlights || []),
    ...(project.challenges || []),
    ...(project.impact || []),
    ...(project.overview || []),
    ...(project.technicalHighlights || []),
    ...(project.productContext || []).map((item) => item.label),
    ...rawNotes.map((note) => note.content),
  ]
    .filter(Boolean)
    .join("\n");

  const hits = [];
  for (const rule of CONFIG.ndaRules?.highRiskPatterns || []) {
    const regex = new RegExp(rule.pattern, "gi");
    const matches = text.match(regex);
    if (matches) hits.push({ severity: "high", label: rule.label, examples: uniq(matches).slice(0, 5) });
  }

  for (const rule of CONFIG.ndaRules?.mediumRiskPatterns || []) {
    if (rule.label === "exact sensor or component list" && !CONFIG.ndaRules?.flagExactComponentLists) continue;
    const regex = new RegExp(rule.pattern, "gi");
    const matches = text.match(regex);
    if (matches) hits.push({ severity: "medium", label: rule.label, examples: uniq(matches).slice(0, 5) });
  }

  return {
    status: hits.length ? "needs-review" : "low",
    hits,
  };
}

function summarizeInterpretation(project, skillGroups) {
  const category = project.category || "portfolio project";
  const skills = skillGroups.slice(0, 3).join(", ");
  if (/industrial|digital twin/i.test(category)) {
    return `This project strengthens the portfolio's industrial simulation story: it shows the ability to turn machine behavior, state feedback, and training workflows into a clear Unity experience. It is strongest evidence for ${skills || "simulation and visualization"} work.`;
  }
  if (/educational/i.test(category)) {
    return `This project supports the education-technology side of the portfolio. It turns technical or scientific material into something visible, interactive, and easier for learners or reviewers to understand.`;
  }
  if (/vr|booth/i.test(category)) {
    return `This project shows practical immersive-experience delivery: interaction design, onboarding, media evidence, and a demo flow that can work in front of real users.`;
  }
  if (/ar/i.test(category)) {
    return `This project adds product-facing spatial visualization experience, connecting Unity, WebGL/mobile delivery, backend integration, and user-facing design context.`;
  }
  return `This project broadens the portfolio by showing how interactive systems can communicate a technical idea through working software, visual feedback, and clear project framing.`;
}

function technicalProof(project, skillGroups) {
  const proof = [];
  if (project.tech?.length) proof.push(`Technology stack: ${project.tech.join(", ")}.`);
  if (project.platform?.length) proof.push(`Platforms and delivery context: ${project.platform.join(", ")}.`);
  if (project.simulatedBehaviors?.length) proof.push(`Behavior systems: ${project.simulatedBehaviors.map((item) => item.title).join(", ")}.`);
  if (project.stationBreakdown?.length) proof.push(`System decomposition: ${project.stationBreakdown.length} station or module breakdowns.`);
  if (project.media?.length) proof.push(`Evidence surface: ${project.media.length} media item(s) available for review.`);
  if (skillGroups.length) proof.push(`Primary portfolio skills: ${skillGroups.map(wikilink).join(", ")}.`);
  return proof;
}

function rawNoteEvidence(rawNotes) {
  if (!rawNotes.length) return [];
  return rawNotes.flatMap((note) => {
    const summary = anySection(note.content, [
      "Full Project Summary",
      "Project Overview",
      "Portfolio Positioning",
      "Short Summary",
      "Short Card Summary",
      "Project Overview Copy",
    ]);
    const what = anySection(note.content, ["What I Built", "Main Simulation Focus", "Core Gameplay"]);
    return [
      summary ? `${note.title}: ${truncate(firstParagraph(summary), 240)}` : "",
      what ? `${note.title} implementation: ${truncate(firstParagraph(what), 240)}` : "",
    ].filter(Boolean);
  });
}

function behaviorBlocks(project, rawNotes) {
  const blocks = [];

  for (const group of project.simulatedBehaviors || []) {
    blocks.push(`### ${group.title}\n\n${bulletList(group.bullets || [])}`);
  }

  if (!blocks.length && project.stationBreakdown?.length) {
    for (const station of project.stationBreakdown.slice(0, 8)) {
      blocks.push(`### ${station.title}\n\n${station.description || ""}\n\n${bulletList(station.bullets || [])}`.trim());
    }
  }

  if (!blocks.length) {
    const rawBehavior = rawNotes
      .map((note) => anySection(note.content, ["Simulated / Implemented Game Systems", "Simulated Behaviors", "Key Behaviors to Describe", "Core Features"]))
      .find(Boolean);
    if (rawBehavior) {
      blocks.push(bulletList(paragraphBullets(rawBehavior, 10)));
    }
  }

  if (!blocks.length && project.highlights?.length) {
    blocks.push(bulletList(project.highlights));
  }

  return blocks.length ? blocks.join("\n\n") : "The source data does not include a detailed behavior breakdown yet.";
}

function mediaLines(project) {
  const lines = [];
  for (const media of project.media || []) {
    const title = media.title || media.id || "Media item";
    const url = media.youtubeId
      ? media.youtubeId.startsWith("http")
        ? media.youtubeId
        : `https://youtu.be/${media.youtubeId}`
      : media.src || media.thumbnail || "";
    lines.push(url ? `- ${title}: ${url}` : `- ${title}`);
  }
  if (project.demoUrl) lines.push(`- Demo: ${project.demoUrl}`);
  if (project.githubUrl) lines.push(`- GitHub: ${project.githubUrl}`);
  if (project.caseStudyUrl) lines.push(`- Case study: ${project.caseStudyUrl}`);
  return lines.length ? lines.join("\n") : "- No media references found in project data.";
}

function ndaSection(scan) {
  if (scan.status === "low") {
    return compactLines([
      "Status: low",
      "",
      "No configured NDA scanner rules were triggered. Still review manually before publishing externally.",
      "",
      "Safe framing:",
      "- Keep the note focused on public portfolio evidence.",
      "- Describe visible behavior, training value, and personal implementation work.",
    ]);
  }

  return compactLines([
    "Status: needs-review",
    "",
    "Detected reasons:",
    ...scan.hits.map((hit) => `- ${hit.severity}: ${hit.label}${hit.examples?.length ? ` (${hit.examples.join(", ")})` : ""}`),
    "",
    "Suggested safer framing:",
    "- Describe behavior and training value rather than private implementation internals.",
    "- Avoid source code, PLC files, credentials, private links, or exact client-only details.",
    "- Keep ownership language clear: product names and hardware references belong to their owners.",
  ]);
}

function buildProjectNote(project, allProjects, rawNotes) {
  const companies = projectCompanies(project);
  const skillGroups = projectSkillGroups(project);
  const scan = scanNda(project, rawNotes);
  const related = allProjects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => {
      const overlap = (candidate.tech || []).filter((tech) => (project.tech || []).includes(tech)).length;
      const category = candidate.category === project.category ? 2 : 0;
      return { candidate, score: overlap + category };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, 6)
    .map((item) => item.candidate.title);

  const tags = sorted(
    uniq([
      "#project",
      tagFor(project.category),
      scan.status === "needs-review" ? "#needs-review" : "#nda-safe",
      ...skillGroups.map(tagFor),
      ...(project.tech || []).slice(0, 8).map(tagFor),
    ]),
  );

  const oneLine = project.summary || sentence(rawNotes.map((note) => note.content).join("\n")) || "Portfolio project note.";
  const rawEvidence = rawNoteEvidence(rawNotes);

  return {
    title: project.title,
    scan,
    skills: skillGroups,
    companies,
    content: compactLines([
      frontmatter({
        type: "project",
        status: "portfolio-ready",
        company: companies.join(", "),
        category: project.category || "",
        role: project.role || "",
        platforms: project.platform || [],
        technologies: project.tech || [],
        timeline: project.timeline || "",
        nda_risk: scan.status,
        source: project.id,
        tags,
      }),
      `# ${project.title}`,
      "",
      "## One-Line Summary",
      "",
      oneLine,
      "",
      "## Project Interpretation",
      "",
      summarizeInterpretation(project, skillGroups),
      "",
      "## Context",
      "",
      companies.length
        ? `Related company/client context: ${companies.map(wikilink).join(", ")}. ${project.attributionNote || ""}`.trim()
        : project.attributionNote || "No company/client context is configured for this project yet.",
      "",
      "## My Role",
      "",
      project.role || "Role not specified in project data.",
      "",
      "## What I Built",
      "",
      bulletList([
        ...(project.highlights || []),
        ...paragraphBullets(anySection(rawNotes.map((note) => note.content).join("\n\n"), ["What I Built"]), 5),
      ].slice(0, 10)),
      "",
      "## System Behavior",
      "",
      behaviorBlocks(project, rawNotes),
      "",
      "## Technical Proof",
      "",
      bulletList([...technicalProof(project, skillGroups), ...rawEvidence].slice(0, 12)),
      "",
      "## Media",
      "",
      mediaLines(project),
      "",
      "## NDA / Public Safety Notes",
      "",
      ndaSection(scan),
      "",
      "## Related Skills",
      "",
      wikilinkList(skillGroups),
      "",
      "## Related Projects",
      "",
      wikilinkList(related),
      "",
      "## Source References",
      "",
      `- Project ID: \`${project.id}\``,
      ...((project.productContext || []).map((item) => item.url ? `- ${item.label}: ${item.url}` : `- ${item.label}`)),
      ...rawNotes.map((note) => `- Raw note: \`${CONFIG.sourceNotesDir}/${note.file}\` (${note.reason})`),
      "",
      `Generated by \`${GENERATED_BY}\`.`,
    ]),
  };
}

function buildComponentNote(note, projectById) {
  const parent = projectById.get(note.parentProjectId);
  const scan = scanNda(
    {
      id: note.key,
      title: note.title,
      summary: firstParagraph(anySection(note.content, ["Short Summary", "Short Card Summary", "Full Project Summary", "Portfolio Positioning"])),
      tech: note.skills || [],
      platform: parent?.platform || [],
      category: parent?.category || "",
      role: parent?.role || "",
      highlights: markdownBullets(anySection(note.content, ["Technical Highlights", "Feature Cards", "Core Features"]), 10),
    },
    [note],
  );

  const tags = sorted(uniq(["#component", scan.status === "needs-review" ? "#needs-review" : "#nda-safe", ...(note.skills || []).map(tagFor)]));
  const overview = anySection(note.content, ["Full Project Summary", "Project Overview", "Portfolio Positioning", "Short Summary", "Short Card Summary"]);
  const built = anySection(note.content, ["What I Built", "Main Simulation Focus", "Simulated System Focus"]);
  const behavior = anySection(note.content, ["Simulated Behaviors", "Key Behaviors to Describe", "Core Features", "Feature Cards"]);

  return compactLines([
    frontmatter({
      type: "component",
      status: "portfolio-ready",
      parent_project: parent?.title || note.parentProjectId,
      nda_risk: scan.status,
      source: note.key,
      tags,
    }),
    `# ${note.title}`,
    "",
    "## Parent Project",
    "",
    parent ? wikilink(parent.title) : note.parentProjectId,
    "",
    "## One-Line Summary",
    "",
    sentence(overview) || `Component note generated from \`${note.file}\`.`,
    "",
    "## Why It Matters",
    "",
    parent
      ? `This module adds concrete evidence inside ${wikilink(parent.title)}. It helps break a broad portfolio project into a specific learner-facing or system-facing behavior.`
      : "This module captures source-note detail that should be connected to a parent project.",
    "",
    "## What I Built",
    "",
    bulletList(paragraphBullets(built, 8)),
    "",
    "## System Behavior",
    "",
    bulletList(paragraphBullets(behavior, 10)),
    "",
    "## Related Skills",
    "",
    wikilinkList(note.skills || []),
    "",
    "## NDA / Public Safety Notes",
    "",
    ndaSection(scan),
    "",
    "## Source References",
    "",
    `- Raw note: \`${CONFIG.sourceNotesDir}/${note.file}\``,
    parent ? `- Parent project ID: \`${parent.id}\`` : `- Parent project ID: \`${note.parentProjectId}\``,
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);
}

function buildSkillNote(skill, details, projects) {
  const relatedProjects = projects.filter((project) => projectSkillGroups(project).includes(skill));
  const relatedTech = sorted(
    uniq(
      relatedProjects.flatMap((project) =>
        (project.tech || []).filter((tech) => (details.aliases || []).some((alias) => alias.toLowerCase() === tech.toLowerCase())),
      ),
    ),
  );
  const strongest = relatedProjects
    .filter((project) => project.featured || project.media?.length || project.overview?.length)
    .slice(0, 5);

  return compactLines([
    frontmatter({
      type: "skill",
      status: "portfolio-ready",
      project_count: relatedProjects.length,
      technologies: relatedTech.length ? relatedTech : details.aliases || [skill],
      tags: sorted(uniq(["#skill", tagFor(skill)])),
    }),
    `# ${skill}`,
    "",
    "## What This Skill Means In My Portfolio",
    "",
    details.meaning || "Skill meaning is not configured yet.",
    "",
    "## Related Technologies",
    "",
    bulletList(relatedTech.length ? relatedTech : details.aliases || [skill]),
    "",
    "## Strongest Portfolio Examples",
    "",
    strongest.length
      ? strongest
          .map((project) => `- ${wikilink(project.title)} - ${truncate(project.summary, 180)}`)
          .join("\n")
      : "- Add strongest examples after more project evidence is available.",
    "",
    "## Project Evidence",
    "",
    relatedProjects.length
      ? relatedProjects.map((project) => `- ${wikilink(project.title)} - ${truncate(project.summary, 180)}`).join("\n")
      : "- No project links found yet.",
    "",
    "## Interview Talking Points",
    "",
    bulletList(details.talkingPoints || []),
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);
}

function buildCompanyNote(company, projects) {
  const relatedProjects = projects.filter((project) => projectCompanies(project).includes(company));
  const skills = sorted(uniq(relatedProjects.flatMap(projectSkillGroups)));
  const aliases = CONFIG.companyAliases?.[company] || [];

  return compactLines([
    frontmatter({
      type: "company",
      status: "portfolio-ready",
      project_count: relatedProjects.length,
      aliases,
      tags: sorted(uniq(["#company", tagFor(company)])),
    }),
    `# ${company}`,
    "",
    "## Relationship To Portfolio",
    "",
    relatedProjects.length
      ? `${company} appears as product, client, public coverage, or attribution context for ${relatedProjects.length} portfolio project(s).`
      : "No linked projects were found yet.",
    "",
    "## Projects",
    "",
    relatedProjects.length
      ? relatedProjects.map((project) => `- ${wikilink(project.title)} - ${truncate(project.summary, 180)}`).join("\n")
      : "- No linked projects yet.",
    "",
    "## Public-Safe Positioning",
    "",
    "- Keep ownership language clear.",
    "- Present the work as portfolio evidence for my implementation, simulation, visualization, or integration contribution.",
    "- Do not imply ownership of client products, hardware, brands, or full team outcomes.",
    "",
    "## Related Skills",
    "",
    wikilinkList(skills),
    "",
    "## Source References",
    "",
    ...relatedProjects.flatMap((project) =>
      (project.productContext || []).map((item) => (item.url ? `- ${project.title}: ${item.label} (${item.url})` : `- ${project.title}: ${item.label}`)),
    ),
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);
}

function mediaUrl(media) {
  if (media.youtubeId) return media.youtubeId.startsWith("http") ? media.youtubeId : `https://youtu.be/${media.youtubeId}`;
  return media.src || media.thumbnail || "";
}

function buildMediaNotes(projects) {
  const notes = [];
  for (const project of projects) {
    for (const media of project.media || []) {
      const url = mediaUrl(media);
      if (!url || !/^https?:\/\//.test(url)) continue;
      const title = `${media.type === "youtube" || /youtu/i.test(url) ? "YouTube - " : "Media - "}${media.title || media.id}`;
      notes.push({
        title,
        content: compactLines([
          frontmatter({
            type: "media",
            status: "portfolio-ready",
            project: project.title,
            media_type: media.type || "link",
            source: media.id || "",
            tags: sorted(uniq(["#media", media.type ? tagFor(media.type) : ""])),
          }),
          `# ${title}`,
          "",
          "## Project",
          "",
          wikilink(project.title),
          "",
          "## Link",
          "",
          url,
          "",
          "## Why This Media Matters",
          "",
          media.caption || "Media evidence for the linked portfolio project.",
          "",
          "## Review Notes",
          "",
          "- Check that the media remains public-safe before sharing externally.",
          "- Prefer portfolio-safe framing over internal implementation details.",
          "",
          `Generated by \`${GENERATED_BY}\`.`,
        ]),
      });
    }
  }
  return notes;
}

function buildMocs(projects, componentNotes, rawCoverage, ndaResults) {
  const byCategory = new Map();
  for (const project of projects) {
    if (!byCategory.has(project.category)) byCategory.set(project.category, []);
    byCategory.get(project.category).push(project);
  }

  const portfolioProjects = compactLines([
    frontmatter({ type: "moc", status: "portfolio-ready", project_count: projects.length, tags: ["#moc", "#projects"] }),
    "# Portfolio Projects",
    "",
    "## Overview",
    "",
    `This vault contains ${projects.length} public portfolio project notes plus ${componentNotes.length} component/module notes.`,
    "",
    "## All Projects",
    "",
    wikilinkList(projects.map((project) => project.title)),
    "",
    "## By Category",
    "",
    ...sorted([...byCategory.keys()]).flatMap((category) => [
      `### ${category}`,
      "",
      wikilinkList(byCategory.get(category).map((project) => project.title)),
      "",
    ]),
    "## Component / Module Notes",
    "",
    wikilinkList(componentNotes.map((note) => note.title)),
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);

  const skillsMap = compactLines([
    frontmatter({ type: "moc", status: "portfolio-ready", tags: ["#moc", "#skills"] }),
    "# Skills Map",
    "",
    "## Skill Notes",
    "",
    wikilinkList(Object.keys(CONFIG.skillNotes || {})),
    "",
    "## Reading Path",
    "",
    "- Start with [[Unity]] for the broad implementation story.",
    "- Use [[Simulation & Digital Twin]] for industrial and training-system evidence.",
    "- Use [[Control Systems]] for PID and engineering-education evidence.",
    "- Use [[VR / AR]] for immersive, booth, and spatial visualization evidence.",
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);

  const companies = Object.keys(CONFIG.companyAliases || {});
  const companiesMap = compactLines([
    frontmatter({ type: "moc", status: "portfolio-ready", tags: ["#moc", "#companies"] }),
    "# Companies and Clients",
    "",
    "## Company Notes",
    "",
    wikilinkList(companies),
    "",
    "## Positioning Reminder",
    "",
    "These notes help keep ownership and public-safe language clear. Product names, brands, hardware references, and public coverage belong to their respective owners.",
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);

  const ndaMap = compactLines([
    frontmatter({ type: "moc", status: "portfolio-ready", tags: ["#moc", "#nda-safe", "#needs-review"] }),
    "# NDA Safe Portfolio Notes",
    "",
    "## Needs Review",
    "",
    ndaResults.filter((item) => item.scan.status === "needs-review").length
      ? ndaResults
          .filter((item) => item.scan.status === "needs-review")
          .map((item) => `- ${wikilink(item.project.title)} - ${item.scan.hits.map((hit) => hit.label).join(", ")}`)
          .join("\n")
      : "- No notes triggered configured NDA scanner rules.",
    "",
    "## Low Risk",
    "",
    ndaResults.filter((item) => item.scan.status === "low").length
      ? wikilinkList(ndaResults.filter((item) => item.scan.status === "low").map((item) => item.project.title))
      : "- No low-risk notes found.",
    "",
    "## Review Checklist",
    "",
    "- Remove credentials, private URLs, local paths, and source-code blocks.",
    "- Avoid exact private implementation details or unpublished client internals.",
    "- Keep claims focused on personal contribution and public portfolio evidence.",
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);

  const coverage = compactLines([
    frontmatter({ type: "moc", status: "portfolio-ready", tags: ["#moc", "#raw-notes"] }),
    "# Raw Notes Coverage",
    "",
    "## Matched To Projects",
    "",
    rawCoverage.matched.length
      ? rawCoverage.matched.map((item) => `- \`${item.file}\` -> ${wikilink(item.projectTitle)} (${item.reason})`).join("\n")
      : "- No raw notes matched to projects.",
    "",
    "## Component Notes",
    "",
    rawCoverage.components.length
      ? rawCoverage.components.map((item) => `- \`${item.file}\` -> ${wikilink(item.title)} under ${wikilink(item.parentTitle || item.parentProjectId)}`).join("\n")
      : "- No component notes configured.",
    "",
    "## Unmatched Notes",
    "",
    rawCoverage.unmatched.length
      ? rawCoverage.unmatched.map((item) => `- \`${item.file}\` (${item.title})`).join("\n")
      : "- All raw notes were matched or intentionally converted into component notes.",
    "",
    `Generated by \`${GENERATED_BY}\`.`,
  ]);

  return {
    "Portfolio Projects": portfolioProjects,
    "Skills Map": skillsMap,
    "Companies and Clients": companiesMap,
    "NDA Safe Portfolio Notes": ndaMap,
    "Raw Notes Coverage": coverage,
  };
}

function buildTemplates() {
  return {
    "Project Template": compactLines([
      "---",
      "type: project",
      "status: draft",
      "company: ",
      "category: ",
      "role: ",
      "platforms: []",
      "technologies: []",
      "timeline: ",
      "nda_risk: needs-review",
      "source: ",
      "tags: [#project, #needs-review]",
      "---",
      "",
      "# Project Name",
      "",
      "## One-Line Summary",
      "",
      "## Project Interpretation",
      "",
      "## Context",
      "",
      "## My Role",
      "",
      "## What I Built",
      "",
      "## System Behavior",
      "",
      "## Technical Proof",
      "",
      "## Media",
      "",
      "## NDA / Public Safety Notes",
      "",
      "## Related Skills",
      "",
      "## Related Projects",
      "",
      "## Source References",
    ]),
    "Skill Template": compactLines([
      "---",
      "type: skill",
      "status: draft",
      "project_count: 0",
      "tags: [#skill]",
      "---",
      "",
      "# Skill Name",
      "",
      "## What This Skill Means In My Portfolio",
      "",
      "## Related Technologies",
      "",
      "## Strongest Portfolio Examples",
      "",
      "## Project Evidence",
      "",
      "## Interview Talking Points",
    ]),
  };
}

function cleanGeneratedFiles() {
  if (!existsSync(MANIFEST_PATH)) return;
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
  const root = resolve(VAULT_DIR);
  for (const rel of manifest.files || []) {
    if (rel === ".gitkeep") continue;
    const target = resolve(VAULT_DIR, rel);
    if (!target.startsWith(root)) {
      throw new Error(`Refusing to clean outside vault: ${target}`);
    }
    if (existsSync(target)) rmSync(target, { force: true });
  }
  for (const dir of Object.values(DIRS).reverse()) {
    const target = join(VAULT_DIR, dir);
    if (existsSync(target)) {
      try {
        rmSync(target, { recursive: true, force: true });
      } catch {
        // Leave user-created files alone if the directory is not empty for some reason.
      }
    }
  }
}

async function main() {
  log("=== Excellent Obsidian Vault Generator ===");
  log(`Branch-safe default: generated vault contents stay local and ignored unless force-added.`);

  if (CLEAN_MODE) {
    log("Cleaning previously generated files from manifest...");
    cleanGeneratedFiles();
  }

  ensureDir(VAULT_DIR);
  writeFileSync(join(VAULT_DIR, ".gitkeep"), "", "utf8");
  for (const dir of Object.values(DIRS)) ensureDir(join(VAULT_DIR, dir));

  log("Loading project data via Vite SSR...");
  const projects = sorted(await loadProjects(), (a, b) => a.title.localeCompare(b.title));
  const rawNotes = readSourceNotes();
  const projectById = new Map(projects.map((project) => [project.id, project]));
  const matches = matchRawNotes(projects, rawNotes);

  log(`Found ${projects.length} project records.`);
  log(`Found ${rawNotes.length} raw markdown notes.`);
  log(`Configured ${matches.componentNotes.length} component/module notes.`);

  const ndaResults = [];
  const componentNotes = matches.componentNotes.map((note) => ({
    ...note,
    parentTitle: projectById.get(note.parentProjectId)?.title || "",
  }));

  const rawCoverage = {
    matched: [],
    components: componentNotes,
    unmatched: matches.unmatched,
  };

  for (const project of projects.sort((a, b) => a.title.localeCompare(b.title))) {
    const raw = matches.byProject.get(project.id) || [];
    rawCoverage.matched.push(...raw.map((note) => ({ file: note.file, projectTitle: project.title, reason: note.reason })));
    const note = buildProjectNote(project, projects, raw);
    const path = notePath(DIRS.projects, note.title);
    projectNoteMap.set(project.title, relativeVaultPath(path));
    ndaResults.push({ project, scan: note.scan });
    writeGenerated(path, note.content);
    log(`  [Project] ${project.title} (${note.scan.status})`);
  }

  for (const note of componentNotes.sort((a, b) => a.title.localeCompare(b.title))) {
    const path = notePath(DIRS.projects, note.title);
    projectNoteMap.set(note.title, relativeVaultPath(path));
    writeGenerated(path, buildComponentNote(note, projectById));
    log(`  [Component] ${note.title}`);
  }

  for (const [skill, details] of Object.entries(CONFIG.skillNotes || {}).sort(([a], [b]) => a.localeCompare(b))) {
    const path = notePath(DIRS.skills, skill);
    skillNoteMap.set(skill, relativeVaultPath(path));
    writeGenerated(path, buildSkillNote(skill, details, projects));
    log(`  [Skill] ${skill}`);
  }

  for (const company of Object.keys(CONFIG.companyAliases || {}).sort((a, b) => a.localeCompare(b))) {
    const path = notePath(DIRS.companies, company);
    companyNoteMap.set(company, relativeVaultPath(path));
    writeGenerated(path, buildCompanyNote(company, projects));
    log(`  [Company] ${company}`);
  }

  for (const media of buildMediaNotes(projects).sort((a, b) => a.title.localeCompare(b.title))) {
    writeGenerated(notePath(DIRS.media, media.title), media.content);
    log(`  [Media] ${media.title}`);
  }

  const mocs = buildMocs(projects, componentNotes, rawCoverage, ndaResults);
  for (const [title, content] of Object.entries(mocs)) {
    writeGenerated(notePath(DIRS.moc, title), content);
    log(`  [MOC] ${title}`);
  }

  const templates = buildTemplates();
  for (const [title, content] of Object.entries(templates)) {
    writeGenerated(notePath(DIRS.templates, title), content);
    log(`  [Template] ${title}`);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    generator: GENERATED_BY,
    files: sorted(uniq(writtenFiles)),
    counts: {
      projects: projects.length,
      components: componentNotes.length,
      rawNotes: rawNotes.length,
      generatedFiles: writtenFiles.length,
      needsReview: ndaResults.filter((item) => item.scan.status === "needs-review").length,
    },
  };
  writeGenerated(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  log("");
  log(`Generated ${writtenFiles.length} files in ${CONFIG.vaultDir}.`);
  const flagged = ndaResults.filter((item) => item.scan.status === "needs-review");
  if (flagged.length) {
    log("");
    log("NDA review flagged:");
    for (const item of flagged) {
      log(`  - ${item.project.title}: ${item.scan.hits.map((hit) => hit.label).join(", ")}`);
    }
  }
  log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
