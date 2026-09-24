import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "ESGPulse — Enterprise ESG Compliance & Reporting Platform",
  description: "Enterprise ESG data aggregation, framework gap analysis (GRI, SASB, TCFD), and compliance tracking platform for Benchmark Gensuite portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F0FDF4] min-h-screen flex flex-col text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <Navigation />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
        
        <footer className="bg-white border-t border-slate-200 mt-16 py-8 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1A2B4A]">ESGPulse</span>
              <span>•</span>
              <span>Enterprise ESG & EHS Compliance Engine</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">Benchmark Gensuite Partner Ecosystem</span>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <span>Frameworks: GRI 2021 | SASB TC-SI | TCFD Recommendations</span>
              <span>Designed & Built by: <strong className="text-slate-700">Danwantari Sree Satya Sai</strong></span>
              <span>Reporting Year: FY 2025-26</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
