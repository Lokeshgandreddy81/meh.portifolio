// Site Configuration
// Update this file to customize your portfolio content and images

export const siteConfig = {
  // Personal Information
  name: "Daniel Autry",
  firstName: "Daniel",
  location: "Washington, DC",
  timezone: "et", // "et", "ist", "pst", etc.
  tagline: "a designer fascinated by the social impact space. This is my creative greenhouse.",
  
  // Profile Image
  // To replace with your own image:
  // Option 1: Use external URL: "https://your-image-url.com/profile.jpg"
  // Option 2: Place image in /app/frontend/public/images/ and use: "/images/your-photo.jpg"
  profileImage: "https://danielautry.com/static/media/profile.3aaf58cfebb540d740ee.jpeg",
  
  // Social Links
  linkedIn: "https://www.linkedin.com/in/daniel-autry/",
  medium: "https://medium.com/@dxautry/how-my-depression-became-my-career-ddf80c2cc5fd",
  adpList: "https://adplist.org/mentors/daniel-autry?utm_source=linkedin&utm_medium=social&utm_campaign=user_profileshare&utm_content=danielautry",
  dribbblePost: "https://www.reddit.com/r/UXDesign/comments/q3ldjb/why_is_there_such_a_disconnect_between/",
  
  // Work Experiences
  workExperiences: [
    {
      id: "google",
      company: "Google",
      logo: "G",
      title: "Right now, I design immersive news and election experiences at Google",
      descriptions: [
        "2023 — News on Search (news queries), Civics on Search (global election queries).",
        "2022 — 2023: Google News apps (iOS, Android, and news.google.com)"
      ],
      link: "#google"
    },
    {
      id: "washingtonpost",
      company: "The Washington Post",
      logo: "WP",
      title: "Previously, I was a Senior Product Designer at The Washington Post",
      description: "Lead designer for the initial launch of The 7 (a daily news briefing), co-designer for 2020 United States election experiences. I also led design and research for a suite of consumer personalization and enterprise CMS experiences.",
      link: "#washingtonpost"
    }
  ],
  
  // About Sections
  aboutSections: [
    {
      title: "I started my career as a frontend developer",
      description: "I graduated with a degree in computer science from The University of Virginia. I also held a frontend-focused SWE internship at Goldman Sachs and worked part-time at a local web agency."
    },
    {
      title: "But my true love is human psychology",
      description: "I transitioned to design after I found a passion for mental health. I find time to code when I can — like this portfolio.",
      alignment: "right"
    },
    {
      title: "I spent a year as a social entreprenuer, improving college mental health outcomes",
      description: "Here's something I wrote about how this project connected to my mental health experience in college. Full details in the case study below.",
      hasLink: true,
      link: "#mentalhealth"
    },
    {
      title: "I also teach and mentor aspiring designers and developers",
      description: "Shoot me a line if you'd like to connect on mentorship. Number one tip — stay off of Dribbble.",
      hasLink: true,
      link: "https://adplist.org/mentors/daniel-autry?utm_source=linkedin&utm_medium=social&utm_campaign=user_profileshare&utm_content=danielautry",
      alignment: "right"
    },
    {
      title: "In addition to Psychology, I'm passionate about News, Healthcare, Climate Change, and Education",
      description: "This is where I find the intersection of technology and social impact the most fascinating, assuming there are the appropiate safeguards"
    },
    {
      title: "My current project is an open-source UX resource for aspiring designers (coming soon)",
      description: "I'm a big believer in accessible quality education. I've had so many people who've helped me stay on my feet and I'd like to pay it forward.",
      alignment: "right"
    },
    {
      title: "Outside of work, I'm a houseplant enthusiast and powerlifter",
      description: "I hope to get a NASM training and nutrition certification when time allows (and learn how to keep a fiddle leaf alive)"
    },
    {
      title: "And an aspiring house DJ (80% serious)",
      description: "DJing became a pandemic hobby, and long, blended sets of house music relaxes my brain especially.",
      alignment: "right"
    }
  ],
  
  // Interests
  interests: {
    playing: ["Elden Ring", "Animal Crossing (late to the party)"],
    listening: ["Fred Again", "Mac Miller", "Lofi beats", "Khruangbin", "The Daily"],
    reading: ["Do comic books count?"]
  },
  
  // Footer
  footer: {
    text: "This site is hand-crafted and coded. Feel free to",
    linkText: "visit my LinkedIn.",
    copyright: "Copyright © Daniel Autry. Icons and illustrations courtesy of Noun Project and respective designers (paid for)."
  }
};

export default siteConfig;
