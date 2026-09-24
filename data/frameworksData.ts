export interface DisclosureItem {
  id: string;
  framework: 'GRI' | 'SASB' | 'TCFD';
  pillar: 'Environmental' | 'Social' | 'Governance' | 'Economic';
  category: string;
  code: string;
  title: string;
  description: string;
  status: 'Complete' | 'Partial' | 'Missing' | 'Not Applicable';
  dataSource: string;
  lastUpdated: string;
  responsibleTeam: string;
  assignedUnit: string;
  reportedValue: string;
  targetOrBenchmark?: string;
  verificationStatus: 'Audited (Limited Assurance)' | 'Internal Review Complete' | 'Pending Verification' | 'Unverified';
  auditNotes: string;
  disclosureDraftText?: string;
}

export const GRI_DISCLOSURES: DisclosureItem[] = [
  // GRI 200: Economic
  {
    id: 'GRI-201-1',
    framework: 'GRI',
    pillar: 'Economic',
    category: 'GRI 201: Economic Performance',
    code: 'GRI 201-1',
    title: 'Direct economic value generated and distributed (EVG&D)',
    description: 'Revenues, operating costs, employee wages, community investments, retained earnings.',
    status: 'Complete',
    dataSource: 'Audited Financial Statements FY25-26',
    lastUpdated: '2026-08-15',
    responsibleTeam: 'Corporate Finance & Investor Relations',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Revenues: ₹14,280 Cr | Operating costs: ₹8,940 Cr | Employee wages: ₹3,210 Cr | CSR: ₹4.2 Cr',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Verified against statutory Ernst & Young financial audit schedule 14.',
    disclosureDraftText: 'TechCorp generated ₹14,280 Cr in consolidated revenues during FY2025-26. Economic value distributed totaled ₹12,154.2 Cr across operating suppliers, workforce salaries, tax authorities, and CSR outreach.'
  },
  {
    id: 'GRI-201-2',
    framework: 'GRI',
    pillar: 'Economic',
    category: 'GRI 201: Economic Performance',
    code: 'GRI 201-2',
    title: 'Financial implications and other risks and opportunities due to climate change',
    description: 'Transition and physical risks quantifiable in balance sheet scenarios.',
    status: 'Partial',
    dataSource: 'TCFD Climate Scenario Working Group Model',
    lastUpdated: '2026-07-20',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'UK & European Operations',
    reportedValue: 'Estimated ₹34 Cr exposure from EU carbon border adjustments and cooling spikes in data centers',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'UK operations completed impact assessment; India server facilities currently undergoing scenario modeling.',
    disclosureDraftText: 'TechCorp evaluates climate risks across 1.5°C and 4°C IPCC trajectories. Physical cooling cost vulnerabilities across 4 primary server campuses are modeled at 3.2% potential margin impact by 2030.'
  },
  {
    id: 'GRI-205-1',
    framework: 'GRI',
    pillar: 'Governance',
    category: 'GRI 205: Anti-Corruption',
    code: 'GRI 205-1',
    title: 'Operations assessed for risks related to corruption',
    description: 'Percentage and total number of business units analyzed for corruption vulnerabilities.',
    status: 'Complete',
    dataSource: 'Internal Audit & Ethics Registry',
    lastUpdated: '2026-06-30',
    responsibleTeam: 'Internal Ethics & Audit',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '100% of business units (3 of 3 operating geos) assessed',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Annual ethics risk review concluded zero high-risk vendor corruption breaches.',
    disclosureDraftText: 'All operational entities across India, UK, and SE Asia are subjected to continuous internal anti-bribery controls and annual third-party risk assessments.'
  },
  {
    id: 'GRI-205-2',
    framework: 'GRI',
    pillar: 'Governance',
    category: 'GRI 205: Anti-Corruption',
    code: 'GRI 205-2',
    title: 'Communication and training about anti-corruption policies and procedures',
    description: 'Board members and employees trained on anti-corruption policies.',
    status: 'Complete',
    dataSource: 'LMS Compliance Logs FY26',
    lastUpdated: '2026-08-01',
    responsibleTeam: 'Internal Ethics & Audit',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '98.7% of eligible employees trained (24,380 / 24,700); 100% of Board of Directors',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'LMS attendance logs cross-referenced with active HR employee rosters.',
    disclosureDraftText: 'TechCorp mandates mandatory annual anti-corruption certification. In FY 2025-26, 98.7% of active personnel completed scenario-based ethics certifications.'
  },
  {
    id: 'GRI-205-3',
    framework: 'GRI',
    pillar: 'Governance',
    category: 'GRI 205: Anti-Corruption',
    code: 'GRI 205-3',
    title: 'Confirmed incidents of corruption and actions taken',
    description: 'Total number of confirmed incidents of corruption and disciplinary consequences.',
    status: 'Complete',
    dataSource: 'Ombudsman Office Case Log',
    lastUpdated: '2026-09-01',
    responsibleTeam: 'Chief Legal Officer',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '0 confirmed corruption or bribery incidents',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Quarterly review by Audit Committee confirmed clean record.',
    disclosureDraftText: 'Zero confirmed instances of corruption or public legal cases regarding corrupt practices were brought against TechCorp or its executives.'
  },
  {
    id: 'GRI-207-1',
    framework: 'GRI',
    pillar: 'Governance',
    category: 'GRI 207: Tax',
    code: 'GRI 207-1',
    title: 'Approach to tax strategy and governance',
    description: 'Public board-approved tax strategy and transparency disclosures.',
    status: 'Complete',
    dataSource: 'Board Approved Corporate Tax Policy 2025',
    lastUpdated: '2026-05-14',
    responsibleTeam: 'Corporate Tax & Compliance',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Full compliance with OECD BEPS Pillar 2 and country-by-country reporting standards',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Tax strategy published on corporate investor portal.',
    disclosureDraftText: 'TechCorp maintains a zero-tolerance approach toward aggressive tax avoidance and pays corporate taxes in each operational jurisdiction aligned with local value creation.'
  },

  // GRI 300: Environmental - Energy
  {
    id: 'GRI-302-1',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 302: Energy',
    code: 'GRI 302-1',
    title: 'Energy consumption within the organization',
    description: 'Total fuel and electricity consumption broken down by renewable and non-renewable sources.',
    status: 'Complete',
    dataSource: 'Smart Metering Telematics & Utility Invoices',
    lastUpdated: '2026-09-10',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Total: 47,230 MWh (Renewable: 20,310 MWh [43.0%], Non-Renewable: 26,920 MWh)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Verified via certified utility billing and green energy purchase certificates (I-RECs / Guarantees of Origin).',
    disclosureDraftText: 'Total energy consumed across all corporate campuses, leased engineering hubs, and managed colocation data centers was 47,230 MWh, of which 43.0% was procured from certified renewable sources.'
  },
  {
    id: 'GRI-302-2',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 302: Energy',
    code: 'GRI 302-2',
    title: 'Energy consumption outside of the organization',
    description: 'Upstream and downstream energy consumption across value chain entities.',
    status: 'Partial',
    dataSource: 'Tier-1 Cloud Provider ESG Reports',
    lastUpdated: '2026-07-28',
    responsibleTeam: 'Cloud Infrastructure & Facilities',
    assignedUnit: 'India Operations',
    reportedValue: '18,400 MWh consumed by third-party public cloud providers hosting customer SaaS workloads',
    verificationStatus: 'Pending Verification',
    auditNotes: 'AWS & Azure sustainability carbon disclosures factored; awaiting GCP third-party colocation data.',
    disclosureDraftText: 'Indirect energy usage by hyperscale cloud hosting providers powering TechCorp enterprise software applications totaled an estimated 18,400 MWh.'
  },
  {
    id: 'GRI-302-3',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 302: Energy',
    code: 'GRI 302-3',
    title: 'Energy intensity ratio',
    description: 'Energy consumed per full-time employee and per unit revenue.',
    status: 'Complete',
    dataSource: 'ESGPulse Aggregator Analytics',
    lastUpdated: '2026-09-10',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '0.82 MWh / employee | 3.31 MWh / ₹ Cr revenue',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Improved 6.8% from prior fiscal year intensity (0.88 MWh/FTE).',
    disclosureDraftText: 'Corporate energy intensity achieved 0.82 MWh per employee in FY2025-26, down from 0.88 MWh/employee in FY2024-25 due to facility LED retrofits and smart HVAC occupancy sensors.'
  },
  {
    id: 'GRI-302-4',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 302: Energy',
    code: 'GRI 302-4',
    title: 'Reduction of energy consumption achieved directly from conservation initiatives',
    description: 'Efficiency savings from server virtualization, smart HVAC, and green retrofits.',
    status: 'Complete',
    dataSource: 'Facilities Efficiency Project Ledger',
    lastUpdated: '2026-08-30',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'India Operations',
    reportedValue: '3,410 MWh conserved in FY25-26 via AI HVAC modulation and data center consolidation',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Measurement and verification conducted under IPMVP Option B protocols.',
    disclosureDraftText: 'Facility automation across Bengaluru Campus 1 & 2 reduced annual power consumption by 3,410 MWh, avoiding ₹2.8 Cr in utility expenditures.'
  },

  // GRI 300: Environmental - Water
  {
    id: 'GRI-303-1',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 303: Water & Effluents',
    code: 'GRI 303-1',
    title: 'Interactions with water as a shared resource',
    description: 'Assessment of water withdrawal impacts on local catchments and water-stressed basins.',
    status: 'Complete',
    dataSource: 'WRI Aqueduct Basin Assessment & Facility Flow Meters',
    lastUpdated: '2026-06-15',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'India Operations',
    reportedValue: 'Bengaluru & Chennai sites designated high-water stress; zero industrial effluent discharged',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Mapped via WRI Aqueduct Water Risk Atlas 4.0.',
    disclosureDraftText: 'TechCorp acknowledges the water stress index of southern India campus catchments and operates closed-loop wastewater recovery plants across all major sites.'
  },
  {
    id: 'GRI-303-3',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 303: Water & Effluents',
    code: 'GRI 303-3',
    title: 'Water withdrawal by source',
    description: 'Total municipal, groundwater, and surface water extracted.',
    status: 'Complete',
    dataSource: 'Municipal Meter Invoices & Borewell Loggers',
    lastUpdated: '2026-09-02',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '1,200,000 Liters (1.2M L) total withdrawal across all campuses',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Metered by calibrated magnetic flow meters; 100% municipal tap and certified tanker delivery.',
    disclosureDraftText: 'Total corporate water withdrawal was 1,200,000 liters. No surface water or direct natural wetland bodies were tapped.'
  },
  {
    id: 'GRI-303-5',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 303: Water & Effluents',
    code: 'GRI 303-5',
    title: 'Water consumption and recycled water volume',
    description: 'Net water consumed and percentage recycled through on-site STP/effluent treatment.',
    status: 'Complete',
    dataSource: 'Campus Sewage Treatment Plant (STP) Output Logs',
    lastUpdated: '2026-09-05',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'India Operations',
    reportedValue: '340,000 Liters recycled (28.3% recycling rate) for cooling towers and campus landscaping',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'State Pollution Control Board test certificates verify treated wastewater biological parameters.',
    disclosureDraftText: 'On-site tertiary sewage treatment plants recycled 340,000 liters of treated wastewater, satisfying 100% of campus landscape irrigation and toilet flushing requirements.'
  },

  // GRI 300: Environmental - Emissions
  {
    id: 'GRI-305-1',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 305: Emissions',
    code: 'GRI 305-1',
    title: 'Direct (Scope 1) GHG emissions',
    description: 'Gross direct greenhouse gas emissions in metric tons of CO2 equivalent (tCO2e).',
    status: 'Complete',
    dataSource: 'Diesel Generator Logs & Company Fleet Telematics',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '12,450 tCO2e (-12.3% YoY reduction vs 14,200 tCO2e in FY24-25)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'GHG Protocol Corporate Standard compliant; verified by DNV GL assurance statement.',
    disclosureDraftText: 'Scope 1 direct greenhouse gas emissions totaled 12,450 tCO2e, representing a 12.3% reduction over the prior year due to grid reliability improvements cutting backup diesel generator runtime by 42%.'
  },
  {
    id: 'GRI-305-2',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 305: Emissions',
    code: 'GRI 305-2',
    title: 'Energy indirect (Scope 2) GHG emissions',
    description: 'Location-based and market-based greenhouse gas emissions from purchased electricity.',
    status: 'Complete',
    dataSource: 'Central Grid Emission Factors (CEA / DEFRA) & I-REC Registry',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '8,730 tCO2e market-based (-5.1% YoY reduction vs 9,200 tCO2e in FY24-25)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Market-based calculation accounts for 20,310 MWh of zero-emission renewable energy certificates.',
    disclosureDraftText: 'Gross market-based Scope 2 emissions were 8,730 tCO2e. Location-based Scope 2 emissions stood at 29,820 tCO2e, demonstrating 21,090 tCO2e avoided through renewable energy power purchase agreements.'
  },
  {
    id: 'GRI-305-3',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 305: Emissions',
    code: 'GRI 305-3',
    title: 'Other indirect (Scope 3) GHG emissions',
    description: 'Upstream and downstream supply chain emissions across all relevant GHG Protocol categories.',
    status: 'Partial',
    dataSource: 'Procurement Spend Records, Travel Concur Feed, Cloud Telemetry',
    lastUpdated: '2026-08-25',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '67,200 tCO2e (+2.1% YoY increase vs 65,800 tCO2e in FY24-25)',
    verificationStatus: 'Pending Verification',
    auditNotes: 'Categories 1 (Purchased Goods), 3 (Fuel & Energy), 6 (Business Travel), and 7 (Employee Commute) captured; Category 2 (Capital Goods) pending auditor boundary sign-off.',
    disclosureDraftText: 'Scope 3 value chain emissions accounted for 76.0% of TechCorp total carbon footprint at 67,200 tCO2e. Business travel post-pandemic increased 8%, offsetting employee remote-work commute savings.'
  },
  {
    id: 'GRI-305-4',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 305: Emissions',
    code: 'GRI 305-4',
    title: 'GHG emissions intensity',
    description: 'Ratio of Scope 1+2 emissions per unit of economic output or FTE.',
    status: 'Complete',
    dataSource: 'ESGPulse Carbon Aggregator Engine',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '0.857 tCO2e per employee (Scope 1+2) | 1.48 tCO2e per ₹ Cr revenue',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Down from 0.947 tCO2e/FTE in FY24-25, showing steady decoupling of headcount growth from direct emissions.',
    disclosureDraftText: 'Emissions intensity per full-time employee dropped to 0.857 tCO2e/FTE, a 9.5% improvement driven by high renewable energy penetration in our largest operating centers.'
  },
  {
    id: 'GRI-305-5',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 305: Emissions',
    code: 'GRI 305-5',
    title: 'Reduction of GHG emissions',
    description: 'Reductions achieved through direct mitigation programs and decarbonization roadmap.',
    status: 'Complete',
    dataSource: 'Decarbonization Project Portfolio',
    lastUpdated: '2026-08-18',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '2,220 tCO2e direct reduction achieved in FY25-26 against projected business-as-usual',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Validated against science-based decarbonization trajectory targets.',
    disclosureDraftText: 'Active energy-efficiency retrofits, server decommissioning, and corporate EV shuttle bus adoption avoided 2,220 tCO2e during the reporting fiscal year.'
  },

  // GRI 300: Environmental - Waste
  {
    id: 'GRI-306-1',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 306: Waste',
    code: 'GRI 306-1',
    title: 'Waste generation and significant waste-related impacts',
    description: 'Identification of operational activities generating solid, hazardous, and electronic waste.',
    status: 'Complete',
    dataSource: 'Workplace Health, Safety & Environment Log',
    lastUpdated: '2026-07-14',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'E-waste from IT asset refresh and cafeteria organic food waste identified as primary streams',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Full value stream mapping conducted across 6 major development centers.',
    disclosureDraftText: 'TechCorp maintains a zero-waste-to-landfill mandate for organic food waste and mandates responsible asset recovery lifecycles for all end-of-use IT computing hardware.'
  },
  {
    id: 'GRI-306-3',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 306: Waste',
    code: 'GRI 306-3',
    title: 'Waste generated by composition',
    description: 'Total metric tons of solid, hazardous, and recyclable waste generated.',
    status: 'Complete',
    dataSource: 'Waste Weighbridge Slips & Vendor Manifests',
    lastUpdated: '2026-09-08',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '450 Metric Tons total (Organic: 180t, Paper/Cardboard: 120t, Plastics: 68t, E-waste: 82t)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Weight slips collected from authorized municipal and private collection concessionaires.',
    disclosureDraftText: 'Total corporate waste generation stood at 450 metric tons across all global facilities, including 82 tons of decommissioned laptops, monitors, and networking hardware.'
  },
  {
    id: 'GRI-306-4',
    framework: 'GRI',
    pillar: 'Environmental',
    category: 'GRI 306: Waste',
    code: 'GRI 306-4',
    title: 'Waste diverted from disposal',
    description: 'Volume of waste prepared for reuse, recycled, or composted on/off-site.',
    status: 'Complete',
    dataSource: 'Authorized Recycler Certificates of Recycling',
    lastUpdated: '2026-09-08',
    responsibleTeam: 'Workplace Operations & Sustainability',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '312 Metric Tons diverted (69.3% diversion rate) via on-site composting and certified recyclers',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: '69.3% diversion rate exceeds corporate interim goal of 65%.',
    disclosureDraftText: 'TechCorp diverted 312 metric tons (69.3%) of operational waste away from municipal landfills through compost digesters and government-authorized recycling partners.'
  },

  // GRI 400: Social - Workforce & Diversity
  {
    id: 'GRI-401-1',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 401: Employment',
    code: 'GRI 401-1',
    title: 'New employee hires and employee turnover',
    description: 'Total number and rates of new employee hires and turnover by age group, gender, and region.',
    status: 'Complete',
    dataSource: 'Workday HRMS Global Analytics Database',
    lastUpdated: '2026-09-10',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'New hires: 3,200 | Turnover rate: 8.4% (voluntary 7.1%, involuntary 1.3%)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Turnover remains well below the tech industry benchmark average of 14.2%.',
    disclosureDraftText: 'During the reporting period, TechCorp welcomed 3,200 new professionals while sustaining a low annual turnover rate of 8.4%, demonstrating best-in-class talent retention.'
  },
  {
    id: 'GRI-401-2',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 401: Employment',
    code: 'GRI 401-2',
    title: 'Benefits provided to full-time employees that are not provided to temporary or part-time employees',
    description: 'Life insurance, healthcare coverage, disability, parental leave, retirement provision.',
    status: 'Complete',
    dataSource: 'Global Total Rewards Policy Manual',
    lastUpdated: '2026-04-10',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Comprehensive parental leave (26 weeks), full private health insurance, mental wellness benefit',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Standardized global benefit matrix updated to comply with UK and Singapore statutory norms.',
    disclosureDraftText: 'All permanent full-time employees receive comprehensive healthcare insurance covering dependents, 26 weeks paid parental leave, and generous employer retirement pension matches.'
  },
  {
    id: 'GRI-403-1',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 403: Occupational Health & Safety',
    code: 'GRI 403-1',
    title: 'Occupational health and safety management system',
    description: 'Legal compliance and coverage of workers by accredited OHS management systems.',
    status: 'Complete',
    dataSource: 'ISO 45001 Certification Registry',
    lastUpdated: '2026-05-20',
    responsibleTeam: 'Corporate EHS & Facility Security',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '100% of physical campuses certified under ISO 45001:2018 Occupational Health & Safety',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'TUV Rheinland surveillance audit conducted in April 2026 with zero non-conformances.',
    disclosureDraftText: 'All TechCorp development facilities operate an ISO 45001:2018 certified Occupational Health and Safety management system covering 100% of employees and third-party facility contractors.'
  },
  {
    id: 'GRI-403-9',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 403: Occupational Health & Safety',
    code: 'GRI 403-9',
    title: 'Work-related injuries and Lost Time Injury Rate (LTIR)',
    description: 'Recordable work-related injuries, fatalities, and lost-time frequency rates.',
    status: 'Complete',
    dataSource: 'Incident Tracker & Medical Station Logs',
    lastUpdated: '2026-09-01',
    responsibleTeam: 'Corporate EHS & Facility Security',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'LTIR: 0.12 per million hours worked | Zero fatalities | 3 minor slip/trip incidents',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Benchmark Gensuite EHS tracking system used to capture all incident logs and near-misses.',
    disclosureDraftText: 'TechCorp achieved an LTIR of 0.12 per million hours worked, reflecting our rigorous ergonomic assessments, workplace safety audits, and defensive driving training for fleet operators.'
  },
  {
    id: 'GRI-404-1',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 404: Training & Education',
    code: 'GRI 404-1',
    title: 'Average hours of training per year per employee',
    description: 'Training hours broken down by gender and employee category.',
    status: 'Complete',
    dataSource: 'TechCorp Learning Academy LMS',
    lastUpdated: '2026-09-08',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '42.0 hours per employee (Female: 43.5 hrs, Male: 41.1 hrs)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Digital skill academies in Cloud, AI engineering, cybersecurity, and ESG compliance.',
    disclosureDraftText: 'TechCorp employees logged an average of 42.0 hours of accredited skill and leadership training in FY25-26, supported by an education reimbursement stipend of up to ₹1.5 Lakhs per employee.'
  },
  {
    id: 'GRI-404-3',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 404: Training & Education',
    code: 'GRI 404-3',
    title: 'Percentage of employees receiving regular performance and career development reviews',
    description: 'Disaggregated by gender and employee tier.',
    status: 'Partial',
    dataSource: 'Performance Appraisal System (SuccessFactors)',
    lastUpdated: '2026-08-10',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'UK & European Operations',
    reportedValue: '96.2% overall; UK data pending final calibration sign-off',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'UK operations mid-year review cycle lagging due to recent merger integration.',
    disclosureDraftText: '96.2% of eligible employees participated in biannual 360-degree performance reviews and structured career progression dialogs.'
  },
  {
    id: 'GRI-405-1',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 405: Diversity & Equal Opportunity',
    code: 'GRI 405-1',
    title: 'Diversity of governance bodies and employees',
    description: 'Percentage of individuals within governance bodies and employee categories by gender, age, and minority groups.',
    status: 'Complete',
    dataSource: 'HR Diversity & Inclusion Global Census',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Overall Women: 38% | Women in Leadership: 31% | Board Gender Diversity: 22% (2 of 9)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Progressing steadily toward 40% women in leadership target by 2026.',
    disclosureDraftText: 'Women represent 38% of TechCorp global workforce and 31% of senior leadership roles (Vice President and above), supported by our Women in Technology mentorship accelerator.'
  },
  {
    id: 'GRI-413-1',
    framework: 'GRI',
    pillar: 'Social',
    category: 'GRI 413: Local Communities',
    code: 'GRI 413-1',
    title: 'Operations with local community engagement and development programs',
    description: 'Social impact assessments, community programs, and CSR investments.',
    status: 'Complete',
    dataSource: 'TechCorp Foundation CSR Annual Audit',
    lastUpdated: '2026-08-30',
    responsibleTeam: 'TechCorp Foundation & CSR Council',
    assignedUnit: 'India Operations',
    reportedValue: '₹4.2 Cr invested across 18,400 beneficiaries (Education 40%, Skill Dev 35%, Healthcare 25%)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Statutory compliance with Section 135 of India Companies Act 2013.',
    disclosureDraftText: 'TechCorp Foundation invested ₹4.2 Crore into community social impact initiatives, directly empowering 18,400 individuals through STEM education labs, rural scholarships, and public healthcare.'
  },
  {
    id: 'GRI-418-1',
    framework: 'GRI',
    pillar: 'Governance',
    category: 'GRI 418: Customer Privacy',
    code: 'GRI 418-1',
    title: 'Substantiated complaints concerning breaches of customer privacy and losses of customer data',
    description: 'Complaints received from outside parties and regulatory authorities.',
    status: 'Complete',
    dataSource: 'Data Protection Officer Incident Log & Legal Blotter',
    lastUpdated: '2026-09-01',
    responsibleTeam: 'Chief Information Security Officer (CISO)',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '0 substantiated privacy breaches or leaks of client personal identifiable information (PII)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'SOC 2 Type II and ISO 27001 independent audits confirmed zero findings.',
    disclosureDraftText: 'During FY25-26, TechCorp received zero substantiated complaints from data protection regulators or customers concerning customer data confidentiality or GDPR/DPDP Act violations.'
  }
];

export const SASB_STANDARDS: DisclosureItem[] = [
  {
    id: 'SASB-TC-SI-130a.1',
    framework: 'SASB',
    pillar: 'Environmental',
    category: 'Environmental Footprint of Hardware Infrastructure',
    code: 'TC-SI-130a.1',
    title: 'Total energy consumed, percentage grid electricity, percentage renewable',
    description: '(1) Total energy consumed; (2) percentage grid electricity; (3) percentage renewable in data centers.',
    status: 'Complete',
    dataSource: 'Utility Invoices & Colocation PUE Loggers',
    lastUpdated: '2026-09-10',
    responsibleTeam: 'Cloud Infrastructure & Facilities',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '(1) 170,028 GJ (47,230 MWh); (2) 57.0% grid; (3) 43.0% renewable',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Converted MWh to Gigajoules using standard IEA conversion factor of 3.6 GJ/MWh.',
    disclosureDraftText: 'Total energy consumed was 170,028 GJ. 43.0% of total electrical energy was derived from contracted off-site solar farms and green grid tariffs.'
  },
  {
    id: 'SASB-TC-SI-130a.2',
    framework: 'SASB',
    pillar: 'Environmental',
    category: 'Environmental Footprint of Hardware Infrastructure',
    code: 'TC-SI-130a.2',
    title: 'Total water withdrawn and consumed in data centers; percentage in regions with high water stress',
    description: 'Water cooling volume for dedicated server clusters in water stressed basins.',
    status: 'Complete',
    dataSource: 'Data Center Facilities Sub-meters',
    lastUpdated: '2026-09-02',
    responsibleTeam: 'Cloud Infrastructure & Facilities',
    assignedUnit: 'India Operations',
    reportedValue: '1.2M L total withdrawn; 48% located in high water stress baseline regions (Bengaluru/Chennai)',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Utilizes adiabatic dry-cooling systems to minimize evaporative water loss during peak summer.',
    disclosureDraftText: 'TechCorp colocation server sites consumed 1.2M liters of municipal water. Sites located in baseline water stress basins utilize closed-loop dry chillers to maximize water efficiency.'
  },
  {
    id: 'SASB-TC-SI-130a.3',
    framework: 'SASB',
    pillar: 'Environmental',
    category: 'Environmental Footprint of Hardware Infrastructure',
    code: 'TC-SI-130a.3',
    title: 'Discussion of integration of environmental considerations into hardware lifecycle & data center design',
    description: 'Hardware longevity, PUE targets, thermal containment, and recycling criteria.',
    status: 'Complete',
    dataSource: 'Architecture Sustainability Whitepaper 2025',
    lastUpdated: '2026-07-15',
    responsibleTeam: 'Cloud Infrastructure & Facilities',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Average PUE of 1.28 maintained across primary colocation data facilities',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'PUE audited against ASHRAE guidelines.',
    disclosureDraftText: 'TechCorp mandates an average Power Usage Effectiveness (PUE) below 1.30 across all colocation contracts, using hot-aisle containment and multi-tenant server virtualization to minimize hardware footprint.'
  },
  {
    id: 'SASB-TC-SI-220a.1',
    framework: 'SASB',
    pillar: 'Governance',
    category: 'Data Privacy & User Security',
    code: 'TC-SI-220a.1',
    title: 'Description of policies and practices relating to behavioral advertising and customer personal data',
    description: 'Consent mechanisms, secondary usage, customer opt-out rates, retention limits.',
    status: 'Complete',
    dataSource: 'Customer Trust Portal & Privacy Policy',
    lastUpdated: '2026-08-01',
    responsibleTeam: 'Chief Privacy Officer / Legal',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Zero behavioral advertising; corporate policy strictly prohibits monetizing enterprise customer data',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Legal counsel verified Terms of Service & Privacy Shield certifications.',
    disclosureDraftText: 'TechCorp is a pure-play B2B enterprise SaaS provider. We do not participate in behavioral tracking or data brokerage. Enterprise customers retain complete sovereignty over uploaded data.'
  },
  {
    id: 'SASB-TC-SI-220a.2',
    framework: 'SASB',
    pillar: 'Governance',
    category: 'Data Privacy & User Security',
    code: 'TC-SI-220a.2',
    title: 'Number of users whose information is used for secondary purposes',
    description: 'Quantitative count of users whose telemetry or data was repurposed for commercial insights.',
    status: 'Complete',
    dataSource: 'Master Data Governance Log',
    lastUpdated: '2026-08-01',
    responsibleTeam: 'Chief Privacy Officer / Legal',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '0 users (0% of enterprise client base)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Validated by third-party data audit and SOC 2 Type II trust principles.',
    disclosureDraftText: 'TechCorp does not utilize customer tenant data for secondary commercial purposes or algorithmic model training without explicit contractual authorization.'
  },
  {
    id: 'SASB-TC-SI-220a.3',
    framework: 'SASB',
    pillar: 'Governance',
    category: 'Data Privacy & User Security',
    code: 'TC-SI-220a.3',
    title: 'Total amount of monetary losses as a result of legal proceedings associated with user privacy',
    description: 'Fines, settlements, penalties in INR / USD related to privacy regulations.',
    status: 'Complete',
    dataSource: 'Legal Contingency Blotter',
    lastUpdated: '2026-09-01',
    responsibleTeam: 'Chief Legal Officer',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '₹0 (Zero monetary losses or fines)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Audited by statutory financial auditors.',
    disclosureDraftText: 'TechCorp incurred zero monetary fines, sanctions, or negotiated settlements in connection with privacy, data protection, or cyber regulatory actions.'
  },
  {
    id: 'SASB-TC-SI-230a.1',
    framework: 'SASB',
    pillar: 'Governance',
    category: 'Data Security',
    code: 'TC-SI-230a.1',
    title: '(1) Number of data breaches, (2) percentage involving PII, (3) number of users affected',
    description: 'Incident logs for cybersecurity events meeting disclosure criteria.',
    status: 'Complete',
    dataSource: 'Cybersecurity Incident Response Registry',
    lastUpdated: '2026-09-01',
    responsibleTeam: 'Chief Information Security Officer (CISO)',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '(1) 0 breaches; (2) 0% involving PII; (3) 0 affected users',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: '24/7 Security Operations Center (SOC) telemetry verified.',
    disclosureDraftText: 'Zero reportable cybersecurity breaches or customer data exposure incidents took place during the FY2025-26 fiscal reporting period.'
  },
  {
    id: 'SASB-TC-SI-330a.1',
    framework: 'SASB',
    pillar: 'Social',
    category: 'Workforce Diversity & Inclusion',
    code: 'TC-SI-330a.1',
    title: 'Percentage of employees that are (1) foreign nationals and (2) located offshore',
    description: 'Workforce geographic distribution and cross-border mobility visas.',
    status: 'Complete',
    dataSource: 'Workday Global Mobility Database',
    lastUpdated: '2026-08-20',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '(1) 8.2% foreign nationals in local hubs; (2) 65.6% located in India delivery centers',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Immigration compliance audits confirm valid visa statuses.',
    disclosureDraftText: 'TechCorp leverages a globally distributed engineering and consulting workforce with 65.6% of personnel stationed in India centers of excellence and 34.4% in UK and APAC locations.'
  },
  {
    id: 'SASB-TC-SI-330a.3',
    framework: 'SASB',
    pillar: 'Social',
    category: 'Workforce Diversity & Inclusion',
    code: 'TC-SI-330a.3',
    title: 'Percentage of gender and racial/ethnic group representation for (1) management, (2) technical staff',
    description: 'Disaggregated demographics across engineering, architecture, and senior leadership.',
    status: 'Complete',
    dataSource: 'Annual DEI Disclosure Survey',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'People Operations & HR Analytics',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Management: 31% Female | Technical Engineering Roles: 36% Female, 64% Male',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Gender pay equity audit confirmed 98.4% adjusted pay parity.',
    disclosureDraftText: 'Women comprise 31% of management roles and 36% of core technical software engineering teams, reflecting active early-career hiring outreach at top engineering universities.'
  },
  {
    id: 'SASB-TC-SI-550a.1',
    framework: 'SASB',
    pillar: 'Governance',
    category: 'Managing Systemic Risks from Technology Disruptions',
    code: 'TC-SI-550a.1',
    title: 'Number of (1) performance issues and (2) service disruptions; total customer downtime',
    description: 'SLA adherence, unplanned outages, and MTTR (Mean Time to Resolution).',
    status: 'Complete',
    dataSource: 'ServiceNow High-Priority Incident SLA Tracker',
    lastUpdated: '2026-09-05',
    responsibleTeam: 'Site Reliability Engineering (SRE)',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '99.98% platform uptime achieved across production clusters; 0 critical P1 widespread outages',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Customer SLA credits issued totaled < 0.01% of ARR.',
    disclosureDraftText: 'TechCorp maintained 99.98% enterprise SaaS service availability across our global multi-tenant microservices clusters, supported by automated active-active multi-region failover.'
  }
];

export const TCFD_RECOMMENDATIONS: DisclosureItem[] = [
  // 1. Governance
  {
    id: 'TCFD-GOV-A',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '1. Governance',
    code: 'TCFD-GOV-A',
    title: 'Board oversight of climate-related risks and opportunities',
    description: 'Processes and frequency by which the board and its committees are informed about climate issues.',
    status: 'Complete',
    dataSource: 'Board ESG & Risk Committee Charter & Minutes',
    lastUpdated: '2026-08-15',
    responsibleTeam: 'Board ESG & Sustainability Committee',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Quarterly dedicated review by Board ESG Committee; annual Board Climate Resilience workshop',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Charter publicly updated on corporate governance portal.',
    disclosureDraftText: 'The Board ESG & Sustainability Committee convenes quarterly to evaluate decarbonization capital allocations, monitor Scope 1-3 trajectories against SBTi milestones, and review physical climate vulnerabilities across server infrastructure.'
  },
  {
    id: 'TCFD-GOV-B',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '1. Governance',
    code: 'TCFD-GOV-B',
    title: 'Management role in assessing and managing climate-related risks and opportunities',
    description: 'Executive positions responsible for climate policy, reporting structures, and KPIs.',
    status: 'Complete',
    dataSource: 'Executive ESG Council Terms of Reference',
    lastUpdated: '2026-07-22',
    responsibleTeam: 'Chief Sustainability Officer (CSO)',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Chief Sustainability Officer reports to CEO; 15% executive variable compensation linked to ESG KPIs',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Compensation Committee minutes confirm 15% ESG modifier in annual executive bonuses.',
    disclosureDraftText: 'The Chief Sustainability Officer chairs the monthly Executive ESG Working Group, comprising the CTO, CFO, Head of Procurement, and VP of Facilities. Executive performance scorecards tie 15% of annual incentive compensation directly to emissions reductions.'
  },

  // 2. Strategy
  {
    id: 'TCFD-STR-A',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '2. Strategy',
    code: 'TCFD-STR-A',
    title: 'Climate-related risks and opportunities over short, medium, and long term',
    description: 'Specific physical and transition risks identified across operational time horizons.',
    status: 'Complete',
    dataSource: 'Climate Risk Taxonomy Register',
    lastUpdated: '2026-06-30',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Identified 4 transition risks (carbon taxes, green grid tariffs) and 2 physical risks (monsoon flooding, urban heat stress)',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Short term (<3 yrs), Medium term (3-7 yrs), Long term (7-15 yrs) matrices documented.',
    disclosureDraftText: 'TechCorp has mapped climate risks into three time horizons: short-term regulatory reporting costs, medium-term EU carbon taxation on supply chains, and long-term facility cooling stress in tropical Asian data hubs.'
  },
  {
    id: 'TCFD-STR-B',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '2. Strategy',
    code: 'TCFD-STR-B',
    title: 'Impact of climate-related risks on businesses, strategy, and financial planning',
    description: 'How climate risks influence capital expenditure, products, R&D, and acquisitions.',
    status: 'Complete',
    dataSource: 'Strategic Financial Plan FY26-30',
    lastUpdated: '2026-08-05',
    responsibleTeam: 'FP&A and Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: '₹45 Cr capital allocated over 4 years for campus solar self-generation and energy storage',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Approved in FY26 capital expenditure budget.',
    disclosureDraftText: 'TechCorp incorporates an internal shadow carbon price of $45/tCO2e into all facility lease renewals and server procurement hurdle rates, accelerating migration to ultra-efficient server architectures.'
  },
  {
    id: 'TCFD-STR-C',
    framework: 'TCFD',
    pillar: 'Environmental',
    category: '2. Strategy',
    code: 'TCFD-STR-C',
    title: 'Resilience of strategy taking into consideration different climate-related scenarios, including a 2°C or lower scenario',
    description: 'Scenario analysis results comparing business resilience under 1.5°C Paris aligned vs 4°C extreme warming.',
    status: 'Partial',
    dataSource: 'IPCC Climate Resilience Pilot Model',
    lastUpdated: '2026-07-15',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'UK & European Operations',
    reportedValue: 'Completed initial financial sensitivity model for European data centers; India campus physical flooding analysis ongoing',
    verificationStatus: 'Pending Verification',
    auditNotes: 'Critical gap: awaiting localized flood risk hydrology survey for Chennai development center.',
    disclosureDraftText: 'Under a 1.5°C aggressive decarbonization pathway, TechCorp operational expenditures rise by less than 1.4% due to long-term renewable power purchase hedges. Physical risk modeling under a 4°C warming scenario indicates potential cooling load surges of up to 18%.'
  },

  // 3. Risk Management
  {
    id: 'TCFD-RM-A',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '3. Risk Management',
    code: 'TCFD-RM-A',
    title: 'Processes for identifying and assessing climate-related risks',
    description: 'Risk identification methodologies, materiality thresholds, and interdepartmental risk intake.',
    status: 'Complete',
    dataSource: 'Enterprise Risk Management (ERM) Framework Manual',
    lastUpdated: '2026-05-18',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Annual bottom-up facility risk registers combined with top-down executive scenario reviews',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Integrated with ISO 31000 risk management methodology.',
    disclosureDraftText: 'Climate risks are evaluated twice annually alongside strategic, cyber, and regulatory risks, applying probabilistic financial impact scoring and velocity of onset criteria.'
  },
  {
    id: 'TCFD-RM-B',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '3. Risk Management',
    code: 'TCFD-RM-B',
    title: 'Processes for managing climate-related risks',
    description: 'Mitigation strategies, risk transfer through insurance, and operational adaptation protocols.',
    status: 'Complete',
    dataSource: 'Corporate Business Continuity & Disaster Recovery Plan',
    lastUpdated: '2026-06-25',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Redundant power generation, multi-region cloud deployment, parametric business interruption insurance',
    verificationStatus: 'Internal Review Complete',
    auditNotes: 'Tested in annual disaster recovery simulation drills.',
    disclosureDraftText: 'Physical climate hazards are mitigated through dual grid feeders, battery energy storage systems (BESS), and contractual SaaS failover clauses across geographically separated cloud availability zones.'
  },
  {
    id: 'TCFD-RM-C',
    framework: 'TCFD',
    pillar: 'Governance',
    category: '3. Risk Management',
    code: 'TCFD-RM-C',
    title: 'How processes for identifying, assessing, and managing climate-related risks are integrated into overall ERM',
    description: 'Integration of climate risk taxonomy into the corporate risk register and audit committee oversight.',
    status: 'Complete',
    dataSource: 'Corporate Risk Matrix FY26',
    lastUpdated: '2026-08-10',
    responsibleTeam: 'Enterprise Risk & Strategy',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Climate risk formal chapter incorporated directly in Corporate Risk Register #CR-08',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Reviewed by external auditors during annual governance appraisal.',
    disclosureDraftText: 'Climate risks are formally codified into the unified Enterprise Risk Management taxonomy, ensuring equal standing with liquidity, information security, and geopolitical supply chain disruption.'
  },

  // 4. Metrics & Targets
  {
    id: 'TCFD-MET-A',
    framework: 'TCFD',
    pillar: 'Environmental',
    category: '4. Metrics & Targets',
    code: 'TCFD-MET-A',
    title: 'Metrics used by the organization to assess climate-related risks and opportunities',
    description: 'Key performance indicators for energy, water, carbon intensity, and green revenues.',
    status: 'Complete',
    dataSource: 'ESGPulse Executive Dashboard',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Scope 1-3 tCO2e, MWh energy consumption, % renewable power, MWh/employee, water recycling %',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Tracked continuously through ESGPulse automated telemetry connectors.',
    disclosureDraftText: 'TechCorp monitors 14 core environmental indicators including gross GHG emissions, renewable electricity percentage, water recycling efficiency, and employee travel carbon intensity.'
  },
  {
    id: 'TCFD-MET-B',
    framework: 'TCFD',
    pillar: 'Environmental',
    category: '4. Metrics & Targets',
    code: 'TCFD-MET-B',
    title: 'Scope 1, Scope 2, and, if appropriate, Scope 3 GHG emissions and related risks',
    description: 'Emissions figures calculated according to the GHG Protocol Corporate Standard.',
    status: 'Complete',
    dataSource: 'Greenhouse Gas Inventory FY25-26',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Scope 1: 12,450 tCO2e | Scope 2: 8,730 tCO2e | Scope 3: 67,200 tCO2e | Total: 88,380 tCO2e',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'Assurance statement by DNV GL included in annual regulatory disclosure appendix.',
    disclosureDraftText: 'Consolidated carbon footprint for FY 2025-26 totaled 88,380 tCO2e across all operational boundaries, achieving a 0.9% gross reduction year-over-year.'
  },
  {
    id: 'TCFD-MET-C',
    framework: 'TCFD',
    pillar: 'Environmental',
    category: '4. Metrics & Targets',
    code: 'TCFD-MET-C',
    title: 'Targets used by the organization to manage climate-related risks and opportunities and performance against targets',
    description: 'Science-Based Targets (SBTi), net-zero milestone dates, renewable energy targets.',
    status: 'Complete',
    dataSource: 'SBTi Commitment Registry & Executive Scorecard',
    lastUpdated: '2026-09-12',
    responsibleTeam: 'Global Sustainability Council',
    assignedUnit: 'All BUs (Consolidated)',
    reportedValue: 'Target: 50% Scope 1+2 reduction by 2030 (67% achieved to date); 60% Renewable by 2026 (43% achieved)',
    verificationStatus: 'Audited (Limited Assurance)',
    auditNotes: 'SBTi validation officially approved in November 2023.',
    disclosureDraftText: 'TechCorp has committed to reaching Net-Zero greenhouse gas emissions across our entire value chain by 2040, backed by interim near-term targets to reduce Scope 1 and 2 emissions 50% by 2030 from a 2021 baseline.'
  }
];

// Complete 198-item Heatmap Data Generator to guarantee realistic cells for all frameworks & pillars
export function generateFullHeatmapItems(): {
  id: string;
  code: string;
  framework: 'GRI' | 'SASB' | 'TCFD';
  pillar: 'Environmental' | 'Social' | 'Governance';
  title: string;
  category: string;
  status: 'compliant' | 'partial' | 'missing' | 'na';
  responsibleTeam: string;
  assignedUnit: string;
  dueDate: string;
  value: string;
  auditTrail: string;
}[] {
  const items: any[] = [];
  let idCounter = 1;

  // 1. GRI Disclosures (133 total: 89 compliant, 28 partial, 16 missing)
  const griCategories = [
    { cat: 'GRI 200: Economic & Anti-Corruption', pillar: 'Governance' as const, count: 18 },
    { cat: 'GRI 302: Energy & Fuel Management', pillar: 'Environmental' as const, count: 24 },
    { cat: 'GRI 303: Water & Effluents', pillar: 'Environmental' as const, count: 16 },
    { cat: 'GRI 305: Emissions & Decarbonization', pillar: 'Environmental' as const, count: 28 },
    { cat: 'GRI 306: Waste & Circularity', pillar: 'Environmental' as const, count: 14 },
    { cat: 'GRI 401 & 403: Workforce Safety & Health', pillar: 'Social' as const, count: 15 },
    { cat: 'GRI 404 & 405: Diversity & Skill Training', pillar: 'Social' as const, count: 18 }
  ];

  let griCompliantCount = 0;
  let griPartialCount = 0;
  let griMissingCount = 0;

  griCategories.forEach(grp => {
    for (let i = 1; i <= grp.count; i++) {
      let status: 'compliant' | 'partial' | 'missing' = 'compliant';
      if (griCompliantCount < 89 && Math.random() > 0.33) {
        status = 'compliant';
        griCompliantCount++;
      } else if (griPartialCount < 28) {
        status = 'partial';
        griPartialCount++;
      } else if (griMissingCount < 16) {
        status = 'missing';
        griMissingCount++;
      } else {
        status = 'compliant';
        griCompliantCount++;
      }

      items.push({
        id: `HM-GRI-${idCounter++}`,
        code: `GRI ${grp.cat.split(':')[0].replace('GRI ', '')}.${i}`,
        framework: 'GRI' as const,
        pillar: grp.pillar,
        title: `${grp.cat} - Sub-Indicator ${i}: Standardized disclosure protocol`,
        category: grp.cat,
        status: status,
        responsibleTeam: grp.pillar === 'Environmental' ? 'Workplace Operations & Sustainability' : grp.pillar === 'Social' ? 'People Operations & HR' : 'Internal Ethics & Audit',
        assignedUnit: i % 3 === 0 ? 'UK & European Operations' : i % 2 === 0 ? 'India Operations' : 'Southeast Asia Operations',
        dueDate: `2026-${String(9 + (i % 3)).padStart(2, '0')}-${String(10 + (i % 18)).padStart(2, '0')}`,
        value: status === 'compliant' ? 'Verified with Primary Evidence' : status === 'partial' ? 'Data Incomplete (Regional Boundary)' : 'Metric Uncollected',
        auditTrail: `ISO/GRI Index Ref #GRI-${grp.pillar.substring(0, 3)}-${i}`
      });
    }
  });

  // Ensure exact counts for GRI: 89 compliant, 28 partial, 16 missing (total 133)
  let actualGri = items.filter(x => x.framework === 'GRI');
  // Re-adjust exact distribution
  for (let idx = 0; idx < actualGri.length; idx++) {
    if (idx < 89) actualGri[idx].status = 'compliant';
    else if (idx < 89 + 28) actualGri[idx].status = 'partial';
    else actualGri[idx].status = 'missing';
  }

  // 2. SASB Standards (41 total: 29 compliant, 8 partial, 4 missing)
  const sasbCategories = [
    { cat: 'TC-SI-130: Environmental Footprint of Hardware', pillar: 'Environmental' as const, count: 12 },
    { cat: 'TC-SI-220 & 230: Data Privacy & Security', pillar: 'Governance' as const, count: 14 },
    { cat: 'TC-SI-330: Workforce Diversity & Tech Staffing', pillar: 'Social' as const, count: 9 },
    { cat: 'TC-SI-550: Systemic Disruption & Cloud Resilience', pillar: 'Governance' as const, count: 6 }
  ];

  let sasbIndex = 0;
  sasbCategories.forEach(grp => {
    for (let i = 1; i <= grp.count; i++) {
      let status: 'compliant' | 'partial' | 'missing' = 'compliant';
      if (sasbIndex < 29) status = 'compliant';
      else if (sasbIndex < 37) status = 'partial';
      else status = 'missing';
      sasbIndex++;

      items.push({
        id: `HM-SASB-${idCounter++}`,
        code: `${grp.cat.split(':')[0]}.${i}`,
        framework: 'SASB' as const,
        pillar: grp.pillar,
        title: `${grp.cat} - Metric ${i}`,
        category: grp.cat,
        status: status,
        responsibleTeam: grp.pillar === 'Environmental' ? 'Cloud Infrastructure & Facilities' : grp.pillar === 'Social' ? 'People Analytics' : 'CISO & Legal',
        assignedUnit: i % 2 === 0 ? 'India Operations' : 'UK & European Operations',
        dueDate: `2026-10-${String(5 + (i % 22)).padStart(2, '0')}`,
        value: status === 'compliant' ? 'Formally Disclosed' : status === 'partial' ? 'Data Under Verification' : 'Pending Request',
        auditTrail: `SASB TC-SI Standards Board Registry`
      });
    }
  });

  // 3. TCFD Requirements (24 total: 13 compliant, 7 partial, 4 missing)
  const tcfdCategories = [
    { cat: 'TCFD Governance (Board & Management Oversight)', pillar: 'Governance' as const, count: 6 },
    { cat: 'TCFD Strategy & Climate Scenario Resiliency', pillar: 'Governance' as const, count: 6 },
    { cat: 'TCFD Risk Management & Integration in ERM', pillar: 'Governance' as const, count: 6 },
    { cat: 'TCFD Metrics & Targets (Scope 1-3 & Decarbonization)', pillar: 'Environmental' as const, count: 6 }
  ];

  let tcfdIndex = 0;
  tcfdCategories.forEach(grp => {
    for (let i = 1; i <= grp.count; i++) {
      let status: 'compliant' | 'partial' | 'missing' = 'compliant';
      if (tcfdIndex < 13) status = 'compliant';
      else if (tcfdIndex < 20) status = 'partial';
      else status = 'missing';
      tcfdIndex++;

      items.push({
        id: `HM-TCFD-${idCounter++}`,
        code: `TCFD-${grp.cat.split(' ')[1].substring(0, 3).toUpperCase()}-${i}`,
        framework: 'TCFD' as const,
        pillar: grp.pillar,
        title: `${grp.cat} - Recommendation ${i}`,
        category: grp.cat,
        status: status,
        responsibleTeam: grp.pillar === 'Environmental' ? 'Global Sustainability Council' : 'Enterprise Risk & Strategy',
        assignedUnit: 'All BUs (Consolidated)',
        dueDate: `2026-11-${String(2 + (i % 26)).padStart(2, '0')}`,
        value: status === 'compliant' ? 'Pillar Verified & Disclosed' : status === 'partial' ? 'Narrative in Review' : 'Missing Scenario Model',
        auditTrail: `TCFD 2023 Technical Guidelines`
      });
    }
  });

  return items;
}

export const ALL_HEATMAP_ITEMS = generateFullHeatmapItems();
