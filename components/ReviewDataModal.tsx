'use client';

import React, { useState } from 'react';
import { DataCollectionRequest } from '@/data/collectionQueue';
import {
  X,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Clock,
  Send,
  HelpCircle
} from 'lucide-react';

interface Props {
  request: DataCollectionRequest | null;
  onClose: () => void;
  onApprove: (requestId: string, comments: string) => void;
  onReject: (requestId: string, comments: string) => void;
}

export default function ReviewDataModal({ request, onClose, onApprove, onReject }: Props) {
  const [comment, setComment] = useState('Calculation methodology verified against GHG Protocol v19.0. Signed evidence validated.');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!request) return null;

  const handleApprove = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onApprove(request.id, comment);
      setIsProcessing(false);
      onClose();
    }, 800);
  };

  const handleReject = () => {
    if (!comment.trim()) {
      alert('Please provide feedback comments explaining why data is being returned.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      onReject(request.id, comment);
      setIsProcessing(false);
      onClose();
    }, 800);
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
            <span className="px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-900 text-[10px]">
              Quality Assurance Audit
            </span>
            <span className="font-bold text-slate-400">•</span>
            <span className="font-semibold text-slate-700">{request.id}</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Review Submitted Metric: {request.metricName}
          </h3>
          <p className="text-slate-500 mt-1">
            Submitted by <strong className="text-slate-700">{request.assignedTo}</strong> ({request.businessUnit})
          </p>
        </div>

        {/* Quality Checkpoints Matrix */}
        <div className="space-y-3 mb-5">
          {/* Check 1: Outlier Detection */}
          <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
            request.isOutlier
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
          }`}>
            {request.isOutlier ? (
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="font-bold">
                1. Plausibility & Outlier Detection: {request.isOutlier ? 'FLAGGED ANOMALY' : 'PASSED'}
              </div>
              <div className="text-[11px] mt-0.5">
                Submitted: <strong className="text-slate-900">{request.submittedValue || request.historicalValue}</strong> | Expected Range: {request.expectedRange}
              </div>
            </div>
          </div>

          {/* Check 2: Calculation Methodology */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold text-slate-900">
                2. Framework Calculation Methodology Compliance
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5">
                {request.methodologyRequirement}
              </p>
            </div>
          </div>

          {/* Check 3: Supporting Evidence Manifest */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold text-slate-900">
                3. Attached Auditor Evidence
              </div>
              <div className="text-[11px] text-blue-700 font-semibold mt-0.5 underline cursor-pointer">
                {request.supportingDocument || 'HPCL_Diesel_Receipts_Q1Q2_Signed.pdf'}
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Notes Submitted by BU Owner */}
        {request.methodologyNotes && (
          <div className="mb-4 p-3 rounded-xl bg-slate-100/70 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              BU Owner Notes:
            </span>
            <p className="text-slate-700 mt-0.5 font-mono text-[11px]">
              {request.methodologyNotes}
            </p>
          </div>
        )}

        {/* Sustainability Manager Review Comments */}
        <div className="mb-5">
          <label className="block text-slate-800 font-semibold mb-1">
            Sustainability Assurance Comments / Audit Notes:
          </label>
          <textarea
            rows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-slate-800"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold"
          >
            Cancel
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReject}
              disabled={isProcessing}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-semibold transition-colors"
            >
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Send Back with Comments</span>
            </button>

            <button
              onClick={handleApprove}
              disabled={isProcessing}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Approve & Verify Data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
