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
      title: "EtherChain",
      subtitle: "Blockchain transactions visualization platform",
      description: "A website that shows the network of crypto wallet, present complex blockchain information in a user-friendly manner, enabling users to gain valuable insights into transaction patterns, network activity, and smart contract interactions.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Neo4j", "Blockchain"],
      image: "/etherchain.png",
      githubUrl: "https://github.com/pkduongsu/Innovation",
      liveUrl: "https://innovation-black.vercel.app/",
      category: "web",
      featured: false
    },
    {
      id: 2,
      title: "Kode AI",
      subtitle: "Kode (Kim Codes 😊 - lol)",
      description: "A full-stack AI website generator application (SaSS platform), allowing users to generate website through natural language requests, get real-time demo, making tweaks and changes along with AI (vibe-coding).",
      technologies: ["Next.js", "TypeScript", "Clerk", "Prisma", "PostgreSQL", "Tailwind", "E2B", "Inngest"],
      image: "/kode.png",
      githubUrl: "https://github.com/pkduongsu/Kode-AI",
      liveUrl: "https://kode-ai-one.vercel.app/",
      category: "fullstack",
      featured: true
    },
    {
      id: 3,
      title: "General Asisstant Agent",
      subtitle: "Agentic general purpose AI Assistant",
      description: "This product is part of the Huggingface Agent Course Final Assessment, which involved benchmarking it against the General AI Assistant benchmark - GAIA. Achieved 45% in evaluation (20 random questions of the 1st level-difficulty)",
      technologies: ["Python", "LangChain", "LangGraph", "Gemini"],
      image: "",
      githubUrl: "https://github.com/pkduongsu/General_Assistant_Agent",
      liveUrl: "",
      category: "ai",
      featured: false
    }
];