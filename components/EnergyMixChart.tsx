'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ENERGY_CONSUMPTION_BY_BU } from '@/data/esgData';

export default function EnergyMixChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#1A2B4A] text-white p-3 rounded-xl shadow-xl text-xs border border-slate-700">
          <div className="font-bold border-b border-slate-700 pb-1 mb-1.5 text-emerald-400">
            {label}
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-300">Renewable Energy:</span>
              <span className="font-bold text-emerald-400">{data.renewable.toLocaleString()} MWh</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-300">Grid Non-Renewable:</span>
              <span className="font-bold text-slate-300">{data.gridNonRenewable.toLocaleString()} MWh</span>
            </div>
            <div className="pt-1 border-t border-slate-700 flex items-center justify-between gap-4 font-bold">
              <span>Total Energy:</span>
              <span>{data.total.toLocaleString()} MWh</span>
            </div>
            <div className="text-[11px] text-emerald-300 font-semibold">
              Clean Power Share: {data.shareRenewable}%
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
        <BarChart
          data={ENERGY_CONSUMPTION_BY_BU}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis
            dataKey="bu"
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
          <Bar
            dataKey="renewable"
            name="Renewable Power (PPA & Rooftop)"
            stackId="energy"
            fill="#16A34A"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="gridNonRenewable"
            name="Conventional Grid Mix"
            stackId="energy"
            fill="#64748B"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
