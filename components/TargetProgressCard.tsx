'use client';

import React from 'react';
import { TARGET_PROGRESS_DATA, TargetProgress } from '@/data/esgData';
import { Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function TargetProgressCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-[#1A2B4A]">
              Progress Toward Strategic Annual Sustainability Targets
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Corporate decarbonization, clean power procurement, diversity leadership, and natural resource stewardship milestones.
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit">
          FY 2025-26 Performance Track
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {TARGET_PROGRESS_DATA.map((target) => {
          return (
            <div
              key={target.id}
              className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {target.pillar} Pillar
                    </span>
                    <h3 className="font-bold text-[#1A2B4A] text-sm mt-1.5">
                      {target.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#1A2B4A]">
                      {target.percentAchieved}%
                    </span>
                    <div className="text-[10px] text-slate-400 font-semibold">of target</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {target.notes}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-700">
                      Current: {target.currentValue}{target.unit.includes('%') ? '%' : ` ${target.unit}`}
                    </span>
                    <span className="text-slate-600">
                      Goal: {target.targetValue}{target.unit.includes('%') ? '%' : ` ${target.unit}`}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-700 ease-out"
                      style={{ width: `${Math.min(target.percentAchieved, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Baseline & Framework Footnote */}
              <div className="pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Baseline: <strong className="text-slate-700">{target.baseline}</strong></span>
                <span className="text-slate-400 truncate max-w-[170px]" title={target.frameworkRef}>
                  {target.frameworkRef}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
