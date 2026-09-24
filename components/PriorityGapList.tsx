'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRIORITY_GAPS, PriorityGap } from '@/data/esgData';
import {
  AlertTriangle,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  ChevronRight,
  Flame,
  UserCheck
} from 'lucide-react';

interface Props {
  onAssignGap?: (gap: PriorityGap) => void;
}

export default function PriorityGapList({ onAssignGap }: Props) {
  const [filterFramework, setFilterFramework] = useState<string>('ALL');

  const filteredGaps = filterFramework === 'ALL'
    ? PRIORITY_GAPS
    : PRIORITY_GAPS.filter(g => g.framework === filterFramework);

  const getUrgencyBadge = (urgency: PriorityGap['regulatoryUrgency']) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'High':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Medium':
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getFrameworkBadge = (framework: PriorityGap['framework']) => {
    switch (framework) {
      case 'GRI':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'SASB':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'TCFD':
        return 'bg-teal-50 text-teal-700 border-teal-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            <h2 className="text-lg font-bold text-[#1A2B4A]">
              Priority Action List: Top 10 Critical Compliance Gaps
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Algorithmic prioritization ranked by reporting framework weight, regulatory filing deadlines, and data deficit severity.
          </p>
        </div>

        {/* Framework Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs w-fit">
          {['ALL', 'TCFD', 'GRI', 'SASB'].map((fw) => (
            <button
              key={fw}
              onClick={() => setFilterFramework(fw)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                filterFramework === fw
                  ? 'bg-white text-[#1A2B4A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {fw}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-50/60">
              <th className="py-3 px-3">#</th>
              <th className="py-3 px-3">Framework</th>
              <th className="py-3 px-4">Standard & Requirement Title</th>
              <th className="py-3 px-3">Gap Classification</th>
              <th className="py-3 px-3">Responsible Owner</th>
              <th className="py-3 px-3">Regulatory Due</th>
              <th className="py-3 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredGaps.map((gap, index) => {
              const isUrgent = gap.daysRemaining <= 30;
              return (
                <tr key={gap.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-3.5 px-3 font-bold text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className={`inline-flex px-2 py-0.5 rounded font-bold border text-[10px] ${getFrameworkBadge(gap.framework)}`}>
                      {gap.framework}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#1A2B4A] group-hover:text-emerald-700 transition-colors">
                      {gap.code}
                    </div>
                    <div className="text-slate-600 font-medium text-[11px] line-clamp-1 max-w-sm">
                      {gap.title}
                    </div>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[10px]">
                      {gap.gapType}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="font-medium text-slate-800">{gap.responsibleTeam}</div>
                    <div className="text-[10px] text-slate-400">{gap.assignedUnit}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-500' : 'text-amber-500'}`} />
                      <span className={isUrgent ? 'text-rose-600' : 'text-slate-700'}>
                        {gap.daysRemaining} days left
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">{gap.dueDate}</div>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <Link
                      href={`/collection?metric=${encodeURIComponent(gap.code)}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-semibold transition-all border border-emerald-200 hover:border-emerald-600"
                    >
                      <UserCheck className="w-3 h-3" />
                      <span>Collect</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Displaying highest risk gaps across GRI, SASB, and TCFD</span>
        <Link
          href="/collection"
          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
        >
          View Full Data Collection Queue
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
