// Site Configuration
// UPDATE THIS FILE TO CUSTOMIZE YOUR PORTFOLIO

export const siteConfig = {
  // ===== PERSONAL INFORMATION =====
  name: "Gandreddy Lokesh",
  firstName: "Lokesh",
  location: "Tirupati, India",
  timezone: "ist",
  tagline: "I architect intelligent systems that think, automate, and scale. This is where ideas become infrastructure.",

  // ===== PROFILE IMAGES =====
  profileImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  // Add your closing portrait image here (displayed at the end before footer)
  closingImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  architectImage: "/images/lokesh_architect.jpg",

  // ===== CONTACT & SOCIAL LINKS =====
  email: "gandreddylokesh7@gmail.com",
  phone: "+91 6300272531",
  linkedIn: "https://linkedin.com/in/lokeshh-hhh",
  github: "https://github.com/Lokeshgandreddy81",
  portfolio: "https://lokesh-ai-portfolio.vercel.app",
  blog: "https://lokeshgandreddy.hashnode.dev",
  devto: "https://dev.to/lokeshgandreddy",

  // ===== WORK EXPERIENCES =====
  workExperiences: [
    {
      id: "saraai",
      company: "Sara.ai",
      logo: "S",
      title: "Senior Product Engineer",
      period: "Jan 2024 - Present",
      descriptions: [
        "Built Sara.ai, an AI-native platform that dynamically generates and adapts curriculum in real-time.",
        "Architected a scalable backend with FastAPI and PostgreSQL, implementing a robust retrieval-based content system utilizing FAISS for vector search.",
        "Drastically reduced learner drop-off rates by providing personalized, context-aware educational interventions."
      ],
      technologies: ["React", "FastAPI", "PostgreSQL", "FAISS", "Python"],
      link: "https://sara.ai"
    },
    {
      id: "vaagisha",
      company: "Vaagisha Enterprises",
      logo: "VE",
      title: "Previously, I designed enterprise AI systems that transform how companies hire, collaborate, and make decisions.",
      description: "AI Engineering Consultant. Built backend and application logic using Next.js and serverless APIs to streamline recruiter workflows. Contributed to an AI-assisted hiring platform.",
      link: "#vaagisha"
    }
  ],

  // ===== ABOUT SECTIONS =====
  aboutSections: [
    {
      title: "I started in the engine room",
      description: "Backend systems, cloud architecture, and the gritty details of what makes systems reliable at scale. The real learning began in production."
    },
    {
      title: "Outside the terminal, I'm a student of systems thinking",
      description: "In code, in teams, in how ideas spread. I write to clarify my own thinking, speak to sharpen it, and listen to broaden it."
    }
  ],

  // ===== INTERESTS =====
  interests: {
    building: ["Prototypes that become products", "Tools that become standards", "Systems that scale gracefully"],
    reading: ["Systems design papers", "Founder memoirs", "Architecture that inspires"],
    learning: ["Long-form interviews with builders", "Ambient soundscapes for deep work", "AI/ML research breakthroughs"]
  },

  // ===== FOOTER =====
  footer: {
    text: "This site, like everything I build, is crafted, not assembled. Explore the code on",
    linkText: "my GitHub.",
    copyright: "Copyright © 2024 Gandreddy Lokesh. Built with intention, deployed with purpose."
  }
};

export default siteConfig;
