'use client';

import React, { useState } from 'react';
import {
  GRI_DISCLOSURES,
  SASB_STANDARDS,
  TCFD_RECOMMENDATIONS,
  DisclosureItem
} from '@/data/frameworksData';
import {
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Search,
  Filter,
  FileText,
  UserPlus,
  Save,
  Check,
  Building,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import DisclosureModal from '@/components/DisclosureModal';
import AssignCollectionModal from '@/components/AssignCollectionModal';

export default function FrameworkMapperPage() {
  const [activeFramework, setActiveFramework] = useState<'gri' | 'sasb' | 'tcfd'>('gri');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [viewingDisclosure, setViewingDisclosure] = useState<DisclosureItem | null>(null);
  const [assigningDisclosure, setAssigningDisclosure] = useState<DisclosureItem | null>(null);

  // TCFD Interactive Narratives state
  const [tcfdNarratives, setTcfdNarratives] = useState<{ [key: string]: string }>(() => {
    const map: { [key: string]: string } = {};
    TCFD_RECOMMENDATIONS.forEach((rec) => {
      map[rec.id] = rec.disclosureDraftText || '';
    });
    return map;
  });
  const [savedNarrativeId, setSavedNarrativeId] = useState<string | null>(null);

  const handleSaveNarrative = (id: string) => {
    setSavedNarrativeId(id);
    setTimeout(() => {
      setSavedNarrativeId(null);
    }, 2000);
  };

  // Get current dataset based on active framework
  const currentDataset = activeFramework === 'gri'
    ? GRI_DISCLOSURES
    : activeFramework === 'sasb'
    ? SASB_STANDARDS
    : TCFD_RECOMMENDATIONS;

  // Extract topics for filter dropdown
  const availableTopics = Array.from(new Set(currentDataset.map(item => item.category)));

  // Filter current dataset
  const filteredDataset = currentDataset.filter((item) => {
    if (selectedTopic !== 'ALL' && item.category !== selectedTopic) return false;
    if (selectedStatus !== 'ALL' && item.status !== selectedStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.code.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.responsibleTeam.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getStatusBadge = (status: DisclosureItem['status']) => {
    switch (status) {
      case 'Complete':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Partial':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Missing':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Not Applicable':
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Cross-Standard Interoperability Engine
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1A2B4A] tracking-tight mt-1">
            Framework Compliance & Disclosure Mapper
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Evaluate, draft, and assign audit ownership across GRI 2021 Universal Standards, SASB Technology Sector (TC-SI), and TCFD Climate Pillars.
          </p>
        </div>

        {/* Framework Selector Switcher */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
          <button
            onClick={() => {
              setActiveFramework('gri');
              setSelectedTopic('ALL');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFramework === 'gri'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
            <span>GRI Standards (67%)</span>
          </button>

          <button
            onClick={() => {
              setActiveFramework('sasb');
              setSelectedTopic('ALL');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFramework === 'sasb'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-purple-300"></span>
            <span>SASB Tech (71%)</span>
          </button>

          <button
            onClick={() => {
              setActiveFramework('tcfd');
              setSelectedTopic('ALL');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFramework === 'tcfd'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-teal-300"></span>
            <span>TCFD 4 Pillars (54%)</span>
          </button>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Topic Category Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Category:</span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 max-w-xs"
            >
              <option value="ALL">All Categories ({currentDataset.length})</option>
              {availableTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Statuses</option>
              <option value="Complete">Complete (Compliant)</option>
              <option value="Partial">Partial / At Risk</option>
              <option value="Missing">Missing Data Gap</option>
            </select>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search standard code or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
          />
        </div>
      </div>

      {/* VIEW 1 & 2: GRI & SASB STANDARD TABLES */}
      {(activeFramework === 'gri' || activeFramework === 'sasb') && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#1A2B4A] text-sm">
                {activeFramework === 'gri'
                  ? 'GRI 2021 Universal & Topic Standards Disclosure Register'
                  : 'SASB Software & IT Services (TC-SI) Industry Standards Matrix'}
              </h2>
              <p className="text-xs text-slate-500">
                Displaying {filteredDataset.length} standards matching current materiality scope.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Audit Boundary: FY 2025-26
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-50/70">
                  <th className="py-3.5 px-4">Standard ID</th>
                  <th className="py-3.5 px-4">Disclosure Name & Description</th>
                  <th className="py-3.5 px-3">Status</th>
                  <th className="py-3.5 px-3">Data Source / Evidence</th>
                  <th className="py-3.5 px-3">Last Updated</th>
                  <th className="py-3.5 px-3">Responsible Team</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDataset.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#1A2B4A]">
                      {item.code}
                    </td>

                    <td className="py-3.5 px-4 max-w-sm">
                      <div className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {item.category}
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <span className={`inline-flex px-2 py-0.5 rounded font-bold border text-[10px] ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-3 text-slate-600 max-w-[160px] truncate" title={item.dataSource}>
                      {item.dataSource}
                    </td>

                    <td className="py-3.5 px-3 text-slate-500">
                      {item.lastUpdated}
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="font-medium text-slate-800">{item.responsibleTeam}</div>
                      <div className="text-[10px] text-slate-400">{item.assignedUnit}</div>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      {item.status === 'Complete' ? (
                        <button
                          onClick={() => setViewingDisclosure(item)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-semibold transition-all border border-emerald-200 hover:border-emerald-600"
                        >
                          <FileText className="w-3 h-3" />
                          <span>View Draft</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setAssigningDisclosure(item)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#1A2B4A] hover:bg-[#132038] text-white font-semibold transition-all shadow-xs"
                        >
                          <UserPlus className="w-3 h-3" />
                          <span>Assign</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: TCFD 4 PILLARS WITH INTERACTIVE NARRATIVE EDITORS */}
      {activeFramework === 'tcfd' && (
        <div className="space-y-6">
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 text-xs text-teal-900 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-bold text-sm text-teal-950">
                TCFD Climate Governance & Financial Resilience Disclosures
              </span>
              <p className="text-teal-800">
                Organized under the 4 Core Pillars: Governance, Strategy, Risk Management, and Metrics & Targets. 
                Write and refine corporate disclosure narratives in real time.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-teal-700 text-white font-bold text-[10px]">
              13 / 24 Compliant (54%)
            </span>
          </div>

          {['1. Governance', '2. Strategy', '3. Risk Management', '4. Metrics & Targets'].map((pillarName) => {
            const pillarItems = TCFD_RECOMMENDATIONS.filter(x => x.category === pillarName);
            return (
              <div key={pillarName} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                    <h3 className="font-extrabold text-base text-[#1A2B4A]">{pillarName}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {pillarItems.filter(p => p.status === 'Complete').length} of {pillarItems.length} Complete
                  </span>
                </div>

                <div className="space-y-6">
                  {pillarItems.map((rec) => (
                    <div
                      key={rec.id}
                      className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-xs bg-teal-100 text-teal-900 px-2 py-0.5 rounded border border-teal-200">
                            {rec.code}
                          </span>
                          <span className="font-bold text-slate-900 text-xs">{rec.title}</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${getStatusBadge(rec.status)}`}>
                          {rec.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500">{rec.description}</p>

                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">
                          Reported Metrics / Evidence:
                        </span>
                        <div className="font-semibold text-[#1A2B4A] mt-0.5">
                          {rec.reportedValue}
                        </div>
                      </div>

                      {/* Interactive Narrative Textarea */}
                      <div>
                        <div className="flex items-center justify-between mb-1 text-xs">
                          <label className="font-semibold text-slate-700">
                            Corporate Disclosure Draft Narrative:
                          </label>
                          {savedNarrativeId === rec.id && (
                            <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px] animate-in fade-in">
                              <Check className="w-3.5 h-3.5" /> Narrative Saved!
                            </span>
                          )}
                        </div>
                        <textarea
                          rows={3}
                          value={tcfdNarratives[rec.id] || ''}
                          onChange={(e) =>
                            setTcfdNarratives({
                              ...tcfdNarratives,
                              [rec.id]: e.target.value
                            })
                          }
                          className="w-full p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between pt-2 text-xs">
                        <div className="text-slate-400 text-[11px]">
                          Owner: <strong>{rec.responsibleTeam}</strong> ({rec.assignedUnit})
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSaveNarrative(rec.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors"
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>Save Draft</span>
                          </button>
                          <button
                            onClick={() => setViewingDisclosure(rec)}
                            className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold"
                          >
                            View Assurance Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL 1: VIEW DISCLOSURE DRAFT */}
      {viewingDisclosure && (
        <DisclosureModal
          disclosure={viewingDisclosure}
          onClose={() => setViewingDisclosure(null)}
        />
      )}

      {/* MODAL 2: ASSIGN COLLECTION WORKFLOW */}
      {assigningDisclosure && (
        <AssignCollectionModal
          disclosure={assigningDisclosure}
          onClose={() => setAssigningDisclosure(null)}
          onAssigned={(data) => {
            alert(`Collection request successfully dispatched for ${data.disclosureCode} to ${data.assignee}!`);
          }}
        />
      )}
    </div>
  );
}
