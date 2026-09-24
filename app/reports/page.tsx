'use client';

import React, { useState } from 'react';
import {
  INITIAL_REPORT_HISTORY,
  GeneratedReport
} from '@/data/reportHistory';
import {
  GRI_DISCLOSURES,
  SASB_STANDARDS,
  TCFD_RECOMMENDATIONS
} from '@/data/frameworksData';
import { COMPANY_INFO, FIVE_YEAR_EMISSIONS } from '@/data/esgData';
import {
  FileSpreadsheet,
  Download,
  FileText,
  FileCode,
  Calendar,
  Building,
  CheckCircle2,
  Clock,
  Printer,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Eye
} from 'lucide-react';

export default function DisclosureReportsPage() {
  const [reports, setReports] = useState<GeneratedReport[]>(INITIAL_REPORT_HISTORY);
  const [selectedFramework, setSelectedFramework] = useState<
    'GRI Standards' | 'SASB (Technology)' | 'TCFD Climate Disclosure' | 'Integrated ESG Report'
  >('GRI Standards');
  const [selectedYear, setSelectedYear] = useState('FY 2025-26');
  const [selectedScope, setSelectedScope] = useState('All BUs (Consolidated)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activePreview, setActivePreview] = useState<'GRI' | 'SASB' | 'TCFD'>('GRI');

  // Generate Report Handler
  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newReport: GeneratedReport = {
        id: `RPT-${Date.now().toString().slice(-6)}`,
        reportTitle: `${selectedFramework} Comprehensive Disclosure Package`,
        framework: selectedFramework,
        reportingYear: selectedYear,
        scope: selectedScope,
        generatedDate: new Date().toISOString().split('T')[0],
        generatedBy: 'Danwantari Sree Satya Sai',
        status: 'Draft',
        fileSize: selectedFramework === 'Integrated ESG Report' ? '14.8 MB' : '3.8 MB',
        disclosuresIncluded:
          selectedFramework === 'GRI Standards'
            ? 89
            : selectedFramework === 'SASB (Technology)'
            ? 29
            : selectedFramework === 'TCFD Climate Disclosure'
            ? 13
            : 131,
        complianceScore:
          selectedFramework === 'GRI Standards'
            ? 67
            : selectedFramework === 'SASB (Technology)'
            ? 71
            : selectedFramework === 'TCFD Climate Disclosure'
            ? 54
            : 69,
        summary: `Export package generated for ${selectedScope} under ${selectedFramework} guidelines. Compliant disclosures and raw telemetry compiled for external assurance.`
      };

      setReports([newReport, ...reports]);
      setIsGenerating(false);
      alert(`Report generated successfully! Added to Report History with ID ${newReport.id}.`);
    }, 1200);
  };

  // Export handlers
  const handleExportCSV = () => {
    let rows: string[][] = [];
    if (activePreview === 'GRI') {
      rows = [
        ['Standard ID', 'Category', 'Disclosure Title', 'Status', 'Reported Value', 'Data Source', 'Assurance'],
        ...GRI_DISCLOSURES.map(g => [
          `"${g.code}"`,
          `"${g.category}"`,
          `"${g.title}"`,
          `"${g.status}"`,
          `"${g.reportedValue.replace(/"/g, '""')}"`,
          `"${g.dataSource}"`,
          `"${g.verificationStatus}"`
        ])
      ];
    } else if (activePreview === 'SASB') {
      rows = [
        ['Standard Code', 'Topic', 'Accounting Metric', 'Status', 'Value', 'Data Source'],
        ...SASB_STANDARDS.map(s => [
          `"${s.code}"`,
          `"${s.category}"`,
          `"${s.title}"`,
          `"${s.status}"`,
          `"${s.reportedValue.replace(/"/g, '""')}"`,
          `"${s.dataSource}"`
        ])
      ];
    } else {
      rows = [
        ['Pillar', 'Recommendation Code', 'Title', 'Status', 'Reported Value', 'Assurance Notes'],
        ...TCFD_RECOMMENDATIONS.map(t => [
          `"${t.category}"`,
          `"${t.code}"`,
          `"${t.title}"`,
          `"${t.status}"`,
          `"${t.reportedValue.replace(/"/g, '""')}"`,
          `"${t.auditNotes}"`
        ])
      ];
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ESGPulse_${activePreview}_Disclosure_FY25-26.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJSON = () => {
    const payload = {
      entity: COMPANY_INFO.name,
      reportingYear: selectedYear,
      boundary: selectedScope,
      exportDate: new Date().toISOString(),
      framework: activePreview,
      disclosures:
        activePreview === 'GRI'
          ? GRI_DISCLOSURES
          : activePreview === 'SASB'
          ? SASB_STANDARDS
          : TCFD_RECOMMENDATIONS,
      emissionsBaseline: FIVE_YEAR_EMISSIONS
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `ESGPulse_${activePreview}_XBRL_Payload.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.removeChild(downloadAnchor);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Statutory Disclosure & Filing Engine
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1A2B4A] tracking-tight mt-1">
            Disclosure Reports & Regulatory Exports
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Generate compliant disclosure packages formatted per GRI Universal Standards, SASB Technology sector, or TCFD 4-pillar narrative.
          </p>
        </div>

        {/* Global Export Buttons */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <button
            onClick={handlePrintPDF}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print / PDF View</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 shadow-xs transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Excel / CSV</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1A2B4A] hover:bg-[#142240] text-white font-semibold shadow-xs transition-colors"
          >
            <FileCode className="w-4 h-4 text-emerald-400" />
            <span>JSON (XBRL Ready)</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: REPORT GENERATOR CONTROLS */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base font-bold text-[#1A2B4A]">
              Report Configuration Engine
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Step 1 of 2: Define Filing Parameters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 text-xs">
          {/* Framework Choice */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">
              Target Framework Architecture *
            </label>
            <select
              value={selectedFramework}
              onChange={(e) => {
                const fw = e.target.value as any;
                setSelectedFramework(fw);
                if (fw.includes('GRI')) setActivePreview('GRI');
                else if (fw.includes('SASB')) setActivePreview('SASB');
                else if (fw.includes('TCFD')) setActivePreview('TCFD');
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="GRI Standards">GRI Standards (Universal & Topic Specific)</option>
              <option value="SASB (Technology)">SASB Software & IT Services (TC-SI)</option>
              <option value="TCFD Climate Disclosure">TCFD Climate Risk & Governance (4 Pillars)</option>
              <option value="Integrated ESG Report">Comprehensive Integrated Annual Report</option>
            </select>
          </div>

          {/* Reporting Period */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">
              Reporting Fiscal Year *
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="FY 2025-26">FY 2025-26 (Current Active Period)</option>
              <option value="FY 2024-25">FY 2024-25 (Prior Audited Period)</option>
              <option value="FY 2023-24">FY 2023-24 (Historical Baseline)</option>
            </select>
          </div>

          {/* Business Unit Scope */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">
              Organizational Boundary Scope *
            </label>
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All BUs (Consolidated)">All BUs (Consolidated - Global)</option>
              <option value="India Operations">India Operations Only</option>
              <option value="UK Operations">UK Operations Only</option>
              <option value="Southeast Asia">Southeast Asia Only</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-500">
            Package will bundle completed primary indicators, assurance statements, and audit notes.
          </div>
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm"
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            <span>{isGenerating ? 'Compiling Disclosure Package...' : 'Generate Report'}</span>
          </button>
        </div>
      </div>

      {/* SECTION 2: LIVE REPORT PREVIEW */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
        <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-[#1A2B4A]">
                Disclosure Package Preview
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Formatted according to official {activePreview} reporting schema.
            </p>
          </div>

          {/* Format Selector Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs w-fit">
            <button
              onClick={() => setActivePreview('GRI')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activePreview === 'GRI'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              GRI Content Index
            </button>
            <button
              onClick={() => setActivePreview('SASB')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activePreview === 'SASB'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SASB TC-SI Table
            </button>
            <button
              onClick={() => setActivePreview('TCFD')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activePreview === 'TCFD'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              TCFD 4-Pillar Narrative
            </button>
          </div>
        </div>

        {/* PREVIEW CONTAINER */}
        <div className="mt-5 p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 font-sans text-xs space-y-6">
          {/* Document Cover Header */}
          <div className="pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Official Regulatory Disclosure Filing
              </span>
              <h3 className="text-lg font-bold text-[#1A2B4A]">
                {COMPANY_INFO.name} — {activePreview} Disclosure Index
              </h3>
              <p className="text-slate-500">
                Reporting Period: {selectedYear} | Boundary: {selectedScope}
              </p>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                Limited Assurance: DNV GL
              </span>
            </div>
          </div>

          {/* PREVIEW 1: GRI CONTENT INDEX */}
          {activePreview === 'GRI' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 leading-relaxed italic bg-blue-50/60 p-3 rounded-lg border border-blue-200">
                TechCorp Industries Ltd has reported in accordance with the GRI Standards for the period 1 April 2025 to 31 March 2026.
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs bg-white rounded-lg border border-slate-200">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-100/70">
                      <th className="py-2.5 px-3">GRI Standard</th>
                      <th className="py-2.5 px-3">Disclosure Title</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-4">Reported Metric / Value</th>
                      <th className="py-2.5 px-3">Assurance Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {GRI_DISCLOSURES.filter(x => x.status === 'Complete').map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-mono font-bold text-blue-700">{item.code}</td>
                        <td className="py-2.5 px-3 font-semibold text-slate-800 max-w-xs">{item.title}</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                            {item.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-slate-700 font-mono text-[11px] max-w-sm">{item.reportedValue}</td>
                        <td className="py-2.5 px-3 text-slate-500 text-[11px]">{item.verificationStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PREVIEW 2: SASB TECH METRICS TABLE */}
          {activePreview === 'SASB' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 leading-relaxed italic bg-purple-50/60 p-3 rounded-lg border border-purple-200">
                SASB Software & IT Services (TC-SI) Industry Standards Table. Reflects enterprise environmental footprint, data privacy, and systemic risk.
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs bg-white rounded-lg border border-slate-200">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-100/70">
                      <th className="py-2.5 px-3">Topic</th>
                      <th className="py-2.5 px-3">Accounting Metric Code</th>
                      <th className="py-2.5 px-4">Standard Metric</th>
                      <th className="py-2.5 px-4">Certified Value</th>
                      <th className="py-2.5 px-3">Audit Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SASB_STANDARDS.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-medium text-slate-600">{s.category}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-purple-700">{s.code}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-800 max-w-xs">{s.title}</td>
                        <td className="py-2.5 px-4 text-slate-700 font-mono text-[11px]">{s.reportedValue}</td>
                        <td className="py-2.5 px-3 text-slate-500 text-[11px]">{s.dataSource}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PREVIEW 3: TCFD 4-PILLAR NARRATIVE */}
          {activePreview === 'TCFD' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 leading-relaxed italic bg-teal-50/60 p-3 rounded-lg border border-teal-200">
                Task Force on Climate-related Financial Disclosures (TCFD) Comprehensive Report covering Governance, Strategy, Risk Management, and Metrics & Targets.
              </div>

              <div className="space-y-4">
                {TCFD_RECOMMENDATIONS.slice(0, 4).map((rec) => (
                  <div key={rec.id} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded text-[11px]">
                          {rec.code}
                        </span>
                        <h4 className="font-bold text-slate-900 text-xs">{rec.title}</h4>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{rec.category}</span>
                    </div>
                    <p className="text-slate-700 font-mono text-[11px] bg-slate-50 p-2.5 rounded border border-slate-100">
                      {rec.disclosureDraftText}
                    </p>
                    <div className="text-[11px] text-slate-500 flex justify-between">
                      <span>Quantitative Metric: <strong className="text-emerald-800">{rec.reportedValue}</strong></span>
                      <span>Assurance: {rec.verificationStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 3: REPORT HISTORY */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <h2 className="text-base font-bold text-[#1A2B4A]">
              Historical Disclosure Reports & Version Control
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {reports.length} Reports Recorded
          </span>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-semibold bg-slate-50/70">
                <th className="py-3 px-3">Report ID</th>
                <th className="py-3 px-4">Report Title & Framework</th>
                <th className="py-3 px-3">Reporting Period</th>
                <th className="py-3 px-3">Boundary Scope</th>
                <th className="py-3 px-3">Generated Date</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-4 text-right">Downloads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-3 font-mono font-bold text-slate-700">
                    {report.id}
                  </td>
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="font-bold text-[#1A2B4A]">{report.reportTitle}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{report.summary}</div>
                  </td>
                  <td className="py-3.5 px-3 font-medium text-slate-700">{report.reportingYear}</td>
                  <td className="py-3.5 px-3 text-slate-600">{report.scope}</td>
                  <td className="py-3.5 px-3 text-slate-500">{report.generatedDate}</td>
                  <td className="py-3.5 px-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      report.status === 'Submitted to Regulator'
                        ? 'bg-purple-100 text-purple-800'
                        : report.status === 'Final'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={handleExportCSV}
                        title="Download CSV raw matrix"
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleExportJSON}
                        title="Download JSON schema"
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handlePrintPDF}
                        title="Print / View PDF"
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      >
                        <Printer className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
