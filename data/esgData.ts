export interface FrameworkCompliance {
  id: 'GRI' | 'SASB' | 'TCFD';
  name: string;
  fullName: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  completed: number;
  total: number;
  percentage: number;
  targetYear: string;
  sector: string;
  description: string;
}

export interface HeatmapItem {
  id: string;
  code: string;
  framework: 'GRI' | 'SASB' | 'TCFD';
  pillar: 'Environmental' | 'Social' | 'Governance';
  title: string;
  category: string;
  status: 'compliant' | 'partial' | 'missing' | 'na';
  responsibleTeam: string;
  assignedUnit: string;
  dataSource: string;
  dueDate: string;
  lastUpdated: string;
  value: string;
  auditTrail: string;
}

export interface PriorityGap {
  id: string;
  framework: 'GRI' | 'SASB' | 'TCFD';
  code: string;
  title: string;
  pillar: 'Environmental' | 'Social' | 'Governance';
  gapType: 'Missing Metric' | 'Data Verification Failure' | 'Partial Boundary Coverage' | 'Expired Methodology';
  assignedUnit: string;
  responsibleTeam: string;
  dueDate: string;
  daysRemaining: number;
  regulatoryUrgency: 'High' | 'Critical' | 'Medium';
  impactScore: number;
}

export interface TargetProgress {
  id: string;
  name: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  percentAchieved: number;
  targetYear: string;
  pillar: 'Environmental' | 'Social' | 'Governance';
  baseline: string;
  frameworkRef: string;
  notes: string;
}

export const COMPANY_INFO = {
  name: "TechCorp Industries Ltd",
  reportingYear: "FY 2025-26",
  sector: "Technology & Software Services",
  sasbSector: "Technology & Communications (TC-SI / TC-HW)",
  headquarters: "Bengaluru, India",
  totalEmployees: 24700,
  businessUnits: [
    { id: "all", name: "All BUs (Consolidated)", employees: 24700, location: "Global" },
    { id: "india", name: "India Operations", employees: 16200, location: "Bengaluru, Pune, Hyderabad, Chennai" },
    { id: "uk", name: "UK & European Operations", employees: 4800, location: "London, Manchester" },
    { id: "sea", name: "Southeast Asia Operations", employees: 3700, location: "Singapore, Kuala Lumpur" }
  ]
};

export const FRAMEWORK_COMPLIANCE: FrameworkCompliance[] = [
  {
    id: 'GRI',
    name: 'GRI Standards',
    fullName: 'Global Reporting Initiative (2021 Universal Standards)',
    color: '#2563EB',
    badgeBg: 'bg-blue-50 border-blue-200 text-blue-700',
    badgeText: 'text-blue-700',
    completed: 89,
    total: 133,
    percentage: 67,
    targetYear: 'FY 2025-26',
    sector: 'Multi-Topic Universal & Sector Materiality',
    description: 'Global standard for sustainability impact across economic, environmental, and human rights dimensions.'
  },
  {
    id: 'SASB',
    name: 'SASB (Technology)',
    fullName: 'Sustainability Accounting Standards Board — Software & IT Services',
    color: '#7C3AED',
    badgeBg: 'bg-purple-50 border-purple-200 text-purple-700',
    badgeText: 'text-purple-700',
    completed: 29,
    total: 41,
    percentage: 71,
    targetYear: 'FY 2025-26',
    sector: 'Software & IT Services (TC-SI) / Hardware (TC-HW)',
    description: 'Financial materiality metrics guiding institutional investors on enterprise value drivers.'
  },
  {
    id: 'TCFD',
    name: 'TCFD',
    fullName: 'Task Force on Climate-related Financial Disclosures',
    color: '#0D9488',
    badgeBg: 'bg-teal-50 border-teal-200 text-teal-700',
    badgeText: 'text-teal-700',
    completed: 13,
    total: 24,
    percentage: 54,
    targetYear: 'FY 2025-26',
    sector: 'Climate Governance & Financial Resilience',
    description: 'Structured risk assessment of physical and transition climate risks under 1.5°C and 4°C scenarios.'
  }
];

export const TARGET_PROGRESS_DATA: TargetProgress[] = [
  {
    id: 't-carbon',
    name: 'Carbon Emissions Reduction (Scope 1+2)',
    currentValue: 33.5,
    targetValue: 50.0,
    unit: '% reduction vs FY21 base',
    percentAchieved: 67,
    targetYear: '2030 (SBTi Aligned)',
    pillar: 'Environmental',
    baseline: '31,850 tCO2e (FY21)',
    frameworkRef: 'GRI 305-1, SASB TC-SI-130a.1, TCFD Metrics',
    notes: 'Achieved 67% progress toward target; requires 33% additional reduction across owned facilities and server farms.'
  },
  {
    id: 't-re',
    name: 'Renewable Electricity Consumption',
    currentValue: 43.0,
    targetValue: 60.0,
    unit: '% of total energy',
    percentAchieved: 72,
    targetYear: '2026 Target',
    pillar: 'Environmental',
    baseline: '18% in FY22',
    frameworkRef: 'GRI 302-1, SASB TC-SI-130a.2',
    notes: 'Current 20,310 MWh renewable out of 47,230 MWh total. On track with new solar PPA signing in Karnataka.'
  },
  {
    id: 't-diversity',
    name: 'Gender Diversity in Leadership (VP+)',
    currentValue: 31.0,
    targetValue: 40.0,
    unit: '% women in executive roles',
    percentAchieved: 77.5,
    targetYear: '2026 Target',
    pillar: 'Social',
    baseline: '21% in FY22',
    frameworkRef: 'GRI 405-1, SASB TC-SI-330a.3',
    notes: '31% women in leadership; targeted mentorship pipeline and diverse interview slates actively expanding ratio.'
  },
  {
    id: 't-water',
    name: 'Water Intensity Reduction per Employee',
    currentValue: 22.0,
    targetValue: 30.0,
    unit: '% intensity reduction',
    percentAchieved: 73.3,
    targetYear: '2026 Target',
    pillar: 'Environmental',
    baseline: '62 L/person/day',
    frameworkRef: 'GRI 303-3, GRI 303-5',
    notes: 'Campus greywater recycling in Pune & Bengaluru facility increased water reuse to 28.3% (340,000 Liters).'
  }
];

export const PRIORITY_GAPS: PriorityGap[] = [
  {
    id: 'GAP-01',
    framework: 'TCFD',
    code: 'TCFD-STR-C',
    title: 'Climate Scenario Analysis: Resilience under 1.5°C vs 4°C Physical Shock',
    pillar: 'Environmental',
    gapType: 'Missing Metric',
    assignedUnit: 'UK & European Operations',
    responsibleTeam: 'Enterprise Risk & Strategy',
    dueDate: '2026-10-15',
    daysRemaining: 21,
    regulatoryUrgency: 'Critical',
    impactScore: 94
  },
  {
    id: 'GAP-02',
    framework: 'GRI',
    code: 'GRI 305-3',
    title: 'Scope 3 Category 1: Purchased Goods & Services Embodied Carbon',
    pillar: 'Environmental',
    gapType: 'Partial Boundary Coverage',
    assignedUnit: 'India Operations',
    responsibleTeam: 'Global Procurement & ESG Audits',
    dueDate: '2026-10-22',
    daysRemaining: 28,
    regulatoryUrgency: 'Critical',
    impactScore: 91
  },
  {
    id: 'GAP-03',
    framework: 'SASB',
    code: 'TC-SI-130a.1',
    title: 'Data Center Energy Consumption & Grid Carbon Intensity Coefficients',
    pillar: 'Environmental',
    gapType: 'Data Verification Failure',
    assignedUnit: 'Southeast Asia Operations',
    responsibleTeam: 'Cloud Infrastructure & Facilities',
    dueDate: '2026-10-29',
    daysRemaining: 35,
    regulatoryUrgency: 'High',
    impactScore: 88
  },
  {
    id: 'GAP-04',
    framework: 'GRI',
    code: 'GRI 404-3',
    title: 'Performance & Career Development Reviews Disaggregated by Gender',
    pillar: 'Social',
    gapType: 'Missing Metric',
    assignedUnit: 'UK & European Operations',
    responsibleTeam: 'People Operations & HR Analytics',
    dueDate: '2026-11-05',
    daysRemaining: 42,
    regulatoryUrgency: 'High',
    impactScore: 82
  },
  {
    id: 'GAP-05',
    framework: 'SASB',
    code: 'TC-SI-220a.1',
    title: 'Data Privacy Policies & User Secondary Data Usage Opt-Out Ratios',
    pillar: 'Governance',
    gapType: 'Expired Methodology',
    assignedUnit: 'All BUs (Consolidated)',
    responsibleTeam: 'Chief Privacy Officer / Legal',
    dueDate: '2026-11-12',
    daysRemaining: 49,
    regulatoryUrgency: 'High',
    impactScore: 79
  },
  {
    id: 'GAP-06',
    framework: 'TCFD',
    code: 'TCFD-RM-B',
    title: 'Process for Managing Transition Risks in European Data Center Carbon Tax',
    pillar: 'Governance',
    gapType: 'Partial Boundary Coverage',
    assignedUnit: 'UK & European Operations',
    responsibleTeam: 'Corporate Tax & Compliance',
    dueDate: '2026-11-18',
    daysRemaining: 55,
    regulatoryUrgency: 'Medium',
    impactScore: 75
  },
  {
    id: 'GAP-07',
    framework: 'GRI',
    code: 'GRI 306-3',
    title: 'Hazardous E-Waste Generation & Certified R2-Compliant Recycler Slips',
    pillar: 'Environmental',
    gapType: 'Missing Metric',
    assignedUnit: 'Southeast Asia Operations',
    responsibleTeam: 'Facilities & Workplace IT',
    dueDate: '2026-11-25',
    daysRemaining: 62,
    regulatoryUrgency: 'High',
    impactScore: 74
  },
  {
    id: 'GAP-08',
    framework: 'SASB',
    code: 'TC-SI-550a.2',
    title: 'Total System Downtime & Customer Outage Incident Root-Cause Reports',
    pillar: 'Governance',
    gapType: 'Data Verification Failure',
    assignedUnit: 'India Operations',
    responsibleTeam: 'Site Reliability Engineering (SRE)',
    dueDate: '2026-12-02',
    daysRemaining: 69,
    regulatoryUrgency: 'Medium',
    impactScore: 70
  },
  {
    id: 'GAP-09',
    framework: 'GRI',
    code: 'GRI 205-2',
    title: 'Anti-Corruption Policy Communication & Governance Body Training Logs',
    pillar: 'Governance',
    gapType: 'Missing Metric',
    assignedUnit: 'All BUs (Consolidated)',
    responsibleTeam: 'Internal Ethics & Audit',
    dueDate: '2026-12-10',
    daysRemaining: 77,
    regulatoryUrgency: 'Medium',
    impactScore: 68
  },
  {
    id: 'GAP-10',
    framework: 'TCFD',
    code: 'TCFD-MET-C',
    title: 'Internal Shadow Carbon Price Calculation & Capital Allocation Hurdle',
    pillar: 'Environmental',
    gapType: 'Missing Metric',
    assignedUnit: 'All BUs (Consolidated)',
    responsibleTeam: 'FP&A and Sustainability Council',
    dueDate: '2026-12-20',
    daysRemaining: 87,
    regulatoryUrgency: 'Medium',
    impactScore: 65
  }
];

export const FIVE_YEAR_EMISSIONS = [
  { year: 'FY 2021-22', scope1: 15400, scope2: 10800, scope3: 63100, total: 89300, targetTrajectory: 92000 },
  { year: 'FY 2022-23', scope1: 14900, scope2: 10100, scope3: 64500, total: 89500, targetTrajectory: 88500 },
  { year: 'FY 2023-24', scope1: 14200, scope2: 9200, scope3: 65800, total: 89200, targetTrajectory: 85000 },
  { year: 'FY 2024-25', scope1: 13100, scope2: 8900, scope3: 66400, total: 88400, targetTrajectory: 82000 },
  { year: 'FY 2025-26', scope1: 12450, scope2: 8730, scope3: 67200, total: 88380, targetTrajectory: 78500 }
];

export const ENERGY_CONSUMPTION_BY_BU = [
  { bu: 'India Operations', renewable: 12800, gridNonRenewable: 18600, total: 31400, shareRenewable: 40.8 },
  { bu: 'UK Operations', renewable: 5190, gridNonRenewable: 3460, total: 8650, shareRenewable: 60.0 },
  { bu: 'Southeast Asia', renewable: 2320, gridNonRenewable: 4860, total: 7180, shareRenewable: 32.3 }
];

export const CSR_PROGRAM_BREAKDOWN = [
  { name: 'Digital Literacy & Rural Education', percentage: 40, spendINR: '1.68 Cr', beneficiaries: 8200 },
  { name: 'Vocational Tech & Green Skills Dev', percentage: 35, spendINR: '1.47 Cr', beneficiaries: 6100 },
  { name: 'Community Healthcare & Clean Water', percentage: 25, spendINR: '1.05 Cr', beneficiaries: 4100 }
];
