import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, Loader2, Circle, FileSearch, Scale, DollarSign, AlertTriangle, FileText } from "lucide-react";
import { Header } from "./Header";
import { toast } from "sonner";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'done';
  timeElapsed: number;
  icon: any;
}

export function AnalysisScreen() {
  const navigate = useNavigate();
  const [overallProgress, setOverallProgress] = useState(0);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Document parser',
      description: 'Extracted 9,906 billing claims across 847 patients',
      status: 'pending',
      timeElapsed: 0,
      icon: FileSearch,
    },
    {
      id: '2',
      name: 'Falsity detector',
      description: 'Found 127 instances of upcoding and unbundling violations',
      status: 'pending',
      timeElapsed: 0,
      icon: AlertTriangle,
    },
    {
      id: '3',
      name: 'Scienter analyzer',
      description: 'Identified 43 emails showing knowledge of improper billing',
      status: 'pending',
      timeElapsed: 0,
      icon: Scale,
    },
    {
      id: '4',
      name: 'Damages calculator',
      description: 'Calculated $2.99M in false claims, $748K whistleblower share',
      status: 'pending',
      timeElapsed: 0,
      icon: DollarSign,
    },
    {
      id: '5',
      name: 'Memo generator',
      description: 'Compiled court-ready analysis with FCA element scores',
      status: 'pending',
      timeElapsed: 0,
      icon: FileText,
    },
  ]);

  useEffect(() => {
    const agentTimings = [2000, 3500, 3000, 2500, 2000];
    let currentIndex = 0;
    let startTime = Date.now();

    const runNextAgent = () => {
      if (currentIndex >= agents.length) {
        toast.success("Analysis complete!");
        setTimeout(() => {
          navigate("/results");
        }, 1000);
        return;
      }

      setCurrentAgentIndex(currentIndex);
      setAgents(prev => prev.map((agent, idx) =>
        idx === currentIndex ? { ...agent, status: 'running' as const } : agent
      ));

      const agentDuration = agentTimings[currentIndex];
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setAgents(prev => prev.map((agent, idx) =>
          idx === currentIndex ? { ...agent, timeElapsed: Math.floor(elapsed / 1000) } : agent
        ));
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setAgents(prev => prev.map((agent, idx) =>
          idx === currentIndex ? { ...agent, status: 'done' as const, timeElapsed: Math.floor(agentDuration / 1000) } : agent
        ));

        const newProgress = ((currentIndex + 1) / agents.length) * 100;
        setOverallProgress(newProgress);

        currentIndex++;
        startTime = Date.now();
        runNextAgent();
      }, agentDuration);
    };

    runNextAgent();
  }, [navigate]);

  const getActiveElements = () => {
    if (currentAgentIndex === 0) return ['Falsity'];
    if (currentAgentIndex === 1) return ['Falsity', 'Scienter'];
    if (currentAgentIndex === 2) return ['Scienter'];
    if (currentAgentIndex === 3) return ['Materiality'];
    if (currentAgentIndex === 4) return ['Causation'];
    return [];
  };

  const activeElements = getActiveElements();

  const getAgentCardClass = (status: Agent['status']) => {
    if (status === 'running') return 'bg-[#eff6ff] border-2 border-[#2563eb] rounded-xl shadow-md';
    if (status === 'done') return 'bg-white border-2 border-[#0d9488] rounded-xl shadow-sm';
    return 'bg-white border border-[#e5e7eb] rounded-xl opacity-50';
  };

  const renderAgentCard = (agent: Agent) => {
    const Icon = agent.icon;
    const isActive = agent.status === 'running';
    const isDone = agent.status === 'done';

    return (
      <div key={agent.id} className={`p-6 transition-all ${getAgentCardClass(agent.status)}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {isDone && <CheckCircle2 className="w-6 h-6 text-[#0d9488]" />}
            {isActive && <Loader2 className="w-6 h-6 text-[#2563eb] animate-spin" />}
            {agent.status === 'pending' && <Circle className="w-6 h-6 text-[#9ca3af]" />}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Icon className="w-5 h-5 text-[#374151]" />
              <h3 className="font-bold text-[#111827]">{agent.name}</h3>
            </div>
            <p className="text-[#6b7280] text-sm">{agent.description}</p>
          </div>

          <div className="text-right flex-shrink-0">
            <p className="text-sm font-semibold text-[#6b7280]">
              {agent.status === 'pending' ? '' : `${agent.timeElapsed}s`}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 sm:p-8 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">Analyzing your case</h2>
            <div className="flex items-center gap-2 bg-[#eff6ff] border border-[#bfdbfe] px-3 py-1.5 rounded-full">
              <Loader2 className="w-4 h-4 text-[#2563eb] animate-spin" />
              <span className="text-sm font-semibold text-[#2563eb]">Analyzing</span>
            </div>
          </div>
          <p className="text-[#6b7280] mb-6 text-sm">AI agents are reviewing your evidence for FCA compliance</p>

          <div className="relative">
            <div className="h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0d9488] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-right mt-2 text-sm font-semibold text-[#111827]">
              {Math.round(overallProgress)}%
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Falsity', 'Scienter', 'Materiality', 'Causation'].map((element) => (
              <div
                key={element}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  activeElements.includes(element)
                    ? 'bg-[#eff6ff] border border-[#bfdbfe] text-[#2563eb]'
                    : 'bg-[#f9fafb] border border-[#e5e7eb] text-[#9ca3af]'
                }`}
              >
                {element}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {agents.slice(0, 4).map(agent => renderAgentCard(agent))}
        </div>

        {renderAgentCard(agents[4])}
      </main>
    </div>
  );
}
