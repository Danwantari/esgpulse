export interface GeneratedReport {
  id: string;
  reportTitle: string;
  framework: 'GRI Standards' | 'SASB (Technology)' | 'TCFD Climate Disclosure' | 'Integrated ESG Report';
  reportingYear: string;
  scope: string;
  generatedDate: string;
  generatedBy: string;
  status: 'Draft' | 'Final' | 'Submitted to Regulator';
  fileSize: string;
  disclosuresIncluded: number;
  complianceScore: number;
  pdfUrl?: string;
  excelUrl?: string;
  jsonUrl?: string;
  summary: string;
}

export const INITIAL_REPORT_HISTORY: GeneratedReport[] = [
  {
    id: 'RPT-2026-GRI-D1',
    reportTitle: 'GRI Universal Standards FY25-26 Preliminary Disclosure Index',
    framework: 'GRI Standards',
    reportingYear: 'FY 2025-26',
    scope: 'All BUs (Consolidated)',
    generatedDate: '2026-09-18',
    generatedBy: 'Danwantari Sree Satya Sai',
    status: 'Draft',
    fileSize: '4.2 MB',
    disclosuresIncluded: 89,
    complianceScore: 67,
    summary: 'Preliminary compilation of 89 completed GRI disclosures across economic, environmental, and social pillars with data gap assignments noted for auditor review.'
  },
  {
    id: 'RPT-2026-TCFD-D2',
    reportTitle: 'TCFD Climate Resilience & Transition Strategy Working Draft',
    framework: 'TCFD Climate Disclosure',
    reportingYear: 'FY 2025-26',
    scope: 'All BUs (Consolidated)',
    generatedDate: '2026-09-14',
    generatedBy: 'Danwantari Sree Satya Sai',
    status: 'Draft',
    fileSize: '2.8 MB',
    disclosuresIncluded: 13,
    complianceScore: 54,
    summary: 'Four-pillar narrative report detailing Board governance, 1.5°C climate scenario sensitivity, and Scope 1-3 GHG performance trajectories.'
  },
  {
    id: 'RPT-2025-SASB-F1',
    reportTitle: 'SASB Software & IT Services (TC-SI) Statutory ESG Filing',
    framework: 'SASB (Technology)',
    reportingYear: 'FY 2024-25',
    scope: 'All BUs (Consolidated)',
    generatedDate: '2025-10-12',
    generatedBy: 'Global Sustainability Council',
    status: 'Submitted to Regulator',
    fileSize: '3.6 MB',
    disclosuresIncluded: 41,
    complianceScore: 92,
    summary: 'Final SEC/MCA aligned disclosure containing data center energy consumption, user privacy metrics, cybersecurity disclosures, and workforce demographics.'
  },
  {
    id: 'RPT-2025-INTEG-F2',
    reportTitle: 'TechCorp Comprehensive Integrated Annual ESG & BRSR Report',
    framework: 'Integrated ESG Report',
    reportingYear: 'FY 2024-25',
    scope: 'All BUs (Consolidated)',
    generatedDate: '2025-11-04',
    generatedBy: 'Corporate Secretariat & Sustainability Office',
    status: 'Final',
    fileSize: '12.4 MB',
    disclosuresIncluded: 186,
    complianceScore: 88,
    summary: 'Full stakeholder publication combining SEBI Business Responsibility and Sustainability Report (BRSR Core) with GRI and SASB cross-reference indexes.'
  }
];
