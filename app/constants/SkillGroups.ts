export enum SkillGroupTypes {
  CSS = "CSS",
  PHP = "PHP",
  TOOLS = "Tools",
  DEV_OPS = "DevOps",
  DATABASES = "Databases",
  JAVASCRIPT = "Javascript",
}

export default {
  [SkillGroupTypes.PHP]: [
    {
      display: "Laravel",
      link: "https://laravel.com/",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "FuelPHP",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "WordPress",
      link: "",
      enabled: false,
      confidenceLevel: 7,
    },
    {
      display: "Joomla!",
      link: "",
      enabled: false,
      confidenceLevel: 5,
    },
  ],
  [SkillGroupTypes.JAVASCRIPT]: [
    {
      display: "VueJS",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "Typescript",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "Angular",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "NodeJS",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "Socket.IO",
      link: "",
      enabled: false,
      confidenceLevel: 9,
    },
    {
      display: "NativeScript-Vue",
      link: "",
      enabled: true,
      confidenceLevel: 4,
    },
    {
      display: "React Native",
      link: "",
      enabled: true,
      confidenceLevel: 3,
    },
  ],
  [SkillGroupTypes.CSS]: [
    {
      display: "SCSS",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "Tailwind",
      link: "",
      enabled: true,
      confidenceLevel: 5,
    },
    {
      display: "BootStrap",
      link: "",
      enabled: false,
      confidenceLevel: 8,
    },
    {
      display: "Foundation",
      link: "",
      enabled: false,
      confidenceLevel: 4,
    },
  ],
  [SkillGroupTypes.DATABASES]: [
    {
      display: "MySQL",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "Redis",
      link: "",
      enabled: false,
      confidenceLevel: 7,
    },
    {
      display: "MongoDB",
      link: "",
      enabled: false,
      confidenceLevel: 6,
    },
  ],
  [SkillGroupTypes.TOOLS]: [
    {
      display: "GIT",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "WebPack",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "Docker",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "Vagrant",
      link: "",
      enabled: false,
      confidenceLevel: 6,
    },
    {
      display: "Gulp",
      link: "",
      enabled: false,
      confidenceLevel: 7,
    },
  ],
  [SkillGroupTypes.DEV_OPS]: [
    {
      display: "Shell Scripting",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "Server Management",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
  ],
};
