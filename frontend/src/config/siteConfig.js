// Site Configuration
// UPDATE THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// Edit the values below with your own information

export const siteConfig = {
  // ===== PERSONAL INFORMATION =====
  name: "Gandreddy Lokesh Ram",
  firstName: "Gandreddy Lokesh Ram",
  location: "Tirupati, India",
  timezone: "ist", // "ist" for Indian Standard Time
  tagline: "an AI Systems Engineer building intelligent automation platforms. This is my innovation lab.",
  
  // ===== PROFILE IMAGE =====
  // Your photo is set below - it will automatically apply grayscale filter
  profileImage: "https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/vpfro1p6_WhatsApp%20Image%202026-01-13%20at%2019.29.21.jpeg",
  
  // ===== SOCIAL LINKS =====
  linkedIn: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/your-username/",
  medium: "https://medium.com/@your-handle",
  twitter: "https://twitter.com/your-handle",
  
  // ===== WORK EXPERIENCES =====
  workExperiences: [
    {
      id: "saraai",
      company: "Sara.ai",
      logo: "S",
      title: "Right now, I architect AI-powered learning experiences at Sara.ai",
      descriptions: [
        "2023 — Present: Founder & Lead Engineer of personalized learning platform serving active users with high retention.",
        "2022 — 2023: Designed and launched MVP with microservices on Kubernetes and CI/CD automation."
      ],
      link: "#saraai"
    },
    {
      id: "aiconsultant",
      company: "AI Systems Consultant",
      logo: "AI",
      title: "Previously, I was an AI Systems Engineering Consultant",
      description: "Led development of an AI hiring platform with automated screening and interview analysis. I also built real-time collaboration features and matching algorithms improving candidate placements.",
      link: "#aiconsultant"
    }
  ],
  
  // ===== ABOUT SECTIONS =====
  // These will automatically alternate left/right positioning
  aboutSections: [
    {
      title: "I started my career as a backend developer",
      description: "I graduated with a degree in computer science from Mohan Babu University. I also hold certifications in AWS Solutions Architecture and Google Cloud Machine Learning."
    },
    {
      title: "But my true passion is system architecture",
      description: "I transitioned to AI systems engineering after I found a passion for scalable, production-ready automation. I find time to contribute to open source when I can — like this portfolio."
    },
    {
      title: "I built an open-source multi-agent automation framework",
      description: "Here's something I wrote about how this project enables businesses to automate complex workflows. Full details in the case study below.",
      hasLink: true,
      link: "#automation-framework"
    },
    {
      title: "I also mentor junior developers in AI/ML and system design",
      description: "Connect with me if you'd like to discuss AI system architecture. Number one tip — focus on measurable impact over buzzwords.",
      hasLink: true,
      link: "https://www.linkedin.com/in/your-profile/"
    },
    {
      title: "In addition to AI Systems, I'm passionate about Automation, Open Source, Education Technology, and Scalable Architecture",
      description: "This is where I find the intersection of artificial intelligence and practical business applications the most fascinating, assuming there are robust engineering foundations."
    },
    {
      title: "My current project is an Autonomous Business Process Engine",
      description: "I'm a big believer in democratizing automation. I've had incredible mentors who've shaped my technical journey and I'd like to pay it forward."
    },
    {
      title: "Outside of work, I'm a technical writer and continuous learner",
      description: "I hope to publish more comprehensive guides on building production AI systems when time allows (and improve my system design skills)."
    },
    {
      title: "And an AI meetup regular (100% serious)",
      description: "Speaking at tech communities became a passion, and sharing knowledge with fellow engineers energizes my brain especially."
    }
  ],
  
  // ===== INTERESTS =====
  interests: {
    playing: ["Exploring AI agent simulations", "Prototyping automation workflows"],
    listening: ["Tech podcasts", "Lofi focus mixes", "Indie developer streams"],
    reading: ["Research papers on multi-agent systems", "Architecture blogs", "Open-source docs"]
  },
  
  // ===== FOOTER =====
  footer: {
    text: "This site is hand-crafted and coded. Feel free to",
    linkText: "visit my GitHub.",
    copyright: "Copyright © Gandreddy Lokesh Ram. Icons and illustrations courtesy of Lucide React (open source)."
  }
};

export default siteConfig;
