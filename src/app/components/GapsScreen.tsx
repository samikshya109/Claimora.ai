import { useNavigate } from "react-router";
import { AlertTriangle, Info, Lightbulb, ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { toast } from "sonner";

function SampleDataBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3 mb-6">
      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">
        <span className="font-semibold">Sample data only.</span> Gaps shown are for demonstration, not from your upload.
      </p>
    </div>
  );
}

interface GapCardProps {
  type: 'warning' | 'opportunity';
  element: string;
  score: number;
  description: string;
  recommendation: string;
}

function GapCard({ type, element, score, description, recommendation }: GapCardProps) {
  const isWarning = type === 'warning';
  const borderColor = isWarning ? 'border-l-amber-500' : 'border-l-[#0d9488]';
  const iconBgColor = isWarning ? 'bg-amber-50' : 'bg-teal-50';
  const iconColor = isWarning ? 'text-amber-600' : 'text-[#0d9488]';
  const badgeColor = isWarning
    ? 'bg-amber-50 text-amber-800 border border-amber-200'
    : 'bg-teal-50 text-[#0f766e] border border-teal-200';
  const Icon = isWarning ? AlertTriangle : Lightbulb;

  const handleKnowMore = () => {
    toast.info(`${element}: recommended action`, {
      description: recommendation,
    });
  };

  return (
    <div className={`bg-white border border-[#e5e7eb] border-l-4 ${borderColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex gap-4">
        <div className={`${iconBgColor} rounded-full p-2.5 h-fit flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-[#111827]">{element}</h3>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
              {score}%
            </span>
          </div>

          <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">{description}</p>

          <button
            onClick={handleKnowMore}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488] text-white rounded-lg hover:bg-[#0f766e] transition-all shadow-sm text-sm font-semibold"
          >
            What to do
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function GapsScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-1 tracking-tight">Where to strengthen your case</h1>
          <p className="text-[#6b7280]">Address these gaps before filing to improve your case strength and settlement leverage</p>
        </div>

        <SampleDataBanner />

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#111827] mb-1">Our recommendation</h3>
              <p className="text-sm text-[#374151] mb-2 leading-relaxed">
                This sample case has strong fundamentals (87% overall). Closing the Materiality gap would push it into exceptional territory (90%+), which significantly improves settlement leverage.
              </p>
              <p className="text-xs text-[#6b7280] font-medium">
                Estimated time to close gaps: 2 to 3 weeks of additional discovery
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <GapCard
            type="warning"
            element="Materiality"
            score={79}
            description="While government payment records exist, there are no policy documents explicitly showing these claim types influence payment decisions. Adding CMS policy memos or OIG guidance would significantly strengthen this element."
            recommendation="Request CMS payment policy documents and relevant OIG advisory opinions"
          />

          <GapCard
            type="warning"
            element="Scienter (Knowledge)"
            score={84}
            description="The email evidence is strong but concentrated in just two individuals. Corroboration from compliance meeting minutes, training records, or additional employee accounts would reduce single-witness dependency."
            recommendation="Subpoena compliance committee meeting records and employee training documentation"
          />

          <GapCard
            type="opportunity"
            element="Causation"
            score={88}
            description="Current evidence is excellent. Expert witness testimony from a Medicare billing specialist could make the causal link even more compelling to a jury. Consider engaging a testifying expert early."
            recommendation="Identify a certified medical billing expert for potential testimony"
          />
        </div>

        <button
          onClick={() => navigate("/memo")}
          className="w-full bg-[#0d9488] text-white px-6 rounded-lg font-semibold hover:bg-[#0f766e] transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          style={{ minHeight: 52 }}
        >
          Generate case memo
          <ChevronRight className="w-5 h-5" />
        </button>
      </main>
    </div>
  );
}
