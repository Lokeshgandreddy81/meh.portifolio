// Site Configuration
// UPDATE THIS FILE TO CUSTOMIZE YOUR PORTFOLIO

export const siteConfig = {
  // ===== PERSONAL INFORMATION =====
  name: "Gandreddy Lokesh Ram",
  firstName: "Lokesh",
  location: "Tirupati, India",
  timezone: "ist",
  tagline: "I architect intelligent systems that think, automate, and scale. This is where ideas become infrastructure.",
  
  // ===== PROFILE IMAGES =====
  profileImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  // Add your closing portrait image here (displayed at the end before footer)
  closingImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  
  // ===== CONTACT & SOCIAL LINKS =====
  email: "gandreddylokesh7@gmail.com",
  phone: "+91 6300272531",
  linkedIn: "https://linkedin.com/in/lokeshh-hhh",
  github: "https://github.com/Lokeshgandr",
  portfolio: "https://lokesh-ai-portfolio.vercel.app",
  blog: "https://lokeshgandreddy.hashnode.dev",
  devto: "https://dev.to/lokeshgandreddy",
  
  // ===== WORK EXPERIENCES =====
  workExperiences: [
    {
      id: "saraai",
      company: "Sara.ai",
      logo: "S",
      title: "Right now, I'm building Sara.ai — an AI-native learning platform that adapts in real time to how people learn.",
      descriptions: [
        "We're reimagining education not as content delivery, but as an interactive, responsive system."
      ],
      link: "https://sara.ai"
    },
    {
      id: "enterprise",
      company: "AI Enterprise",
      logo: "AE",
      title: "Previously, I designed enterprise AI systems that transform how companies hire, collaborate, and make decisions.",
      description: "From screening automation to real-time candidate engagement — I build bridges between intelligence and action.",
      link: "#enterprise"
    }
  ],
  
  // ===== ABOUT SECTIONS =====
  aboutSections: [
    {
      title: "I started in the engine room",
      description: "Backend systems, cloud architecture, and the gritty details of what makes systems reliable at scale. My degree in Computer Science was just the preface. The real learning began in production."
    },
    {
      title: "But my true passion isn't just building — it's architecting",
      description: "I believe the most elegant systems are invisible. They don't demand attention; they enable momentum."
    },
    {
      title: "I built an open-source framework for multi-agent automation",
      description: "Because I believe the future of work is collaborative — between humans and AI, not one replacing the other. It's a toolkit for orchestrating intelligence.",
      hasLink: true,
      link: "https://github.com/Lokeshgandr"
    },
    {
      title: "I guide engineers transitioning into AI systems roles",
      description: "The hardest part isn't the algorithm — it's the discipline of building something that won't break at 3 a.m.",
      hasLink: true,
      link: "https://lokeshgandreddy.hashnode.dev"
    },
    {
      title: "Beyond AI systems, I'm drawn to tools that amplify human creativity",
      description: "Open-source as a form of technical citizenship. Education that adapts, not just instructs. Architecture that lasts longer than trends. This is where engineering meets ethos."
    },
    {
      title: "I'm designing an autonomous business engine",
      description: "A system that observes, decides, and acts within complex workflows. Think of it as a co-pilot for operations, not automation for automation's sake."
    },
    {
      title: "Outside the terminal, I'm a student of systems thinking",
      description: "In code, in teams, in how ideas spread. I write to clarify my own thinking, speak to sharpen it, and listen to broaden it."
    },
    {
      title: "I speak at meetups about the craft of production-ready AI",
      description: "Because great engineering is as much about communication as it is about code. Sharing knowledge isn't just giving back — it's how we all move forward."
    }
  ],
  
  // ===== PROJECTS =====
  projects: [
    {
      title: "Sara.ai - AI Learning Platform",
      description: "Personalized learning platform with 1,700+ active users and 92% retention",
      tech: ["RAG", "FAISS", "Docker", "Kubernetes", "FastAPI", "React"],
      link: "https://sara.ai"
    },
    {
      title: "Autonomous Business Process Engine",
      description: "Multi-agent automation framework with 400+ GitHub stars",
      tech: ["LangChain", "CrewAI", "Python", "Microservices"],
      link: "https://github.com/Lokeshgandr"
    },
    {
      title: "Document Intelligence Pipeline",
      description: "Processes 5,000+ documents daily with 99.2% accuracy",
      tech: ["GPT-4 Vision", "Claude API", "PostgreSQL", "AWS"],
      link: "https://github.com/Lokeshgandr"
    },
    {
      title: "AI Hiring Platform",
      description: "Reduced manual screening by 65% with 94% accuracy",
      tech: ["Gemini AI", "Next.js", "WebSocket", "Serverless"],
      link: "#"
    }
  ],
  
  // ===== INTERESTS =====
  interests: {
    building: ["Prototypes that become products", "Tools that become standards", "Systems that scale gracefully"],
    reading: ["Systems design papers", "Founder memoirs", "Architecture that inspires"],
    learning: ["Long-form interviews with builders", "Ambient soundscapes for deep work", "AI/ML research breakthroughs"]
  },
  
  // ===== TECHNICAL SKILLS =====
  skills: {
    ai: ["LangChain", "RAG Systems", "Vector Databases", "GPT-4/Claude", "Transformer Models"],
    cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Serverless"],
    backend: ["Python", "FastAPI", "Node.js", "REST APIs", "GraphQL", "WebSocket"],
    devops: ["GitHub Actions", "CI/CD", "Prometheus", "Grafana", "Monitoring"],
    frontend: ["React.js", "Next.js", "TypeScript"],
    data: ["MongoDB", "PostgreSQL", "Redis", "Vector Databases", "Analytics"]
  },
  
  // ===== ACHIEVEMENTS =====
  achievements: [
    "Scaled Sara.ai from MVP to 1,700+ users with 92% retention in 8 months",
    "Reduced system latency by 32% and database queries by 78%",
    "400+ GitHub stars with 15+ production deployments",
    "Technical articles read by 2,000+ developers"
  ],
  
  // ===== FOOTER =====
  footer: {
    text: "This portfolio is hand-coded with React, FastAPI, and MongoDB. Check out the code on",
    linkText: "my GitHub.",
    copyright: "Copyright © 2024 Gandreddy Lokesh. Built with modern tech stack and deployed on cloud infrastructure."
  }
};

export default siteConfig;
