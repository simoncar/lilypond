const _getRoleProfiles = () => {
  const roleProfiles = [
    {
      title: "Talent Management",
      icon: "ios-flower",
      id: 1,
    },
    {
      title: "Software Engineer",
      icon: "ios-flower",
      id: 3,
    },
    {
      department: "Finance",
      title: "Internal Audit",
      icon: "ios-flower",
      id: 2,
      description:
        "Supports the Audit Committee of the Board of Directors in its oversight responsibilities. Provides independent assessment of processes, policies, procedures, and controls to highlight and mitigate risk and improve efficiency.  Performs reviews of business, IT, and security processes.  Conducts compliance auditing and provides design guidance",
    },

    {
      title: "Designer",
      icon: "ios-flower",
      id: 5,
      description:
        "Responsible for integrating finance, communication, and marketing and securities law compliance to enable the effective two way communication between the financial and investor community.",
    },
  ];

  return roleProfiles;
};

const dict = {
  getRoleProfiles: _getRoleProfiles,
};

export default dict;
