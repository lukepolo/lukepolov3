export enum SkillGroupTypes {
  CSS = "CSS",
  PHP = "PHP",
  TOOLS = "Tools",
  DEV_OPS = "DevOps",
  Languages = "Languages",
  DATABASES = "Databases",
  JAVASCRIPT = "JavaScript",
}

export default {
  [SkillGroupTypes.Languages]: [
    {
      display: "TypeScript",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "Javascript",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "GraphQL",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "PHP",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "CSS",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
  ],
  [SkillGroupTypes.JAVASCRIPT]: [
    {
      display: "NodeJS",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "VueJS",
      link: "",
      enabled: true,
      confidenceLevel: 9,
    },
    {
      display: "Angular",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "React",
      link: "",
      enabled: true,
      confidenceLevel: 4,
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
      display: "Flex",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "Grid",
      link: "",
      enabled: true,
      confidenceLevel: 6,
    },
    {
      display: "Tailwind",
      link: "",
      enabled: false,
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
      confidenceLevel: 6,
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
      display: "Postgres",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "Redis",
      link: "",
      enabled: true,
      confidenceLevel: 7,
    },
    {
      display: "MongoDB",
      link: "",
      enabled: true,
      confidenceLevel: 6,
    },
  ],
  [SkillGroupTypes.PHP]: [
    {
      display: "Laravel",
      link: "https://laravel.com/",
      enabled: true,
      confidenceLevel: 7,
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
      display: "Gulp",
      link: "",
      enabled: false,
      confidenceLevel: 7,
    },
  ],
  [SkillGroupTypes.DEV_OPS]: [
    {
      display: "Kubernetes",
      link: "",
      enabled: true,
      confidenceLevel: 6,
    },
    {
      display: "CI/CD",
      link: "",
      enabled: true,
      confidenceLevel: 8,
    },
    {
      display: "Shell Scripting",
      link: "",
      enabled: true,
      confidenceLevel: 5,
    },
    {
      display: "Server Mgmt.",
      link: "",
      enabled: false,
      confidenceLevel: 7,
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
  ],
};
