'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BarChart3,
  GitPullRequest,
  Inbox,
  FileSpreadsheet,
  Building2,
  Calendar,
  Bell,
  Download,
  Search,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Leaf,
  ExternalLink,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/esgData';

export default function Navigation() {
  const pathname = usePathname();
  const [selectedBU, setSelectedBU] = useState('All BUs (Consolidated)');
  const [showBUDropdown, setShowBUDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { href: '/', label: 'Compliance Dashboard', icon: LayoutDashboard, badge: 'GRI/SASB/TCFD' },
    { href: '/metrics', label: 'ESG Metrics Hub', icon: BarChart3, badge: 'Scope 1-3' },
    { href: '/frameworks', label: 'Framework Mapper', icon: GitPullRequest, badge: '198 Stds' },
    { href: '/collection', label: 'Data Collection', icon: Inbox, badge: '8 Active' },
    { href: '/reports', label: 'Disclosure Reports', icon: FileSpreadsheet, badge: 'Export' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Enterprise Ribbon */}
      <div className="bg-[#1A2B4A] text-white px-4 lg:px-8 py-2 text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Benchmark Gensuite® Partner Portfolio
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300">
            Enterprise ESG & Sustainability Governance Platform
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-emerald-300">SEBI BRSR & SEC Climateline Active</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <span className="text-slate-400">PM Lead:</span>
            <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              Danwantari Sree Satya Sai
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Entity info */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#1A2B4A] flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-[#1A2B4A]">ESGPulse</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Enterprise
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Compliance & Disclosure Engine</p>
              </div>
            </Link>

            {/* Corporate Entity Header Details */}
            <div className="hidden xl:flex items-center gap-3 pl-6 border-l border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>TechCorp Industries Ltd</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="bg-slate-100 text-slate-800 font-semibold px-2 py-0.5 rounded">FY 2025-26</span>
              </div>
            </div>
          </div>

          {/* Business Unit Selector & Header Tools */}
          <div className="flex items-center gap-3">
            {/* Business Unit Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowBUDropdown(!showBUDropdown)}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                <span className="max-w-[140px] truncate">{selectedBU}</span>
                <ChevronDown className="w-3 h-3 text-emerald-700" />
              </button>

              {showBUDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 text-xs animate-in fade-in slide-in-from-top-2">
                  <div className="px-2 py-1.5 font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    Select Reporting Scope
                  </div>
                  {COMPANY_INFO.businessUnits.map((bu) => (
                    <button
                      key={bu.id}
                      onClick={() => {
                        setSelectedBU(bu.name);
                        setShowBUDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                        selectedBU === bu.name
                          ? 'bg-emerald-600 text-white font-medium'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{bu.name}</div>
                        <div className={`text-[10px] ${selectedBU === bu.name ? 'text-emerald-100' : 'text-slate-400'}`}>
                          {bu.location} • {bu.employees.toLocaleString()} FTEs
                        </div>
                      </div>
                      {selectedBU === bu.name && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Audit alerts & regulatory deadlines"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-slate-800">Compliance Audit Alerts</span>
                    <span className="text-[10px] bg-rose-100 text-rose-700 font-semibold px-1.5 py-0.5 rounded">
                      2 Urgent Gaps
                    </span>
                  </div>
                  <div className="space-y-2.5 mt-2.5">
                    <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-900">
                      <div className="flex items-center gap-1.5 font-semibold text-rose-700">
                        <AlertTriangle className="w-3.5 h-3.5" /> TCFD Physical Resilience
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        UK Docklands flood scenario model is 9 days overdue.
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-amber-50/70 border border-amber-100 text-amber-900">
                      <div className="flex items-center gap-1.5 font-semibold text-amber-700">
                        <AlertTriangle className="w-3.5 h-3.5" /> GRI 305-3 Scope 3 Boundaries
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Purchased Goods carbon factors need Ernst & Young sign-off in 28 days.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Export CTA */}
            <Link
              href="/reports"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1A2B4A] hover:bg-[#132038] text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Package</span>
            </Link>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-4 border-t border-slate-100 overflow-x-auto py-1 scrollbar-none">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                    isActive
                      ? 'bg-emerald-700/80 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {item.badge}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
