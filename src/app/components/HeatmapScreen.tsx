import { useNavigate } from "react-router";
import { Lightbulb, ChevronRight, AlertTriangle } from "lucide-react";
import { Header } from "./Header";
import { useState } from "react";

interface HeatmapCellData {
  percentage: number;
  level: 'strong' | 'moderate' | 'weak' | 'none';
}

const documents = [
  'billing_records.csv',
  'internal_emails.txt',
  'patient_charts.pdf',
  'compliance_audit_2024.xlsx',
  'medicare_remittance.csv',
  'staff_training_docs.pdf',
];

const elements = ['Falsity', 'Scienter', 'Materiality', 'Causation'];

const heatmapData: Record<string, Record<string, HeatmapCellData>> = {
  'billing_records.csv': {
    'Falsity': { percentage: 95, level: 'strong' },
    'Scienter': { percentage: 12, level: 'weak' },
    'Materiality': { percentage: 88, level: 'strong' },
    'Causation': { percentage: 92, level: 'strong' },
  },
  'internal_emails.txt': {
    'Falsity': { percentage: 34, level: 'weak' },
    'Scienter': { percentage: 96, level: 'strong' },
    'Materiality': { percentage: 15, level: 'weak' },
    'Causation': { percentage: 8, level: 'weak' },
  },
  'patient_charts.pdf': {
    'Falsity': { percentage: 67, level: 'moderate' },
    'Scienter': { percentage: 0, level: 'none' },
    'Materiality': { percentage: 45, level: 'moderate' },
    'Causation': { percentage: 71, level: 'moderate' },
  },
  'compliance_audit_2024.xlsx': {
    'Falsity': { percentage: 78, level: 'strong' },
    'Scienter': { percentage: 52, level: 'moderate' },
    'Materiality': { percentage: 61, level: 'moderate' },
    'Causation': { percentage: 38, level: 'weak' },
  },
  'medicare_remittance.csv': {
    'Falsity': { percentage: 0, level: 'none' },
    'Scienter': { percentage: 0, level: 'none' },
    'Materiality': { percentage: 94, level: 'strong' },
    'Causation': { percentage: 97, level: 'strong' },
  },
  'staff_training_docs.pdf': {
    'Falsity': { percentage: 41, level: 'moderate' },
    'Scienter': { percentage: 68, level: 'moderate' },
    'Materiality': { percentage: 0, level: 'none' },
    'Causation': { percentage: 0, level: 'none' },
  },
};

const levelDescriptions: Record<HeatmapCellData['level'], string> = {
  strong: 'Strong evidence: directly supports this element',
  moderate: 'Moderate evidence: partial support for this element',
  weak: 'Weak evidence: limited relevance to this element',
  none: 'No evidence found for this element in this document',
};

function SampleDataBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3 mb-6">
      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">
        <span className="font-semibold">Sample data only.</span> Documents and scores shown are for demonstration, not from your upload.
      </p>
    </div>
  );
}

interface HeatmapCellProps {
  data: HeatmapCellData;
  doc: string;
  element: string;
}

function HeatmapCell({ data, doc, element }: HeatmapCellProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const colors = {
    strong: 'bg-[#0d9488] text-white hover:bg-[#0f766e]',
    moderate: 'bg-amber-400 text-gray-900 hover:bg-amber-500',
    weak: 'bg-[#d4183d] text-white hover:bg-red-600',
    none: 'bg-[#f3f4f6] text-[#9ca3af] hover:bg-[#e5e7eb]',
  };

  return (
    <div className="relative">
      <button
        className={`${colors[data.level]} w-full px-3 py-2 text-center rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0d9488]`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={`${doc}, ${element}: ${data.percentage}% (${data.level}). ${levelDescriptions[data.level]}`}
      >
        {data.percentage}%
      </button>
      {showTooltip && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-[#111827] text-white text-xs rounded-lg px-3 py-2 pointer-events-none shadow-lg">
          <p className="font-semibold mb-0.5">{element} in {doc}</p>
          <p className="text-gray-300">{levelDescriptions[data.level]}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111827]" />
        </div>
      )}
    </div>
  );
}

export function HeatmapScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-1 tracking-tight">Evidence coverage heatmap</h1>
          <p className="text-[#6b7280]">See how each document contributes to each FCA element. Hover any cell for details.</p>
        </div>

        <SampleDataBanner />

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#111827] mb-1">Key insight</h3>
              <p className="text-sm text-[#374151] leading-relaxed">
                <strong>internal_emails.txt</strong> carries 96% of the Scienter case. These emails demonstrate knowledge of wrongdoing. Without them, proving intent would be very difficult.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 mb-5 overflow-x-auto shadow-sm">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 border-b border-[#e5e7eb] font-semibold text-[#374151] text-sm min-w-[180px]">
                  Document
                </th>
                {elements.map(element => (
                  <th key={element} className="text-center py-3 px-4 border-b border-[#e5e7eb] font-semibold text-[#374151] text-sm min-w-[110px]">
                    {element}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc} className="hover:bg-[#f9fafb] transition-colors">
                  <td className="py-3 px-4 border-b border-[#f3f4f6] text-sm font-medium text-[#374151]">
                    {doc}
                  </td>
                  {elements.map(element => (
                    <td key={element} className="py-3 px-4 border-b border-[#f3f4f6]">
                      <HeatmapCell data={heatmapData[doc][element]} doc={doc} element={element} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Legend</span>
            <div className="flex items-center gap-2">
              <div className="w-14 h-6 bg-[#0d9488] rounded-lg"></div>
              <span className="text-sm text-[#374151]">75%+ Strong</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 h-6 bg-amber-400 rounded-lg"></div>
              <span className="text-sm text-[#374151]">40-75% Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 h-6 bg-[#d4183d] rounded-lg"></div>
              <span className="text-sm text-[#374151]">&lt;40% Weak</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 h-6 bg-[#f3f4f6] rounded-lg border border-[#e5e7eb]"></div>
              <span className="text-sm text-[#374151]">None</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/gaps")}
          className="w-full bg-[#0d9488] text-white px-6 rounded-lg font-semibold hover:bg-[#0f766e] transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          style={{ minHeight: 52 }}
        >
          Analyze evidence gaps
          <ChevronRight className="w-5 h-5" />
        </button>
      </main>
    </div>
  );
}
