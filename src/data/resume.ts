export const profile = {
  name: "Sathish Selvan",
  role: "Enterprise Software Engineer II @ Medtronic",
  tagline:
    "I build backend systems and cloud infrastructure that don't fall over, with a growing focus on AI/ML.",
  location: "Cuddalore, Tamil Nadu, India",
  email: "sathishselvant17@gmail.com",
  github: "https://github.com/sathish-selvan",
  linkedin: "https://www.linkedin.com/in/sathish-selvan-56a508180/",
  resumeUrl: "/resume.pdf",
};

export type Highlight = {
  title: string;
  subtitle?: string;
  description: string;
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  summary?: string;
  highlights: Highlight[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Enterprise Software Engineer II",
    org: "Medtronic",
    dates: "Apr 2026 — Present",
    summary:
      "Currently working on two new initiatives across the organisation:",
    highlights: [
      {
        title: "PORT",
        subtitle: "Infrastructure management on Port (SaaS IDP)",
        description:
          "Using Port, a SaaS internal developer portal, to maintain and manage the organisation's infrastructure: cataloguing resources and standardising how they are provisioned and operated.",
      },
      {
        title: "Base Image Provisioning",
        subtitle: "Organisation-wide container base images",
        description:
          "Standardised base images provisioned across the organisation, so teams start from a consistent, maintained foundation.",
      },
    ],
  },
  {
    role: "Senior System Engineer",
    org: "Rheo AI",
    dates: "Oct 2023 — Mar 2026",
    highlights: [
      {
        title: "Flask → FastAPI migration",
        description:
          "Migrated a monolithic Flask backend to FastAPI microservices.",
      },
      {
        title: "Real-time processing pipeline",
        subtitle: "AWS SQS · Kubernetes Jobs",
        description:
          "Built a real-time processing pipeline on AWS SQS and Kubernetes Jobs.",
      },
      {
        title: "CI/CD automation",
        subtitle: "GitHub Actions · Terraform · Ansible",
        description:
          "Automated build, infrastructure and deployment workflows.",
      },
    ],
    tags: ["FastAPI", "PostgreSQL", "AWS SQS", "Kubernetes", "Terraform"],
  },
  {
    role: "Associate Data Scientist",
    org: "iLink Digital",
    dates: "Jul 2021 — Oct 2023",
    highlights: [
      {
        title: "AI video processing platform",
        description:
          "Built microservices for an AI-powered video processing platform.",
      },
      {
        title: "Centralized logging",
        subtitle: "ElasticSearch",
        description: "Added centralized logging across services.",
      },
      {
        title: "Scalable deployment",
        subtitle: "Azure CI/CD · Kubernetes",
        description: "Configured Azure CI/CD and Kubernetes for scalable deployment.",
      },
    ],
    tags: ["Flask-RestX", "MongoDB", "ElasticSearch", "Azure", "Kubernetes"],
  },
  {
    role: "Intern",
    org: "iLink Digital",
    dates: "Apr 2021 — Jun 2021",
    highlights: [
      {
        title: "Django social app",
        subtitle: "JWT authentication",
        description:
          "Built a social app with JWT authentication, image posts, and friend management while training in Python automation.",
      },
    ],
    tags: ["Django", "JWT"],
  },
];

export const coreStack = [
  "Python",
  "FastAPI",
  "Django",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "PostgreSQL",
] as const;

export type EducationItem = {
  degree: string;
  school: string;
  dates: string;
  status?: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.Tech, AI & ML",
    school: "BITS Pilani",
    dates: "2025 — 2027",
  },
  {
    degree: "B.E., Electronics & Communication",
    school: "Jeppiaar Engineering College",
    dates: "2017 — 2021",
  },
];
