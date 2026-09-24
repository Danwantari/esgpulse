'use client';

import React from 'react';
import { DisclosureItem } from '@/data/frameworksData';
import { X, ShieldCheck, FileText, CheckCircle2, Calendar, Building, UserCheck } from 'lucide-react';

interface Props {
  disclosure: DisclosureItem | null;
  onClose: () => void;
}

export default function DisclosureModal({ disclosure, onClose }: Props) {
  if (!disclosure) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-modal border border-slate-200 p-6 sm:p-7 relative text-xs">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] ${
              disclosure.framework === 'GRI'
                ? 'bg-blue-100 text-blue-800'
                : disclosure.framework === 'SASB'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-teal-100 text-teal-800'
            }`}>
              {disclosure.framework} Disclosure
            </span>
            <span className="font-extrabold text-[#1A2B4A] text-sm">{disclosure.code}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">{disclosure.category}</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 leading-snug">
            {disclosure.title}
          </h3>
          <p className="text-slate-500 mt-1">{disclosure.description}</p>
        </div>

        {/* Verification Status Banner */}
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="font-bold text-emerald-950 text-xs">
                {disclosure.verificationStatus}
              </div>
              <div className="text-[11px] text-emerald-800">
                {disclosure.auditNotes}
              </div>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-[10px]">
            {disclosure.status}
          </span>
        </div>

        {/* Formally Reported Value */}
        <div className="mb-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Certified Reported Value
          </div>
          <div className="font-bold text-slate-900 text-sm">
            {disclosure.reportedValue}
          </div>
        </div>

        {/* Official Disclosure Draft Narrative */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Statutory Disclosure Draft Narrative
            </span>
            <span className="text-[11px] text-slate-400">Ready for annual filing compilation</span>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white text-slate-700 leading-relaxed text-xs shadow-xs font-mono whitespace-pre-wrap">
            {disclosure.disclosureDraftText || "Formal narrative documentation drafted and stored in regulatory submission archive."}
          </div>
        </div>

        {/* Metadata Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-slate-500">
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase">Data Source</div>
            <div className="font-medium text-slate-800 truncate" title={disclosure.dataSource}>
              {disclosure.dataSource}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase">Responsible Team</div>
            <div className="font-medium text-slate-800 truncate" title={disclosure.responsibleTeam}>
              {disclosure.responsibleTeam}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase">Assigned Unit</div>
            <div className="font-medium text-slate-800 truncate" title={disclosure.assignedUnit}>
              {disclosure.assignedUnit}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase">Last Updated</div>
            <div className="font-medium text-slate-800">
              {disclosure.lastUpdated}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold"
          >
            Close
          </button>
          <button
            onClick={() => {
              alert(`Disclosure draft for ${disclosure.code} exported to statutory filing clipboard.`);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
          >
            Copy Narrative to Filing
          </button>
        </div>
      </div>
    </div>
  );
}
