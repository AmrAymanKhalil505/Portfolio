export const meta = {
  name: 'job-hunt',
  description: 'Deep search for remote Unity/XR/simulation jobs, freelance projects and companies to watch for Amr, scored against his profile',
  whenToUse: 'Every ~3 days for jobs and freelance; weekly with args.includeCompanies=true',
  phases: [
    { title: 'Scout', detail: 'countries and companies hiring remote devs from Egypt' },
    { title: 'Search', detail: 'job boards, freelance platforms, company scouting in parallel' },
    { title: 'Score', detail: 'dedupe, verify fit, score against profile' },
  ],
}

const TODAY = (args && args.today) || 'unknown'
// mode "full" (weekly): regional + outsourcing searchers, scout, companies, 25 postings per searcher.
// mode "light" (midweek): the 5 core searchers only, 15 postings each.
const FULL = !args || args.mode !== 'light'
const CAP = FULL ? 25 : 15
const INCLUDE_COMPANIES = args && typeof args.includeCompanies === 'boolean' ? args.includeCompanies : FULL
const RUN_SCOUT = args && typeof args.runScout === 'boolean' ? args.runScout : FULL
const KNOWN_URLS = (args && Array.isArray(args.knownUrls)) ? args.knownUrls : []
const REGIONS_HINT = (args && args.regionsHint) || ''
const RECHECK = (args && Array.isArray(args.recheck)) ? args.recheck : []

const PROFILE = `CANDIDATE: Amr Khalil, based in Egypt (UTC+2/+3), remote only.
- Senior Unity Engineer at BEDO Innovating Education (Oct 2024-present): Unity simulations of real engineering equipment (PLC-driven industrial stations, PID control labs, fluid mechanics, hydrogen fuel-cell lab), digital twins/shadows, WebGL delivery, ScriptableObject architecture, dependency injection, migrating to Unity 6.
- Unity & AR developer, Ivris (freelance, Jun 2024-Jun 2026): Unity 6 interior app, runtime 3D loading, Photon multiplayer WebGL editing, AR Foundation (Android/iOS), PlayFab.
- Unity VR developer, Tanta University (Dec 2023-Oct 2024): sole dev, Meta Quest 2 training suite, Auto Hand interactions, 360 video.
- ~3 years professional Unity; ~11 months dedicated VR. No production OpenXR/XR Interaction Toolkit yet. C#, JS (WebGL jslib), some Node.js/SQL.
- Strongest fit: Unity simulation / training / EdTech / digital twin / XR / WebGL roles. Also fine: general Unity gameplay/tools roles.
- Wants: full-time remote preferred; also part-time and freelance/contract. Minimum ~$1,500/month (contracts ~$28/hour).
- Must be hireable from Egypt: worldwide remote, EMEA/Africa remote, contractor/EOR (Deel, Remote.com, Oyster) friendly. Roles restricted to US/EU residents only are ineligible.`

const JOB_ITEM = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    company: { type: 'string' },
    url: { type: 'string', description: 'Direct link to the posting you opened' },
    source: { type: 'string', description: 'Site name, e.g. Remote OK, Freelancer.com' },
    kind: { type: 'string', enum: ['job', 'freelance'] },
    employment: { type: 'string', enum: ['full-time', 'part-time', 'contract', 'freelance-project'] },
    country: { type: 'string', description: 'Company/client country if known, else "unknown"' },
    remoteScope: { type: 'string', description: 'Who can apply, as stated: e.g. "Worldwide", "EMEA", "Europe only", "unknown"' },
    egyptEligible: { type: 'string', enum: ['yes', 'no', 'unclear'] },
    pay: { type: 'string', description: 'Pay exactly as stated, or "not stated"' },
    payMonthlyUsd: { type: ['number', 'null'], description: 'Rough monthly USD equivalent (hourly*160, yearly/12, fixed project budget as-is); null if unknown' },
    postedAt: { type: ['string', 'null'], description: 'YYYY-MM-DD if shown or derivable, else null' },
    applicants: { type: ['number', 'null'], description: 'Number of applicants/bids/proposals if the page shows it (use lower bound of a range), else null' },
    applicantsLabel: { type: ['string', 'null'], description: 'Applicant info exactly as shown, e.g. "10 to 15 proposals", "23 bids"' },
    skills: { type: 'array', items: { type: 'string' } },
    summary: { type: 'string', description: 'One or two sentences: what the work is' },
    hiringReason: { type: 'string', description: 'Why this company/country hires remote contractors, if evident (e.g. outsourcing firm, relocated studio, wartime disruption, local talent shortage, distributed team); else "not stated"' },
  },
  required: ['title', 'company', 'url', 'source', 'kind', 'employment', 'country', 'remoteScope', 'egyptEligible', 'pay', 'payMonthlyUsd', 'postedAt', 'applicants', 'applicantsLabel', 'skills', 'summary', 'hiringReason'],
}

const SEARCH_RESULT = {
  type: 'object',
  properties: {
    jobs: { type: 'array', items: JOB_ITEM },
    sourcesTried: {
      type: 'array',
      items: {
        type: 'object',
        properties: { source: { type: 'string' }, status: { type: 'string', description: 'ok / blocked / needs login / no results' } },
        required: ['source', 'status'],
      },
    },
  },
  required: ['jobs', 'sourcesTried'],
}

const SCOUT_SCHEMA = {
  type: 'object',
  properties: {
    regions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          region: { type: 'string' },
          whyGood: { type: 'string' },
          timezoneOverlap: { type: 'string' },
          hiringModel: { type: 'string', description: 'e.g. contractor via Deel, direct B2B contract' },
          boardsAndSites: { type: 'array', items: { type: 'string' } },
        },
        required: ['region', 'whyGood', 'timezoneOverlap', 'hiringModel', 'boardsAndSites'],
      },
    },
    searchTerms: { type: 'array', items: { type: 'string' } },
    talentNetworks: {
      type: 'array',
      description: 'Vetted talent networks / marketplaces worth joining (e.g. Proxify, Lemon.io, Arc, Turing, Toptal)',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
          egyptEligible: { type: 'string', enum: ['yes', 'no', 'unclear'] },
          notes: { type: 'string', description: 'How they hire, rates if published, vetting process' },
        },
        required: ['name', 'url', 'egyptEligible', 'notes'],
      },
    },
    notes: { type: 'string' },
  },
  required: ['regions', 'searchTerms', 'talentNetworks', 'notes'],
}

const RULES = `RULES:
- Today is ${TODAY}. Only include postings that are still open. Jobs: posted within the last 30 days. Freelance projects: within the last 14 days. If no date is visible, include only if the page indicates it is open, with postedAt null.
- OPEN every posting you include (WebFetch the posting URL). Never include something you only saw in a search-result snippet. The url must be the posting itself.
- Read-only: never sign in, apply, bid, register or message anyone. If a page needs login, note it in sourcesTried and move on.
- Never invent pay, dates or applicant counts: null / "not stated" when not shown.
- Hands-on engineering only: skip AI-training-data, annotation, model-evaluation or 'expert' gigs (e.g. micro1, Outlier, Mercor-style tasks), QA testing, pure art/animation, and teaching roles.
- Relevance: Unity or Unity-adjacent real-time 3D (simulation, training, XR/VR/AR, digital twin, WebGL, EdTech, serious games, games). Skip Unreal-only, pure web/mobile without Unity, and senior lead roles demanding 7+ years unless otherwise a strong fit.
- Mark egyptEligible "no" when the posting restricts to specific countries that exclude Egypt; still include it only if exceptional, otherwise skip it.
- Aim for depth: try at least ${FULL ? 6 : 4} sources/queries (including deeper result pages), and return up to ${CAP} good postings.
- When a board is in another language, search in that language too, and write title/summary in English (keep the original title in parentheses).
- Skip anything already on the board (these URLs are known): ${KNOWN_URLS.length ? KNOWN_URLS.join(' ') : 'none yet'}`

phase('Scout')
const scout = !RUN_SCOUT ? null : await agent(
  `${PROFILE}\n\nYou are scouting the remote job market for this candidate. Research (web search + read real pages) which countries/regions currently hire remote Unity / XR / simulation developers who live in Egypt, how they hire (contractor, EOR, B2B), time-zone fit, and which job boards / freelance sites / company career pages those employers actually post on. Also list 10-15 effective search terms (role titles + keywords) for this candidate, and 4-8 vetted talent networks he should join (verify on their own pages whether Egypt-based developers are accepted). Be concrete; cite real site names.`,
  { label: 'scout: regions & sources', phase: 'Scout', schema: SCOUT_SCHEMA },
)
const scoutText = scout ? JSON.stringify(scout) : (REGIONS_HINT || 'No scout this run; use your own judgment.')
log(`Scout found ${scout ? scout.regions.length : 0} regions`)

const CORE_SEARCHERS = [
  { key: 'linkedin-remote-boards', kind: 'job', task: 'Search LinkedIn public guest job search pages (no login; remote filter; locations Worldwide, EMEA, Egypt, European Union, United Arab Emirates), plus Himalayas, Arc.dev, Remotive and Working Nomads. LinkedIn guest pages show applicant counts: capture them. LinkedIn often labels on-site jobs as remote: open each posting and confirm. Full-time and part-time roles.' },
  { key: 'games-xr-boards', kind: 'job', task: 'Search games/XR/real-time-3D boards: Work With Indies (homepage list), Hitmarker (unity and remote pages), GameJobs.co, remotegamejobs.com, InGame Job, and Unity Discussions (Commercial > Job Offering). Full-time, part-time and contract roles.' },
  { key: 'sim-edtech-regional', kind: 'job', task: 'Find open remote Unity roles at simulation, training, EdTech, digital twin, industrial/medical training and serious-games companies via their career pages and ATS boards (Greenhouse, Lever, Ashby, Workable, Recruitee, Breezy), plus regional boards: Djinni (keyword Unity, Worldwide filter; shows views/applications), GulfTalent and Bayt (remote Unity roles in UAE/KSA), Wuzzuf (remote filter). Prioritise the regions in the scout report.' },
  { key: 'freelancer-com', kind: 'freelance', task: 'Search public project listings on Freelancer.com (categories unity-3d, virtual-reality, augmented-reality, game-development, and keyword searches for unity simulation / webgl / digital twin). Bid counts are public: capture them. Skip projects with a budget under about $300 USD equivalent unless the scope is tiny and clearly matches Unity simulation or VR.' },
  { key: 'twine-reddit-indies', kind: 'freelance', task: 'Search Twine game-developer jobs, Reddit r/gameDevClassifieds and r/forhire [Hiring] posts (use the Atom RSS feeds such as https://www.reddit.com/r/gameDevClassifieds/new/.rss; old.reddit.com and JSON are usually blocked), and Work With Indies contract listings, for Unity / XR / simulation freelance or contract work. For Reddit use the comment count as applicantsLabel and leave applicants null.' },
]
const REGIONAL_SEARCHERS = [
  { key: 'ukraine-relocated', kind: 'job', task: 'Ukrainian- and Russian-language markets, where wartime disruption (power cuts, mobilisation, relocation) and relocated studios drive remote hiring: Djinni (Unity, remote/worldwide), DOU.ua vacancies (Unity, remote), Habr Career (Unity, remote), relocate.me, and career pages of studios relocated to Cyprus, Serbia, Armenia, Georgia or Kazakhstan. Search in Ukrainian and Russian as well as English (e.g. "Unity розробник віддалено", "Unity разработчик удаленно"). Note how contractors are paid (B2B, Deel) when shown. Jobs and contracts.' },
  { key: 'central-europe', kind: 'job', task: 'Central European outsourcing and simulation markets: Poland (justjoin.it, nofluffjobs.com, theprotocol.it, pracuj.pl), Czechia (jobs.cz, startupjobs.cz, Bohemia Interactive Simulations careers), Romania (ejobs.ro, bestjobs.eu), Hungary (profession.hu). Remote or contractor Unity roles; search in local languages too (e.g. "Unity programista zdalnie", "Unity vývojář remote"). Prioritise simulation/training companies.' },
  { key: 'dach', kind: 'job', task: 'Germany, Austria, Switzerland (developer shortage; industrial simulation, digital twins, automation): StepStone, XING Jobs, Get in IT, German games job boards, freelance.de and freelancermap.de (Unity projects), and career pages of industrial simulation / digital twin / automation-training companies. Search in German too (e.g. "Unity Entwickler remote", "Unity Simulation Freelancer"). Remote or contractor roles open outside the EU.' },
  { key: 'france-nordics', kind: 'job', task: 'France (serious games, defense and industrial simulation): Welcome to the Jungle, AFJV (games/simulation board), Indeed France; search in French too (e.g. "développeur Unity télétravail", "simulation serious game Unity"). Nordics (Sweden, Finland, Denmark, Norway; XR and simulation): The Hub (thehub.io), company career pages of XR/simulation firms. Remote or contractor roles open outside the EU.' },
  { key: 'gulf-turkey', kind: 'job', task: 'Gulf (state-funded gaming, XR and digital-twin programmes; Arabic is an advantage): Bayt, GulfTalent, NaukriGulf, Akhtaboot, Wuzzuf (remote filter), plus Saudi/UAE gaming and XR company career pages; search in Arabic too (e.g. "مطور يونتي عن بعد"). Turkey (mobile game hub): kariyer.net and the career pages of Turkish studios. Keep only roles that are genuinely remote from Egypt (no relocation required).' },
  { key: 'outsourcing-firms', kind: 'job', task: 'Outsourcing and staff-augmentation firms that place remote developers with clients across EMEA and often accept contractors from Egypt: EPAM Anywhere, N-iX, SoftServe, Innovecs, Program-Ace, Kevuru Games, Andersen, Itransition, Room 8 Group, Virtuos, Keywords Studios and similar. Search their career pages for remote Unity / XR / simulation roles and confirm which countries are eligible.' },
]
const SEARCHERS = FULL ? [...CORE_SEARCHERS, ...REGIONAL_SEARCHERS] : CORE_SEARCHERS

const COMPANY_SCHEMA = {
  type: 'object',
  properties: {
    companies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          website: { type: 'string' },
          what: { type: 'string', description: 'What they build, one sentence' },
          whyRelevant: { type: 'string' },
          country: { type: 'string' },
          remoteFromEgypt: { type: 'string', enum: ['yes', 'no', 'unclear'] },
          remoteEvidence: { type: 'string' },
          packageEvidence: { type: 'string', description: 'Published salary bands, benefits, reviews; "unknown" if no evidence' },
          packageSources: { type: 'array', items: { type: 'string' } },
          githubOrg: { type: ['string', 'null'] },
          communityUrl: { type: ['string', 'null'] },
        },
        required: ['name', 'website', 'what', 'whyRelevant', 'country', 'remoteFromEgypt', 'remoteEvidence', 'packageEvidence', 'packageSources', 'githubOrg', 'communityUrl'],
      },
    },
  },
  required: ['companies'],
}

const COMPANY_CHECK_SCHEMA = {
  type: 'object',
  properties: {
    companies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          githubRepo: { type: ['string', 'null'], description: 'Most relevant public repo URL' },
          lastCommit: { type: ['string', 'null'], description: 'YYYY-MM-DD of latest commit on that repo' },
          goodFirstIssues: { type: ['number', 'null'] },
          acceptsContributions: { type: 'string', enum: ['yes', 'no', 'unclear'] },
          communityType: { type: ['string', 'null'], description: 'Discord / Forum / Slack' },
          communityUrl: { type: ['string', 'null'] },
          communityActivity: { type: 'string', description: 'e.g. "active, posts daily", "quiet", "unknown"' },
          firstStep: { type: 'string', description: 'One concrete small contribution or intro the candidate could make' },
          score: { type: 'number', description: '0-100' },
          scoreReason: { type: 'string' },
        },
        required: ['name', 'githubRepo', 'lastCommit', 'goodFirstIssues', 'acceptsContributions', 'communityType', 'communityUrl', 'communityActivity', 'firstStep', 'score', 'scoreReason'],
      },
    },
  },
  required: ['companies'],
}

phase('Search')
const searchTasks = SEARCHERS.map((s) => () =>
  agent(
    `${PROFILE}\n\nSCOUT REPORT (regions, sources, search terms):\n${scoutText}\n\nYOUR SLICE: ${s.task}\nSet kind="${s.kind}" on every result.\n\n${RULES}`,
    { label: `search: ${s.key}`, phase: 'Search', schema: SEARCH_RESULT },
  ).then((r) => (r ? { key: s.key, ...r } : null)),
)

const companyTask = () =>
  INCLUDE_COMPANIES
    ? agent(
        `${PROFILE}\n\nSCOUT REPORT:\n${scoutText}\n\nFind 10-14 companies relevant to this candidate that may NOT have an open role right now: simulation, training, digital twin, XR, EdTech, Unity tooling or serious-games companies that hire remotely (ideally from Egypt/EMEA), pay well, and have public open-source repos (GitHub) and/or a community (Discord/forum) where an outsider can contribute. For each give honest evidence for the package (published salary bands, benefits page, review sites) with source URLs; say "unknown" when there is none. Read-only research; never contact anyone.`,
        { label: 'companies: find', phase: 'Search', schema: COMPANY_SCHEMA },
      ).then((found) =>
        found && found.companies.length
          ? agent(
              `${PROFILE}\n\nFor each company below, inspect its GitHub (org and most relevant repo: last commit date, count of open "good first issue"/"help wanted" issues, whether outside PRs get merged) and its community (Discord/forum link and activity). Suggest one concrete, small first contribution or intro for the candidate. Score 0-100 for: relevance to the candidate (40), package evidence (20), openness of the contribution path (25), community activity (15). Read-only; never join, post or open issues.\n\nCOMPANIES:\n${JSON.stringify(found.companies)}`,
              { label: 'companies: check GitHub & community', phase: 'Search', schema: COMPANY_CHECK_SCHEMA },
            ).then((checked) => ({ found: found.companies, checked: checked ? checked.companies : [] }))
          : { found: found ? found.companies : [], checked: [] },
      )
    : Promise.resolve(null)

const RECHECK_SCHEMA = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: { type: 'string' },
          status: { type: 'string', enum: ['open', 'closed', 'unknown'] },
          evidence: { type: 'string', description: 'What on the page showed it, e.g. "No longer accepting applications"' },
        },
        required: ['url', 'status', 'evidence'],
      },
    },
  },
  required: ['results'],
}
const recheckTask = () =>
  RECHECK.length
    ? agent(
        `Check whether each job posting below is still open. Open every URL (WebFetch). "closed" only with clear evidence: page removed/404, "no longer accepting applications", "position filled", project awarded/closed, or a past deadline. If the page cannot be loaded or is ambiguous, use "unknown". Read-only; never apply or log in.

${JSON.stringify(RECHECK)}`,
        { label: 'recheck: still open?', phase: 'Score', schema: RECHECK_SCHEMA },
      )
    : Promise.resolve(null)

const [searchResults, companyResult, recheckResult] = await Promise.all([parallel(searchTasks), companyTask(), recheckTask()])
const results = searchResults.filter(Boolean)
const allJobs = results.flatMap((r) => r.jobs.map((j) => ({ ...j, searcher: r.key })))
const sourcesTried = results.flatMap((r) => r.sourcesTried.map((x) => ({ ...x, searcher: r.key })))
log(`Collected ${allJobs.length} postings from ${results.length}/${SEARCHERS.length} searchers`)

// Dedupe by URL (normalised) before scoring
const seen = new Set()
const unique = []
for (const j of allJobs) {
  const k = j.url.replace(/[?#].*$/, '').replace(/\/$/, '').toLowerCase()
  if (seen.has(k)) continue
  seen.add(k)
  unique.push(j)
}
log(`${unique.length} unique postings after URL dedupe`)

phase('Score')
const SCORE_SCHEMA = {
  type: 'object',
  properties: {
    scored: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: { type: 'string' },
          keep: { type: 'boolean', description: 'false for duplicates of another posting, closed, irrelevant, or ineligible from Egypt' },
          duplicateOf: { type: ['string', 'null'] },
          score: { type: 'number', description: '0-100' },
          scoreReason: { type: 'string', description: 'One sentence naming the main reasons' },
        },
        required: ['url', 'keep', 'duplicateOf', 'score', 'scoreReason'],
      },
    },
  },
  required: ['scored'],
}

const scoring = unique.length
  ? await agent(
      `${PROFILE}\n\nScore every posting below for this candidate, 0-100:\n- Skill fit (40): Unity simulation/training/XR/WebGL/EdTech highest; general Unity games lower; non-Unity lowest.\n- Eligibility from Egypt (20): yes=full, unclear=half, no=0.\n- Pay vs minimum $1,500/month (15): unknown pay = 7.\n- Employment preference (10): full-time remote 10, part-time 7, contract 6, freelance project 5.\n- Freshness (8): posted in last 7 days full.\n- Competition (7): fewer applicants better; unknown = 3.
Use hiringReason as evidence for eligibility when the posting itself is vague.\nGATE FIRST: a posting only qualifies if the work is hands-on software development in Unity or Unity-adjacent real-time 3D (C# gameplay/systems/tools, simulation, XR, WebGL). AI-training-data / annotation / model-evaluation / 'expert task' gigs (micro1, Outlier, Mercor and similar), QA testing, pure 3D art or animation, and teaching do NOT qualify: set keep=false for them regardless of pay.
Spot-check any posting that looks stale or doubtful by opening its URL. Set keep=false for duplicates (same role posted on two sites: keep the one with more information), closed postings, irrelevant roles, or roles that exclude Egypt. Be calibrated: most postings should land 40-80.\n\nPOSTINGS:\n${JSON.stringify(unique)}`,
      { label: 'score & verify', phase: 'Score', schema: SCORE_SCHEMA },
    )
  : null

const byUrl = new Map((scoring ? scoring.scored : []).map((s) => [s.url, s]))
const scoredJobs = unique.map((j) => {
  const s = byUrl.get(j.url)
  return { ...j, score: s ? s.score : null, scoreReason: s ? s.scoreReason : 'Not scored', keep: s ? s.keep : true, duplicateOf: s ? s.duplicateOf : null }
})
const kept = scoredJobs.filter((j) => j.keep)
log(`${kept.length} postings kept, ${scoredJobs.length - kept.length} dropped by the scorer`)

const companies = companyResult
  ? companyResult.found.map((c) => ({ ...c, ...(companyResult.checked.find((x) => x.name === c.name) || {}) }))
  : []

return { scout, jobs: kept, dropped: scoredJobs.filter((j) => !j.keep), sourcesTried, companies, recheck: recheckResult ? recheckResult.results : [] }
