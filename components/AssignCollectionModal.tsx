'use client';

import React, { useState } from 'react';
import { DisclosureItem } from '@/data/frameworksData';
import { X, UserPlus, CheckCircle, Calendar, Building, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/esgData';

interface Props {
  disclosure: DisclosureItem | null;
  onClose: () => void;
  onAssigned: (assignment: any) => void;
}

export default function AssignCollectionModal({ disclosure, onClose, onAssigned }: Props) {
  const [assignee, setAssignee] = useState('');
  const [bu, setBu] = useState('India Operations');
  const [dueDate, setDueDate] = useState('2026-10-31');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!disclosure) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onAssigned({
        disclosureCode: disclosure.code,
        assignee,
        bu,
        dueDate,
        notes
      });
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-modal border border-slate-200 p-6 relative text-xs">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <UserPlus className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Assign Data Collection Workflow</h3>
            <p className="text-slate-500 text-[11px]">Dispatch formal metric request to operational BU owner</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <div className="font-bold text-slate-900 text-sm">
              Collection Request Dispatched!
            </div>
            <p className="text-slate-500">
              Notification & telemetry intake link routed to {assignee || 'Business Unit Lead'}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Target Disclosure Target */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-700">{disclosure.code}</span>
                <span className="text-slate-400">•</span>
                <span className="font-medium text-slate-700">{disclosure.title}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Framework: {disclosure.framework} | Category: {disclosure.category}
              </div>
            </div>

            {/* Form Fields */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Assigned Team / Owner Email *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., facilities.lead@techcorp.com or Deepak Varma"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Target Business Unit *
                </label>
                <select
                  value={bu}
                  onChange={(e) => setBu(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="India Operations">India Operations</option>
                  <option value="UK Operations">UK Operations</option>
                  <option value="Southeast Asia">Southeast Asia</option>
                  <option value="All BUs (Consolidated)">All BUs (Consolidated)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Submission Due Date *
                </label>
                <input
                  type="date"
                  required
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Calculation Methodology Notes & Scope Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Specify primary meter logs, emission calculation formulas, or required signed verification slips..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-colors"
              >
                Dispatch Data Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
