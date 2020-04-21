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
        "Supports the Audit Committee of the Board of Directors in its oversight responsibilities. Provides independent assessment of processes, policies, procedures, and controls to highlight and mitigate risk and improve efficiency.  Performs reviews of business, IT, and security processes.  Conducts compliance auditing and provides design guidance",
      icon: "ios-flower",
    },

    {
      department: "Finance",
      jobFamily: "Investor Relations2",
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
      description: "",
      icon: "ios-flower",
    },
    {
      department: "Finance",
      jobFamily: "Payroll",
      icon: "ios-flower",
      id: 6,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Pricing Strategy",
      icon: "ios-flower",
      id: 7,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Procurement Operations",
      icon: "ios-flower",
      id: 8,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Revenue Accounting",
      icon: "ios-flower",
      id: 9,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Sourcing and Contracting",
      icon: "ios-flower",
      id: 10,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Strategy and Business Operations ",
      icon: "ios-flower",
      id: 11,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Tax",
      icon: "ios-flower",
      id: 12,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Technical Accounting",
      icon: "ios-flower",
      id: 13,
      description: "",
    },
    {
      department: "Finance",
      jobFamily: "Treasury",
      icon: "ios-flower",
      id: 14,
      description: "",
    },
  ];

  return jobFamilies;
};

const dict = {
  getJobFamilies: _getJobFamilies,
};

export default dict;
