'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_HEATMAP_ITEMS } from '@/data/frameworksData';
import {
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Filter,
  Search,
  ChevronRight,
  ExternalLink,
  X,
  UserCheck,
  Calendar,
  Building,
  FileText
} from 'lucide-react';

interface HeatmapCell {
  id: string;
  code: string;
  framework: 'GRI' | 'SASB' | 'TCFD';
  pillar: 'Environmental' | 'Social' | 'Governance';
  title: string;
  category: string;
  status: 'compliant' | 'partial' | 'missing' | 'na';
  responsibleTeam: string;
  assignedUnit: string;
  dueDate: string;
  value: string;
  auditTrail: string;
}

export default function ComplianceHeatmap() {
  const [selectedFramework, setSelectedFramework] = useState<'ALL' | 'GRI' | 'SASB' | 'TCFD'>('ALL');
  const [selectedPillar, setSelectedPillar] = useState<'ALL' | 'Environmental' | 'Social' | 'Governance'>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'compliant' | 'partial' | 'missing'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCell, setActiveCell] = useState<HeatmapCell | null>(null);

  // Filtered heatmap items
  const filteredItems = useMemo(() => {
    return ALL_HEATMAP_ITEMS.filter((item) => {
      if (selectedFramework !== 'ALL' && item.framework !== selectedFramework) return false;
      if (selectedPillar !== 'ALL' && item.pillar !== selectedPillar) return false;
      if (selectedStatus !== 'ALL' && item.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.code.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.responsibleTeam.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedFramework, selectedPillar, selectedStatus, searchQuery]);

  // Overall statistics for current framework scope
  const stats = useMemo(() => {
    const scopeItems = selectedFramework === 'ALL'
      ? ALL_HEATMAP_ITEMS
      : ALL_HEATMAP_ITEMS.filter(x => x.framework === selectedFramework);

    const total = scopeItems.length;
    const compliant = scopeItems.filter(x => x.status === 'compliant').length;
    const partial = scopeItems.filter(x => x.status === 'partial').length;
    const missing = scopeItems.filter(x => x.status === 'missing').length;

    return {
      total,
      compliant,
      compliantPct: Math.round((compliant / total) * 100),
      partial,
      partialPct: Math.round((partial / total) * 100),
      missing,
      missingPct: Math.round((missing / total) * 100)
    };
  }, [selectedFramework]);

  const getCellColor = (status: HeatmapCell['status']) => {
    switch (status) {
      case 'compliant':
        return 'bg-emerald-500 hover:bg-emerald-600 ring-emerald-300';
      case 'partial':
        return 'bg-amber-400 hover:bg-amber-500 ring-amber-300';
      case 'missing':
        return 'bg-rose-500 hover:bg-rose-600 ring-rose-300';
      case 'na':
      default:
        return 'bg-slate-300 hover:bg-slate-400 ring-slate-200';
    }
  };

  const getFrameworkBadge = (framework: HeatmapCell['framework']) => {
    switch (framework) {
      case 'GRI':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'SASB':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'TCFD':
        return 'bg-teal-100 text-teal-800 border-teal-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-lg font-bold text-[#1A2B4A]">
              Compliance Heatmap & Disclosure Coverage Matrix
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time multi-framework coverage across 198 total disclosure requirements. Click any cell to inspect audit trails and assign collection owners.
          </p>
        </div>

        {/* Stats Pill Counters */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{stats.compliant} Compliant ({stats.compliantPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>{stats.partial} Partial ({stats.partialPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 font-semibold">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>{stats.missing} Missing Gaps ({stats.missingPct}%)</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        {/* Framework Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit">
          {(['ALL', 'GRI', 'SASB', 'TCFD'] as const).map((fw) => (
            <button
              key={fw}
              onClick={() => setSelectedFramework(fw)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedFramework === fw
                  ? 'bg-white text-[#1A2B4A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {fw === 'ALL' ? 'All Frameworks (198)' : `${fw} (${fw === 'GRI' ? '133' : fw === 'SASB' ? '41' : '24'})`}
            </button>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Pillar Filter */}
          <select
            value={selectedPillar}
            onChange={(e) => setSelectedPillar(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white hover:border-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="ALL">All Pillars</option>
            <option value="Environmental">Environmental</option>
            <option value="Social">Social</option>
            <option value="Governance">Governance</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white hover:border-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="compliant">Compliant (Green)</option>
            <option value="partial">Partial / Below Target (Amber)</option>
            <option value="missing">Data Missing Gap (Red)</option>
          </select>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search code or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-44 lg:w-56"
            />
          </div>
        </div>
      </div>

      {/* Heatmap Matrix Grid */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>Showing {filteredItems.length} of {ALL_HEATMAP_ITEMS.length} disclosure units</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-amber-400"></span> Partial / At Risk
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-rose-500"></span> Missing Data Gap
            </span>
          </div>
        </div>

        {/* Heatmap Grid Cells */}
        <div className="grid grid-cols-12 sm:grid-cols-16 md:grid-cols-20 lg:grid-cols-24 gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 max-h-[360px] overflow-y-auto">
          {filteredItems.map((cell) => {
            const isSelected = activeCell?.id === cell.id;
            return (
              <button
                key={cell.id}
                onClick={() => setActiveCell(cell)}
                title={`${cell.code} - ${cell.title} (${cell.status.toUpperCase()})`}
                className={`h-7 rounded transition-all transform hover:scale-125 hover:z-10 focus:outline-none focus:ring-2 ${
                  getCellColor(cell.status)
                } ${isSelected ? 'ring-2 ring-[#1A2B4A] scale-110' : ''} flex items-center justify-center`}
              >
                <span className="text-[9px] font-bold text-white opacity-85 select-none">
                  {cell.framework === 'GRI' ? 'G' : cell.framework === 'SASB' ? 'S' : 'T'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Drawer / Inspection Banner */}
      {activeCell && (
        <div className="mt-5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 animate-in fade-in slide-in-from-bottom-2 text-xs">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] border ${getFrameworkBadge(activeCell.framework)}`}>
                  {activeCell.framework} Standard
                </span>
                <span className="font-bold text-[#1A2B4A] text-sm">{activeCell.code}</span>
                <span className="text-slate-400">•</span>
                <span className="font-medium text-slate-700">{activeCell.category}</span>
                <span className={`px-2 py-0.5 rounded-full font-bold capitalize text-[10px] ${
                  activeCell.status === 'compliant'
                    ? 'bg-emerald-100 text-emerald-800'
                    : activeCell.status === 'partial'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-rose-100 text-rose-800'
                }`}>
                  {activeCell.status}
                </span>
              </div>

              <h4 className="font-semibold text-slate-900 text-sm mb-2">{activeCell.title}</h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-600 bg-white/80 p-3 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Responsible Team</div>
                    <div className="font-medium text-slate-800">{activeCell.responsibleTeam}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-blue-700" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Assigned Business Unit</div>
                    <div className="font-medium text-slate-800">{activeCell.assignedUnit}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-purple-700" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Reporting Due Date</div>
                    <div className="font-medium text-slate-800">{activeCell.dueDate}</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between flex-wrap gap-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">Audit Status:</span>
                  <span className="text-slate-600">{activeCell.value}</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeCell.status === 'compliant' ? (
                    <Link
                      href={`/frameworks?tab=${activeCell.framework.toLowerCase()}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View Disclosure Draft
                    </Link>
                  ) : (
                    <Link
                      href="/collection"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A2B4A] hover:bg-[#142240] text-white font-semibold transition-colors"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      Assign Data Collection
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveCell(null)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
