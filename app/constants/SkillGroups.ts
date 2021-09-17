export enum SkillGroupTypes {
  CSS = "CSS",
  PHP = "PHP",
  TOOLS = "Tools",
  DEV_OPS = "DevOps",
  Languages = "Top Languages",
  MarkUpLanguages = "Markup Languages",
  DATABASES = "Databases",
  JAVASCRIPT = "JavaScript",
}

export default {
  [SkillGroupTypes.Languages]: [
    {
      display: "TypeScript",
      link: "",
      enabled: true,
    },
    {
      display: "NodeJS",
      link: "",
      enabled: true,
    },
    {
      display: "Javascript",
      link: "",
      enabled: true,
    },
    {
      display: "GraphQL",
      link: "",
      enabled: true,
    },
    {
      display: "PHP",
      link: "",
      enabled: true,
    },
  ],
  [SkillGroupTypes.MarkUpLanguages]: [
    {
      display: "CSS",
      link: "",
      enabled: true,
    },
    {
      display: "HTML",
      link: "",
      enabled: true,
    },
  ],
  [SkillGroupTypes.JAVASCRIPT]: [
    {
      display: "NodeJS",
      link: "",
      enabled: true,
    },
    {
      display: "VueJS",
      link: "",
      enabled: true,
    },
    {
      display: "Angular",
      link: "",
      enabled: true,
    },
    {
      display: "React",
      link: "",
      enabled: true,
    },
  ],
  [SkillGroupTypes.CSS]: [
    {
      display: "SCSS",
      link: "",
      enabled: true,
    },
    {
      display: "Flex",
      link: "",
      enabled: true,
    },
    {
      display: "Grid",
      link: "",
      enabled: true,
    },
    {
      display: "Tailwind",
      link: "",
      enabled: false,
    },
    {
      display: "BootStrap",
      link: "",
      enabled: false,
    },
    {
      display: "Foundation",
      link: "",
      enabled: false,
    },
  ],
  [SkillGroupTypes.DATABASES]: [
    {
      display: "MySQL",
      link: "",
      enabled: true,
    },
    {
      display: "Postgres",
      link: "",
      enabled: true,
    },
    {
      display: "Redis",
      link: "",
      enabled: true,
    },
    {
      display: "MongoDB",
      link: "",
      enabled: true,
    },
  ],
  [SkillGroupTypes.PHP]: [
    {
      display: "Laravel",
      link: "https://laravel.com/",
      enabled: true,
    },
  ],
  [SkillGroupTypes.TOOLS]: [
    {
      display: "GIT",
      link: "",
      enabled: true,
    },
    {
      display: "WebPack",
      link: "",
      enabled: true,
    },
  ],
  [SkillGroupTypes.DEV_OPS]: [
    {
      display: "Kubernetes",
      link: "",
      enabled: true,
    },
    {
      display: "CI/CD",
      link: "",
      enabled: true,
    },
    {
      display: "Shell Scripting",
      link: "",
      enabled: true,
    },
    {
      display: "Docker",
      link: "",
      enabled: true,
    },
    {
      display: "Vagrant",
      link: "",
      enabled: true,
    },
  ],
};
