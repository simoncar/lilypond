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
      title: "Finance Administrator",
      icon: "ios-flower",
      id: 2,
    },

    {
      title: "Designer",
      icon: "ios-flower",
      id: 5,
    },
  ];

  return roleProfiles;
};

const dict = {
  getRoleProfiles: _getRoleProfiles,
};

export default dict;
