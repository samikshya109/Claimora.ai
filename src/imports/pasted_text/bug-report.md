Severity 4 — fix before anyone touches this with a real case
Four of these five are trust failures, not usability failures. In a product that markets attorney–client privilege, that distinction matters more than usual.

C-01
The download button reports success without downloading anything
H1 Visibility
"Download case memo PDF" fires a success toast — "Case memo PDF downloaded successfully / Ready for attorney review and filing" — and produces no file. The user's only signal says the opposite of what happened.

MemoScreen.tsx:13
const handleDownload = () => {
  toast.success("Case memo PDF downloaded successfully", …);
};  // ← no file is generated

Either generate the file, or change the button to "Preview memo" and the toast to honest state. A false confirmation is worse than a disabled button, because the user walks away believing they have the memo.

C-02
Privileged case material is shared with third parties in one unconfirmed click
H3 Control · H5 Prevention
"Connect me with Law Firms" immediately returns "Connection request sent — we'll connect you with qualified law firms shortly." No confirmation step, no disclosure of which firms, what is sent, or whether the memo itself travels. This is the single most consequential action in the product and it has the lightest interaction cost.

Gate it behind a confirmation dialog that names exactly what is transmitted and to whom, with an explicit consent checkbox. Irreversible, privilege-adjacent actions need friction proportional to their consequence.

C-03
The sign-in form logs the password to the console in plaintext
Security
SignInModal.tsx:20
console.log("Sign in attempt:", { email, password });

Prototype or not, this pattern survives into production more often than anyone admits, and it writes credentials somewhere any browser extension or bystander can read.

Delete the line now, before it gets copied forward. Never log a credential object, even behind a dev flag.

C-04
Users are asked to agree to Terms and a Privacy Policy that do not exist
H10 Documentation
The sign-in modal reads "By continuing, you agree to our Terms of Service and Privacy Policy." All nine footer links — including Privacy Policy, Terms of Service and Disclaimer — are dead href="#" anchors. Consent to unreachable terms is not consent, and for a legal-sector product the three dead links are precisely the three that cannot be dead.

Ship real documents, or remove the consent sentence until you have them. Prioritise Privacy Policy, Terms and Disclaimer over Features/Pricing/Blog.

C-05
A keyword matcher dispenses specific legal procedural advice with no disclaimer in view
H9 Error recovery
The "FCA Case Assistant" answers with directives: "You should file your qui tam case under seal in federal district court," "I recommend: … 4) Consider filing under seal." It is an if/includes() chain over hardcoded strings. The memo panel's "not a substitute for legal advice" line sits outside the chat window and is never visible while chatting.

MemoScreen.tsx:40  getBotResponse() — 8 substring branches, then a generic fallback.
Unmatched questions return "Could you be more specific?" — indistinguishable to the user from a considered answer.

Put a persistent disclaimer inside the chat panel header, soften directive phrasing to informational ("Qui tam cases are generally filed under seal…"), and make the fallback admit it did not understand rather than deflect.

Severity 3 — high priority
S-01
The sign-in modal fails every dialog accessibility requirement
H4 Standards
Measured on the open modal: no role="dialog", no aria-modal, focus never moves off the trigger button, no focus trap, Escape does not close it, and the background is not scroll-locked. A keyboard or screen-reader user cannot reach or escape it.

activeElement after open → BUTTON "Sign In"  (still outside the modal)
Escape → modal stays open
body overflow → visible  (background scrolls behind)

The repo already ships components/ui/dialog.tsx — Radix Dialog, which provides all six behaviours for free. Swap the hand-rolled <div class="fixed inset-0"> for it. This is a delete-code fix, not a write-code fix.

S-02
"Search subpoena targets" is a dead button, rendered three times
H1 Visibility
It is the only call to action on the Gaps screen and the natural next step from every identified weakness. It has no onClick at all — clicking produces nothing, not even a toast.

GapsScreen.tsx:38
<button className="…bg-teal-600…">  ← no handler
  Search subpoena targets

Wire it, or replace with a "Coming soon" disabled state. Three identical dead buttons on your most action-oriented screen teaches users the UI is decorative.

S-03
Results bear no relationship to what was uploaded, and nothing says so
H2 Match to reality
I uploaded one 29-byte file called billing-record.txt. The analysis reported "Extracted 9,906 billing claims across 847 patients." The heatmap then listed six documents I never provided — billing_records.csv, internal_emails.txt, patient_charts.pdf, compliance_audit_2024.xlsx, medicare_remittance.csv, staff_training_docs.pdf.

Hardcoded data is entirely reasonable at this stage. The problem is that nothing on screen distinguishes demonstration from analysis, so a stakeholder in a demo will believe the numbers are real.

Add a persistent "Sample data — not derived from your upload" banner on Results, Heatmap, Gaps and Memo until the backend lands. It costs one component and protects every demo you give.

S-04
The FAQ promises memo editing that does not exist
H2 Match to reality
"Can I edit the generated memo before downloading it?" → "Yes. The memo is fully editable before you download it. You can adjust the language, add attorney notes, or remove any sections that are not relevant." The Memo screen has no edit affordance of any kind. For the target user — an attorney who will not file language they cannot revise — this is the feature the FAQ is selling hardest.

Either build a basic editable memo body, or rewrite the answer to describe the roadmap honestly.

S-05
Enter does not send in the chat input
H4 Standards
Typing a question and pressing Enter leaves the text sitting in the field. The send button works. The handler uses React's deprecated onKeyPress, which no longer fires reliably in React 18.

MemoScreen.tsx:305
onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}

Switch to onKeyDown. Enter-to-send is muscle memory in any chat UI; silently dropping it reads as the app being broken.

S-06
Header controls collide at 375px
H8 Aesthetic
On the post-upload screens the "Add Files" button overlaps the Claimora wordmark, and both it and "Sign In" wrap onto two lines inside a single-line header bar. The logo — the user's orientation anchor and home affordance — is the element being covered.

Below ~640px, collapse "Add Files" to its + icon with an aria-label, or drop the wordmark to the mark alone.

S-07
Sign-in has three different feedback languages and no resulting state
H4 Consistency
Empty submit triggers a native browser validation bubble. Successful submit fires a native alert(). Everywhere else in the app, feedback is a styled Sonner toast. And after "signing in," the header still reads "Sign In" — there is no account state, avatar, or sign-out.

Replace alert() with a toast, add inline field validation in the app's own visual language, and reflect signed-in state in the header — even if the auth itself stays mocked.

Severity 2 — worth scheduling
M-01
No orientation within the seven-screen flow
H1 Visibility
The landing page promises "4 simple steps," then the app provides no step indicator, breadcrumb, or progress marker on any screen. Users cannot tell how far along they are or how much remains — and the seven screens do not map onto the four advertised steps.

A thin stepper in the header (Upload · Analyse · Review · Memo) reusing the landing page's own four-step model.

M-02
Scroll position carries across route changes
H4 Standards
Navigating Heatmap → Gaps dropped me into the middle of the Gaps page; the heading and summary were above the fold and I never saw them. React Router does not restore scroll by default.

A ScrollToTop effect on useLocation().pathname in the router root.

M-03
A <style> tag is nested inside the <h1>
H4 Standards
The page's primary heading computes an accessible name beginning with raw CSS — a screen reader announces the media query before the headline.

WelcomeScreen.tsx:46
<h1 …>
  <style dangerouslySetInnerHTML={{__html: `@media (min-width: 1024px) {…}`}} />
  <span className="hero-heading">AI-Powered Legal Intelligence…

Delete the injected style and the inline fontSize, and use Tailwind responsive classes: text-[46px] lg:text-[58px].

M-04
The browser tab still says "Agentic AI Project Design (Copy)"
H8 Aesthetic
The Figma Make default title survived into index.html, alongside no meta description and no favicon. It is the first thing a user sees in their tab strip and the first thing a stakeholder screenshots.

Set the title to "Claimora — FCA Case Analysis", add a description, add a favicon. Also rename the package from @figma/my-make-file.

M-05
No landmark structure
H4 Standards
Zero <main> elements, zero <nav> elements, no skip link. Screen-reader users must traverse the full header and hero on every screen to reach content. Heading hierarchy is otherwise clean (one h1, sensible h2/h3 nesting).

Wrap page content in <main>, mark the footer link groups as <nav>, add a skip-to-content link.

M-06
Every route is reachable directly with no session
H5 Prevention
/results, /heatmap, /gaps and /memo all render complete case findings on a cold load with nothing uploaded. Combined with S-03, a first-time visitor can land on a fully populated "case memo" having submitted nothing.

Redirect to /upload when no analysis exists in state, once real state is wired.

M-07
The heatmap is described as interactive but is static
H2 Match to reality
The README calls it an "interactive visualization." The accessibility tree for the whole screen contains exactly one interactive element — the bottom CTA. No cell is hoverable, focusable or clickable. The obvious affordance — click a cell to see which passages in that document support that element — is the feature users will reach for first.

Make cells focusable buttons opening a document-by-element detail panel. At minimum, add a hover tooltip.

M-08
Four different claims about how long analysis takes
H4 Consistency
The hero CTA says "2–5 minute analysis time," the stats band says "5 min average," the memo header says "generated in 90 seconds," and the actual run completed in roughly six seconds.

Pick one number and use it everywhere, or make the memo report the real elapsed time.

Severity 1 — cosmetic
Finding	Where
A .txt file is given an envelope icon in the uploaded-files list	Upload
Memo date hardcoded to "April 5, 2026" rather than generation date	Memo
"Watch Demo" scrolls to a static "How It Works" text section — no demo or video	Welcome
"100% Confidential & Secure" is an absolute claim no product can make	Welcome
Accordion triggers set outline: none, leaving an underline as the only focus cue; other controls rely on the browser default ring rather than a designed one	Global
The legal disclaimer on the memo is the smallest, lowest-contrast text on the screen	Memo
Build and repo sanity check
The app compiles and runs cleanly. The surrounding project scaffolding is where the drift is.

Check	Result	Note
Production build	PASS	1.04s · 378 KB JS (115 KB gzip) · 106 KB CSS
Console errors	PASS	None across the full walkthrough
Horizontal overflow at 375px	PASS	Wide table correctly isolated in its own scroll container
TypeScript	ABSENT	No tsconfig.json, typescript not installed — .tsx types are stripped, never checked. README claims "TypeScript 5.x"
Lint / test / typecheck scripts	ABSENT	Only dev and build exist
README accuracy	DRIFT	Documents pnpm run preview (no such script) and an MIT LICENSE file (not present)
UI component usage	BLOAT	48 shadcn/Radix components shipped; exactly one (accordion) is imported
Dependency weight	BLOAT	MUI + Emotion, Recharts, react-slick, react-dnd, Embla all installed and unused — tree-shaken from the bundle, but they inflate install and lockfile
If you only do ten things
Ordered by consequence-per-hour, not by severity alone. The first five are cheap.

Delete the password
console.log
C-03 · 1 min
Switch chat
onKeyPress
→
onKeyDown
S-05 · 1 min
Fix the page
<title>
, add description and favicon
M-04 · 5 min
Add
ScrollToTop
on route change
M-02 · 10 min
Move the
<style>
out of the
<h1>
into Tailwind classes
M-03 · 10 min
Make the download button honest — generate the file or rename it
C-01 · 1 hr
Swap the hand-rolled modal for the Radix
Dialog
already in the repo
S-01 · 1 hr
Add the "sample data" banner to all four results screens
S-03 · 1 hr
Put a confirmation dialog in front of "Connect me with Law Firms"
C-02 · 2 hr
Write real Privacy Policy, Terms and Disclaimer pages
C-04 · varies
