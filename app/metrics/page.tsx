'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Leaf,
  Users,
  Building,
  TrendingDown,
  TrendingUp,
  Minus,
  CheckCircle2,
  AlertCircle,
  Download,
  Filter,
  Flame,
  Zap,
  Droplets,
  Recycle,
  HeartHandshake,
  GraduationCap,
  Shield,
  Lock,
  Scale
} from 'lucide-react';
import CarbonTrendChart from '@/components/CarbonTrendChart';
import EnergyMixChart from '@/components/EnergyMixChart';
import { CSR_PROGRAM_BREAKDOWN } from '@/data/esgData';

export default function EsgMetricsHubPage() {
  const [activeTab, setActiveTab] = useState<'environmental' | 'social' | 'governance'>('environmental');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              ESG Performance Repository
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1A2B4A] tracking-tight mt-1">
            Enterprise ESG Metrics Hub
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Consolidated non-financial accounting data across Environmental, Social, and Governance pillars with multi-framework audit linkages.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
          <button
            onClick={() => setActiveTab('environmental')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'environmental'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Environmental (E)</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'social'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Social (S)</span>
          </button>

          <button
            onClick={() => setActiveTab('governance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'governance'
                ? 'bg-[#1A2B4A] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Governance (G)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ENVIRONMENTAL */}
      {activeTab === 'environmental' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-left-2 duration-300">
          {/* Section 1: Emissions */}
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Greenhouse Gas (GHG) Emissions & Carbon Footprint
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Accounting boundary: Operational control. Methodologies: GHG Protocol Corporate Standard & IPCC Fifth Assessment Report (AR5) GWPs.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">GRI 305</span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">SASB TC-SI-130a</span>
                <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-700 font-bold border border-teal-200">TCFD Metrics</span>
              </div>
            </div>

            {/* Scope 1, 2, 3 Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
              {/* Scope 1 */}
              <div className="p-5 rounded-xl border border-emerald-200/80 bg-emerald-50/40 hover:bg-white hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      Scope 1: Direct Emissions
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      <TrendingDown className="w-3.5 h-3.5" /> -12.3% YoY
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-3xl font-extrabold text-[#1A2B4A]">12,450</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">tCO2e</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Prior year: <strong className="text-slate-800">14,200 tCO2e</strong> (1,750 tCO2e saved)
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-slate-500">
                  Source: Backup diesel generators & owned transport fleet
                </div>
              </div>

              {/* Scope 2 */}
              <div className="p-5 rounded-xl border border-emerald-200/80 bg-emerald-50/40 hover:bg-white hover:border-emerald-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      Scope 2: Purchased Electricity
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      <TrendingDown className="w-3.5 h-3.5" /> -5.1% YoY
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-3xl font-extrabold text-[#1A2B4A]">8,730</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">tCO2e (market)</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Prior year: <strong className="text-slate-800">9,200 tCO2e</strong> (Location: 29,820 tCO2e)
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-slate-500">
                  Mitigated via 20,310 MWh of certified renewable energy contracts
                </div>
              </div>

              {/* Scope 3 */}
              <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/40 hover:bg-white hover:border-rose-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-900 bg-rose-100 px-2.5 py-0.5 rounded-md">
                      Scope 3: Value Chain
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">
                      <TrendingUp className="w-3.5 h-3.5" /> +2.1% YoY
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-3xl font-extrabold text-[#1A2B4A]">67,200</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">tCO2e</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Prior year: <strong className="text-slate-800">65,800 tCO2e</strong> (+1,400 tCO2e expansion)
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] text-slate-500">
                  Primary driver: Post-COVID client travel & third-party cloud hosting
                </div>
              </div>
            </div>

            {/* 5-Year Carbon Footprint Trajectory Chart */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B4A]">
                    5-Year Consolidated Carbon Footprint Trajectory (FY22 – FY26)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Gross historical emissions (tCO2e) categorized by Scope 1 direct, Scope 2 electricity, and Scope 3 supply chain.
                  </p>
                </div>
                <div className="text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                  Current Footprint: <strong className="text-emerald-700">88,380 tCO2e</strong>
                </div>
              </div>
              <CarbonTrendChart />
            </div>
          </section>

          {/* Section 2: Energy */}
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Energy Management & Clean Power Procurement
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Electricity, diesel fuel, and clean power generation across 8 major technical campuses.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">GRI 302-1</span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">TC-SI-130a.1</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 font-medium">Total Energy Consumption</div>
                <div className="text-2xl font-extrabold text-[#1A2B4A] mt-1">47,230 MWh</div>
                <div className="text-[11px] text-slate-400 mt-1">170,028 Gigajoules (GJ)</div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <div className="text-xs text-emerald-800 font-medium">Renewable Energy Share</div>
                <div className="text-2xl font-extrabold text-emerald-700 mt-1">20,310 MWh (43.0%)</div>
                <div className="text-[11px] text-emerald-600 mt-1">Target: 60.0% by 2026</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 font-medium">Energy Intensity Ratio</div>
                <div className="text-2xl font-extrabold text-[#1A2B4A] mt-1">0.82 MWh / FTE</div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1">Improved 6.8% YoY</div>
              </div>
            </div>

            {/* Stacked Bar Chart by Business Unit */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-[#1A2B4A]">
                  Energy Mix Consumption by Business Unit (MWh)
                </h3>
                <p className="text-xs text-slate-500">
                  Renewable power purchase agreements (PPA) versus conventional utility grid electricity.
                </p>
              </div>
              <EnergyMixChart />
            </div>
          </section>

          {/* Section 3: Water and Waste */}
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Water Stewardship & Waste Circularity
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Campus water recycling through Sewage Treatment Plants (STP) and zero-waste-to-landfill diversion.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">GRI 303 & 306</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
              {/* Water Consumed */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
                <div className="flex items-center gap-1.5 text-xs text-blue-800 font-semibold mb-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-600" /> Total Water Consumed
                </div>
                <div className="text-2xl font-extrabold text-[#1A2B4A]">1,200,000 L</div>
                <div className="text-[11px] text-slate-500 mt-1">1.2M Liters across 6 campuses</div>
              </div>

              {/* Water Recycled */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                  <Recycle className="w-3.5 h-3.5 text-emerald-600" /> Water Recycled & Reused
                </div>
                <div className="text-2xl font-extrabold text-emerald-700">340,000 L (28.3%)</div>
                <div className="text-[11px] text-emerald-600 mt-1">Cooling towers & landscaping</div>
              </div>

              {/* Waste Generated */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 font-semibold mb-1">Total Waste Generated</div>
                <div className="text-2xl font-extrabold text-[#1A2B4A]">450 Tons</div>
                <div className="text-[11px] text-slate-500 mt-1">E-waste, paper, food, plastics</div>
              </div>

              {/* Waste Recycled */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                  <Recycle className="w-3.5 h-3.5 text-emerald-600" /> Diverted from Landfill
                </div>
                <div className="text-2xl font-extrabold text-emerald-700">312 Tons (69.3%)</div>
                <div className="text-[11px] text-emerald-600 mt-1">R2 certified e-waste recyclers</div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: SOCIAL */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-2 duration-300">
          {/* Workforce Section */}
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Workforce Demographics, Safety & Development
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Talent retention, gender diversity representation, occupational safety, and employee upskilling.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">GRI 401 & 405</span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">SASB TC-SI-330a</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 font-medium">Total Global Employees</div>
                <div className="text-3xl font-extrabold text-[#1A2B4A] mt-1">24,700</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  New hires: <strong className="text-slate-800">3,200</strong> | Turnover: <strong className="text-emerald-700">8.4%</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
                <div className="text-xs text-purple-800 font-medium">Gender Diversity Representation</div>
                <div className="text-3xl font-extrabold text-purple-900 mt-1">38% Women</div>
                <div className="text-[11px] text-purple-700 mt-1">
                  Women in Leadership: <strong className="text-purple-900">31%</strong> (Target: 40%)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="text-xs text-emerald-800 font-medium">Lost Time Injury Rate (LTIR)</div>
                <div className="text-3xl font-extrabold text-emerald-700 mt-1">0.12</div>
                <div className="text-[11px] text-emerald-700 mt-1">
                  Industry benchmark: 0.35 | Zero fatalities
                </div>
              </div>
            </div>

            {/* Training & Development Banner */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Professional Learning & Training Hours</h4>
                  <p className="text-xs text-slate-600">
                    Average of <strong className="text-blue-900">42 hours</strong> per employee across Cloud, AI, and Sustainability certifications.
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xl font-bold text-blue-900">1,037,400</span>
                <div className="text-[10px] text-blue-700 font-semibold">Total Learning Hours Delivered</div>
              </div>
            </div>
          </section>

          {/* Community & CSR */}
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-500" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Corporate Social Responsibility (CSR) & Community Impact
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Statutory CSR social investments under Section 135 of India Companies Act 2013 and global community outreach.
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
                GRI 413-1
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Highlight Numbers */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Total CSR Financial Investment</div>
                  <div className="text-3xl font-extrabold text-[#1A2B4A] mt-1">₹4.20 Crore</div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">100% statutory budget disbursed</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Direct Community Beneficiaries</div>
                  <div className="text-3xl font-extrabold text-blue-800 mt-1">18,400 Individuals</div>
                  <div className="text-xs text-slate-600 mt-1">Across 42 villages and peri-urban hubs</div>
                </div>
              </div>

              {/* Program Breakdown */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  CSR Program Spend Allocation
                </h4>
                <div className="space-y-3">
                  {CSR_PROGRAM_BREAKDOWN.map((prog) => (
                    <div key={prog.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-700">{prog.name} ({prog.percentage}%)</span>
                        <span className="text-[#1A2B4A]">{prog.spendINR}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${prog.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {prog.beneficiaries.toLocaleString()} verified beneficiaries
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 3: GOVERNANCE */}
      {activeTab === 'governance' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-left-2 duration-300">
          <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold text-[#1A2B4A]">
                    Board Governance, Ethics, Privacy & Anti-Corruption
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Corporate oversight structure, independent directors, whistleblower integrity mechanisms, and cyber hygiene.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">GRI 205 & 418</span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">SASB TC-SI-220 & 230</span>
                <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-700 font-bold border border-teal-200">TCFD Governance</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
              {/* Board Independence */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Board Independence</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">High</span>
                </div>
                <div className="text-3xl font-extrabold text-[#1A2B4A] mt-2">67%</div>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>6 of 9</strong> Board directors are independent non-executives.
                </p>
              </div>

              {/* Women on Board */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Women on Board</span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">Active Focus</span>
                </div>
                <div className="text-3xl font-extrabold text-[#1A2B4A] mt-2">22%</div>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>2 of 9</strong> Board directors are women. Board committee search underway.
                </p>
              </div>

              {/* Anti-corruption training */}
              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-800">Anti-Corruption Training</span>
                  <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">Complete</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-800 mt-2">98.7%</div>
                <p className="text-xs text-slate-600 mt-1">
                  24,380 active employees certified in annual anti-bribery protocols.
                </p>
              </div>

              {/* Whistleblower cases */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Whistleblower Cases</span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <div className="text-3xl font-extrabold text-[#1A2B4A] mt-2">12 Cases</div>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>11 resolved</strong> by Ombudsman office, 1 undergoing final committee review.
                </p>
              </div>

              {/* Data breaches */}
              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-800">Customer Data Breaches</span>
                  <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">Zero Incident</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-800 mt-2">0 Breaches</div>
                <p className="text-xs text-slate-600 mt-1">
                  Zero reportable cyber incidents or unauthorized PII disclosures.
                </p>
              </div>

              {/* Policy violations */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Policy Violations</span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Remediated</span>
                </div>
                <div className="text-3xl font-extrabold text-[#1A2B4A] mt-2">3 Violations</div>
                <p className="text-xs text-slate-600 mt-1">
                  All 3 minor procedural violations investigated, closed, and remediated.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
