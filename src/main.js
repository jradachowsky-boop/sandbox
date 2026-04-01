const STORAGE_KEY = "jeremy_strategy_os_v1";

const seed = {
  pillars: [
    {
      id: "rainforest-burger",
      name: "Rainforest Burger",
      objective:
        "Lock in irreversible supply-chain commitments from top quick-service brands to eliminate deforestation-linked beef.",
      strategy:
        "Concentrate pressure on 3 flagship brands; combine procurement data, public pressure moments, and board-level private asks.",
      status: "At risk",
      opportunities: [
        "Anchor coalition statement before annual shareholder meetings.",
        "Secure one pilot traceability announcement in Q2.",
      ],
      risks: [
        "Counter-campaign claiming traceability costs jobs.",
        "Brand legal team delaying language on zero-conversion deadlines.",
      ],
      recentDevelopments: [
        "Two brands accepted closed-door technical review.",
        "Leaked procurement map identifies new leverage supplier cluster.",
      ],
    },
    {
      id: "illegal-beef",
      name: "Cattle Trafficking / Illegal Beef",
      objective:
        "Increase legal and political cost of laundering illegal cattle into formal beef supply chains.",
      strategy:
        "Pair evidence packages with congressional champions and bank compliance channels; sequence disclosures around budget negotiations.",
      status: "On track",
      opportunities: [
        "Joint letter with anti-corruption caucus and two governors.",
        "Push compliance hearing language into committee agenda.",
      ],
      risks: [
        "Retaliatory narratives framing this as anti-rural development.",
        "Potential informant exposure if timeline slips.",
      ],
      recentDevelopments: [
        "Federal investigators requested annex on transport corridors.",
        "Regional paper running balanced feature on enforcement gaps.",
      ],
    },
    {
      id: "bird-campaign",
      name: "Bird Campaign",
      objective:
        "Convert migratory bird protection into a durable cross-border financing and policy package.",
      strategy:
        "Lead with economic framing (water, tourism, disaster resilience) and align top donors with bilateral government asks.",
      status: "Needs attention",
      opportunities: [
        "New private foundation exploring migratory species flagship.",
        "Potential inclusion in upcoming foreign assistance briefing.",
      ],
      risks: [
        "Fragmented messaging across partner NGOs.",
        "Government turnover can reset negotiating points.",
      ],
      recentDevelopments: [
        "Environment ministry requested 2-page donor concept note.",
        "Major donor asked for measurable first-year policy outcomes.",
      ],
    },
    {
      id: "maya-forest",
      name: "Maya Forest Restoration",
      objective:
        "Secure long-horizon political commitments for landscape-scale restoration and indigenous stewardship finance.",
      strategy:
        "Bundle restoration targets with visible jobs narrative and sovereign-level co-financing options ahead of regional summit.",
      status: "On track",
      opportunities: [
        "Three-country declaration draft circulating quietly.",
        "Climate finance facility open to blended-capital proposal.",
      ],
      risks: [
        "Election cycle may freeze public commitments.",
        "Land tenure disputes may delay implementation credibility.",
      ],
      recentDevelopments: [
        "Preliminary mapping complete for first restoration corridor.",
        "Presidential policy unit requested talking points.",
      ],
    },
  ],
  stakeholders: [
    {
      id: 1,
      name: "Elena Ruiz",
      role: "Chief Sustainability Officer, Global Burger Co.",
      pillar: "Rainforest Burger",
      influence: 5,
      alignment: "Medium",
      nextMove: "Send board-facing transition memo + supplier risk map.",
      notes: "Privately supportive but constrained by procurement CFO.",
      category: "Corporate",
    },
    {
      id: 2,
      name: "Sen. Tomas Aguilar",
      role: "Chair, Agriculture Oversight Subcommittee",
      pillar: "Cattle Trafficking / Illegal Beef",
      influence: 5,
      alignment: "High",
      nextMove: "Deliver draft hearing questions and witness list by Friday.",
      notes: "Wants airtight legal framing before public escalation.",
      category: "Political",
    },
    {
      id: 3,
      name: "Nadia Chen",
      role: "Program Director, NorthSky Foundation",
      pillar: "Bird Campaign",
      influence: 4,
      alignment: "High",
      nextMove: "Share 12-month results framework and bilateral leverage plan.",
      notes: "Potential lead donor if outcomes are concrete.",
      category: "Donor",
    },
    {
      id: 4,
      name: "Minister Raul Ixba",
      role: "Minister of Environment",
      pillar: "Maya Forest Restoration",
      influence: 5,
      alignment: "Medium",
      nextMove: "Prep summit language that highlights jobs and sovereignty.",
      notes: "Wants proof of domestic political upside.",
      category: "Government",
    },
    {
      id: 5,
      name: "Lucia Benitez",
      role: "Investigative Editor",
      pillar: "Cattle Trafficking / Illegal Beef",
      influence: 3,
      alignment: "Medium",
      nextMove: "Offer off-record technical briefing with verifiable evidence timeline.",
      notes: "Can shape elite narrative before committee session.",
      category: "Media",
    },
    {
      id: 6,
      name: "Carlos Mendez",
      role: "Regional VP Procurement, FastBite",
      pillar: "Rainforest Burger",
      influence: 4,
      alignment: "Low",
      nextMove: "Engage through peer company case study and legal-safe commitment language.",
      notes: "Primary internal blocker on adoption timeline.",
      category: "Corporate",
    },
  ],
  risks: [
    {
      id: "R-101",
      title: "Counter-narrative campaign by cattle lobby",
      pillar: "Cattle Trafficking / Illegal Beef",
      severity: "Critical",
      owner: "Jeremy",
      mitigation: "Pre-brief credible rural voices and publish jobs-positive enforcement framing.",
      status: "Open",
    },
    {
      id: "R-102",
      title: "Brand legal delay on zero-conversion language",
      pillar: "Rainforest Burger",
      severity: "High",
      owner: "Policy Team",
      mitigation: "Prepare fallback clause preserving timeline + verification milestones.",
      status: "Open",
    },
    {
      id: "R-103",
      title: "Election calendar compresses Maya commitments",
      pillar: "Maya Forest Restoration",
      severity: "High",
      owner: "Gov Relations",
      mitigation: "Lock technical MoU before campaign blackout period.",
      status: "Monitoring",
    },
  ],
  actions: [
    {
      id: "A-1",
      title: "Finalize board memo for Global Burger Co.",
      pillar: "Rainforest Burger",
      priority: "Critical",
      due: "2026-04-03",
      leverage: "Unlocks top-3 market signal",
      owner: "Jeremy",
      status: "In progress",
    },
    {
      id: "A-2",
      title: "Send evidence annex to Sen. Aguilar team",
      pillar: "Cattle Trafficking / Illegal Beef",
      priority: "High",
      due: "2026-04-04",
      leverage: "Sets hearing agenda",
      owner: "Legal & Policy",
      status: "Not started",
    },
    {
      id: "A-3",
      title: "Draft donor concept note for migratory birds",
      pillar: "Bird Campaign",
      priority: "High",
      due: "2026-04-05",
      leverage: "Moves $8M prospect to diligence",
      owner: "Development",
      status: "In progress",
    },
    {
      id: "A-4",
      title: "Refine summit talking points with jobs framing",
      pillar: "Maya Forest Restoration",
      priority: "Critical",
      due: "2026-04-07",
      leverage: "Secures public commitment window",
      owner: "Jeremy",
      status: "Not started",
    },
  ],
  meetings: [
    {
      id: "M-1",
      date: "2026-04-02",
      title: "Global Burger Co. CSO Check-in",
      pillar: "Rainforest Burger",
      participants: "Elena Ruiz, Procurement counsel",
      objective: "Secure agreement on draft commitment language",
    },
    {
      id: "M-2",
      date: "2026-04-04",
      title: "Committee Staff Strategy Call",
      pillar: "Cattle Trafficking / Illegal Beef",
      participants: "Sen. Aguilar staff, legal advisors",
      objective: "Align evidence sequencing and public narrative",
    },
    {
      id: "M-3",
      date: "2026-04-06",
      title: "NorthSky Foundation Diligence",
      pillar: "Bird Campaign",
      participants: "Nadia Chen, grants team",
      objective: "Translate bird campaign into outcomes and co-funding strategy",
    },
  ],
  decisions: [
    {
      id: "D-1",
      date: "2026-03-29",
      decision: "Lead with enforcement-plus-jobs narrative in illegal beef hearings",
      rationale: "Minimizes anti-rural backlash while preserving accountability argument.",
      followUp: "Commission two regional messengers and op-ed draft.",
    },
  ],
  donorCategories: [
    "Climate philanthropy",
    "Biodiversity-focused foundations",
    "Government bilateral aid",
    "Corporate sustainability partnerships",
  ],
};

const state = {
  data: loadData(),
  page: "dashboard",
  focusPriority: "all",
  focusScope: "all",
  search: "",
};

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seed);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seed);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function init() {
  document.getElementById("todayDate").textContent = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  wireEvents();
  renderNav();
  renderPage();
}

function wireEvents() {
  const search = document.getElementById("quickSearch");
  search.addEventListener("input", (e) => {
    state.search = e.target.value.toLowerCase();
    renderPage();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      search.focus();
    }
  });

  document.getElementById("focusPriority").addEventListener("change", (e) => {
    state.focusPriority = e.target.value;
    renderPage();
  });

  const scopeSelect = document.getElementById("focusScope");
  state.data.pillars.forEach((p) => {
    const option = document.createElement("option");
    option.value = p.name;
    option.textContent = p.name;
    scopeSelect.append(option);
  });
  scopeSelect.addEventListener("change", (e) => {
    state.focusScope = e.target.value;
    renderPage();
  });

  document.getElementById("clearFocus").addEventListener("click", () => {
    state.focusPriority = "all";
    state.focusScope = "all";
    document.getElementById("focusPriority").value = "all";
    document.getElementById("focusScope").value = "all";
    renderPage();
  });

  document.getElementById("exportWeekly").addEventListener("click", () => {
    const text = generateWeeklyReview();
    downloadText("weekly-executive-review.txt", text);
  });
}

function renderNav() {
  const nav = document.getElementById("nav");
  const pages = [
    ["dashboard", "Executive Dashboard"],
    ...state.data.pillars.map((p) => [`pillar:${p.id}`, p.name]),
    ["stakeholders", "Stakeholder Map"],
    ["meeting", "Meeting Prep Generator"],
    ["decisions", "Decision Log"],
    ["artifacts", "Export Artifacts"],
  ];

  nav.innerHTML = "";
  pages.forEach(([id, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = state.page === id ? "active" : "";
    btn.addEventListener("click", () => {
      state.page = id;
      renderNav();
      renderPage();
    });
    nav.append(btn);
  });
}

function matchFocus(item) {
  const matchesScope = state.focusScope === "all" || item.pillar === state.focusScope;
  const priority = item.priority?.toLowerCase();
  const matchesPriority =
    state.focusPriority === "all" ||
    (state.focusPriority === "critical" && priority === "critical") ||
    (state.focusPriority === "high" && ["high", "critical"].includes(priority));
  return matchesScope && matchesPriority;
}

function searchHit(...vals) {
  if (!state.search) return true;
  return vals.join(" ").toLowerCase().includes(state.search);
}

function renderPage() {
  const content = document.getElementById("content");

  if (state.page === "dashboard") return renderDashboard(content);
  if (state.page.startsWith("pillar:")) return renderPillar(content, state.page.split(":")[1]);
  if (state.page === "stakeholders") return renderStakeholders(content);
  if (state.page === "meeting") return renderMeetingGenerator(content);
  if (state.page === "decisions") return renderDecisionLog(content);
  if (state.page === "artifacts") return renderArtifacts(content);
}

function renderDashboard(root) {
  const actions = state.data.actions.filter((a) => matchFocus(a) && searchHit(a.title, a.pillar, a.owner));
  const upcomingMeetings = state.data.meetings.filter((m) => searchHit(m.title, m.pillar, m.participants));
  const highRisks = state.data.risks.filter((r) => ["Critical", "High"].includes(r.severity) && searchHit(r.title, r.pillar));

  root.innerHTML = `
    <h2>Executive Dashboard</h2>
    <div class="grid two">
      <section class="card">
        <h3>Current Top Priorities</h3>
        ${actions
          .slice(0, 4)
          .map(
            (a) => `<div class="list-item"><strong>${a.title}</strong><span>${a.pillar} · ${a.priority} · due ${a.due}</span><small>${a.leverage}</small></div>`,
          )
          .join("")}
      </section>
      <section class="card">
        <h3>7-Day Next Actions</h3>
        ${actions
          .map(
            (a) => `<div class="list-item"><strong>${a.owner}</strong><span>${a.title}</span><small>${a.status}</small></div>`,
          )
          .join("")}
      </section>
    </div>
    <div class="grid two">
      <section class="card">
        <h3>Key Upcoming Meetings</h3>
        ${upcomingMeetings
          .map(
            (m) => `<div class="list-item"><strong>${m.date} · ${m.title}</strong><span>${m.participants}</span><small>${m.objective}</small></div>`,
          )
          .join("")}
      </section>
      <section class="card">
        <h3>High-Risk Blockers</h3>
        ${highRisks
          .map(
            (r) => `<div class="list-item"><strong>${r.severity}: ${r.title}</strong><span>${r.pillar}</span><small>Mitigation: ${r.mitigation}</small></div>`,
          )
          .join("")}
      </section>
    </div>
    <section class="card">
      <h3>Status by Pillar</h3>
      <div class="status-row">
        ${state.data.pillars.map((p) => `<div class="pill"><strong>${p.name}</strong><span>${p.status}</span></div>`).join("")}
      </div>
    </section>
  `;
}

function renderPillar(root, pillarId) {
  const pillar = state.data.pillars.find((p) => p.id === pillarId);
  const stakeholders = state.data.stakeholders.filter((s) => s.pillar === pillar.name);
  const actions = state.data.actions.filter((a) => a.pillar === pillar.name);

  root.innerHTML = `
    <h2>${pillar.name}</h2>
    <div class="card"><h3>Objective</h3><p>${pillar.objective}</p></div>
    <div class="card"><h3>Current Strategy</h3><p>${pillar.strategy}</p></div>
    <div class="grid two">
      <section class="card"><h3>Top Stakeholders</h3>${stakeholders
        .map((s) => `<div class="list-item"><strong>${s.name}</strong><span>${s.role}</span><small>Next move: ${s.nextMove}</small></div>`)
        .join("")}</section>
      <section class="card"><h3>Next Actions</h3>${actions
        .map((a) => `<div class="list-item"><strong>${a.title}</strong><span>${a.priority} · due ${a.due}</span><small>${a.leverage}</small></div>`)
        .join("")}</section>
    </div>
    <div class="grid two">
      <section class="card"><h3>Opportunities</h3>${pillar.opportunities
        .map((o) => `<div class="list-item"><span>${o}</span></div>`)
        .join("")}</section>
      <section class="card"><h3>Risks</h3>${pillar.risks.map((r) => `<div class="list-item"><span>${r}</span></div>`).join("")}</section>
    </div>
    <section class="card"><h3>Recent Developments</h3>${pillar.recentDevelopments
      .map((d) => `<div class="list-item"><span>${d}</span></div>`)
      .join("")}</section>
  `;
}

function renderStakeholders(root) {
  const filtered = state.data.stakeholders
    .filter((s) => (state.focusScope === "all" ? true : s.pillar === state.focusScope))
    .filter((s) => searchHit(s.name, s.role, s.notes, s.nextMove));

  root.innerHTML = `
    <h2>Stakeholder Map</h2>
    <section class="card table-wrap">
      <table>
        <thead>
          <tr><th>Name</th><th>Role</th><th>Pillar</th><th>Influence</th><th>Alignment</th><th>Next move</th><th>Notes</th></tr>
        </thead>
        <tbody>
          ${filtered
            .sort((a, b) => b.influence - a.influence)
            .map(
              (s) => `<tr><td>${s.name}</td><td>${s.role}</td><td>${s.pillar}</td><td>${s.influence}</td><td>${s.alignment}</td><td>${s.nextMove}</td><td>${s.notes}</td></tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </section>
    <section class="card"><h3>Donor/Prospect Categories</h3><p>${state.data.donorCategories.join(" · ")}</p></section>
  `;
}

function renderMeetingGenerator(root) {
  const options = state.data.pillars.map((p) => `<option value="${p.name}">${p.name}</option>`).join("");
  const stakeholderChecks = state.data.stakeholders
    .map((s) => `<label class="inline"><input type="checkbox" value="${s.id}"/> ${s.name} (${s.pillar})</label>`)
    .join("");

  root.innerHTML = `
    <h2>Meeting Prep Generator</h2>
    <section class="card">
      <label>Pillar <select id="briefPillar">${options}</select></label>
      <p>Select Stakeholders</p>
      <div class="checks">${stakeholderChecks}</div>
      <button id="generateBrief">Generate One-Page Brief</button>
      <pre id="briefOutput" class="output"></pre>
    </section>
  `;

  document.getElementById("generateBrief").addEventListener("click", () => {
    const pillar = document.getElementById("briefPillar").value;
    const ids = [...root.querySelectorAll('input[type="checkbox"]:checked')].map((c) => Number(c.value));
    const briefing = generateMeetingBrief(pillar, ids);
    document.getElementById("briefOutput").textContent = briefing;
    downloadText("meeting-brief.txt", briefing);
  });
}

function renderDecisionLog(root) {
  root.innerHTML = `
    <h2>Decision Log</h2>
    <section class="card">
      <form id="decisionForm" class="decision-form">
        <label>Date <input required name="date" type="date" /></label>
        <label>Decision <input required name="decision" /></label>
        <label>Rationale <textarea required name="rationale"></textarea></label>
        <label>Follow-up <input required name="followUp" /></label>
        <button type="submit">Add Decision</button>
      </form>
    </section>
    <section class="card">
      ${state.data.decisions
        .map(
          (d) => `<div class="list-item"><strong>${d.date} · ${d.decision}</strong><span>${d.rationale}</span><small>Follow-up: ${d.followUp}</small></div>`,
        )
        .join("")}
    </section>
  `;

  document.getElementById("decisionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    state.data.decisions.unshift({
      id: `D-${Date.now()}`,
      date: formData.get("date"),
      decision: formData.get("decision"),
      rationale: formData.get("rationale"),
      followUp: formData.get("followUp"),
    });
    saveData();
    renderPage();
  });
}

function renderArtifacts(root) {
  root.innerHTML = `
    <h2>Exportable Artifacts</h2>
    <div class="grid two">
      <section class="card"><h3>One-page Meeting Brief</h3><button data-template="brief">Download Template</button></section>
      <section class="card"><h3>Stakeholder Strategy Note</h3><button data-template="stakeholder">Download Template</button></section>
      <section class="card"><h3>Weekly Executive Review</h3><button data-template="weekly">Download Current</button></section>
      <section class="card"><h3>Concise Action Memo</h3><button data-template="memo">Download Template</button></section>
    </div>
  `;

  root.querySelectorAll("button[data-template]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = btn.dataset.template;
      const outputs = {
        brief: generateMeetingBrief(state.data.pillars[0].name, [1, 2]),
        stakeholder: generateStakeholderNote(),
        weekly: generateWeeklyReview(),
        memo: generateActionMemo(),
      };
      downloadText(`${t}-template.txt`, outputs[t]);
    });
  });
}

function generateMeetingBrief(pillarName, stakeholderIds) {
  const pillar = state.data.pillars.find((p) => p.name === pillarName);
  const stake = state.data.stakeholders.filter((s) => stakeholderIds.includes(s.id));
  const relatedActions = state.data.actions.filter((a) => a.pillar === pillarName).slice(0, 3);

  return `MEETING BRIEF\n\nPillar: ${pillarName}\nObjective: ${pillar.objective}\n\nStrategic Ask:\n- ${pillar.strategy}\n\nSelected Stakeholders:\n${stake.map((s) => `- ${s.name}: ${s.role} | Next move: ${s.nextMove}`).join("\n") || "- None selected"}\n\nCritical Risks:\n${pillar.risks.map((r) => `- ${r}`).join("\n")}\n\nRecommended Next Moves (7 days):\n${relatedActions.map((a) => `- ${a.title} (${a.owner}, due ${a.due})`).join("\n")}\n\nDecision Needed:\n- Confirm escalation path and owner accountability for the top action.`;
}

function generateStakeholderNote() {
  return `STAKEHOLDER STRATEGY NOTE\n\nPriority Stakeholders by Influence\n${state.data.stakeholders
    .sort((a, b) => b.influence - a.influence)
    .slice(0, 5)
    .map((s) => `- ${s.name} (${s.pillar}) | Alignment: ${s.alignment} | Next move: ${s.nextMove}`)
    .join("\n")}\n\nEngagement Principle:\n- Lead with time-bound asks, political upside, and measurable outcomes.`;
}

function generateWeeklyReview() {
  return `WEEKLY EXECUTIVE REVIEW\nDate: ${new Date().toISOString().slice(0, 10)}\n\nTop 4 Actions\n${state.data.actions.map((a) => `- [${a.priority}] ${a.title} | ${a.pillar} | due ${a.due}`).join("\n")}\n\nOpen High Risks\n${state.data.risks.filter((r) => r.status !== "Closed").map((r) => `- ${r.severity}: ${r.title} (${r.pillar})`).join("\n")}\n\nStrategic Questions for This Week\n- Which decision unlocks cross-pillar leverage fastest?\n- Which relationship must be moved from passive to active support?\n- Which blocker can be neutralized before it becomes public?`;
}

function generateActionMemo() {
  return `CONCISE ACTION MEMO\n\nThis week we prioritize moves that create irreversible commitments.\n\n1) Secure one flagship brand signal on deforestation-free beef.\n2) Sequence illegal beef evidence into legislative calendar.\n3) Translate bird campaign into bankable outcomes for lead donor.\n4) Lock Maya restoration language before election pressure hardens.\n\nOperating discipline:\n- One owner per critical action.\n- Explicit decision deadline.\n- Preemptive blocker mitigation.`;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

init();
