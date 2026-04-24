# Rainforest Burger — ImageGen2 / Codex Prompt Pack

## 1) Master Creative Direction Prompt
Use this as the top-level direction for concept art and page moodboards.

```text
Create a premium, cinematic scrollytelling landing page visual system for “Rainforest Burger,” inspired by the composition language of a luxury Swiss watchmaker parallax experience.

Core metaphor:
Replace watch components with a “Food-to-Forest Engine” made of policy, product, funding, safeguards, and verification modules that visually assemble as the user scrolls.

Aesthetic:
- Traditional yet modern
- Premium conservation finance + institutional sales credibility
- Dark rainforest greens, cream editorial typography, gold/copper accents
- Thin blueprint/technical drawing lines
- Soft atmospheric parallax depth
- Elegant shadows and restrained glow
- No cartoon style, no playful consumer-ad tone

Visual storytelling behavior:
- Each scroll chapter introduces one component module
- The current chapter paragraph alternates left/right placement
- Previous chapter text fades out as the next module animates in
- By the end, all modules lock into one complete Food-to-Forest Engine diagram

Guardrails:
- Do not imply every burger directly saves rainforest
- Do not use offset framing
- Avoid exaggerated certainty claims
- Keep claims conservative, institutional, and auditable

End state image:
A complete, assembled food-to-forest engine showing how institutional meal shifts can support durable, verified rainforest restoration finance over time.
```

---

## 2) Asset Generation Base Prompt (Reusable)
Use this for each standalone visual object.

```text
Transparent PNG (or SVG-like transparent object), centered composition, no background, premium conservation-finance aesthetic, dark green and cream palette with subtle gold/copper accents, clean silhouette, high detail but web-ready readability, soft realistic shadow, suitable for layered parallax animation in a cinematic landing page.
```

---

## 3) Individual Asset Prompts
Generate each asset separately with transparent background.

### A1. Institutional Buyer Module
```text
Create a transparent visual module representing an institutional buyer ecosystem: one anchor buyer (e.g., university/health system icon), one foodservice operator, one Impossible product placement node, and one beef comparator node. Style as elegant technical-finance diagram object with premium materials and subtle blueprint line overlays. Palette: deep rainforest green, cream labels, muted gold accents. No background.
```

### A2. Impossible Product Module
```text
Create a transparent premium product module for Impossible burger supply in institutional channels: refined product silhouette, packaging cue, and a small data/pricing support panel motif. Keep it editorial, cinematic, and enterprise-facing, not consumer-fast-food style. Dark green + cream + copper accents, subtle shadow, no background.
```

### A3. External Environmental Value Payer Module
```text
Create a transparent module representing an external environmental value partner paying an environmental premium and/or restoration funding. Include institutional payment flow cues (arrows, ledger motif, governance stamp styling), but avoid crypto or speculative visuals. Premium conservation finance aesthetic, no background.
```

### A4. 5–10¢ Impact Match Module
```text
Create a transparent micro-funding module showing a capped 5–10 cent impact match applied only to incremental pilot burger units. Visual should communicate “capped,” “incremental,” and “pilot-limited” constraints via elegant technical markers and cap ring iconography. No exaggerated claims. No background.
```

### A5. Restricted Restoration Fund Module
```text
Create a transparent institutional fund module labeled conceptually as a restricted Restoration Fund with governance, ring-fencing, and disbursement controls. Include visual cues for 10,000-hectare restoration planning, community agreements, safeguards, maintenance, and MRV workflows. Premium legal-finance-meets-ecology style. No background.
```

### A6. Community Safeguards + MRV Module
```text
Create a transparent safeguards-and-MRV module combining community consent/agreements, grievance channels, field monitoring, and measurement-reporting-verification checkpoints. Style should feel rigorous, human-centered, and audit-ready. Elegant blueprint lines, restrained depth, no background.
```

### A7. Verified Rainforest Outcomes Module
```text
Create a transparent outcomes module representing verified rainforest restoration outcomes and conservative reporting, with long-term payment streams beginning around Year 4. Include timeline cues and verification seals, but avoid guaranteed-credit language. Premium conservation accounting aesthetic, no background.
```

### A8. Phase 2 DSER Scale Module
```text
Create a transparent Phase 2 innovation module for DSER methodology development and broader scaling only after pilot proof. Visual cues: staged unlock, methodology blueprint, expanded network map, “proof first, then scale” logic. Keep tone institutional and cautious, not hype-driven. No background.
```

---

## 4) Scroll Chapter Copy (Alternating Paragraphs)
Use these as chapter text blocks while modules animate into place.

### Chapter 1 (Left)
The wedge starts with institutional sales: one Impossible product, one anchor buyer, one operator, and one beef comparator. This creates a practical decision frame inside real procurement systems where menu shifts can be measured conservatively.

### Chapter 2 (Right)
An external environmental value partner contributes the environmental premium and/or restoration funding, separating sustainability value from cafeteria budget constraints and enabling disciplined pilot design.

### Chapter 3 (Left)
Impossible supplies product plus pricing/data and co-sell support, alongside a capped 5–10¢ impact match tied only to incremental pilot units. The structure is intentionally bounded to preserve credibility and cost control.

### Chapter 4 (Right)
Funds flow into a restricted, governed Restoration Fund used for 10,000-hectare restoration planning, community safeguards and agreements, ongoing maintenance, and MRV—built for oversight, not marketing optics.

### Chapter 5 (Left)
As verified outcomes accumulate, long-term payments can begin around Year 4. Reporting remains conservative and evidence-led, with no assumption that every individual meal maps to a direct rainforest outcome.

### Chapter 6 (Right)
Only after proof, Phase 2 develops DSER methodology and broader scaling pathways. The result is a complete Food-to-Forest Engine designed to turn everyday institutional meals into durable restoration finance.

---

## 5) Claims Guardrail Block (For all copy variants)

### Preferred language
- supports verified rainforest restoration
- designed to replace beef in institutional menus
- capped impact match on incremental pilot units
- conservative reporting

### Avoid language
- carbon neutral
- offsets your meal
- every burger saves rainforest
- guaranteed Scope 3 credit

---

## 6) Codex Build Prompt (for implementation handoff)
Use this when asking Codex to build the page.

```text
Build a premium parallax scrollytelling landing page for Rainforest Burger using React + Tailwind (or Next.js app router if available). Create a dark rainforest cinematic theme with cream editorial text and subtle copper accents.

Implement 6 scroll chapters where each chapter:
1) animates in a new module of the Food-to-Forest Engine,
2) places narrative text alternating left/right,
3) fades previous paragraph as new one becomes active,
4) preserves already-assembled modules on screen.

Modules to include as transparent layered assets:
- Institutional sales wedge (buyer/operator/product/beef comparator)
- External value payer
- Impossible supply + support node
- Capped 5–10¢ impact match (incremental pilot units only)
- Restricted Restoration Fund (governance/safeguards/MRV/10,000 ha)
- Verified outcomes + Year 4 long-term payment logic
- Phase 2 DSER scale module (proof-first unlock)

Interaction requirements:
- Smooth parallax depth (multiple z-layers)
- Subtle scale/opacity/translate transitions (no aggressive motion)
- Sticky central assembly canvas on desktop
- Accessible reduced-motion fallback
- Mobile-responsive stacked layout

Tone and compliance:
- Premium institutional conservation-finance voice
- No “every burger saves rainforest” claim
- No offset framing
- Conservative, auditable language

Deliver:
- Componentized section architecture
- Placeholder asset slots with filenames
- Animation timeline comments for future tuning
- Clean, production-ready code style
```
