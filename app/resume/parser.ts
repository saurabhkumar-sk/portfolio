import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

export interface SkillCategory {
  category: string;
  list: string[];
}

export interface WorkExp {
  company: string;
  role: string;
  period: string;
  location: string;
}

export interface ProjectData {
  title: string;
  liveUrl: string;
  role: string;
  features: string[];
}

export interface OpenSourceData {
  name: string;
  description: string;
  version: string;
  pubDevUrl: string;
  gitHubUrl: string;
}

export interface EduData {
  degree: string;
  school: string;
}

export interface CertData {
  name: string;
  provider: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
  skills: SkillCategory[];
  experience: WorkExp[];
  projects: ProjectData[];
  openSource: OpenSourceData[];
  education: EduData[];
  certifications: CertData[];
}

// Robust fallback data matches exactly what's parsed from the PDF
export const FALLBACK_RESUME_DATA: ResumeData = {
  name: "SAURABH KUMAR",
  title: "FLUTTER DEVELOPER",
  email: "saurabhkumar91536@gmail.com",
  phone: "+91 6203002599",
  linkedin: "saurabh-kumar-skr",
  github: "saurabhkumar-sk",
  portfolio: "my-portfolio",
  summary: "Flutter Developer with 2+ years of professional experience in cross-platform mobile app development for Android and iOS. Experienced in REST API integration, Firebase, Provider, GetX, and Socket.io, with a strong focus on performance optimization, clean architecture, and intuitive UI/UX.",
  skills: [
    {
      category: "Mobile App Development",
      list: ["Flutter", "Dart"]
    },
    {
      category: "State Management Solutions",
      list: ["Provider", "GetX"]
    },
    {
      category: "Firebase services",
      list: ["Firebase Authentication", "Firestore", "Realtime Database", "Cloud Messaging (FCM)"]
    },
    {
      category: "Local Storage & Security",
      list: ["Hive", "SharedPreferences", "Flutter Secure Storage"]
    },
    {
      category: "Payment & Monetization",
      list: ["Paystack", "Razorpay", "PhonePe", "In-App Purchases"]
    },
    {
      category: "App Deployment",
      list: ["Google Play Store", "Apple App Store"]
    },
    {
      category: "Architecture & Patterns",
      list: ["MVVM", "Clean Architecture"]
    },
    {
      category: "Backend & API Integration",
      list: ["REST APIs", "Socket.io"]
    },
    {
      category: "Localization",
      list: ["Multi-language Support", "Flutter Localization(ARB)", "Language Switching"]
    },
    {
      category: "Debugging & Optimization",
      list: ["Performance Optimization", "Memory Management", "API Error Handling"]
    },
    {
      category: "Version Control",
      list: ["Git", "GitHub"]
    },
    {
      category: "Maps & Location Services",
      list: ["Google Maps", "Geocoding", "MapMyIndia", "Mapbox"]
    },
    {
      category: "Networking & API Clients",
      list: ["http", "Dio"]
    },
    {
      category: "Development Tools",
      list: ["Android Studio", "Xcode"]
    }
  ],
  experience: [
    {
      company: "Next Big Technology(NBT)",
      role: "Flutter Developer",
      period: "12/2024 – Present",
      location: "Jaipur, Rajsthan"
    },
    {
      company: "Orbit X Media Private Limited",
      role: "Flutter Developer",
      period: "09/2024 -12/2024",
      location: "Assam"
    },
    {
      company: "Levon Techno Solutions",
      role: "Flutter Developer",
      period: "02/2024 -08/2024",
      location: "Bangalore"
    }
  ],
  projects: [
    {
      title: "Cloude Bites Vendor",
      liveUrl: "Live on Play Store & App Store : 05/2025",
      role: "Flutter Developer (Frontend + API & Socket.io Integration)",
      features: [
        "Vendor management platform handling user profiles, bookings, and payments",
        "Implemented real-time updates, push notifications, and smooth navigation using GetX.",
        "Integrated Socket.io for real-time communication between customers and vendors."
      ]
    },
    {
      title: "Woye Vendor Applications",
      liveUrl: "",
      role: "Flutter Developer",
      features: [
        "Developed a vendor application enabling businesses to register and manage their stores on the platform",
        "Implemented separate vendor registration flows for Pharmacy, Grocery, and Restaurant vendors based on business type.",
        "Built product management features allowing vendors to add, update, and manage product listings efficiently."
      ]
    },
    {
      title: "Woye User Applications",
      liveUrl: "",
      role: "Flutter Developer",
      features: [
        "Developed a multi-service user application supporting Pharmacy, Grocery, and Restaurant ordering in a single platform.",
        "Integrated REST APIs for product listing, order placement, and user account management.",
        "Integrated deep linking functionality to enable users to directly open specific products, categories pages from external links."
      ]
    },
    {
      title: "News & Articles App(Naukri Point)",
      liveUrl: "Live on Play Store & App Store",
      role: "",
      features: [
        "Developed a News & Articles mobile application (iOS & Android) that allows administrators to publish job-related articles and updates for users to browse and stay informed about new opportunities."
      ]
    },
    {
      title: "Talento In – Job Portal Mobile Application",
      liveUrl: "Live on Play Store and App Store",
      role: "",
      features: [
        "Developed a job portal mobile application connecting job seekers and employers on a single platform.",
        "Implemented separate user roles for job seekers and companies, enabling role-based access and functionality.",
        "Built features allowing companies to register, post job openings, and manage candidate applications through a dedicated dashboard.",
        "Implemented job seeker profile creation, enabling users to showcase skills, experience, and career preferences."
      ]
    }
  ],
  openSource: [
    {
      name: "ImageX Flutter",
      description: "A premium, unified image rendering widget for Flutter that replaces Image.network, Image.asset, CachedNetworkImage, and flutter_svg with automatic source detection, placeholders, shimmer, error builders, caching, and zoom viewers.",
      version: "v1.0.0",
      pubDevUrl: "https://pub.dev/packages/imagex_flutter",
      gitHubUrl: "https://github.com/saurabhkumar91536/imagex_flutter"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Rajasthan Technical University , Kota"
    },
    {
      degree: "High School",
      school: "Bihar School Examination Board Patna(2019)"
    }
  ],
  certifications: [
    {
      name: "Python",
      provider: "UDEMY, Learn Vern"
    },
    {
      name: "HTML & CSS",
      provider: "EDUREKA"
    }
  ]
};

export function parseResumeText(rawText: string): ResumeData {
  const cleaned = rawText.replace(/-- \d+ of \d+ --/g, "");
  const lines = cleaned
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const sections: Record<string, string[]> = {
    header: [],
    summary: [],
    skills: [],
    experience: [],
    projects: [],
    openSource: [],
    education: [],
    certifications: []
  };

  let currentSection = "header";

  for (const line of lines) {
    const upperLine = line.toUpperCase().replace(/\s+/g, "");
    if (upperLine === "SUMMARY") {
      currentSection = "summary";
    } else if (upperLine === "SKILLS" || upperLine === "SKILLS:") {
      currentSection = "skills";
    } else if (upperLine === "WORKEXPERIENCE") {
      currentSection = "experience";
    } else if (upperLine === "PROJECTS") {
      currentSection = "projects";
    } else if (upperLine === "OPENSOURCEPACKAGES" || upperLine === "OPENSOURCE") {
      currentSection = "openSource";
    } else if (upperLine === "EDUCATION") {
      currentSection = "education";
    } else if (upperLine === "CERTIFICATIONS") {
      currentSection = "certifications";
    } else {
      sections[currentSection].push(line);
    }
  }

  // Header Info
  const headerLines = sections.header;
  const name = headerLines[0] || "SAURABH KUMAR";
  const title = headerLines[1] || "FLUTTER DEVELOPER";

  let email = "";
  let phone = "";
  let linkedin = "";
  let github = "";
  let portfolio = "";

  for (let i = 2; i < headerLines.length; i++) {
    const line = headerLines[i];
    const parts = line.split(/\s+/);
    for (const part of parts) {
      if (part.includes("@")) {
        email = part;
      } else if (part.includes("+91") || /^\d{10}$/.test(part)) {
        phone = part;
      } else if (part.includes("linkedin") || part === "saurabh-kumar-skr") {
        linkedin = part;
      } else if (part.includes("github") || part === "saurabhkumar-sk") {
        github = part;
      } else if (part.includes("portfolio") || part === "my-portfolio") {
        portfolio = part;
      }
    }
    if (line.includes("+91") && !phone) {
      const match = line.match(/\+91\s*\d+/);
      if (match) phone = match[0];
    }
  }

  const summary = sections.summary.join(" ");

  const skills: SkillCategory[] = [];
  const skillLines = sections.skills;
  for (let i = 0; i < skillLines.length; i += 2) {
    if (i + 1 < skillLines.length) {
      skills.push({
        category: skillLines[i],
        list: skillLines[i + 1]
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
      });
    }
  }

  const experience: WorkExp[] = [];
  const expLines = sections.experience;
  for (let i = 0; i < expLines.length; i += 3) {
    if (i + 2 < expLines.length) {
      const comp = expLines[i];
      const role = expLines[i + 1];
      const dateLoc = expLines[i + 2];
      const [period, location] = dateLoc.split("|").map((s) => s.trim());
      experience.push({
        company: comp,
        role: role,
        period: period || dateLoc,
        location: location || ""
      });
    }
  }

  const projects: ProjectData[] = [];
  const projectLines = sections.projects;
  let currentProject: ProjectData | null = null;

  for (let i = 0; i < projectLines.length; i++) {
    const line = projectLines[i];

    let isTitle = false;
    if (!line.startsWith("•") && !line.startsWith("Live on")) {
      if (i + 1 < projectLines.length) {
        const nextLine = projectLines[i + 1];
        if (nextLine.startsWith("Live on") || nextLine.startsWith("• Role:")) {
          isTitle = true;
        }
      }
    }

    if (isTitle) {
      if (currentProject) {
        projects.push(currentProject);
      }
      currentProject = {
        title: line,
        liveUrl: "",
        role: "",
        features: []
      };
    } else if (currentProject) {
      if (line.startsWith("Live on")) {
        currentProject.liveUrl = line;
      } else if (line.startsWith("•")) {
        const bulletText = line.substring(1).trim();
        if (bulletText.startsWith("Role:")) {
          currentProject.role = bulletText.replace("Role:", "").trim();
        } else {
          currentProject.features.push(bulletText);
        }
      } else {
        if (currentProject.features.length > 0) {
          currentProject.features[currentProject.features.length - 1] += " " + line;
        } else if (currentProject.role) {
          currentProject.role += " " + line;
        }
      }
    }
  }
  if (currentProject) {
    projects.push(currentProject);
  }

  const openSource: OpenSourceData[] = [];
  const osLines = sections.openSource;
  if (osLines.length > 0) {
    const name = osLines[0];
    const descLines: string[] = [];
    let version = "";
    let pubDevUrl = "";
    let gitHubUrl = "";

    for (let i = 1; i < osLines.length; i++) {
      const line = osLines[i];
      if (line.startsWith("Version:")) {
        version = line.replace("Version:", "").trim();
      } else if (line.startsWith("Pub.dev Link:")) {
        pubDevUrl = line.replace("Pub.dev Link:", "").trim();
      } else if (line.startsWith("GitHub Repository:")) {
        gitHubUrl = line.replace("GitHub Repository:", "").trim();
      } else {
        descLines.push(line);
      }
    }

    openSource.push({
      name,
      description: descLines.join(" "),
      version,
      pubDevUrl,
      gitHubUrl
    });
  }

  const education: EduData[] = [];
  const eduLines = sections.education;
  for (let i = 0; i < eduLines.length; i += 2) {
    if (i + 1 < eduLines.length) {
      education.push({
        degree: eduLines[i],
        school: eduLines[i + 1]
      });
    }
  }

  const certifications: CertData[] = [];
  const certLines = sections.certifications;
  for (let i = 0; i < certLines.length; i += 2) {
    if (i + 1 < certLines.length) {
      certifications.push({
        name: certLines[i],
        provider: certLines[i + 1]
      });
    }
  }

  return {
    name: name || FALLBACK_RESUME_DATA.name,
    title: title || FALLBACK_RESUME_DATA.title,
    email: email || FALLBACK_RESUME_DATA.email,
    phone: phone || FALLBACK_RESUME_DATA.phone,
    linkedin: linkedin || FALLBACK_RESUME_DATA.linkedin,
    github: github || FALLBACK_RESUME_DATA.github,
    portfolio: portfolio || FALLBACK_RESUME_DATA.portfolio,
    summary: summary || FALLBACK_RESUME_DATA.summary,
    skills: skills.length ? skills : FALLBACK_RESUME_DATA.skills,
    experience: experience.length ? experience : FALLBACK_RESUME_DATA.experience,
    projects: projects.length ? projects : FALLBACK_RESUME_DATA.projects,
    openSource: openSource.length ? openSource : FALLBACK_RESUME_DATA.openSource,
    education: education.length ? education : FALLBACK_RESUME_DATA.education,
    certifications: certifications.length ? certifications : FALLBACK_RESUME_DATA.certifications
  };
}

export async function parseResumePdf(): Promise<ResumeData> {
  try {
    const pdfPath = path.join(process.cwd(), "public/saurabh_kumar_resume.pdf");
    if (!fs.existsSync(pdfPath)) {
      console.warn("PDF file not found at " + pdfPath + ". Using fallback data.");
      return FALLBACK_RESUME_DATA;
    }

    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
    const textResult = await parser.getText();
    const parsed = parseResumeText(textResult.text);
    await parser.destroy();
    return parsed;
  } catch (error) {
    console.error("Failed to parse resume PDF. Returning fallback details.", error);
    return FALLBACK_RESUME_DATA;
  }
}
