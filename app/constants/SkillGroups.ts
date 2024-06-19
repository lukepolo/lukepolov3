export enum SkillGroupTypes {
  AI = "AI",
  Backend = "Backend",
  Frontend = "Frontend",
  DevOps = "DevOps",
  Databases = "Databases",
  Concepts = "Concepts",
}

export default {
  [SkillGroupTypes.Frontend]: [
    {
      display: "JavaScript",
      enabled: true,
    },
    {
      display: "Vue.js",
      enabled: true,
    },
    {
      display: "React",
      enabled: true,
    },
    {
      display: "Angular",
      enabled: true,
    },
    {
      display: "CSS / SCSS",
      enabled: true,
    },
  ],
  [SkillGroupTypes.Backend]: [
    {
      display: "Typescript",
      enabled: true,
    },
    {
      display: "Node.js",
      enabled: true,
    },
    {
      display: "PHP",
      enabled: true,
    },
    {
      display: "C#",
      enabled: true,
    },
  ],
  [SkillGroupTypes.DevOps]: [
    {
      display: "Kubernetes",
      enabled: true,
    },
    {
      display: "Docker",
      enabled: true,
    },
    {
      display: "Vagrant",
      enabled: true,
    },
    {
      display: "CI/CD",
      enabled: true,
    },
    {
      display: "Shell Scripting",
      enabled: true,
    },
  ],
  [SkillGroupTypes.AI]: [
    {
      display: "RAG",
      enabled: true,
    },
  ],
  [SkillGroupTypes.Databases]: [
    {
      display: "Postgres",
      enabled: true,
    },
    {
      display: "Redis",
      enabled: true,
    },
    {
      display: "MySQL",
      enabled: true,
    },
    {
      display: "MongoDB",
      enabled: true,
    },
  ],
  [SkillGroupTypes.Concepts]: [
    {
      display: "Microservices",
      enabled: true,
    },
    {
      display: "Event Based Systems",
      enabled: true,
    },
    {
      display: "GraphQL",
      enabled: true,
    },
    {
      display: "WebSockets",
      enabled: true,
    },
    {
      display: "WebRTC",
      enabled: true,
    },
    {
      display: "Networking",
      enabled: true,
    },
    {
      display: "Git",
      link: "https://git-scm.com/",
      enabled: true,
    },
    {
      display: "Agile",
      enabled: true,
    },
  ],
};
