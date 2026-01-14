// Site Configuration
// UPDATE THIS FILE TO CUSTOMIZE YOUR PORTFOLIO

export const siteConfig = {
  // ===== PERSONAL INFORMATION =====
  name: "Gandreddy Lokesh",
  firstName: "Lokesh",
  location: "Tirupati, India",
  timezone: "ist",
  tagline: "an AI Systems & Automation Engineer building intelligent platforms that scale. This is my technical playground.",
  
  // ===== PROFILE IMAGE =====
  profileImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  
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
      title: "Right now, I architect AI-powered learning experiences at Sara.ai",
      descriptions: [
        "September 2023 — Present: Founder & Lead Engineer of personalized learning platform serving 1,700+ active users with 92% monthly retention rate.",
        "Engineered RAG-based recommendation system using transformer embeddings and FAISS, reducing content discovery latency by 32% and increasing click-through rates by 24%."
      ],
      link: "https://sara.ai",
      highlights: [
        "99.7% uptime with scalable microservices architecture",
        "50,000+ daily events processed with real-time analytics",
        "Reduced deployment time from 4 hours to 15 minutes with CI/CD"
      ]
    },
    {
      id: "vaagisha",
      company: "Vaagisha Enterprises",
      logo: "V",
      title: "Previously, I was an AI Systems Engineering Consultant at Vaagisha Enterprises",
      description: "Designed and implemented AI-powered hiring platform using Next.js and serverless architecture. Integrated Gemini AI for interview analysis with 94% accuracy, reducing manual screening time by 65%. Built real-time collaboration features and matching algorithms improving candidate placements by 42%.",
      link: "https://vaagisha.com",
      highlights: [
        "65% reduction in manual screening time",
        "94% accuracy in automated candidate evaluation",
        "42% improvement in successful placements"
      ]
    }
  ],
  
  // ===== ABOUT SECTIONS =====
  aboutSections: [
    {
      title: "I started my career as a backend developer",
      description: "I'm pursuing my B.Tech in Computer Science from Mohan Babu University with an 8.7 GPA. I hold AWS Solutions Architect certification and am completing Google Cloud Professional Machine Learning Engineer certification."
    },
    {
      title: "But my true passion is system architecture",
      description: "I transitioned to AI systems engineering after discovering my love for building scalable, production-ready automation platforms. I architect systems that handle 50,000+ daily events while maintaining 99.7% uptime."
    },
    {
      title: "I built an open-source multi-agent automation framework",
      description: "Created a business process engine using LangChain and CrewAI with 400+ GitHub stars. It enables businesses to automate complex workflows with self-healing mechanisms, reducing manual intervention by 78%. Now used by 15+ small businesses.",
      hasLink: true,
      link: "https://github.com/Lokeshgandr"
    },
    {
      title: "I also mentor junior developers in AI/ML and system design",
      description: "Regular speaker at AI/ML meetups and active contributor to open source projects. I've mentored 3 junior developers in AI/ML best practices. My technical writing on Hashnode and Dev.to has reached 2,000+ readers.",
      hasLink: true,
      link: "https://lokeshgandreddy.hashnode.dev"
    },
    {
      title: "In addition to AI Systems, I'm passionate about Cloud Infrastructure, DevOps, and Performance Optimization",
      description: "I specialize in AWS and GCP, with expertise in Docker, Kubernetes, Terraform, and CI/CD pipelines. I've optimized database queries to reduce response times by 78% and built monitoring systems with Prometheus and Grafana."
    },
    {
      title: "My current project is a Document Intelligence Pipeline",
      description: "Building automated document processing using GPT-4 Vision and Claude API. The system processes 5,000+ documents daily with 99.2% accuracy, extracting structured data from invoices, contracts, and reports with semantic search capabilities.",
      hasLink: true,
      link: "https://github.com/Lokeshgandr"
    },
    {
      title: "I'm pursuing AWS and Google Cloud certifications",
      description: "Currently working towards Google Cloud Professional Machine Learning Engineer certification (Expected Dec 2024). Already certified in AWS Solutions Architect Associate and DeepLearning.AI TensorFlow Developer."
    },
    {
      title: "And an active technical writer (100% serious)",
      description: "Writing became my way of giving back to the community. My articles on building scalable RAG systems and AI agent architectures have been read by 2,000+ developers. I believe in learning in public and sharing knowledge."
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
    building: ["Scalable AI systems", "RAG architectures", "Multi-agent frameworks"],
    learning: ["System design podcasts", "AI/ML research papers", "DevOps best practices"],
    reading: ["Designing Data-Intensive Applications", "Cloud architecture blogs", "Open source code"]
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
