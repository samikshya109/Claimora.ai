import { useState, useRef, useEffect, useCallback } from "react";
import {
  X, Send, Mic, Volume2, VolumeX, Phone,
  CheckCircle2, ChevronRight, RotateCcw,
  Paperclip, Image as ImageIcon, FileText, XCircle,
} from "lucide-react";
import { toast } from "sonner";

// ─── Types ────────────────────────────────────────────────────────────────────

type MascotState = "idle" | "thinking" | "speaking" | "excited";

interface AttachmentFile {
  id: string;
  name: string;
  size: number;
  kind: "image" | "file";
  dataUrl?: string;
}

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  suggestions?: string[];
  attachments?: AttachmentFile[];
}

// ─── Lex mascot ───────────────────────────────────────────────────────────────
// Visual metaphor: the face IS the scales of justice.
// Eyes = scale pans hanging from a horizontal crossbar; fulcrum rises to the top.

export function LexMascot({ state, size = 44 }: { state: MascotState; size?: number }) {
  const isThinking = state === "thinking";
  const isExcited  = state === "excited";
  const isSpeaking = state === "speaking";

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size, overflow: "visible" }}
      >
        <defs>
          <radialGradient id="lg-head" cx="38%" cy="30%" r="72%">
            <stop offset="0%"   stopColor="#2dd4bf" />
            <stop offset="55%"  stopColor="#0d9488" />
            <stop offset="100%" stopColor="#083344" />
          </radialGradient>
          <radialGradient id="lg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0d9488" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow ring when excited */}
        {isExcited && (
          <circle cx="50" cy="50" r="48" fill="url(#lg-glow)" className="animate-ping" />
        )}

        {/* Face */}
        <circle cx="50" cy="50" r="44" fill="url(#lg-head)" />

        {/* Fulcrum pole */}
        <rect x="48" y="14" width="4" height="24" rx="2" fill="rgba(255,255,255,0.55)" />
        {/* Fulcrum tip */}
        <polygon points="50,8 43,17 57,17" fill="rgba(255,255,255,0.75)" />

        {/* Scale crossbar */}
        <rect x="16" y="35" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />

        {/* Hanging chains */}
        <line x1="27" y1="38" x2="27" y2="44" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <line x1="73" y1="38" x2="73" y2="44" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* Left eye = left pan */}
        <circle cx="27" cy={isExcited ? 43 : 47} r="11" fill="white" opacity="0.96" />
        <circle cx="27" cy={isExcited ? 43 : 47} r="6"  fill="#0d9488" />
        <circle cx="29" cy={isExcited ? 41 : 45} r="2.5" fill="white" />
        {isThinking && (
          <circle cx="27" cy={47} r="3" fill="#14b8a6" opacity="0.7" className="animate-ping" />
        )}

        {/* Right eye = right pan */}
        <circle cx="73" cy={isExcited ? 43 : 47} r="11" fill="white" opacity="0.96" />
        <circle cx="73" cy={isExcited ? 43 : 47} r="6"  fill="#0d9488" />
        <circle cx="75" cy={isExcited ? 41 : 45} r="2.5" fill="white" />

        {/* Mouth */}
        {isThinking ? (
          <path d="M38 68 Q44 65 50 68 Q56 71 62 68"
            stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        ) : isExcited ? (
          <path d="M33 66 Q50 80 67 66"
            stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
        ) : isSpeaking ? (
          <ellipse cx="50" cy="69" rx="9" ry="4.5" fill="rgba(255,255,255,0.9)" />
        ) : (
          <path d="M38 68 Q50 76 62 68"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        )}

        {/* Thinking dots */}
        {isThinking && (
          <>
            <circle cx="40" cy="85" r="3" fill="rgba(255,255,255,0.85)"
              style={{ animation: "bounce 1s infinite 0ms" }} />
            <circle cx="50" cy="85" r="3" fill="rgba(255,255,255,0.85)"
              style={{ animation: "bounce 1s infinite 150ms" }} />
            <circle cx="60" cy="85" r="3" fill="rgba(255,255,255,0.85)"
              style={{ animation: "bounce 1s infinite 300ms" }} />
          </>
        )}

        {/* Sparkles (excited / speaking) */}
        {(isExcited || isSpeaking) && (
          <>
            <path d="M84 16 L85.5 12 L87 16 L91 17.5 L87 19 L85.5 23 L84 19 L80 17.5 Z"
              fill="#fbbf24" opacity="0.95" />
            <path d="M13 72 L14 70 L15 72 L17 73 L15 74 L14 76 L13 74 L11 73 Z"
              fill="#fbbf24" opacity="0.9" />
          </>
        )}
      </svg>

      {/* Online dot */}
      <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white block" />
    </div>
  );
}

// ─── Typing indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <LexMascot state="thinking" size={28} />
      <div className="bg-white border border-[#e5e7eb] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
        <span className="w-2 h-2 bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

// ─── AI response engine ───────────────────────────────────────────────────────

interface BotResponse {
  text: string;
  suggestions: string[];
  mascotState: MascotState;
  triggerHumanAgent?: boolean;
}

function getBotResponse(message: string, priorCount: number): BotResponse {
  const q = message.toLowerCase();

  const wantsHuman = ["human", "lawyer", "attorney", "speak to", "talk to", "call me", "real person", "expert", "connect me"].some(k => q.includes(k));
  if (wantsHuman) {
    return {
      text: "Absolutely. I can connect you with a licensed qui tam attorney from our vetted network. They specialize in FCA cases, work on contingency (no upfront cost), and the first consultation is free. Want me to set that up?",
      suggestions: ["Yes, connect me now", "Tell me more first", "What does it cost?"],
      mascotState: "excited",
      triggerHumanAgent: true,
    };
  }

  if (q.includes("fca") || q.includes("false claim") || q.includes("what is")) {
    return {
      text: "The False Claims Act (FCA) is the government's primary tool against fraud, and one of the strongest whistleblower laws in the U.S. It lets private citizens (called relators) sue fraudsters on the government's behalf.\n\nIf the case wins, relators receive 15-30% of what the government recovers. Since 1986, FCA cases have recovered over $75 billion in fraud.",
      suggestions: ["What are the FCA elements?", "Am I protected from retaliation?", "What's my case strength?"],
      mascotState: "speaking",
    };
  }

  if (q.includes("element") || q.includes("falsity") || q.includes("scienter") || q.includes("materiali") || q.includes("causation")) {
    return {
      text: "Every FCA case must prove four elements:\n\n⚖ Falsity (92%): The claim submitted was false. Your case has 127 confirmed upcoding violations.\n\n⚖ Scienter (84%): The defendant knew. 43 internal emails prove this.\n\n⚖ Materiality (79%): The falsehood influenced government payment. This is your weakest link.\n\n⚖ Causation (88%): The false claim caused the government's loss. Medicare records confirm $2.99M paid.",
      suggestions: ["How do I fix the Materiality gap?", "How are damages calculated?", "What happens if I file?"],
      mascotState: "excited",
    };
  }

  if (q.includes("score") || q.includes("87") || q.includes("strength") || q.includes("strong") || q.includes("overall")) {
    return {
      text: "Your sample case scores 87% overall. That's strong territory. The DOJ's informal intervention threshold sits around 80%, so you're comfortably above it.\n\nThe single biggest opportunity: closing the Materiality gap from 79% to 85%+ would push your overall score past 90%, which is where settlement leverage becomes exceptional.\n\nWant to know exactly what it would take?",
      suggestions: ["Yes, how do I close that gap?", "What does DOJ intervention mean?", "How are damages calculated?"],
      mascotState: "excited",
    };
  }

  if (q.includes("materiali") || q.includes("gap") || q.includes("weak")) {
    return {
      text: "Materiality (79%) is your main gap. While your case proves the government paid false claims, it lacks explicit policy documents showing those claim types influence payment decisions.\n\nThe fix is targeted:\n1. Request CMS payment policy memos for your relevant CPT codes\n2. Obtain OIG advisory opinions on similar billing practices\n\nThis is a 2-3 week exercise, and one most qui tam attorneys handle routinely.",
      suggestions: ["What is an OIG advisory opinion?", "How do I subpoena CMS records?", "Talk to an attorney about this"],
      mascotState: "speaking",
    };
  }

  if (q.includes("damage") || q.includes("money") || q.includes("much") || q.includes("treble") || q.includes("share") || q.includes("recover")) {
    return {
      text: "FCA damages come in two parts:\n\n💰 Treble damages: Government recovers 3x the actual loss. Your base false claims = $997K, trebled to $2.99M.\n\n💰 Civil penalties: $13,946 per false claim x 9,906 claims = $138M in additional exposure.\n\nYour relator share (15-25% of recovery) puts your whistleblower payout between $748K and $1.25M, based on the sample data.",
      suggestions: ["When do I actually get paid?", "What affects my % of recovery?", "Can I stay anonymous?"],
      mascotState: "excited",
    };
  }

  if (q.includes("anonym") || q.includes("identity") || q.includes("protect") || q.includes("retali") || q.includes("fired") || q.includes("safe")) {
    return {
      text: "Yes, on both counts.\n\n🔒 Anonymity: Qui tam cases are filed under seal, keeping your identity hidden from the defendant during the entire DOJ investigation.\n\n🛡 Anti-retaliation: FCA Section 3730(h) makes employer retaliation illegal. If you're fired, demoted, or harassed for reporting fraud, you're entitled to reinstatement, double back pay, and attorney fees. Automatically.\n\nYour attorney can also advise on how to document workplace behavior during this period.",
      suggestions: ["How long does the seal last?", "What counts as retaliation?", "How do I document everything?"],
      mascotState: "speaking",
    };
  }

  if (q.includes("file") || q.includes("filing") || q.includes("process") || q.includes("next") || q.includes("steps")) {
    return {
      text: "Here's the qui tam roadmap:\n\n1. Retain a qui tam attorney (confidential)\n2. Attorney drafts complaint + disclosure statement\n3. File under seal in federal district court\n4. DOJ receives 60 days to investigate (usually extended to 1-3 years)\n5. DOJ decides whether to intervene\n6. ✅ If yes: government leads the case\n7. ❌ If no: you can proceed independently\n8. Settlement or trial, then recovery, then your share",
      suggestions: ["What is DOJ intervention?", "How do I find a qui tam attorney?", "What's in the disclosure statement?"],
      mascotState: "speaking",
    };
  }

  if (q.includes("timeline") || q.includes("long") || q.includes("year") || q.includes("how long")) {
    return {
      text: "Qui tam cases move slowly, by design. A realistic timeline:\n\n📅 Prep and filing: 1-3 months\n📅 DOJ seal period: 6 months to 3 years (avg around 18 months)\n📅 Intervention decision: up to 4 years\n📅 Post-intervention settlement: 1-2 years\n📅 Total: typically 3-5 years for government-intervened cases\n\nCases with your profile (87% strength, multi-million exposure) have strong intervention potential, which shortens the effective timeline.",
      suggestions: ["What if DOJ doesn't intervene?", "How do I prepare during the wait?", "What's my intervention likelihood?"],
      mascotState: "speaking",
    };
  }

  if (q.includes("doj") || q.includes("intervene") || q.includes("government")) {
    return {
      text: "DOJ intervention is a game-changer. When the government joins the case as co-plaintiff:\n\n✓ Defendants settle around 90% of the time\n✓ Recovery amounts are dramatically higher\n✓ You don't bear litigation costs\n\nYour case profile (87% strength, $330M in maximum exposure, clear evidence of systemic billing fraud) is well within the range that attracts DOJ attention. Cases like yours receive intervention at roughly double the average rate.",
      suggestions: ["How do I maximize my intervention odds?", "What does the DOJ look for?", "Talk to an attorney"],
      mascotState: "excited",
    };
  }

  if (q.includes("attorney") || q.includes("lawyer") || q.includes("find") || q.includes("hire") || q.includes("contingency")) {
    return {
      text: "Most qui tam attorneys work on contingency, so no upfront cost. They typically take 30-40% of your relator share as their fee. Given your estimated share of $748K-$1.25M, there's enough for a strong attorney to take your case seriously.\n\nWhat to look for:\n✓ FCA / qui tam specific experience\n✓ Prior DOJ intervention wins\n✓ Admitted in your federal district\n\nWant me to connect you with our vetted network?",
      suggestions: ["Yes, connect me with an attorney", "What questions should I ask them?", "How do I vet a qui tam attorney?"],
      mascotState: "excited",
      triggerHumanAgent: true,
    };
  }

  if (q.includes("cost") || q.includes("free") || q.includes("fee") || q.includes("pay")) {
    return {
      text: "Claimora's analysis is designed to give you a clear picture before you invest anything. And qui tam attorneys work on contingency, so no fees unless you win.\n\nThe real investment is time. Qui tam cases are long-term commitments, typically 3-5 years. But with an 87% case strength score and $748K+ in potential whistleblower share, the risk-reward here is compelling.",
      suggestions: ["How long before I see money?", "What do attorneys charge?", "Is my case worth pursuing?"],
      mascotState: "speaking",
    };
  }

  if (q.includes("seal") || q.includes("sealed") || q.includes("secret")) {
    return {
      text: "Filing under seal means the complaint and your identity are hidden from the defendant (and the public) while the DOJ investigates. Only you, your attorney, and the court know.\n\nThe seal can last anywhere from 60 days to several years. During this time, the DOJ is quietly building its case. You're not allowed to discuss the lawsuit publicly while it's sealed.",
      suggestions: ["When does the seal lift?", "What happens after the seal?", "Can the defendant find out anyway?"],
      mascotState: "speaking",
    };
  }

  // Greeting / intro
  if (priorCount === 0 || q.includes("hello") || q.includes("hi ") || q.includes("hey")) {
    return {
      text: "Good to meet you! I'm Lex, your FCA intelligence assistant. I'm trained on qui tam law, whistleblower protections, and FCA case analysis.\n\nYour sample case scores 87%. That's strong. Where would you like to start?",
      suggestions: ["What does 87% mean?", "Break down my evidence", "How are damages calculated?", "Am I protected?"],
      mascotState: "excited",
    };
  }

  return {
    text: "That's a great question. To give you the most useful answer, could you tell me a bit more? For instance, are you asking about the evidence analysis, the legal process, damages, or what happens next? I want to make sure I'm actually helpful here.",
    suggestions: ["Explain my case strength", "Walk me through the process", "How are damages calculated?", "Talk to an attorney"],
    mascotState: "idle",
  };
}

// ─── Human agent panel ────────────────────────────────────────────────────────

function HumanAgentPanel({ onClose, onSubmit }: { onClose: () => void; onSubmit: () => void }) {
  const [name, setName]       = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime]       = useState("");

  const attorneys = [
    { initials: "SM", name: "Sarah M., JD", spec: "DOJ whistleblower · 12 yrs", stat: "47 FCA wins" },
    { initials: "RK", name: "Robert K., JD", spec: "Healthcare fraud · 9 yrs",   stat: "31 FCA wins" },
  ];

  return (
    <div className="absolute inset-0 bg-white rounded-b-2xl flex flex-col z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Header */}
      <div className="bg-[#0a1628] px-5 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse block" />
            <span className="text-emerald-400 text-xs font-semibold">2 attorneys online</span>
          </div>
          <span className="text-white/30">·</span>
          <span className="text-white/60 text-xs">Avg. wait 18 min</span>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Close">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        <div>
          <h3 className="text-base font-bold text-[#111827] mb-1">Talk to a qui tam attorney</h3>
          <p className="text-sm text-[#6b7280] leading-relaxed">
            Free, confidential consultation. No obligation. Your case summary will be shared so they arrive prepared.
          </p>
        </div>

        {/* Available attorneys */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Available now</p>
          {attorneys.map(a => (
            <div key={a.initials} className="flex items-center gap-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-3">
              <div className="w-9 h-9 bg-[#0d9488] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{a.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#111827]">{a.name}</p>
                <p className="text-xs text-[#6b7280] truncate">{a.spec}</p>
              </div>
              <span className="text-xs text-[#0d9488] font-semibold bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full flex-shrink-0">{a.stat}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Request a callback</p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full h-10 px-3 border border-[#e5e7eb] rounded-lg text-sm text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Phone or email"
            value={contact}
            onChange={e => setContact(e.target.value)}
            className="w-full h-10 px-3 border border-[#e5e7eb] rounded-lg text-sm text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
          />
          <select
            value={time}
            onChange={e => setTime(e.target.value)}
            className="w-full h-10 px-3 border border-[#e5e7eb] rounded-lg text-sm text-[#111827] outline-none focus:ring-2 focus:ring-[#0d9488] bg-white"
          >
            <option value="">Best time to call</option>
            <option>Within the hour</option>
            <option>This afternoon</option>
            <option>Tomorrow morning</option>
            <option>Tomorrow afternoon</option>
          </select>
        </div>
      </div>

      <div className="p-4 border-t border-[#e5e7eb] flex-shrink-0">
        <button
          onClick={() => {
            if (!name.trim() || !contact.trim()) {
              toast.error("Please enter your name and contact info");
              return;
            }
            onSubmit();
          }}
          className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-lg font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
          style={{ minHeight: 44 }}
        >
          Request callback
          <ChevronRight className="w-4 h-4" />
        </button>
        <p className="text-center text-xs text-[#9ca3af] mt-2">Confidential · No obligation · Free consultation</p>
      </div>
    </div>
  );
}

// ─── Quick action chips ────────────────────────────────────────────────────────

const QUICK_ACTIONS = [
  "What's my case strength?",
  "How are damages calculated?",
  "Am I protected as a whistleblower?",
  "What happens after filing?",
  "Can I stay anonymous?",
];

// ─── Main ChatBot component ───────────────────────────────────────────────────

export function ChatBot() {
  const [isOpen,              setIsOpen]              = useState(true);
  const [mascotState,         setMascotState]         = useState<MascotState>("idle");
  const [messages,            setMessages]            = useState<Message[]>([{
    id: "0",
    role: "bot",
    text: "Hi there! I'm Lex, your FCA intelligence assistant. Ask me anything about your case, the qui tam process, whistleblower protections, or what comes next.\n\nYour sample case scores 87% overall. Want to dig into what that means?",
    suggestions: ["Yes, explain my 87% score", "Break down the FCA elements", "How much could I recover?", "Am I protected?"],
  }]);
  const [inputText,           setInputText]           = useState("");
  const [isTyping,            setIsTyping]            = useState(false);
  const [isRecording,         setIsRecording]         = useState(false);
  const [ttsEnabled,          setTtsEnabled]          = useState(false);
  const [showHumanAgent,      setShowHumanAgent]      = useState(false);
  const [agentRequested,      setAgentRequested]      = useState(false);
  const [unread,              setUnread]              = useState(0);
  const [voiceSupported,      setVoiceSupported]      = useState(false);
  const [showQuickActions,    setShowQuickActions]    = useState(true);
  const [pendingAttachments,  setPendingAttachments]  = useState<AttachmentFile[]>([]);

  const messagesEndRef  = useRef<HTMLDivElement>(null);
  const recognitionRef  = useRef<any>(null);
  const inputRef        = useRef<HTMLInputElement>(null);
  const fileInputRef    = useRef<HTMLInputElement>(null);
  const imageInputRef   = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setVoiceSupported("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setUnread(0);
  }, [isOpen]);

  const speakText = useCallback((text: string) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(
      text.replace(/[•⚖💰🔒🛡📅✓✗❌]/gu, "").replace(/\n+/g, ". ")
    );
    utt.rate = 0.93;
    utt.pitch = 1.05;
    utt.onstart = () => setMascotState("speaking");
    utt.onend   = () => setMascotState("idle");
    window.speechSynthesis.speak(utt);
  }, [ttsEnabled]);

  const addAttachment = useCallback((file: File) => {
    const isImage = file.type.startsWith("image/");
    const att: AttachmentFile = {
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      kind: isImage ? "image" : "file",
    };
    if (isImage) {
      const reader = new FileReader();
      reader.onload = e => {
        setPendingAttachments(prev => [...prev, { ...att, dataUrl: e.target?.result as string }]);
      };
      reader.readAsDataURL(file);
    } else {
      setPendingAttachments(prev => [...prev, att]);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files ?? []).forEach(addAttachment);
    e.target.value = "";
  }, [addAttachment]);

  const sendMessage = useCallback((text: string, attachments: AttachmentFile[] = []) => {
    const trimmed = text.trim();
    if (!trimmed && attachments.length === 0) return;
    if (isTyping) return;

    setShowQuickActions(false);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
      attachments: attachments.length > 0 ? attachments : undefined,
    }]);
    setPendingAttachments([]);
    setInputText("");
    setMascotState("thinking");
    setIsTyping(true);

    const userCount = messages.filter(m => m.role === "user").length;
    const delay = 850 + Math.random() * 950;

    setTimeout(() => {
      const resp = getBotResponse(trimmed, userCount);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: resp.text,
        suggestions: resp.suggestions,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      setMascotState(resp.mascotState);
      speakText(resp.text);
      if (!isOpen) setUnread(n => n + 1);
      if (resp.triggerHumanAgent) setTimeout(() => setShowHumanAgent(true), 1400);
      setTimeout(() => setMascotState("idle"), 3500);
    }, delay);
  }, [messages, isTyping, isOpen, speakText]);

  const handleSend = useCallback(() => {
    sendMessage(inputText, pendingAttachments);
    setInputText("");
  }, [sendMessage, inputText, pendingAttachments]);

  const startRecording = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("Voice input not supported in this browser"); return; }

    const rec = new SR();
    rec.continuous      = false;
    rec.interimResults  = true;
    rec.lang            = "en-US";
    rec.onstart  = () => setIsRecording(true);
    rec.onend    = () => setIsRecording(false);
    rec.onerror  = () => { setIsRecording(false); toast.error("Could not capture voice. Try again."); };
    rec.onresult = (e: any) => {
      const transcript = Array.from(e.results as SpeechRecognitionResultList)
        .map((r: SpeechRecognitionResult) => r[0].transcript).join("");
      setInputText(transcript);
      if ((e.results as SpeechRecognitionResultList)[e.results.length - 1].isFinal) {
        sendMessage(transcript);
      }
    };

    recognitionRef.current = rec;
    rec.start();
  }, [sendMessage]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }, []);

  const handleAgentSubmitted = () => {
    setAgentRequested(true);
    setShowHumanAgent(false);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: "bot",
      text: "Your callback request is in. A licensed qui tam attorney will reach out within 30 minutes. They'll have your case summary in hand so the conversation can start right away.\n\nIn the meantime, is there anything else you'd like to understand about your case?",
      suggestions: ["What should I prepare before the call?", "What questions should I ask?", "Remind me of my strongest evidence"],
    }]);
    toast.success("Callback requested", { description: "An attorney will reach out within 30 minutes" });
    setMascotState("excited");
    setTimeout(() => setMascotState("idle"), 3500);
  };

  const resetChat = () => {
    setMessages([{
      id: "0",
      role: "bot",
      text: "Hi again! I've cleared our conversation. What would you like to explore?",
      suggestions: ["What's my case strength?", "Walk me through the process", "How are damages calculated?", "Talk to an attorney"],
    }]);
    setShowQuickActions(true);
    setUnread(0);
  };

  const lastBotMsg = [...messages].reverse().find(m => m.role === "bot");

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-5 bg-[#0a1628] hover:bg-[#0d9488] text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-110 z-50 flex items-center justify-center group"
          style={{ bottom: "max(24px, calc(var(--sab) + 16px))", width: 64, height: 64 }}
          aria-label="Open Lex, FCA Assistant"
        >
          <LexMascot state={mascotState} size={56} />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-[#0a1628] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Ask Lex anything
          </span>
          {unread > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4183d] text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
              {unread}
            </span>
          )}
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed right-0 sm:right-5 left-0 sm:left-auto w-full sm:w-[400px] bg-white sm:rounded-2xl shadow-2xl border-t sm:border border-[#e5e7eb] flex flex-col z-50 overflow-hidden"
          style={{ bottom: 0, maxHeight: "min(700px, calc(100dvh - var(--sat) - 56px))" }}
          role="dialog"
          aria-label="Lex FCA Assistant"
        >
          {/* Header */}
          <div className="bg-[#0a1628] px-4 py-3 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <LexMascot state={mascotState} size={42} />
                <div>
                  <p className="text-white font-bold leading-none">Lex</p>
                  <p className="text-teal-400 text-xs mt-0.5">FCA Intelligence Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* TTS toggle */}
                <button
                  onClick={() => {
                    if (ttsEnabled) window.speechSynthesis?.cancel();
                    setTtsEnabled(!ttsEnabled);
                    toast.success(ttsEnabled ? "Voice responses off" : "Voice responses on");
                  }}
                  className={`p-2 rounded-lg transition-colors ${ttsEnabled ? "bg-teal-500/25 text-teal-300" : "text-white/45 hover:text-white hover:bg-white/10"}`}
                  aria-label={ttsEnabled ? "Turn off voice responses" : "Turn on voice responses"}
                  title="Toggle voice responses"
                >
                  {ttsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Connect to attorney */}
                <button
                  onClick={() => setShowHumanAgent(true)}
                  className="flex items-center gap-1.5 bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/30 text-teal-300 px-2.5 py-1.5 rounded-lg transition-colors text-xs font-semibold"
                  title="Talk to a real attorney"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Expert</span>
                </button>

                {/* Reset */}
                <button
                  onClick={resetChat}
                  className="text-white/45 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Clear chat"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/45 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-white/[0.07] border border-white/[0.12] rounded-lg px-3 py-1.5">
              <p className="text-xs text-white/55 leading-snug">
                <strong className="text-white/80">Not legal advice.</strong> General FCA information only. For case-specific guidance, consult a licensed attorney.
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#f9fafb]">
            {messages.map((msg, i) => {
              const isLastBot = msg.role === "bot" && i === messages.length - 1;
              return (
                <div key={msg.id}>
                  {msg.role === "bot" ? (
                    <div className="flex items-end gap-2">
                      <LexMascot state={isLastBot ? mascotState : "idle"} size={28} />
                      <div className="max-w-[84%]">
                        <div className="bg-white border border-[#e5e7eb] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                          <p className="text-sm text-[#111827] leading-relaxed whitespace-pre-line">{msg.text}</p>
                        </div>
                        {/* Suggestions on last bot message only */}
                        {isLastBot && !isTyping && msg.suggestions && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {msg.suggestions.map(s => (
                              <button
                                key={s}
                                onClick={() => sendMessage(s)}
                                className="text-xs bg-white border border-[#e5e7eb] hover:border-[#0d9488] hover:text-[#0d9488] text-[#374151] px-3 py-1.5 rounded-full transition-all shadow-sm font-medium"
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="max-w-[82%] space-y-1.5">
                        {/* Attachment previews in user message */}
                        {msg.attachments && msg.attachments.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 justify-end">
                            {msg.attachments.map(att => (
                              att.kind === "image" && att.dataUrl ? (
                                <img
                                  key={att.id}
                                  src={att.dataUrl}
                                  alt={att.name}
                                  className="w-32 h-24 object-cover rounded-xl border border-white/20 shadow"
                                />
                              ) : (
                                <div key={att.id} className="flex items-center gap-2 bg-[#0d9488]/80 border border-white/20 text-white px-3 py-2 rounded-xl text-xs">
                                  <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span className="truncate max-w-[120px]">{att.name}</span>
                                </div>
                              )
                            ))}
                          </div>
                        )}
                        {msg.text && (
                          <div className="bg-[#0d9488] text-white rounded-2xl rounded-br-sm px-4 py-3 shadow-sm">
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && <TypingIndicator />}

            {/* Quick actions (shown at start) */}
            {showQuickActions && !isTyping && messages.length === 1 && (
              <div className="pt-1">
                <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 px-1">Quick questions</p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_ACTIONS.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs bg-teal-50 border border-teal-200 text-[#0d9488] hover:bg-teal-100 px-3 py-1.5 rounded-full transition-all font-semibold shadow-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Agent requested banner */}
          {agentRequested && (
            <div className="px-4 py-2 bg-teal-50 border-t border-teal-200 flex items-center gap-2 flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#0d9488] flex-shrink-0" aria-hidden="true" />
              <p className="text-xs text-[#0f766e] font-semibold">Attorney callback requested · Est. 30 min</p>
            </div>
          )}

          {/* Input bar */}
          <div className="border-t border-[#e5e7eb] px-3 pt-2.5 pb-3 bg-white flex-shrink-0">
            {/* Pending attachment previews */}
            {pendingAttachments.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-2">
                {pendingAttachments.map(att => (
                  <div key={att.id} className="relative group">
                    {att.kind === "image" && att.dataUrl ? (
                      <img
                        src={att.dataUrl}
                        alt={att.name}
                        className="w-14 h-14 object-cover rounded-lg border border-[#e5e7eb] shadow-sm"
                      />
                    ) : (
                      <div className="flex items-center gap-1.5 bg-[#f3f4f6] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5 text-xs text-[#374151] max-w-[120px]">
                        <FileText className="w-3.5 h-3.5 text-[#0d9488] flex-shrink-0" />
                        <span className="truncate">{att.name}</span>
                      </div>
                    )}
                    <button
                      onClick={() => setPendingAttachments(prev => prev.filter(a => a.id !== att.id))}
                      className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-[#d4183d] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Remove ${att.name}`}
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-1.5 items-center">
              {/* Attach file */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-xl bg-[#f3f4f6] text-[#6b7280] hover:bg-teal-50 hover:text-[#0d9488] transition-all flex-shrink-0"
                aria-label="Attach file"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              {/* Attach image */}
              <button
                onClick={() => imageInputRef.current?.click()}
                className="p-2 rounded-xl bg-[#f3f4f6] text-[#6b7280] hover:bg-teal-50 hover:text-[#0d9488] transition-all flex-shrink-0"
                aria-label="Attach image"
                title="Attach image"
              >
                <ImageIcon className="w-4 h-4" />
              </button>

              {/* Voice */}
              {voiceSupported && (
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`p-2 rounded-xl transition-all flex-shrink-0 ${
                    isRecording
                      ? "bg-[#d4183d] text-white"
                      : "bg-[#f3f4f6] text-[#6b7280] hover:bg-teal-50 hover:text-[#0d9488]"
                  }`}
                  style={isRecording ? { animation: "pulse 1.2s ease-in-out infinite" } : {}}
                  aria-label={isRecording ? "Stop recording" : "Voice input"}
                  title={isRecording ? "Stop" : "Voice input"}
                >
                  <Mic className="w-4 h-4" />
                </button>
              )}

              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder={isRecording ? "Listening..." : "Ask Lex anything..."}
                className="flex-1 h-9 px-3 bg-[#f3f4f6] rounded-xl outline-none text-sm text-[#111827] placeholder:text-[#9ca3af] focus:bg-[#eff6ff] transition-colors"
                disabled={isRecording}
                aria-label="Message Lex"
              />

              <button
                onClick={handleSend}
                disabled={(!inputText.trim() && pendingAttachments.length === 0) || isTyping}
                className="p-2 bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-xl transition-all flex-shrink-0 disabled:opacity-35 disabled:cursor-not-allowed shadow-sm"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {isRecording && (
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-2 h-2 bg-[#d4183d] rounded-full" style={{ animation: "pulse 1s ease-in-out infinite" }} />
                <p className="text-xs text-[#d4183d] font-semibold">Recording. Speak clearly, then pause.</p>
              </div>
            )}

            {/* Hidden file inputs */}
            <input ref={fileInputRef}  type="file" multiple onChange={handleFileInput} className="hidden" accept=".pdf,.doc,.docx,.txt,.csv,.eml,.xlsx" />
            <input ref={imageInputRef} type="file" multiple onChange={handleFileInput} className="hidden" accept="image/*" />
          </div>

          {/* Human agent panel overlay */}
          {showHumanAgent && (
            <HumanAgentPanel
              onClose={() => setShowHumanAgent(false)}
              onSubmit={handleAgentSubmitted}
            />
          )}
        </div>
      )}
    </>
  );
}
