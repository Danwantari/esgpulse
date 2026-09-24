'use client';

import React, { useState } from 'react';
import {
  INITIAL_COLLECTION_REQUESTS,
  DataCollectionRequest
} from '@/data/collectionQueue';
import {
  Inbox,
  Clock,
  CheckCircle2,
  AlertTriangle,
  UploadCloud,
  FileCheck,
  Search,
  Filter,
  Building,
  UserCheck,
  Send,
  AlertCircle,
  XCircle,
  Eye
} from 'lucide-react';
import SubmitDataModal from '@/components/SubmitDataModal';
import ReviewDataModal from '@/components/ReviewDataModal';

export default function DataCollectionPage() {
  const [requests, setRequests] = useState<DataCollectionRequest[]>(INITIAL_COLLECTION_REQUESTS);
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedBU, setSelectedBU] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [submittingRequest, setSubmittingRequest] = useState<DataCollectionRequest | null>(null);
  const [reviewingRequest, setReviewingRequest] = useState<DataCollectionRequest | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter requests
  const filteredRequests = requests.filter((req) => {
    if (selectedStatus !== 'ALL' && req.status !== selectedStatus) return false;
    if (selectedBU !== 'ALL' && req.businessUnit !== selectedBU) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        req.id.toLowerCase().includes(q) ||
        req.metricCode.toLowerCase().includes(q) ||
        req.metricName.toLowerCase().includes(q) ||
        req.assignedTo.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Action: Handle BU Owner submission
  const handleDataSubmitted = (requestId: string, value: string, notes: string, fileName: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status: 'Submitted',
              submittedValue: value,
              methodologyNotes: notes,
              supportingDocument: fileName,
              isOutlier: false
            }
          : r
      )
    );
    showToast(`Request ${requestId} submitted successfully. Moved to Sustainability Manager review queue.`);
  };

  // Action: Handle Manager approval
  const handleApproveData = (requestId: string, comments: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status: 'Approved',
              reviewComment: comments
            }
          : r
      )
    );
    showToast(`Data verified & approved for ${requestId}! Incorporated into corporate disclosure registers.`);
  };

  // Action: Handle Manager rejection
  const handleRejectData = (requestId: string, comments: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status: 'In Progress',
              reviewComment: `Returned with comments: ${comments}`
            }
          : r
      )
    );
    showToast(`Metric ${requestId} returned to BU owner with audit notes.`);
  };

  const getStatusBadge = (status: DataCollectionRequest['status']) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Submitted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Pending':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'Overdue':
        return 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
    }
  };

  const getFrameworkBadge = (framework: DataCollectionRequest['framework']) => {
    switch (framework) {
      case 'GRI':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'SASB':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'TCFD':
        return 'bg-teal-50 text-teal-700 border-teal-200';
    }
  };

  const pendingCount = requests.filter(r => r.status === 'Pending' || r.status === 'In Progress').length;
  const submittedCount = requests.filter(r => r.status === 'Submitted').length;
  const approvedCount = requests.filter(r => r.status === 'Approved').length;
  const overdueCount = requests.filter(r => r.status === 'Overdue').length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A2B4A] text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom-3 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Multi-Tenant Data Orchestration
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1A2B4A] tracking-tight mt-1">
            Data Collection & Quality Assurance Hub
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Decentralized operational data request queue, primary evidence intake, and sustainability manager plausibility review.
          </p>
        </div>

        <button
          onClick={() => {
            alert('Bulk automated reminder email dispatched to all active BU assignees!');
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A2B4A] hover:bg-[#142240] text-white text-xs font-semibold shadow-sm transition-colors w-fit"
        >
          <Send className="w-4 h-4" />
          <span>Send Urgent Reminders</span>
        </button>
      </div>

      {/* KPI Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 font-medium">Open Collection Requests</div>
            <div className="text-2xl font-extrabold text-[#1A2B4A] mt-1">{requests.length}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <Inbox className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-200 bg-blue-50/20 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs text-blue-800 font-medium">Submitted for Review</div>
            <div className="text-2xl font-extrabold text-blue-900 mt-1">{submittedCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
            <FileCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs text-emerald-800 font-medium">Approved & Verified</div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">{approvedCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-rose-200 bg-rose-50/20 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-xs text-rose-800 font-medium">Overdue Regulatory Risk</div>
            <div className="text-2xl font-extrabold text-rose-600 mt-1">{overdueCount}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Statuses ({requests.length})</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Submitted">Submitted (Needs Review)</option>
              <option value="Approved">Approved</option>
              <option value="Overdue">Overdue (Critical)</option>
            </select>
          </div>

          {/* BU Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Business Unit:</span>
            <select
              value={selectedBU}
              onChange={(e) => setSelectedBU(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Operating Units</option>
              <option value="India Operations">India Operations</option>
              <option value="UK Operations">UK Operations</option>
              <option value="Southeast Asia">Southeast Asia</option>
              <option value="All BUs (Consolidated)">All BUs (Consolidated)</option>
            </select>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search metric name, code, or owner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Data Requests Queue Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#1A2B4A] text-sm">
              Operational Data Request Intake Queue
            </h2>
            <p className="text-xs text-slate-500">
              Assigned workflows across engineering, workplace facilities, HR analytics, and cloud infrastructure.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {filteredRequests.length} Requests Displayed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-50/70">
                <th className="py-3.5 px-4">Request ID</th>
                <th className="py-3.5 px-3">Framework</th>
                <th className="py-3.5 px-4">Metric & Requirements</th>
                <th className="py-3.5 px-3">Assigned Owner</th>
                <th className="py-3.5 px-3">Business Unit</th>
                <th className="py-3.5 px-3">Status</th>
                <th className="py-3.5 px-3">Due Date</th>
                <th className="py-3.5 px-4 text-right">Action Workflow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRequests.map((req) => {
                const isOverdue = req.status === 'Overdue' || req.daysRemaining < 0;
                return (
                  <tr key={req.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-700">
                      {req.id}
                    </td>

                    <td className="py-3.5 px-3">
                      <span className={`inline-flex px-2 py-0.5 rounded font-bold border text-[10px] ${getFrameworkBadge(req.framework)}`}>
                        {req.framework}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 max-w-sm">
                      <div className="font-mono font-bold text-[#1A2B4A] text-[11px]">
                        {req.metricCode}
                      </div>
                      <div className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {req.metricName}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5" title={req.unitOfMeasure}>
                        Unit: {req.unitOfMeasure}
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="font-semibold text-slate-800">{req.assignedTo}</div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[130px]" title={req.assignedRole}>
                        {req.assignedRole}
                      </div>
                    </td>

                    <td className="py-3.5 px-3 text-slate-700 font-medium">
                      {req.businessUnit}
                    </td>

                    <td className="py-3.5 px-3">
                      <span className={`inline-flex px-2 py-0.5 rounded font-bold border text-[10px] ${getStatusBadge(req.status)}`}>
                        {req.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="font-medium text-slate-800">{req.dueDate}</div>
                      <div className={`text-[10px] font-semibold ${isOverdue ? 'text-rose-600' : 'text-slate-400'}`}>
                        {req.daysRemaining < 0 ? `${Math.abs(req.daysRemaining)} days overdue` : `${req.daysRemaining} days left`}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      {req.status === 'Submitted' ? (
                        <button
                          onClick={() => setReviewingRequest(req)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-xs"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Review Data</span>
                        </button>
                      ) : req.status === 'Approved' ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold px-2 py-1 bg-emerald-50 rounded-lg text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      ) : (
                        <button
                          onClick={() => setSubmittingRequest(req)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-semibold transition-all border border-emerald-200 hover:border-emerald-600"
                        >
                          <UploadCloud className="w-3 h-3" />
                          <span>Submit Data</span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* BU OWNER DATA SUBMISSION MODAL */}
      {submittingRequest && (
        <SubmitDataModal
          request={submittingRequest}
          onClose={() => setSubmittingRequest(null)}
          onSubmit={handleDataSubmitted}
        />
      )}

      {/* SUSTAINABILITY MANAGER QUALITY REVIEW MODAL */}
      {reviewingRequest && (
        <ReviewDataModal
          request={reviewingRequest}
          onClose={() => setReviewingRequest(null)}
          onApprove={handleApproveData}
          onReject={handleRejectData}
        />
      )}
    </div>
  );
}
