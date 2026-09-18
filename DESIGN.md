# Claimora Design System & Process

## Design Overview

Claimora is an AI-powered legal intelligence platform designed for qui tam attorneys and legal professionals. The design prioritizes clarity, accessibility, and trust—critical factors when handling sensitive legal cases.

**Design Philosophy:** Elegant simplicity + Legal rigor + AI transparency

---

## Design System

### Color Palette

#### Primary Colors
- **Teal (`#0d9488`)** - Trust, intelligence, legal authority
  - Used for CTAs, primary actions, key metrics
  - Conveys confidence and expertise
- **Navy (`#0a1628`)** - Professionalism, stability
  - Dark backgrounds for header and navigation
  - Creates visual hierarchy
- **White (`#ffffff`)** - Clarity, transparency
  - Content backgrounds
  - Ensures readability

#### Semantic Colors
- **Red (`#d4183d`)** - Error states, warnings, critical flags
- **Green (`#10b981`)** - Success, positive indicators, completed states
- **Amber/Yellow (`#f59e0b`)** - Warnings, caution, requires attention
- **Gray (`#6b7280`, `#9ca3af`)** - Secondary text, disabled states

### Typography

**Font Family:** Inter (System default fallback)

#### Type Scale
- **Display (52px)** - Page headings, hero section
  - Font weight: 700 (Bold)
  - Line height: 1.1
  - Use: H1, major announcements

- **Heading (36px)** - Section headings
  - Font weight: 700 (Bold)
  - Line height: 1.2
  - Use: H2, subsection titles

- **Subheading (24px)** - Card titles, feature names
  - Font weight: 600 (Semi-bold)
  - Line height: 1.3
  - Use: H3, component titles

- **Body (16px)** - Main content, descriptions
  - Font weight: 400 (Regular)
  - Line height: 1.6
  - Use: Paragraphs, UI labels

- **Small (14px)** - Secondary text, metadata
  - Font weight: 500 (Medium)
  - Line height: 1.5
  - Use: Captions, hints, timestamps

- **Xs (12px)** - UI annotations, badges
  - Font weight: 500 (Medium)
  - Use: Tags, status indicators

### Spacing Scale

8px base unit (Tailwind default)
- **xs**: 4px (tight spacing between elements)
- **sm**: 8px (component internal padding)
- **md**: 16px (default spacing between sections)
- **lg**: 24px (major section separation)
- **xl**: 32px (page-level spacing)
- **2xl**: 48px (hero section spacing)

### Component Library

#### Buttons
- **Primary** - Teal background, white text, 52px height (min-touch target)
  - Use: Main CTAs (Start Analysis, Continue, Submit)
  - Hover: Darker teal (`#0f766e`)
  
- **Secondary** - White background, dark border, dark text
  - Use: Alternative actions (Watch Demo, Cancel)
  - Hover: Light gray background
  
- **Tertiary** - Transparent, text-only
  - Use: Supplementary actions (Skip, Learn More)

#### Form Elements
- **Input Fields**
  - Border: 1px solid `#e5e7eb`
  - Focus: Teal ring (`focus:ring-2 focus:ring-[#0d9488]`)
  - Error: Red border with error icon and message
  - Padding: 12px (h-11)
  - Border radius: 8px
  
- **Validation**
  - Real-time feedback on blur
  - Clear error messages in red
  - Success indicators with checkmarks

#### Cards
- Border: 1px solid `#e5e7eb`
- Shadow: sm (subtle, not aggressive)
- Border radius: 12px (rounded but professional)
- Padding: 24-32px (breathing room)
- Hover: Slight shadow increase for interactivity

#### Dialog/Modal
- Backdrop: Semi-transparent dark overlay
- Card: White, rounded corners (20px)
- Close button: Top-right corner
- Focus trap: Keyboard navigation support
- ARIA labels for accessibility

---

## Design Decisions & Rationale

### 1. Hero Section Visual

**Decision:** Large gradient background + illustrated evidence flow diagram

**Rationale:**
- Gradient creates visual interest without being distracting
- Evidence flow diagram immediately communicates the product's core flow
- Large hero conveys confidence (important for legal product)
- Shows value proposition upfront

### 2. Evidence Heatmap Visualization

**Decision:** Color-coded intensity map showing FCA violation density

**Rationale:**
- Attorneys scan documents for evidence patterns
- Heatmap enables quick visual pattern recognition
- Color intensity = strength (intuitive to lawyers)
- Reduces cognitive load vs. tables or lists

### 3. ChatBot Mascot (Lex)

**Decision:** Teal circular character with animated scale-of-justice design

**Rationale:**
- Humanizes AI assistance (reduces anxiety about legal AI)
- Scale metaphor = legal expertise and balance
- Floating widget = always available, not intrusive
- Animated expressions (thinking, speaking, excited) = transparency into AI state
- Accessible: aria-labels for all states

### 4. Multi-Step Authentication Modal

**Decision:** Progressive disclosure (Google OAuth → email → optional details)

**Rationale:**
- Reduces friction for quick sign-ups
- Google OAuth builds trust (recognized provider)
- Progressive complexity matches user confidence building
- Optional fields don't block workflow

### 5. Case Strength Score (87%)

**Decision:** Single metric prominently displayed, not percentage

**Rationale:**
- Attorneys need one number to compare cases
- Percentage is familiar to legal professionals
- Supports decision-making ("Is this worth pursuing?")
- Breaks down into components (Falsity 92%, Scienter 84%, etc.)

### 6. Dark Header + Light Content

**Decision:** Navy header, white content area

**Rationale:**
- Dark header = authority and professionalism
- Light content = readability and focus
- High contrast = accessibility (WCAG AA compliant)
- Reduces eye strain during long research sessions

---

## User Research & Personas

### Primary User: Sarah, Senior Qui Tam Attorney
- **Age:** 45 | **Experience:** 15 years in FCA law
- **Goal:** Quickly assess case viability before investing 100+ hours
- **Pain points:** Manual evidence review is time-consuming, hard to track FCA elements
- **Needs:** Fast analysis, clear confidence scores, export-ready documentation

### Secondary User: James, Paralegal
- **Age:** 28 | **Experience:** 3 years legal support
- **Goal:** Organize case materials and support attorney decision-making
- **Pain points:** Drowning in document management, manual memo compilation
- **Needs:** Intuitive upload, organized results, memo generation

### Design Implications:
- Minimize required steps (attorneys value time)
- Show results in attorney-familiar format (legal memos)
- Build trust through transparency (show AI reasoning)
- Support collaboration (share results with teams)

---

## Design Process

### Phase 1: Research & Discovery
- Interviewed 8 qui tam attorneys about current workflow
- Mapped pain points: evidence organization, damage calculation, DOJ intervention odds
- Identified that case strength is the #1 decision criteria

### Phase 2: Wireframing
- Low-fidelity wireframes for 5 key flows:
  1. Onboarding / Welcome
  2. Evidence upload
  3. Analysis progress
  4. Results dashboard
  5. Memo generation
- Tested wireframes with 3 attorneys (iterative feedback)

### Phase 3: Visual Design
- High-fidelity mockups in Figma
- Design system tokens (colors, spacing, typography)
- Component library (buttons, cards, modals, inputs)
- Created 12+ UI states (hover, focus, error, loading)

### Phase 4: Prototyping & Validation
- Interactive Figma prototype with main user flows
- Tested with 5 target users (think-aloud protocol)
- Iterated on: evidence heatmap clarity, button placement, sign-up flow

### Phase 5: Development Handoff
- Figma → React components via design tokens
- Component storybook (Storybook.js)
- Code Connect mapping for design-to-code sync
- Maintained design system fidelity through Tailwind CSS

---

## Accessibility (A11y)

### WCAG 2.1 Compliance Target: AA

#### Color Contrast
- All text meets 4.5:1 contrast ratio for normal text
- 3:1 for large text (18pt+)
- Do not rely on color alone (icons + labels)

#### Keyboard Navigation
- All interactive elements focusable via Tab
- Focus indicators clearly visible (Teal ring)
- Logical tab order (left-to-right, top-to-bottom)
- Escape key closes modals and dropdowns

#### Screen Reader Support
- Semantic HTML: `<button>`, `<input>`, `<label>`, etc.
- ARIA labels for icon-only buttons: `aria-label="Close"`
- ARIA live regions for dynamic updates: `aria-live="polite"`
- Form labels associated with inputs: `htmlFor` attribute
- Error messages linked to inputs: `aria-describedby`

#### Motion & Animation
- Animations respect `prefers-reduced-motion` media query
- No flashing content (exceeds 3 flashes per second)
- Animations are decorative, not essential for understanding

#### Mobile & Touch
- Minimum touch target: 44x44px (WCAG guideline)
- All buttons meet this size
- Sufficient spacing between interactive elements
- Responsive design tested at 320px, 768px, 1024px breakpoints

---

## Design-to-Code Workflow

### Tools & Process
1. **Design**: Figma (design system, components, prototypes)
2. **Handoff**: Figma plugins → inspect mode for specifications
3. **Development**: React + Tailwind CSS (design tokens as CSS variables)
4. **Code Connect**: Figma ↔ React components bidirectional mapping
5. **QA**: Visual regression testing + accessibility audit

### Design System as Code
- Colors defined as Tailwind tokens (e.g., `bg-[#0d9488]`)
- Spacing uses 8px base unit (`gap-4` = 16px)
- Typography utility classes (`text-lg`, `font-semibold`)
- Component variants in component files (Button, Card, Modal)

### Maintaining Fidelity
- Regular design → dev syncs (weekly)
- Design tokens source of truth
- Component props match design system
- Visual regression tests on every PR

---

## Future Design Improvements

### Short Term (Next Sprint)
- [ ] Simplify sign-up form (reduce from 6 to 3 fields)
- [ ] Add dark mode support (attorneys work late nights)
- [ ] Mobile optimization for on-the-go case review

### Medium Term (Next Quarter)
- [ ] Design animation micro-interactions (loading states, transitions)
- [ ] Expand ChatBot personality (more natural language, legal jokes?)
- [ ] Add team collaboration features UI (comments, annotations)

### Long Term (Design Vision)
- [ ] Voice-based case analysis (accessibility + hands-free review)
- [ ] AR document overlay (visualize evidence on contracts)
- [ ] AI-powered design suggestions (color schemes, layouts optimized for comprehension)
- [ ] Multilingual UI (Spanish, Portuguese for diverse legal markets)

---

## Design Metrics & Success

### Usability Goals
- **Case analysis time:** <5 minutes (vs. 100+ hours manual)
- **User confidence score:** 8/10+ ("I trust this analysis")
- **Onboarding drop-off:** <10% (vs. industry 40%+)
- **Evidence heatmap clarity:** 9/10 (instantly understand concentration)

### Accessibility Metrics
- **WCAG 2.1 AA compliance:** 100%
- **Keyboard-only navigation:** 100% of flows
- **Screen reader compatibility:** Tested with NVDA, JAWS
- **Color contrast pass rate:** 100%

### Design System Metrics
- **Design-to-code accuracy:** 95%+ (visual regression testing)
- **Component reuse rate:** 80%+ (tokens used in 80% of styles)
- **Design review cycles:** <2 days (fast iteration)

---

## Design Inspiration & References

- **Legal tech products:** LexisNexis (clarity + authority)
- **Data visualization:** Tableau (intuitive charts without overload)
- **AI products:** ChatGPT (mascot personality, transparency)
- **Modern SaaS:** Stripe, Vercel (minimal, purposeful design)

---

## Conclusion

Claimora's design balances professionalism with accessibility. Every color, component, and interaction choice reflects the legal domain's need for clarity, trust, and rigor. The design system enables rapid iteration while maintaining brand consistency—critical as the product grows and new features launch.

**Design is not decoration; it's a strategic tool that helps lawyers make better decisions faster.**

---

*Last Updated: 2026-09-18 | Design System v1.0*
