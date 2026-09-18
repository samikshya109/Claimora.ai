import { useState, useRef, useEffect } from "react";
import { LogOut, FileText, ChevronDown, X, Briefcase, Mail, User, Clock, TrendingUp, Inbox } from "lucide-react";
import { useNavigate } from "react-router";

interface ClaimoraUser {
  name: string;
  email: string;
  role: string;
  reason: string;
}

interface CaseRecord {
  id: string;
  name: string;
  date: string;
  strength: number;
  status: "complete" | "analyzing";
  fileCount: number;
}

interface ProfileDropdownProps {
  user: ClaimoraUser | null;
  initial: string;
  firstName: string;
  onSignOut: () => void;
}

const ROLE_LABELS: Record<string, string> = {
  "qui-tam-attorney":  "Qui tam attorney",
  paralegal:           "Paralegal / legal staff",
  whistleblower:       "Whistleblower / relator",
  "compliance-officer":"Compliance officer",
  investigator:        "Investigator / journalist",
  other:               "Other",
};

const REASON_LABELS: Record<string, string> = {
  "build-case":      "Building a qui tam case",
  "evaluate-case":   "Evaluating a potential case",
  "attorney-client": "Researching on behalf of a client",
  "due-diligence":   "Due diligence / compliance review",
  research:          "Academic or industry research",
};

function readCases(): CaseRecord[] {
  try {
    return JSON.parse(localStorage.getItem("claimora_cases") || "[]");
  } catch { return []; }
}

function strengthColor(s: number) {
  if (s >= 80) return "bg-teal-50 text-[#0f766e] border-teal-200";
  if (s >= 60) return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-red-50 text-[#991b1b] border-red-200";
}

// ─── Profile modal ────────────────────────────────────────────────────────────

function ProfileModal({ user, initial, onClose }: { user: ClaimoraUser; initial: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d3855] rounded-t-2xl px-6 py-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0d9488] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 shadow-lg ring-4 ring-white/20">
            {initial}
          </div>
          <h2 className="text-white font-bold text-lg">{user.name}</h2>
          <p className="text-teal-300 text-sm mt-0.5">{user.email}</p>
        </div>

        {/* Details */}
        <div className="px-6 py-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0">
              <Briefcase className="w-4 h-4 text-[#0d9488]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">Role</p>
              <p className="text-sm font-medium text-[#111827] mt-0.5">
                {ROLE_LABELS[user.role] ?? user.role ?? "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-[#0d9488]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">Goal</p>
              <p className="text-sm font-medium text-[#111827] mt-0.5">
                {REASON_LABELS[user.reason] ?? user.reason ?? "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0">
              <Mail className="w-4 h-4 text-[#0d9488]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium text-[#111827] mt-0.5 break-all">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-5">
          <button
            onClick={onClose}
            className="w-full border border-[#e5e7eb] text-[#374151] py-2.5 rounded-lg font-semibold text-sm hover:bg-[#f9fafb] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Case history modal ───────────────────────────────────────────────────────

function CaseHistoryModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [cases, setCases] = useState<CaseRecord[]>([]);

  useEffect(() => {
    setCases(readCases());
  }, []);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch { return iso; }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] flex-shrink-0">
          <div>
            <h2 className="font-bold text-[#111827]">Case history</h2>
            <p className="text-xs text-[#6b7280] mt-0.5">
              {cases.length > 0 ? `${cases.length} case${cases.length > 1 ? "s" : ""} analyzed` : "No cases yet"}
            </p>
          </div>
          <button onClick={onClose} className="text-[#9ca3af] hover:text-[#6b7280] p-1.5 rounded-lg hover:bg-[#f3f4f6] transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {cases.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-14 px-8 text-center">
              <div className="w-16 h-16 bg-[#f3f4f6] rounded-2xl flex items-center justify-center mb-4">
                <Inbox className="w-8 h-8 text-[#9ca3af]" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">No cases yet</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
                Upload your evidence and run an analysis to create your first case record. Each completed analysis is saved here automatically.
              </p>
              <button
                onClick={() => { onClose(); navigate("/upload"); }}
                className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm"
              >
                Start your first case
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#f3f4f6] px-4 py-2">
              {cases.map(c => (
                <li key={c.id} className="py-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 text-[#0d9488]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-[#111827] text-sm truncate">{c.name}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${strengthColor(c.strength)}`}>
                          {c.strength}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#9ca3af]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(c.date)}
                        </span>
                        <span>{c.fileCount} file{c.fileCount !== 1 ? "s" : ""}</span>
                        <span className="bg-[#f0fdf4] text-[#16a34a] px-1.5 py-0.5 rounded font-semibold">
                          {c.status === "complete" ? "Complete" : "Analyzing"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => { onClose(); navigate("/results"); }}
                      className="text-xs text-[#0d9488] hover:text-[#0f766e] font-semibold flex-shrink-0 hover:underline"
                    >
                      View
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cases.length > 0 && (
          <div className="px-6 py-4 border-t border-[#e5e7eb] flex-shrink-0">
            <button
              onClick={() => { onClose(); navigate("/upload"); }}
              className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm"
            >
              Start a new case
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

export function ProfileDropdown({ user, initial, firstName, onSignOut }: ProfileDropdownProps) {
  const [isOpen,          setIsOpen]          = useState(false);
  const [showProfile,     setShowProfile]      = useState(false);
  const [showHistory,     setShowHistory]      = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-2 sm:px-2.5 rounded-lg transition-colors border border-white/30 text-white"
          style={{ minHeight: 44 }}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {/* Avatar with initial */}
          <div className="w-7 h-7 bg-[#0d9488] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-sm">
            {initial}
          </div>
          {/* Name - visible on sm+ */}
          <span className="text-sm font-semibold hidden sm:block max-w-[80px] truncate">
            {firstName || "Account"}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-52 sm:w-56 bg-white rounded-xl shadow-xl border border-[#e5e7eb] py-1.5 z-50 animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150"
            role="menu"
            aria-label="Account menu"
          >
            {/* User info header inside dropdown */}
            {user && (
              <div className="px-4 py-2.5 border-b border-[#e5e7eb] mb-1">
                <p className="text-xs font-semibold text-[#111827] truncate">{user.name}</p>
                <p className="text-xs text-[#9ca3af] truncate">{user.email}</p>
              </div>
            )}

            <button
              onClick={() => { setIsOpen(false); setShowProfile(true); }}
              className="w-full px-4 text-left text-[#374151] hover:bg-[#f9fafb] transition-colors flex items-center gap-3"
              style={{ minHeight: 44 }}
              role="menuitem"
            >
              <User className="w-4 h-4 text-[#6b7280] flex-shrink-0" aria-hidden="true" />
              <span className="font-medium text-sm">View profile</span>
            </button>

            <button
              onClick={() => { setIsOpen(false); setShowHistory(true); }}
              className="w-full px-4 text-left text-[#374151] hover:bg-[#f9fafb] transition-colors flex items-center gap-3"
              style={{ minHeight: 44 }}
              role="menuitem"
            >
              <FileText className="w-4 h-4 text-[#6b7280] flex-shrink-0" aria-hidden="true" />
              <span className="font-medium text-sm">Case history</span>
            </button>

            <div className="border-t border-[#e5e7eb] my-1" role="separator" />

            <button
              onClick={() => { setIsOpen(false); onSignOut(); }}
              className="w-full px-4 text-left text-[#d4183d] hover:bg-red-50 transition-colors flex items-center gap-3"
              style={{ minHeight: 44 }}
              role="menuitem"
            >
              <LogOut className="w-4 h-4 text-[#d4183d] flex-shrink-0" aria-hidden="true" />
              <span className="font-medium text-sm">Sign out</span>
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showProfile && user && (
        <ProfileModal user={user} initial={initial} onClose={() => setShowProfile(false)} />
      )}
      {showHistory && (
        <CaseHistoryModal onClose={() => setShowHistory(false)} />
      )}
    </>
  );
}
