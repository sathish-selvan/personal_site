export const profile = {
  name: "Sathish Selvan",
  role: "Backend Python & DevOps Engineer",
  tagline: "I build backend systems and cloud infrastructure that don't fall over.",
  location: "Cuddalore, Tamil Nadu, India",
  email: "sathish.t2000@gmail.com",
  github: "https://github.com/sathish-selvan",
  linkedin: "https://linkedin.com/in/sathish-selvan",
  resumeUrl: "/resume.pdf",
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  summary: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend Developer / DevOps",
    org: "Rheo AI",
    dates: "2023 — Present",
    summary:
      "Migrated a monolithic Flask backend to FastAPI microservices, built a real-time processing pipeline on AWS SQS and Kubernetes Jobs, and automated CI/CD with GitHub Actions, Terraform, and Ansible.",
    tags: ["FastAPI", "PostgreSQL", "AWS SQS", "Kubernetes", "Terraform"],
  },
  {
    role: "Software Engineer",
    org: "iLink Digital",
    dates: "2021 — 2023",
    summary:
      "Built microservices for an AI-powered video processing platform, added centralized logging with ElasticSearch, and configured Azure CI/CD and Kubernetes for scalable deployment.",
    tags: ["Flask-RestX", "MongoDB", "ElasticSearch", "Azure", "Kubernetes"],
  },
  {
    role: "Intern",
    org: "iLink Digital",
    dates: "2021",
    summary:
      "Built a Django-based social app with JWT authentication, image posts, and friend management while training in Python automation.",
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
];

export type EducationItem = {
  degree: string;
  school: string;
  dates: string;
};

export const education: EducationItem[] = [
  { degree: "M.Tech, AI & ML", school: "BITS Pilani", dates: "2025 — 2027" },
  {
    degree: "B.E., Electronics & Communication",
    school: "Jeppiaar Engineering College",
    dates: "2017 — 2021",
  },
];
