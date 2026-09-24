'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line
} from 'recharts';
import { FIVE_YEAR_EMISSIONS } from '@/data/esgData';

export default function CarbonTrendChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1A2B4A] text-white p-3 rounded-xl shadow-xl text-xs border border-slate-700">
          <div className="font-bold border-b border-slate-700 pb-1 mb-1.5 text-emerald-400">
            {label}
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Scope 1 (Direct):
              </span>
              <span className="font-bold">{payload[0]?.value?.toLocaleString()} tCO2e</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Scope 2 (Indirect):
              </span>
              <span className="font-bold">{payload[1]?.value?.toLocaleString()} tCO2e</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Scope 3 (Value Chain):
              </span>
              <span className="font-bold">{payload[2]?.value?.toLocaleString()} tCO2e</span>
            </div>
            <div className="pt-1.5 border-t border-slate-700 flex items-center justify-between gap-4 font-bold text-white">
              <span>Total Emissions:</span>
              <span className="text-emerald-300">{payload[3]?.value?.toLocaleString()} tCO2e</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={FIVE_YEAR_EMISSIONS}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="scope1Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0}/>
            </linearGradient>
            <linearGradient id="scope2Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#16A34A" stopOpacity={0.0}/>
            </linearGradient>
            <linearGradient id="scope3Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 11, fill: '#64748B' }}
            axisLine={{ stroke: '#CBD5E1' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#64748B' }}
            axisLine={{ stroke: '#CBD5E1' }}
            tickLine={false}
            tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: 12, paddingBottom: 10 }}
          />
          <Area
            type="monotone"
            dataKey="scope1"
            name="Scope 1 (Direct)"
            stroke="#2563EB"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#scope1Grad)"
          />
          <Area
            type="monotone"
            dataKey="scope2"
            name="Scope 2 (Electricity)"
            stroke="#16A34A"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#scope2Grad)"
          />
          <Area
            type="monotone"
            dataKey="scope3"
            name="Scope 3 (Value Chain)"
            stroke="#7C3AED"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#scope3Grad)"
          />
          <Line
            type="monotone"
            dataKey="total"
            name="Total Carbon Footprint"
            stroke="#1A2B4A"
            strokeWidth={3}
            dot={{ r: 4, fill: '#1A2B4A' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
