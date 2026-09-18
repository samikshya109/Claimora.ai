import { useNavigate } from "react-router";
import { useEffect } from "react";
import { DollarSign, FileText, TrendingUp, User, ChevronRight, Grid3x3, AlertTriangle } from "lucide-react";
import { Header } from "./Header";

function SampleDataBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3 mb-6">
      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">
        <span className="font-semibold">Sample data only.</span> These figures are for demonstration. Your uploaded documents will produce real results.
      </p>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  icon: any;
  color: string;
}

function MetricCard({ label, value, icon: Icon, color }: MetricCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${color}`} />
        <p className="text-xs sm:text-sm text-[#6b7280] font-medium">{label}</p>
      </div>
      <p className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">{value}</p>
    </div>
  );
}

interface ElementCardProps {
  name: string;
  score: number;
  evidence: string;
}

function ElementCard({ name, score, evidence }: ElementCardProps) {
  const getBarColor = (score: number) => {
    if (score >= 75) return 'bg-[#0d9488]';
    if (score >= 40) return 'bg-amber-500';
    return 'bg-[#d4183d]';
  };

  const getBadgeColor = (score: number) => {
    if (score >= 75) return 'bg-teal-50 text-[#0f766e] border border-teal-200';
    if (score >= 40) return 'bg-amber-50 text-amber-800 border border-amber-200';
    return 'bg-red-50 text-[#991b1b] border border-red-200';
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-[#111827]">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(score)}`}>
          {score}%
        </span>
      </div>

      <div className="h-2 bg-[#f3f4f6] rounded-full mb-3 overflow-hidden">
        <div
          className={`h-full ${getBarColor(score)} transition-all rounded-full`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-sm text-[#6b7280] leading-relaxed">{evidence}</p>
    </div>
  );
}

function saveCaseRecord() {
  if (sessionStorage.getItem("case_saved")) return;
  sessionStorage.setItem("case_saved", "true");

  try {
    const existing = JSON.parse(localStorage.getItem("claimora_cases") || "[]");
    const uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
    const record = {
      id: String(Date.now()),
      name: "Premier Healthcare Group",
      date: new Date().toISOString(),
      strength: 87,
      status: "complete" as const,
      fileCount: uploadedFiles.length || 1,
    };
    existing.unshift(record);
    localStorage.setItem("claimora_cases", JSON.stringify(existing));
  } catch { /* ignore */ }
}

export function ResultsScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    saveCaseRecord();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-1 tracking-tight">Case analysis results</h1>
          <p className="text-[#6b7280]">FCA element evaluation and damage assessment</p>
        </div>

        <SampleDataBanner />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard label="Overall strength" value="87%" icon={TrendingUp} color="text-[#0d9488]" />
          <MetricCard label="Treble damages" value="$2.99M" icon={DollarSign} color="text-[#0d9488]" />
          <MetricCard label="False claims" value="9,906" icon={FileText} color="text-[#0d9488]" />
          <MetricCard label="WB share (25%)" value="$748K" icon={User} color="text-[#0d9488]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Liability elements</h2>
            <ElementCard
              name="Falsity"
              score={92}
              evidence="127 instances of upcoding found in billing records. Clear deviation from CPT guidelines."
            />
            <ElementCard
              name="Scienter (Knowledge)"
              score={84}
              evidence="43 internal emails show a billing manager acknowledged improper codes and instructed staff."
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Impact elements</h2>
            <ElementCard
              name="Materiality"
              score={79}
              evidence="Government paid $2.99M on false claims. Substantial financial impact documented."
            />
            <ElementCard
              name="Causation"
              score={88}
              evidence="Direct link between false claims and government payment confirmed via Medicare records."
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/heatmap")}
            className="flex-1 bg-white border border-[#e5e7eb] text-[#111827] py-4 px-6 rounded-lg font-semibold hover:border-[#d1d5db] hover:bg-[#f9fafb] transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Grid3x3 className="w-5 h-5 text-[#6b7280]" />
            View evidence heatmap
          </button>
          <button
            onClick={() => navigate("/gaps")}
            className="flex-1 bg-[#0d9488] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f766e] transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            See evidence gaps
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
