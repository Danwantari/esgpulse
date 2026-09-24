'use client';

import React from 'react';
import Link from 'next/link';
import { FrameworkCompliance } from '@/data/esgData';
import { ArrowUpRight, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Props {
  data: FrameworkCompliance;
}

export default function FrameworkCard({ data }: Props) {
  const getBadgeStyles = () => {
    switch (data.id) {
      case 'GRI':
        return {
          bg: 'bg-blue-50 border-blue-200 text-blue-800',
          accent: 'bg-blue-600',
          track: 'bg-blue-100',
          hoverBorder: 'hover:border-blue-400',
        };
      case 'SASB':
        return {
          bg: 'bg-purple-50 border-purple-200 text-purple-800',
          accent: 'bg-purple-600',
          track: 'bg-purple-100',
          hoverBorder: 'hover:border-purple-400',
        };
      case 'TCFD':
        return {
          bg: 'bg-teal-50 border-teal-200 text-teal-800',
          accent: 'bg-teal-600',
          track: 'bg-teal-100',
          hoverBorder: 'hover:border-teal-400',
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200 text-slate-800',
          accent: 'bg-slate-600',
          track: 'bg-slate-100',
          hoverBorder: 'hover:border-slate-400',
        };
    }
  };

  const styles = getBadgeStyles();
  const missingCount = data.total - data.completed;

  return (
    <div className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-card-hover ${styles.hoverBorder} flex flex-col justify-between`}>
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md border ${styles.bg}`}>
              <span className={`w-2 h-2 rounded-full ${styles.accent}`}></span>
              {data.name}
            </span>
            <h3 className="text-base font-bold text-[#1A2B4A] mt-2">
              {data.fullName}
            </h3>
          </div>
          <span className="text-3xl font-extrabold text-[#1A2B4A] tracking-tight">
            {data.percentage}%
          </span>
        </div>

        <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Progress Bar */}
        <div className="space-y-1.5 mb-5">
          <div className="flex justify-between text-xs font-medium text-slate-600">
            <span>Disclosures Complete</span>
            <span className="font-semibold text-slate-900">{data.completed} of {data.total}</span>
          </div>
          <div className={`w-full h-2.5 rounded-full ${styles.track} overflow-hidden`}>
            <div
              className={`h-full rounded-full ${styles.accent} transition-all duration-700 ease-out`}
              style={{ width: `${data.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/80 px-2 py-1.5 rounded-lg border border-emerald-100">
            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-medium">{data.completed} Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-700 bg-amber-50/80 px-2 py-1.5 rounded-lg border border-amber-100">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-medium">{missingCount} Gaps/Partial</span>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
        <span className="text-slate-400">{data.sector}</span>
        <Link
          href={`/frameworks?tab=${data.id.toLowerCase()}`}
          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold group"
        >
          View Standards
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
