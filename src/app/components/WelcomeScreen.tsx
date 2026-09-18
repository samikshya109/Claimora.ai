import { useNavigate } from "react-router";
import { Sparkles, FileSearch, Target, TrendingUp, ArrowRight, Shield, Lock, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SignInModal } from "./SignInModal";
import { ChatBot } from "./ChatBot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import claimoraLogo from "figma:asset/c0a320565bff3ba8b0fb7e5dd61bba975bfa3ff1.png";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignIn = () => {
    localStorage.setItem('isSignedIn', 'true');
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header
          className="bg-[#0a1628] text-white sticky top-0 z-50 shadow-lg"
          style={{ paddingTop: 'var(--sat)' }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ minHeight: 44 }}
              aria-label="Claimora home"
            >
              <img
                src={claimoraLogo}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-semibold text-base sm:text-lg tracking-tight">Claimora</span>
            </button>
            <button
              onClick={() => setIsSignInModalOpen(true)}
              className="text-sm hover:bg-white/10 transition-colors px-3 sm:px-4 border border-white/30 rounded-lg font-semibold"
              style={{ minHeight: 44 }}
            >
              Sign In
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#1a2642] text-white px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                Trusted by qui tam attorneys nationwide
              </div>
              <h1
                className="font-bold text-[28px] sm:text-[40px] lg:text-[52px] tracking-tight"
                style={{ lineHeight: '1.1' }}
              >
                AI-powered legal intelligence for{" "}
                <span className="text-teal-400">False Claims Act</span> cases
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Turn weeks of case review into minutes. Claimora examines your evidence, maps FCA violations, calculates damages, and builds court-ready memos so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => navigate("/upload")}
                  className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-6 sm:px-8 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  style={{ minHeight: 52 }}
                >
                  Start your analysis
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto border border-white/40 bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                  style={{ minHeight: 52 }}
                >
                  See how it works
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400 flex-shrink-0" aria-hidden="true" />
                  <span>Bank-grade encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-teal-400 flex-shrink-0" aria-hidden="true" />
                  <span>Attorney-client privilege</span>
                </div>
              </div>
            </div>

            {/* Hero visual — desktop only */}
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="bg-white rounded-xl p-5 shadow-xl">
                  <div className="space-y-3">
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-red-500 rounded-lg p-2 flex-shrink-0">
                          <FileSearch className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="h-2.5 bg-gray-800 rounded w-4/5 mb-2"></div>
                          <div className="h-1.5 bg-gray-400 rounded w-3/5 mb-1.5"></div>
                          <div className="h-1.5 bg-gray-400 rounded w-2/5"></div>
                          <div className="mt-3 flex gap-2">
                            <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">False Claim</div>
                            <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">FCA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-teal-400"></div>
                        <div className="bg-teal-500 rounded-full p-1.5">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                        <div className="w-0.5 h-4 bg-teal-400"></div>
                        <ArrowRight className="w-5 h-5 text-teal-400 rotate-90" />
                      </div>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#0d9488] rounded-full p-2 flex-shrink-0">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2.5 bg-teal-700 rounded w-3/4 mb-2"></div>
                          <div className="h-1.5 bg-teal-500 rounded w-1/2 mb-1.5"></div>
                          <div className="flex items-center gap-2 mt-2">
                            <Shield className="w-3.5 h-3.5 text-teal-600" />
                            <div className="h-1.5 bg-teal-400 rounded w-2/5"></div>
                          </div>
                        </div>
                        <div className="bg-green-500 rounded-full p-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-[36px] font-bold text-[#111827] mb-3 tracking-tight">
                Built for whistleblower attorneys
              </h2>
              <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
                Pre-filing investigation tools that help you gauge case viability, calculate damages, and close evidence gaps before you file.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-[#e5e7eb]">
                <div className="bg-teal-50 rounded-lg p-3 w-fit mb-5">
                  <FileSearch className="w-6 h-6 text-[#0d9488]" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2">Smart analysis</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">
                  Our AI reads your evidence and flags every FCA element (falsity, scienter, materiality, causation) in minutes, not days.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-[#e5e7eb]">
                <div className="bg-teal-50 rounded-lg p-3 w-fit mb-5">
                  <Target className="w-6 h-6 text-[#0d9488]" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2">Gap detection</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">
                  Find weaknesses before you file. Get specific, actionable steps to strengthen evidence and raise your DOJ intervention odds.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-[#e5e7eb]">
                <div className="bg-teal-50 rounded-lg p-3 w-fit mb-5">
                  <TrendingUp className="w-6 h-6 text-[#0d9488]" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2">Damage calculation</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">
                  Get treble damages, per-claim penalties, and relator share estimates. All calculated against current FCA guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-[36px] font-bold text-[#111827] mb-3 tracking-tight">How it works</h2>
              <p className="text-base sm:text-lg text-[#6b7280]">
                From document upload to court-ready memo in four steps
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#e5e7eb]" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {[
                  { n: 1, title: 'Upload evidence', body: 'Drop in contracts, invoices, emails, medical records, or any case documents' },
                  { n: 2, title: 'AI analysis', body: 'Five specialized agents analyze FCA elements, extract entities, and calculate damages' },
                  { n: 3, title: 'Review insights', body: 'Explore evidence heatmaps, spot gaps, and check FCA element strength scores' },
                  { n: 4, title: 'Generate memo', body: 'Download a comprehensive, court-ready case memo with all findings' },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex flex-col items-center text-center group">
                    <div className="bg-[#0d9488] group-hover:bg-[#0f766e] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 shadow-sm transition-colors relative z-10">
                      {n}
                    </div>
                    <h3 className="font-bold text-lg text-[#111827] mb-2">{title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{body}</p>
                    {n < 4 && <div className="mt-4 w-10 h-0.5 bg-[#0d9488] rounded md:hidden" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <button
                onClick={() => navigate("/upload")}
                className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 sm:px-10 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                style={{ minHeight: 52 }}
              >
                Start your first analysis
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <p className="text-[#9ca3af] text-sm mt-4">
                No credit card required · Analysis takes 2 to 5 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0a1628] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2 tracking-tight">2-5 min</div>
                <div className="text-gray-400 text-sm">Average analysis time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2 tracking-tight">87%</div>
                <div className="text-gray-400 text-sm">Average case strength</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2 tracking-tight">AES-256</div>
                <div className="text-gray-400 text-sm">Bank-grade encryption</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2 tracking-tight">24/7</div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-[36px] font-bold text-[#111827] mb-3 tracking-tight">
                Common questions
              </h2>
              <p className="text-base sm:text-lg text-[#6b7280]">
                Everything you need to know about using Claimora for qui tam case analysis
              </p>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border border-[#e5e7eb] overflow-hidden divide-y divide-[#f3f4f6]">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  What is this and who is it for?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Claimora is an AI-powered qui tam case analysis tool built for whistleblower attorneys and legal researchers. It automatically extracts entities, maps FCA violations, estimates damages, and generates case memos from your uploaded documents. In minutes instead of days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  When in a case should I use Claimora?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Best used at the pre-filing stage: after you've gathered initial documents but before filing the complaint. It helps you quickly assess whether the evidence supports a viable case, estimate potential damages, and spot gaps that need more discovery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  What types of documents can I upload?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Contracts, invoices, emails, medical billing records, government procurement documents, and other case files in PDF, Word, or text format. The more documents you include, the more complete the analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  How does the AI analysis work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Your documents are processed by four specialized AI agents in sequence: an entity extractor, a timeline builder, an FCA violation mapper, and a damage estimator. Each focuses on a specific part of the case and together they produce a full legal analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  Does this constitute legal advice?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  No. Claimora provides AI-assisted analysis to support attorney judgment. It is not a substitute for qualified legal counsel. All outputs must be reviewed by a licensed attorney before use in any legal proceeding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  How does it help with the government intervention decision?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  The FCA mapper and damage estimator outputs are structured to show what the DOJ looks for when deciding to intervene. Clear violation mapping and well-documented damages significantly raise the odds. Government intervention historically leads to much higher recovery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  Can it assess whether fraud meets the materiality standard?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Partially. The FCA mapper flags claims that appear to meet materiality criteria based on your documents, helping you build that element before filing. A full materiality analysis always requires attorney judgment against the specifics of your case.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  How accurate is the damage estimate?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  The estimate uses patterns from your documents cross-referenced against FCA penalty guidelines (treble damages plus per-claim penalties). It is an AI-assisted estimate to support attorney judgment, not a substitute for formal legal analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  What does the heatmap show?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  The heatmap shows where FCA violations are concentrated across your documents: which contracts, time periods, and entities carry the highest risk exposure. It helps you see at a glance where to focus your legal arguments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  What kinds of gaps does the analysis flag?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Missing evidence, undocumented time periods, entities with incomplete records, and areas where additional discovery could strengthen the case before filing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  Is Claimora secure enough for confidential legal documents?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Yes. All uploads are encrypted in transit and at rest using AES-256. We implement bank-grade security and strict data isolation. For enterprise security requirements, reach out about a private deployment option.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  How long does the analysis take?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Most analyses finish in 2 to 5 minutes depending on the number and size of documents. You can watch each AI agent's progress in real time on the analysis screen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border-0">
                <AccordionTrigger className="px-6 text-base font-semibold text-[#111827] hover:bg-[#f9fafb] py-5">
                  Can I edit the generated memo before downloading?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#374151] leading-relaxed">
                  Yes. The Memo screen has an edit mode where you can modify the text before downloading. For full formatting control (headings, annotations, exhibits) open the file in your word processor or legal drafting tool before filing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0a1628] to-[#1a2642] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-[36px] font-bold mb-4 tracking-tight">
              Ready to build a stronger case?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Join whistleblower attorneys who use Claimora to get clarity before they file.
            </p>
            <button
              onClick={() => navigate("/upload")}
              className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 sm:px-10 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              style={{ minHeight: 52 }}
            >
              Upload your evidence
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <p className="text-gray-400 text-sm mt-5">
              No credit card required · Secure and confidential · 2-5 min setup
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a1628] text-gray-400 px-4 sm:px-8 py-10 sm:py-16 border-t border-[#1a2642]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              <div>
                <div className="flex items-center gap-2 text-white mb-5">
                  <img src={claimoraLogo} alt="Claimora" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
                  <span className="font-semibold text-lg tracking-tight">Claimora</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  AI-powered legal intelligence for False Claims Act cases.
                </p>
              </div>
              <nav aria-label="Product links">
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Security</a></li>
                </ul>
              </nav>
              <nav aria-label="Company links">
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                </ul>
              </nav>
              <nav aria-label="Legal links">
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-teal-400 transition-colors">Disclaimer</a></li>
                </ul>
              </nav>
            </div>
            <div className="border-t border-[#1a2642] pt-8 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2026 Claimora. Built for legal professionals who value precision.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSignIn={handleSignIn}
      />

      <ChatBot />
    </>
  );
}
