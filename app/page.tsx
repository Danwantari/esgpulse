'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Download,
  Flame,
  CheckCircle2,
  BarChart,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, FRAMEWORK_COMPLIANCE } from '@/data/esgData';
import FrameworkCard from '@/components/FrameworkCard';
import ComplianceHeatmap from '@/components/ComplianceHeatmap';
import PriorityGapList from '@/components/PriorityGapList';
import TargetProgressCard from '@/components/TargetProgressCard';

export default function ComplianceDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Signature Enterprise Header */}
      <div className="bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A] to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/50 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/30">
                FY 2025-26 Regulatory Reporting Cycle
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">SEBI BRSR / CSRD / SEC Scope 1-3 Aligned</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {COMPANY_INFO.name}
            </h1>

            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Consolidated ESG compliance posture across 3 operating regions (India, UK, Southeast Asia). 
              Tracking 198 disclosure requirements mapped across GRI Universal Standards, SASB Technology sector, and TCFD pillars.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sector: <strong>{COMPANY_INFO.sector}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Headcount: <strong>{COMPANY_INFO.totalEmployees.toLocaleString()} Global FTEs</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Assurance: <strong>Limited (EY & DNV GL)</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[210px]">
            <Link
              href="/reports"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-950/40"
            >
              <Download className="w-4 h-4" />
              <span>Generate Disclosure Report</span>
            </Link>

            <Link
              href="/collection"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/15"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Initiate Data Collection Pulse</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Framework Compliance Cards */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-[#1A2B4A]">
              Framework Compliance Status
            </h2>
            <p className="text-xs text-slate-500">
              Benchmark Gensuite multi-standard gap analysis across the three primary reporting architectures.
            </p>
          </div>
          <Link
            href="/frameworks"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Explore all standards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FRAMEWORK_COMPLIANCE.map((fw) => (
            <FrameworkCard key={fw.id} data={fw} />
          ))}
        </div>
      </section>

      {/* Signature Feature: Compliance Heatmap */}
      <section>
        <ComplianceHeatmap />
      </section>

      {/* Priority Action List: Top 10 Critical Gaps */}
      <section>
        <PriorityGapList />
      </section>

      {/* Strategic Annual Targets Progress */}
      <section>
        <TargetProgressCard />
      </section>
    </div>
  );
}
