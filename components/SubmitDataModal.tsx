'use client';

import React, { useState } from 'react';
import { DataCollectionRequest } from '@/data/collectionQueue';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';

interface Props {
  request: DataCollectionRequest | null;
  onClose: () => void;
  onSubmit: (requestId: string, value: string, notes: string, fileName: string) => void;
}

export default function SubmitDataModal({ request, onClose, onSubmit }: Props) {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('Utility_Meter_Telemetry_Q1Q2.pdf');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!request) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onSubmit(request.id, value, notes, fileName);
      setIsSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-modal border border-slate-200 p-6 sm:p-7 relative text-xs">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 pr-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-900 text-[10px]">
              {request.metricCode}
            </span>
            <span className="font-bold text-slate-400">•</span>
            <span className="font-semibold text-slate-600">{request.businessUnit}</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Submit Operational ESG Metric: {request.metricName}
          </h3>
          <p className="text-slate-500 mt-1 leading-relaxed">
            {request.description}
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <div className="font-bold text-slate-900 text-sm">
              Metric Data Submitted to Sustainability Review!
            </div>
            <p className="text-slate-500">
              The data quality assurance team has been notified for formula and outlier verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Guidance Box */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-emerald-950">
                <span>Methodology Guidelines:</span>
                <span className="text-[10px] bg-emerald-200/80 px-2 py-0.5 rounded font-bold">
                  {request.reportingPeriod}
                </span>
              </div>
              <p className="text-[11px] text-emerald-900">
                {request.methodologyRequirement}
              </p>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-emerald-100 flex justify-between">
                <span>Historical Value: <strong>{request.historicalValue}</strong></span>
                <span>Expected Range: <strong>{request.expectedRange}</strong></span>
              </div>
            </div>

            {/* Input Value with calibrated Units */}
            <div>
              <label className="block text-slate-800 font-semibold mb-1">
                Measured Primary Value * ({request.unitOfMeasure})
              </label>
              <input
                type="text"
                required
                placeholder={`e.g., 112,650 (${request.unitOfMeasure})`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Supporting Evidence File Mock */}
            <div>
              <label className="block text-slate-800 font-semibold mb-1">
                Supporting Evidence / Auditor Manifest (PDF, Excel, Meter Logs)
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-emerald-400 transition-colors bg-slate-50/50">
                <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <div className="font-semibold text-slate-700">
                  {fileName}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Click to replace file (Max 25MB, signed PDF or raw telemetry export)
                </div>
              </div>
            </div>

            {/* Methodology Notes */}
            <div>
              <label className="block text-slate-800 font-semibold mb-1">
                Calculation Methodology Notes & Boundary Disclosures *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Document meter calibration date, emission factors applied, or any excluded facility sub-meters..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              ></textarea>
            </div>

            {/* Actions */}
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
                Submit Data to Reviewer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
