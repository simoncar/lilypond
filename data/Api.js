const _getJobFamilies = () => {
  const jobFamilies = [
    {
      department: "Finance",
      jobFamily: "Internal Audit",
      jobLevels: [
        { level: "People Leadership Career Track PL30" },
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "People Leadership Career Track PL60" },
        { level: "Individual Contributor IC10" },
        { level: "Individual Contributor IC20" },
        { level: "Individual Contributor IC30" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
      ],
      description:
        "Supports the Audit Committee of the Board of Directors in its oversight responsibilities. \n\nrovides independent assessment of processes, policies, procedures, and controls to highlight and mitigate risk and improve efficiency.  \n\nerforms reviews of business, IT, and security processes.  \n\nConducts compliance auditing and provides design guidance",
      icon: "ios-flower",
    },

    {
      department: "Finance",
      jobFamily: "Investor Relations",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      description:
        "Responsible for integrating finance, communication, and marketing and securities law compliance to enable the effective two way communication between the financial and investor community.",
      icon: "ios-flower",
    },
    {
      department: "Finance",
      jobFamily: "Operational Accounting",
      jobLevels: [
        { level: "People Leadership Career Track PL10" },
        { level: "People Leadership Career Track PL20" },
        { level: "People Leadership Career Track PL30" },
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "People Leadership Career Track PL60" },
        { level: "People Leadership Career Track PL70" },
        { level: "Individual Contributor IC10" },
        { level: "Individual Contributor IC20" },
        { level: "Individual Contributor IC30" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
      ],
      description:
        "Performs general accounting activities, including the preparation, maintenance and reconciliation of accounts and financial statements such as balance sheets, profit-and-loss statements and capital expenditure schedules. \n\nrepares, records, analyzes and reports accounting transactions and ensures the integrity of accounting records for completeness, accuracy and compliance with accepted accounting policies and principles. \n\nrovides financial support, including forecasting, budgeting and analyzing variations from budget. \n\nAnalyzes and prepares statutory accounts, financial statements and reports. \n\nConducts or assists in the documentation of accounting projects. \n\nSupports efficient operations of General Ledger, International Accounting, Accounts Receivable and Accounts Payable through the design, implementation and maintenance of key systems, internal controls, global close efficiency, audit readiness and management reporting. \n\nBlends suite of collaboration tools with accounting principles and project management to support operational accounting efficiency.   \n\nImplements automation, including robotic process automation (RPA) and partners frequently with IT to add efficiency through technology / automation. \n\nCreates and maintains financial / operating performance metrics along with communication to stakeholders to support business decisions. ",
      icon: "ios-flower",
    },
    {
      department: "Finance",
      jobFamily: "Payroll",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 6,
      description:
        "Prepares, documents and disburses net payroll payments, payroll taxes and employee benefit payments. \n\nPrepares monthly, quarterly and annual tax filings based on regional requirements. \n\nProvide training to managers and employees on the payroll system. \n\nPrepares reports illustrating payroll expenditures, including such items as tax payments and regulatory benefit plan disbursements. \n\nManages payroll journal entry and bonus accrual. Evaluates current systems, and recommends and develops operating efficiency improvements.  \n\nResponsible for managing external vendors, service agreements and vendor budgeting. ",
    },
    {
      department: "Finance",
      jobFamily: "Pricing Strategy",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 7,
      description:
        "Responsible for driving and managing the overall pricing and packaging strategy for the entire portfolio of Cloud & BTF products. \n\nThis team is focused on growing our revenue sustainably by managing our revenue strategy . \n\nThe team works collaboratively across functions, including Finance, Product management, Product marketing, and Commerce to recommend and deliver pricing recommendations.",
    },
    {
      department: "Finance",
      jobFamily: "Procurement Operations",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 8,
      description:
        "Performs financial modeling and assists in spend analysis to support internal customer departments and identify opportunities for cost savings. \n\nPerforms administrative duties relating to organizing and coordinating procurement activities to include - Processing JIRA tickets, PO creation and Invoice Receiving, ensuring completeness and accuracy; follows up to resolve discrepancies with the initiating business/department. \n\nAssists AP in invoice resolution.  Evaluates processes to help drive continuous improvement of operational and cost effectiveness of the team.",
    },
    {
      department: "Finance",
      jobFamily: "Revenue Accounting",
      icon: "ios-flower",
      jobLevels: [
        { level: "People Leadership Career Track PL20" },
        { level: "People Leadership Career Track PL30" },
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "People Leadership Career Track PL60" },
        { level: "People Leadership Career Track PL70" },
        { level: "Individual Contributor IC10" },
        { level: "Individual Contributor IC20" },
        { level: "Individual Contributor IC30" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
      ],
      description:
        "Responsible for driving and managing the overall pricing and packaging strategy for the entire portfolio of Cloud & BTF products. \n\nThis team is focused on growing our revenue sustainably by managing our revenue strategy . \n\nThe team works collaboratively across functions, including Finance, Product management, Product marketing, and Commerce to recommend and deliver pricing recommendations. \n\nPerforms financial modeling and assists in spend analysis to support internal customer departments and identify opportunities for cost savings. \n\nPerforms administrative duties relating to organizing and coordinating procurement activities to include - Processing JIRA tickets, PO creation and Invoice Receiving, ensuring completeness and accuracy; follows up to resolve discrepancies with the initiating business/department. \n\nAssists AP in invoice resolution.  \n\nEvaluates processes to help drive continuous improvement of operational and cost effectiveness of the team. \n\nImplements controls and evaluates actions required for compliance with the company’s revenue recognition accounting process, including the bookings and billings process. \n\nPerforms regular and special analysis (such as reviews of organizational billing practices) to ensure invoice accuracy and proper revenue recognition. \n\nCompletes all required month-end close activities including revenue reconciliation and management reporting. \n\nMay work with legal and sales personnel in reviewing revenue contracts to ensure adherence to company policies and resolves any revenue issues. \n\nFollows control procedures and interacts with audit or other functions in the approval of product discount pricing, stand-alone selling price, studies and significance analysis to ensure compliance with company policy and proper revenue recording. \n\nConducts or assists in the documentation of accounting projects. \n\nBlends the  suite of collaboration tools with accounting principles and project management to support operational accounting efficiency.   \n\nImplements automation, including robotic process automation (RPA) and partners frequently with IT to add efficiency through technology / automation. Creates and maintains financial / operating performance metrics along with communication to stakeholders to support business decisions. ",
    },
    {
      department: "Finance",
      jobFamily: "Sourcing and Contracting",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 10,
      description:
        "Provides strategic guidance and services across the full supplier relationship lifecycle (e.g., strategic sourcing, supplier identification, risk identification and monitoring, supplier onboarding, supplier relationship management, supplier renewal, etc.) to help  select the right suppliers and partners at the right cost.  \n\nWorks with internal business owners and partners to achieve the best combination of price and long term price protection, improved SLAs, scaled implementation, additional features and functionality. \n\nClarifies business owner needs and sources viable suppliers; supports supplier evaluation and selection; conducts risk assessments and determines whether full due diligence is required by other cross functional teams, such as Risk & Compliance, Security, Finance and IT Architecture.  \n\nNegotiates renewals at terms favorable to .",
    },
    {
      department: "Finance",
      jobFamily: "Strategy and Business Operations ",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 11,
      description:
        "Supports the development of long and short run product and organizational strategy to ensure sustainable topline growth and profitability. \n\nFocus of the team is three fold: (1) product strategy, (2) performance management, and (3) monetization. ",
    },
    {
      department: "Finance",
      jobFamily: "Tax",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 12,
      description:
        "Provides strategic, forward looking (e.g.,10 year horizon) guidance to Leadership to ensure has the right corporate structure to support a sustainable tax profile that both minimizes the Company's tax burden and aligns with the needs of the business.  \n\nDevises strategies to manage 's tax profile and tax burden in each local jurisdiction. Conducts research and analyses of existing and upcoming tax legislation (domestic and/or international); advises management on the tax implications resulting from projected organizational actions and transactions, and conducts rate forecasting over both short and long term horizons.\n\n Keeps compliant with various local, state, and federal tax regulations; oversees tax audits.",
    },
    {
      department: "Finance",
      jobFamily: "Technical Accounting",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 13,
      description:
        "Develops and implements accounting strategies and procedures in accordance with evolving regulations, legal and governmental requirements and industry trends that may impact. \n\nAdvises  Leadership regarding the impact to financial statements of potential changes to accounting rules proposed by accounting standards setters. \n\nDevelops, implements and communicates new policies and processes to comply with newly issued accounting standards. Provides accounting guidance related to proposed transactions to ensure conformity with applicable local country and international standards and company policies and procedures. \n\nEnsures that relevant accounting standards are appropriately and consistently applied. \n\nPartners with cross-functional teams across  and provides guidance to executive leadership, external auditors and our Board members. \n\nResponsible for quarterly / annual financial reporting to our executive management and the investor community. ",
    },
    {
      department: "Finance",
      jobFamily: "Treasury",
      jobLevels: [
        { level: "People Leadership Career Track PL40" },
        { level: "People Leadership Career Track PL50" },
        { level: "Individual Contributor IC40" },
        { level: "Individual Contributor IC50" },
        { level: "Individual Contributor IC60" },
      ],
      icon: "ios-flower",
      id: 14,
      description:
        "Manages the liquidity of the business, including cash inflows and outflows. \n\nManages and executes treasury functions including investment management, bank relationship management, foreign exchange risk management, cash management, and treasury operations. \n\nDevelops and implements capital structure, including financing alternatives and other capital markets initiatives. \n\nManages the payment processing service providers and relationships. Assists in meeting overall treasury department's policies and regulatory requirements. ",
    },
  ];

  return jobFamilies;
};

const dict = {
  getJobFamilies: _getJobFamilies,
};

export default dict;
