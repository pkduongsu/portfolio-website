interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'ai' | 'fullstack';
  featured: boolean;
}

export const PROJECTS_LIST: Project[] = [
    {
      id: 1,
      title: "Dragon's Analytics",
      subtitle: "Data visualization dashboard",
      description: "A comprehensive analytics dashboard for business intelligence with interactive charts, real-time data updates, and customizable reports with mystical data representations.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Charts.js"],
      image: "",
      githubUrl: "https://github.com/yourusername/dragons-analytics",
      liveUrl: "https://dragons-analytics.vercel.app",
      category: "fullstack",
      featured: false
    },
    {
      id: 2,
      title: "Kode AI",
      subtitle: "Kode (Kim Codes 😊 - lol)",
      description: "A full-stack AI website generator application, allowing users to generate website through natural language requests, get real-time demo, and making tweaks and changes along with AI.",
      technologies: ["Next.js", "TypeScript", "Clerk", "Prisma", "PostgreSQL", "Tailwind", "E2B", "Inngest"],
      image: "/kode.png",
      githubUrl: "https://github.com/pkduongsu/Kode-AI",
      liveUrl: "https://kode-ai-one.vercel.app/",
      category: "fullstack",
      featured: true
    },
    {
      id: 3,
      title: "Soot Sprite Deploy",
      subtitle: "Automated deployment pipeline",
      description: "A DevOps tool for automated deployment and monitoring of applications with Docker containerization and CI/CD pipeline integration, as efficient as soot sprites.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Grafana"],
      image: "",
      githubUrl: "https://github.com/yourusername/soot-deploy",
      liveUrl: "https://soot-deploy.aws.com",
      category: "web",
      featured: false
    }
];