import { useState, useEffect } from "react";
import { X, Upload, Cpu, BarChart3, FileText, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

// ─── Inline mini Lex mascot for onboarding ────────────────────────────────────

function OnboardingMascot({ excited = false, size = 56 }: { excited?: boolean; size?: number }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <defs>
          <radialGradient id="ob-head" cx="38%" cy="30%" r="72%">
            <stop offset="0%"   stopColor="#2dd4bf" />
            <stop offset="55%"  stopColor="#0d9488" />
            <stop offset="100%" stopColor="#083344" />
          </radialGradient>
        </defs>
        {excited && <circle cx="50" cy="50" r="48" fill="#0d9488" opacity="0.18" className="animate-ping" />}
        <circle cx="50" cy="50" r="44" fill="url(#ob-head)" />
        <rect x="48" y="14" width="4" height="24" rx="2" fill="rgba(255,255,255,0.55)" />
        <polygon points="50,8 43,17 57,17" fill="rgba(255,255,255,0.75)" />
        <rect x="16" y="35" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
        <circle cx="27" cy={excited ? 43 : 47} r="11" fill="white" opacity="0.95" />
        <circle cx="27" cy={excited ? 43 : 47} r="6"  fill="#0d9488" />
        <circle cx="29" cy={excited ? 41 : 45} r="2.5" fill="white" />
        <circle cx="73" cy={excited ? 43 : 47} r="11" fill="white" opacity="0.95" />
        <circle cx="73" cy={excited ? 43 : 47} r="6"  fill="#0d9488" />
        <circle cx="75" cy={excited ? 41 : 45} r="2.5" fill="white" />
        {excited
          ? <path d="M33 66 Q50 80 67 66" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
          : <path d="M38 68 Q50 76 62 68" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        }
        {excited && (
          <>
            <path d="M84 16 L85.5 12 L87 16 L91 17.5 L87 19 L85.5 23 L84 19 L80 17.5 Z" fill="#fbbf24" opacity="0.95" />
            <path d="M13 72 L14 70 L15 72 L17 73 L15 74 L14 76 L13 74 L11 73 Z" fill="#fbbf24" opacity="0.9" />
          </>
        )}
      </svg>
      <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white block" />
    </div>
  );
}

// ─── Steps data ────────────────────────────────────────────────────────────────

interface Step {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  body: string;
  mascotExcited?: boolean;
}

const STEPS: Step[] = [
  {
    icon: <Sparkles className="w-7 h-7 text-[#0d9488]" />,
    iconBg: "bg-teal-50",
    title: "Welcome to Claimora",
    body: "I'm Lex, your FCA intelligence assistant. I'm here to help you build the strongest possible qui tam case. Let me show you how.",
    mascotExcited: true,
  },
  {
    icon: <Upload className="w-7 h-7 text-[#2563eb]" />,
    iconBg: "bg-blue-50",
    title: "Upload your evidence",
    body: "Drop in billing records, internal emails, EHR files, compliance audits, anything that could support your case. Claimora handles CSV, PDF, TXT, EML, and more.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-amber-600" />,
    iconBg: "bg-amber-50",
    title: "Five AI agents get to work",
    body: "Our specialized agents parse documents, detect falsity, analyze intent (scienter), calculate damages, and compile a court-ready memo. All in under two minutes.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-[#0d9488]" />,
    iconBg: "bg-teal-50",
    title: "See exactly where you stand",
    body: "Get an overall case strength score, a per-element breakdown (Falsity · Scienter · Materiality · Causation), and an evidence heatmap showing which documents carry the most weight.",
  },
  {
    icon: <FileText className="w-7 h-7 text-[#6b7280]" />,
    iconBg: "bg-gray-50",
    title: "Close gaps, generate your memo",
    body: "Claimora flags exactly what's missing and why it matters, then generates a court-ready case memo you can share directly with a qui tam attorney.",
  },
  {
    icon: <ChevronRight className="w-7 h-7 text-[#0d9488]" />,
    iconBg: "bg-teal-50",
    title: "You're ready to go",
    body: "Need help at any point? Ask me anything. I'm Lex and I know FCA law inside out. I'm always one click away in the bottom corner.",
    mascotExcited: true,
  },
];

// ─── Onboarding component ─────────────────────────────────────────────────────

export function Onboarding() {
  const [show,    setShow]    = useState(false);
  const [step,    setStep]    = useState(0);
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");

  const checkAndShow = () => {
    const done    = localStorage.getItem("claimora_onboarding_done");
    const needed  = localStorage.getItem("claimora_onboarding_needed");
    const signedIn = localStorage.getItem("isSignedIn") === "true";
    const user    = localStorage.getItem("claimora_user");

    if (!done && needed === "true" && signedIn) {
      const parsed = user ? JSON.parse(user) : null;
      if (parsed?.name) {
        const first = parsed.name.trim().split(" ")[0];
        setUserName(first);
        // Patch step 0 title with name
      }
      setShow(true);
      setTimeout(() => setVisible(true), 30);
    }
  };

  useEffect(() => {
    checkAndShow();
    window.addEventListener("claimora-user-changed", checkAndShow);
    return () => window.removeEventListener("claimora-user-changed", checkAndShow);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setTimeout(() => {
      setShow(false);
      localStorage.removeItem("claimora_onboarding_needed");
      localStorage.setItem("claimora_onboarding_done", "true");
    }, 250);
  };

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1);
    } else {
      dismiss();
    }
  };

  if (!show) return null;

  const current = STEPS[step];
  const isLast  = step === STEPS.length - 1;
  const isFirst = step === 0;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center px-4 transition-all duration-250 ${
        visible ? "bg-black/50 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome onboarding"
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-md transition-all duration-250 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Dismiss */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#6b7280] p-1.5 rounded-lg hover:bg-[#f3f4f6] transition-colors z-10"
          aria-label="Skip onboarding"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top teal bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0d9488] to-teal-400 rounded-t-2xl">
          <div
            className="h-full bg-[#0d9488] rounded-t-2xl transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        <div className="px-8 pt-7 pb-6">
          {/* Mascot + step icon row */}
          <div className="flex items-start justify-between mb-6">
            <OnboardingMascot excited={current.mascotExcited} size={60} />
            <div className={`${current.iconBg} rounded-2xl p-4 shadow-sm`}>
              {current.icon}
            </div>
          </div>

          {/* Text */}
          <div className="mb-7">
            <h2 className="text-xl font-bold text-[#111827] mb-2 tracking-tight">
              {isFirst && userName
                ? `Welcome, ${userName}!`
                : current.title}
            </h2>
            <p className="text-[#374151] leading-relaxed text-sm sm:text-base">
              {isFirst && userName
                ? `I'm Lex, your FCA intelligence assistant. I'm here to help you build the strongest possible qui tam case. Let me show you how it works.`
                : current.body}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              onClick={dismiss}
              className="text-sm text-[#9ca3af] hover:text-[#6b7280] transition-colors font-medium"
            >
              Skip tour
            </button>

            <div className="flex items-center gap-4">
              {/* Step dots */}
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={`rounded-full transition-all ${
                      i === step
                        ? "w-5 h-2 bg-[#0d9488]"
                        : i < step
                        ? "w-2 h-2 bg-teal-300"
                        : "w-2 h-2 bg-[#e5e7eb]"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                {isLast ? "Get started" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
