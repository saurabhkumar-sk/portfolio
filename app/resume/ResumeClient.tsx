"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  Copy,
  Check,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Briefcase,
  BookOpen,
  Award,
  ChevronUp,
  FileText,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { ResumeData, SkillCategory, WorkExp, ProjectData, OpenSourceData, EduData, CertData } from "./parser";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Map project details to original assets, app store links, and exact tech stack tags
const PROJECT_METADATA: Record<string, {
  image: string;
  techStack: string[];
  playStore?: string;
  appStore?: string;
}> = {
  "Cloude Bites Vendor": {
    image: "https://play-lh.googleusercontent.com/4cawrv7QzDe9D513qcR6lqr9TOA54pG9eMuWn2_Yj5opQTyh-4zq8YdZpEzCNc7DDI7ZylXKrpG3fq0x1e-e=w5120-h2880-rw",
    techStack: ["Flutter", "Dart", "GetX", "REST API", "Socket.io", "Firebase", "Push Notifications"],
    playStore: "https://play.google.com/store/apps/details?id=com.cloudBites.cloudBitesVendor",
    appStore: "https://apps.apple.com/in/app/cb-vendor/id6749038036"
  },
  "Woye Vendor Applications": {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000",
    techStack: ["Flutter", "Dart", "Provider", "REST API", "Product Management", "Localization"],
  },
  "Woye User Applications": {
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    techStack: ["Flutter", "Dart", "Provider", "REST API", "Deep Linking", "Google Maps"],
  },
  "News & Articles App(Naukri Point)": {
    image: "https://play-lh.googleusercontent.com/7DI4JhZRxUnhdeFp-W7-frUiiH30NeYradUh6p7McHK_lXrKaM-luWibX-swBcFcMcaHBr1LOd3NrMKYVIER=w1052-h592-rw",
    techStack: ["Flutter", "Dart", "REST API", "Firebase", "App Store Deployment"],
    playStore: "https://play.google.com/store/apps/details?id=com.naukri.naukripoint",
    appStore: "https://apps.apple.com/in/app/naukri-point-job-alerts/id6749142761"
  },
  "Talento In – Job Portal Mobile Application": {
    image: "https://play-lh.googleusercontent.com/fPx__sGxDqqes7AAgA3eDGGpd1de9_wZpbbeOdM70R99vmKAqYFyoAQEVi3_lvrxKUcNXjwBfq6q6R3kjQ0iGg=w832-h470-rw",
    techStack: ["Flutter", "Dart", "REST API", "Firebase", "Google Maps", "State Management", "Local Storage"],
    playStore: "https://play.google.com/store/apps/details?id=com.talentoin.app",
    appStore: "https://apps.apple.com/in/app/talentoindia/id6736382768"
  }
};

export default function ResumeClient({ data }: { data: ResumeData }) {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | "share" | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text: string, type: "email" | "phone" | "share") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "Saurabh Kumar - Resume Details",
        text: "Check out the professional resume of Saurabh Kumar, Flutter Developer.",
        url: shareUrl,
      }).catch(console.error);
    } else {
      handleCopy(shareUrl, "share");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans pb-20 selection:bg-blue-500/20">
      
      {/* Print stylesheet injected directly */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
          }
          .no-print {
            display: none !important;
          }
          .print-full-width {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .glass-panel {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            padding: 0 !important;
            margin-bottom: 2rem !important;
          }
          .skills-grid {
            display: block !important;
          }
          .project-card {
            break-inside: avoid !important;
            border: 1px solid #ccc !important;
            margin-bottom: 1.5rem !important;
            background: transparent !important;
          }
          .timeline-node {
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Header bar (no-print) */}
      <header className="no-print sticky top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer className="h-4.5 w-4.5" />
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors relative"
              title="Share Resume"
              aria-label="Share Resume"
            >
              <Share2 className="h-4.5 w-4.5" />
              <AnimatePresence>
                {copiedType === "share" && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -35, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 text-[10px] font-semibold bg-blue-600 text-white rounded shadow-md whitespace-nowrap"
                  >
                    Link copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop Action Download Button */}
            <a
              href="/portfolio/saurabh_kumar_resume.pdf"
              download="Saurabh_Kumar_Resume.pdf"
              className="hidden md:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Resume Content Layout */}
      <main className="max-w-7xl mx-auto px-6 pt-12 print-full-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Personal info & Summary & Skills (lg:4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Contact Card */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-6 rounded-3xl border border-border bg-card/30 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <h1 className="text-3xl font-extrabold tracking-tight mb-1">{data.name}</h1>
              <p className="text-blue-500 font-bold text-sm tracking-widest mb-6 uppercase flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
                {data.title}
              </p>

              <div className="flex flex-col gap-4 text-sm">
                
                {/* Email with copy */}
                <div className="flex items-center justify-between group/copy p-2 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/65 transition-colors">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors overflow-hidden mr-2"
                  >
                    <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="truncate text-xs font-mono">{data.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(data.email, "email")}
                    className="p-1.5 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors relative"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between group/copy p-2 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/65 transition-colors">
                  <a
                    href={`tel:${data.phone.replace(/\s+/g, "")}`}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-xs"
                  >
                    <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>{data.phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(data.phone, "phone")}
                    className="p-1.5 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                  <a
                    href={`https://github.com/${data.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/20"
                  >
                    <Github className="h-4 w-4 text-zinc-400" />
                    <span className="text-xs">GitHub / {data.github}</span>
                  </a>

                  <a
                    href={`https://linkedin.com/in/${data.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/20"
                  >
                    <Linkedin className="h-4 w-4 text-blue-400" />
                    <span className="text-xs">LinkedIn / {data.linkedin}</span>
                  </a>

                  <Link
                    href="/"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/20"
                  >
                    <Globe className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs">Portfolio / Saurabh.</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Summary Card */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-6 rounded-3xl border border-border bg-card/30 shadow-xl"
            >
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>Professional Summary</span>
              </h2>
              <p className="text-sm text-muted-foreground/90 leading-relaxed font-sans">
                {data.summary}
              </p>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-6 rounded-3xl border border-border bg-card/30 shadow-xl"
            >
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                <span>Technical Skills</span>
              </h2>

              <div className="flex flex-col gap-6 skills-grid">
                {data.skills.map((categoryObj: SkillCategory, idx: number) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      {categoryObj.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {categoryObj.list.map((skill: string, sIdx: number) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-muted border border-border/80 text-foreground font-medium hover:border-blue-500/35 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience & Projects & Education (lg:8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Experience Panel */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-8 rounded-3xl border border-border bg-card/30 shadow-xl"
            >
              {/* Highlight Experience Banner */}
              <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-extrabold text-foreground tracking-tight">
                    2+ Years of Professional Flutter Development Experience
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Developing and deploying high-performance cross-platform applications
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold whitespace-nowrap shadow">
                  Mid-Level Engineer
                </span>
              </div>

              <h2 className="text-xl font-extrabold mb-8 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-500" />
                <span>Work Experience</span>
              </h2>

              {/* Timeline Layout */}
              <div className="relative border-l-2 border-border/80 ml-4 pl-8 flex flex-col gap-8">
                {data.experience.map((exp: WorkExp, idx: number) => (
                  <div key={idx} className="relative timeline-node">
                    {/* Glowing dot */}
                    <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping absolute" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    </span>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/10">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
                      <span className="text-foreground/90 font-bold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-500" />
                <span>Projects Portfolio</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.projects.map((project: ProjectData, idx: number) => {
                  const metadata = PROJECT_METADATA[project.title] || {
                    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600",
                    techStack: ["Flutter", "Dart", "REST API", "Firebase"]
                  };
                  return (
                    <div
                      key={idx}
                      className="project-card rounded-2xl border border-border bg-card/30 overflow-hidden flex flex-col group hover:border-border/80 transition-all duration-300 shadow-lg relative"
                    >
                      {/* Project Header Infographic */}
                      <div className="aspect-video relative overflow-hidden bg-muted/20 border-b border-border/50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={metadata.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.liveUrl && (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white border border-white/10 text-[9px] font-bold tracking-wider uppercase backdrop-blur-sm">
                            Live on App Stores
                          </span>
                        )}
                      </div>

                      {/* Content details */}
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div>
                          <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-blue-500 transition-colors">
                            {project.title}
                          </h3>
                          {project.role && (
                            <p className="text-[11px] font-semibold text-blue-500 tracking-wider uppercase mb-3">
                              {project.role}
                            </p>
                          )}
                          
                          <ul className="text-xs text-muted-foreground/85 leading-relaxed space-y-2 mb-6 list-disc list-inside">
                            {project.features.map((feat: string, fIdx: number) => (
                              <li key={fIdx} className="line-clamp-2">{feat}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-1 mb-6">
                            {metadata.techStack.map((tech: string, tIdx: number) => (
                              <span
                                key={tIdx}
                                className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-muted/60 text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Links */}
                          <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                            {metadata.playStore && (
                              <a
                                href={metadata.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold text-blue-400 hover:text-blue-500 flex items-center gap-0.5"
                              >
                                <span>Play Store</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            {metadata.appStore && (
                              <a
                                href={metadata.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold text-teal-400 hover:text-teal-500 flex items-center gap-0.5"
                              >
                                <span>App Store</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            <a
                              href={`https://github.com/${data.github}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] font-bold text-muted-foreground hover:text-foreground flex items-center gap-0.5 ml-auto"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>GitHub</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Open Source section */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-8 rounded-3xl border border-border bg-card/30 shadow-xl relative"
            >
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full bg-blue-500/5 blur-[50px]" />
              </div>

              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2 relative z-10">
                <Award className="h-6 w-6 text-blue-500 animate-pulse" />
                <span>Open Source Contributions</span>
              </h2>

              {data.openSource.map((pkg: OpenSourceData, idx: number) => (
                <div key={idx} className="relative z-10 flex flex-col md:flex-row gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-border flex items-center justify-center p-2 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/portfolio/assets/flutter-icon.png" alt="Flutter Icon" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
                        {pkg.name}
                      </h3>
                      {pkg.version && (
                        <span className="text-[10px] font-mono text-zinc-400 bg-muted px-2 py-0.5 rounded border border-border/50">
                          {pkg.version}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground/90 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="flex items-center gap-3">
                      {pkg.pubDevUrl && (
                        <a
                          href={pkg.pubDevUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-[10px] font-semibold text-blue-400 transition-colors"
                        >
                          <Globe className="h-3 w-3" />
                          <span>Pub.dev Package</span>
                        </a>
                      )}
                      {pkg.gitHubUrl && (
                        <a
                          href={pkg.gitHubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted text-[10px] font-semibold text-foreground transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education and Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Education Card */}
              <motion.div
                variants={itemVariants}
                className="glass-panel p-6 rounded-3xl border border-border bg-card/30 shadow-xl"
              >
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span>Education Timeline</span>
                </h2>

                <div className="relative border-l-2 border-border/80 ml-3 pl-6 flex flex-col gap-6">
                  {data.education.map((edu: EduData, idx: number) => (
                    <div key={idx} className="relative timeline-node">
                      <span className="absolute -left-[33px] top-1 w-3.5 h-3.5 rounded-full bg-background border-2 border-blue-500" />
                      <h3 className="text-sm font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-xs text-muted-foreground/80 mt-1">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                variants={itemVariants}
                className="glass-panel p-6 rounded-3xl border border-border bg-card/30 shadow-xl"
              >
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span>Certifications</span>
                </h2>

                <div className="relative border-l-2 border-border/80 ml-3 pl-6 flex flex-col gap-6">
                  {data.certifications.map((cert: CertData, idx: number) => (
                    <div key={idx} className="relative timeline-node">
                      <span className="absolute -left-[33px] top-1 w-3.5 h-3.5 rounded-full bg-background border-2 border-teal-500" />
                      <h3 className="text-sm font-bold text-foreground">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground/80 mt-1">{cert.provider}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </main>

      {/* Floating Action Button (FAB) on Mobile (no-print) */}
      <div className="no-print fixed bottom-6 right-6 md:hidden flex flex-col gap-3 z-50">
        
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-background border border-border shadow-2xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        )}

        {/* Download Resume FAB */}
        <a
          href="/portfolio/saurabh_kumar_resume.pdf"
          download="Saurabh_Kumar_Resume.pdf"
          className="p-4 rounded-full bg-blue-600 text-white shadow-2xl hover:bg-blue-500 transition-colors flex items-center justify-center"
          title="Download Resume"
          aria-label="Download Resume"
        >
          <Download className="h-5 w-5" />
        </a>
      </div>

      {/* Scroll To Top button (Desktop - no-print) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="no-print hidden md:flex fixed bottom-8 right-8 p-3.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
