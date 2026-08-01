"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Check,
  Download,
  ExternalLink,
  Code,
  Layers,
  Database,
  Globe,
  Terminal,
  GitBranch,
  Star,
  Sparkles,
  // Added icons for skills, carousel, and documentations:
  Infinity as InfinityIcon,
  Workflow,
  Rocket,
  Boxes,
  CloudUpload,
  Bot,
  Code2,
  Cpu,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ApiSection from "@/components/ApiSection";
import PackagesSection from "@/components/PackagesSection";

// Project Type Definition
interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  github?: string;
  playStore?: string;
  appStore?: string;
  liveDemo?: string;
  isFeatured?: boolean;
  featuredPath?: string;
  apiDocs?: string;
  slides?: { type: string; value?: string; name: string }[];
}

const ImageCarousel = ({ project }: { project: Project }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const slides = project.slides || [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-full min-h-[260px] bg-zinc-950 flex flex-col justify-between overflow-hidden group/carousel">
      {/* Slide Display */}
      <div 
        className="w-full h-full flex-grow flex items-center justify-center cursor-pointer select-none relative overflow-hidden"
        onClick={() => setLightboxOpen(true)}
      >
        {currentSlide.type === "image" && currentSlide.value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentSlide.value}
            alt={currentSlide.name}
            className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
          />
        ) : currentSlide.type === "desktop" ? (
          <div className="w-full h-full p-4 flex flex-col justify-between text-zinc-300 font-sans text-xs bg-[#0b0b0d] border-t border-zinc-800">
            <div className="flex items-center space-x-1.5 border-b border-zinc-800 pb-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-[9px] text-zinc-600 pl-4 font-mono">imagex-docs.flutter.dev</span>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-2 bg-zinc-900/40 rounded-lg p-3 text-center border border-zinc-800/40">
              <Code2 className="h-8 w-8 text-blue-500 animate-pulse" />
              <span className="font-mono text-[10px] text-zinc-400">{"ImageX(path: 'https://example.com/banner.png')"}</span>
            </div>
            <div className="text-[9px] text-zinc-600 text-center mt-2 font-mono">
              Desktop canvas rendered with caching
            </div>
          </div>
        ) : (
          <div className="w-full h-full p-4 flex flex-col justify-between text-zinc-300 font-sans text-xs bg-[#09090b]">
            <div className="flex justify-between items-center text-zinc-600 text-[9px] font-mono mb-2">
              <span>9:41 AM</span>
              <span>5G LTE</span>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-2 border border-zinc-900 bg-zinc-950 rounded-xl p-3">
              <Smartphone className="h-6 w-6 text-teal-400 animate-bounce" />
              <div className="h-2 w-16 bg-zinc-800 rounded animate-pulse" />
              <span className="text-[9px] text-zinc-500 font-mono">ImageX cached output</span>
            </div>
            <div className="text-[9px] text-zinc-600 text-center mt-2 font-mono">
              Mobile viewport cache simulator
            </div>
          </div>
        )}

        {/* Hover zoom overlays & Lightbox hint */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-black/60 text-white text-[10px] font-semibold border border-white/10 flex items-center gap-1">
            <Maximize2 className="h-3 w-3" />
            <span>Click to Expand Lightbox</span>
          </span>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white border border-white/10 opacity-0 group-hover/carousel:opacity-100 hover:bg-black/85 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white border border-white/10 opacity-0 group-hover/carousel:opacity-100 hover:bg-black/85 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Carousel dots indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setCurrent(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              current === idx ? "bg-blue-500" : "bg-zinc-600 hover:bg-zinc-500"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Portal Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors z-50"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full max-w-[850px] aspect-video border border-zinc-800 rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl relative">
              {currentSlide.type === "image" && currentSlide.value ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentSlide.value}
                  alt={currentSlide.name}
                  className="w-full h-full object-contain"
                />
              ) : currentSlide.type === "desktop" ? (
                <div className="w-full h-full p-8 flex flex-col justify-between text-zinc-300 font-sans text-sm bg-[#0b0b0d]">
                  <div className="flex items-center space-x-2 border-b border-zinc-800 pb-3 mb-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-500 pl-4 font-mono">imagex-docs.flutter.dev/preview</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center gap-4 bg-zinc-900/30 rounded-xl p-6 text-center border border-zinc-800">
                    <Code2 className="h-12 w-12 text-blue-500" />
                    <span className="font-mono text-xs text-zinc-300">{"ImageX(path: 'https://example.com/banner.png')"}</span>
                    <span className="text-[11px] text-zinc-500 max-w-sm">Resolves source parameters, maps caching layer, and scales bitmap textures dynamically.</span>
                  </div>
                  <div className="text-xs text-zinc-600 text-center mt-3 font-mono">
                    Static Desktop Page Canvas preview
                  </div>
                </div>
              ) : (
                <div className="w-full h-full p-8 flex flex-col justify-between text-zinc-300 font-sans text-sm bg-[#09090b]">
                  <div className="flex justify-between items-center text-zinc-500 text-xs font-mono mb-4">
                    <span>9:41 AM</span>
                    <span>5G LTE</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-2xl p-6 max-w-sm mx-auto w-full">
                    <Smartphone className="h-10 w-10 text-teal-400 animate-bounce" />
                    <div className="h-3 w-28 bg-zinc-800 rounded" />
                    <span className="text-[10px] text-zinc-500 font-mono">SQLite caching index database verified</span>
                  </div>
                  <div className="text-xs text-zinc-600 text-center mt-4 font-mono">
                    Static Mobile Device simulator preview
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMsg, setFormMsg] = useState("");

  const categories = [
    { id: "all", name: "All" },
    { id: "featured", name: "Featured" },
    { id: "job", name: "Jobs" },
    { id: "vendor", name: "Vendor/Retail" },
    { id: "dating", name: "Dating" },
    { id: "news", name: "News" },
    { id: "real-estate", name: "Real Estate" },
    { id: "healthcare", name: "Healthcare" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "education", name: "Education" },
    { id: "utility", name: "Utility" },
    { id: "service", name: "Services" },
    { id: "weather", name: "Weather" },
    { id: "grocery", name: "Grocery" },
  ];

  const projects: Project[] = [
    {
      id: "imagex_flutter",
      title: "ImageX Flutter",
      description: "A premium, unified image rendering widget for Flutter that replaces Image.network, Image.asset, CachedNetworkImage, and flutter_svg with automatic source detection, placeholders, shimmer, error builders, caching, and zoom viewers.",
      image: "assets/imagex_banner.jpg",
      category: "featured",
      techStack: ["Flutter", "Dart", "CachedNetworkImage", "SVG Picture", "Shimmer"],
      github: "https://github.com/saurabhkumar-sk/imagex_flutter",
      liveDemo: "/projects/imagex-flutter",
      isFeatured: true,
      featuredPath: "/projects/imagex-flutter",
      slides: [
        { type: "image", value: "assets/imagex_banner.jpg", name: "ImageX Package Infographic" },
        { type: "desktop", name: "Desktop Web Preview" },
        { type: "mobile", name: "Mobile App Preview" },
      ]
    },
    {
      id: "vendor_api_python",
      title: "Vendor API (Python)",
      description: "A high-performance backend API built in Python for the Vendor App ecosystem, managing push notifications, live catalog syncing, and order processing streams.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600",
      category: "vendor",
      techStack: ["Python", "FastAPI", "PostgreSQL", "REST API", "Render"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      apiDocs: "https://vendor-api-python.onrender.com/docs"
    },
    {
      id: 11,
      title: "Job Applied App",
      description: "A job search and application tracking platform that helps users discover opportunities, apply to jobs, and monitor application status with real-time updates and notifications.",
      image: "https://play-lh.googleusercontent.com/fPx__sGxDqqes7AAgA3eDGGpd1de9_wZpbbeOdM70R99vmKAqYFyoAQEVi3_lvrxKUcNXjwBfq6q6R3kjQ0iGg=w832-h470-rw",
      category: "job",
      techStack: ["Flutter", "REST API", "Firebase", "Google Maps"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.talentoin.app",
      appStore: "https://apps.apple.com/in/app/talentoindia/id6736382768"
    },
    {
      id: 12,
      title: "Vendor App",
      description: "A comprehensive vendor management application that helps businesses manage orders, track products, and stay updated with real-time notifications for seamless operations.",
      image: "https://play-lh.googleusercontent.com/4cawrv7QzDe9D513qcR6lqr9TOA54pG9eMuWn2_Yj5opQTyh-4zq8YdZpEzCNc7DDI7ZylXKrpG3fq0x1e-e=w5120-h2880-rw",
      category: "vendor",
      techStack: ["Flutter", "REST API", "Firebase", "MapBox"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.cloudBites.cloudBitesVendor",
      appStore: "https://apps.apple.com/in/app/cb-vendor/id6749038036"
    },
    {
      id: 13,
      title: "Customer App",
      description: "A user-friendly customer application for browsing products, placing orders, tracking deliveries in real-time, and managing preferences for a seamless shopping experience.",
      image: "https://play-lh.googleusercontent.com/4cawrv7QzDe9D513qcR6lqr9TOA54pG9eMuWn2_Yj5opQTyh-4zq8YdZpEzCNc7DDI7ZylXKrpG3fq0x1e-e=w5120-h2880-rw",
      category: "vendor",
      techStack: ["Flutter", "REST API", "Firebase"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.cloudBites.user",
      appStore: "https://apps.apple.com/in/app/cb-vendor/id6749038036"
    },
    {
      id: 14,
      title: "Dating App",
      description: "A feature-rich dating platform with profile matching, real-time chat, and in-app purchases, helping users connect and build meaningful relationships.",
      image: "https://play-lh.googleusercontent.com/Xfe2TMzATqbPAJ62gQm2ebPlVRO4HBR4omkdedRv9H2_YDIIYDkVCOWVz9wno-w_fH0H=w1052-h592-rw",
      category: "dating",
      techStack: ["Flutter", "REST API", "Firebase", "In-App Purchase"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.dillkebaat.nauman",
      appStore: "https://apps.apple.com/in/app/dilkebaat/id6464308996"
    },
    {
      id: 15,
      title: "News App",
      description: "A comprehensive news application delivering the latest updates, trending stories, and job opportunities in one place.",
      image: "https://play-lh.googleusercontent.com/7DI4JhZRxUnhdeFp-W7-frUiiH30NeYradUh6p7McHK_lXrKaM-luWibX-swBcFcMcaHBr1LOd3NrMKYVIER=w1052-h592-rw",
      category: "news",
      techStack: ["Flutter", "REST API", "Firebase"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.naukri.naukripoint",
      appStore: "https://apps.apple.com/in/app/naukri-point-job-alerts/id6749142761"
    },
    {
      id: 16,
      title: "Real Estate App",
      description: "A property marketplace for buying, selling, and renting homes with advanced search filters, interactive maps, and direct agent contact features.",
      image: "https://play-lh.googleusercontent.com/8V15L3RArB3TSWJoxcyrIbUVL14HqHqdXkPdwb1D9uZ4G62C8cz8rYoRByzCNCeGhgZT6RX_ZHdrVX46ebieBA=w1052-h592-rw",
      category: "real-estate",
      techStack: ["Flutter", "REST API", "Firebase", "Google Maps"],
      github: "https://github.com/saurabhkumar-sk/news-app",
      playStore: "https://play.google.com/store/apps/details?id=com.realstate.app&hl=en_IN",
      appStore: "https://apps.apple.com/ph/app/turks-and-caicos-real-estate/id6749747585"
    },
    {
      id: 3,
      title: "Doctor & Patient Application",
      description: "A digital healthcare solution offering appointment scheduling, medical records management, and secure audio/video consultations.",
      image: "https://play-lh.googleusercontent.com/cT6-WlHUCYR1P8sq27WLrWNYTR9EIRuz5cEqXJbPDxSD7brjTZBh9Q6Z-ig5hWlASGnU7FUpojP2ohaxAjKRtA=w1052-h592-rw",
      category: "healthcare",
      techStack: ["Flutter", "Firebase", "WebRTC"],
      playStore: "https://play.google.com/store/apps/details?id=com.doctor_doctocon",
      github: "https://github.com/saurabhkumar-sk/healthcare-app",
      liveDemo: "#"
    },
    {
      id: 9,
      title: "E-commerce Application",
      description: "A comprehensive e-commerce platform with product browsing, cart management, secure payments, order tracking, and wishlist features for seamless shopping.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
      category: "ecommerce",
      techStack: ["Flutter", "Firebase", "Paystack", "Google Maps"],
      github: "https://github.com/saurabhkumar-sk/ecommerce-app",
      liveDemo: "#"
    },
    {
      id: 1,
      title: "School Management Application",
      description: "A comprehensive school management platform with attendance tracking, grade management, and communication tools for teachers, students, and parents.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
      category: "education",
      techStack: ["Flutter", "Firebase", "REST API"],
      github: "https://github.com/saurabhkumar-sk/school-management",
      liveDemo: "#"
    },
    {
      id: 2,
      title: "Translator App",
      description: "A real-time translation app supporting multiple languages with text and voice translation for seamless global communication.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000",
      category: "utility",
      techStack: ["Flutter", "Translation API", "Speech Recognition"],
      github: "https://github.com/saurabhkumar-sk/translator-app",
      liveDemo: "#"
    },
    {
      id: 4,
      title: "On-Demand Service App",
      description: "A versatile multi-service platform connecting users with trusted providers for home and professional needs such as electricians, plumbers, carpenters, and cleaners.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000",
      category: "service",
      techStack: ["Flutter", "Firebase", "Google Maps"],
      github: "https://github.com/saurabhkumar-sk/service-app",
      liveDemo: "#"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A real-time weather application providing live updates, detailed forecasts, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
      category: "weather",
      techStack: ["Flutter", "OpenWeather API"],
      github: "https://github.com/saurabhkumar-sk/weather_application",
      liveDemo: "https://github.com/saurabhkumar-sk/weather_application?tab=readme-ov-file#application-images"
    },
    {
      id: 8,
      title: "Grocery Delivery App",
      description: "An online grocery shopping platform with product browsing, cart management, and real-time delivery tracking.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000",
      category: "grocery",
      techStack: ["Flutter", "Firebase"],
      github: "https://github.com/saurabhkumar-sk/grocery-delivery-app",
      liveDemo: "#"
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return project.isFeatured;
    return project.category === activeCategory;
  });

  const skillCategories = [
    { id: "all", name: "All" },
    { id: "mobile", name: "Mobile" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "ai", name: "AI Tools" },
    { id: "design", name: "Design" },
    { id: "others", name: "Others" },
  ];

  const skills = [
    // Mobile
    { name: "Flutter", category: "mobile", icon: <Layers className="h-6 w-6 text-blue-400" /> },
    { name: "Dart", category: "mobile", icon: <Code className="h-6 w-6 text-cyan-400" /> },
    // Backend
    { name: "REST APIs", category: "backend", icon: <Globe className="h-6 w-6 text-emerald-400" /> },
    // Database
    { name: "Firebase", category: "database", icon: <Database className="h-6 w-6 text-amber-500" /> },
    // DevOps
    { name: "CI/CD", category: "devops", icon: <InfinityIcon className="h-6 w-6 text-indigo-500" /> },
    { name: "GitHub Actions", category: "devops", icon: <Workflow className="h-6 w-6 text-purple-500" /> },
    // AI Tools
    { name: "ChatGPT", category: "ai", icon: <Bot className="h-6 w-6 text-emerald-500" /> },
    { name: "Claude", category: "ai", icon: <Sparkles className="h-6 w-6 text-amber-500" /> },
    { name: "Cursor AI", category: "ai", icon: <Code2 className="h-6 w-6 text-cyan-400" /> },
    { name: "GitHub Copilot", category: "ai", icon: <Github className="h-6 w-6 text-zinc-400" /> },
    { name: "Gemini", category: "ai", icon: <Sparkles className="h-6 w-6 text-blue-400" /> },
    { name: "OpenAI API", category: "ai", icon: <Cpu className="h-6 w-6 text-teal-500" /> },
    // Design
    { name: "Figma", category: "design", icon: <Layers className="h-6 w-6 text-pink-500" /> },
    // Others
    { name: "Git", category: "others", icon: <GitBranch className="h-6 w-6 text-orange-500" /> },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeSkillCategory === "all") return true;
    return skill.category === activeSkillCategory;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formState.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    } else if (formState.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formState.email.trim())) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!formState.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    } else if (formState.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === "sending") return;

    if (!validateForm()) return;

    setFormStatus("sending");

    const templateParams = {
      from_name: formState.name.trim(),
      from_email: formState.email.trim(),
      reply_to: formState.email.trim(),
      message: formState.message.trim(),
    };

    try {
      // Initialize EmailJS with client public key
      await emailjs.send(
        "service_5obxcj1",
        "template_eaztska",
        templateParams,
        "wN5_Pi6myJY9hIg9w"
      );
      setFormStatus("success");
      setFormMsg("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => {
        setFormStatus("idle");
        setFormMsg("");
      }, 4000);
    } catch (err) {
      setFormStatus("error");
      setFormMsg("Failed to send message. Please try again.");
      setTimeout(() => {
        setFormStatus("idle");
        setFormMsg("");
      }, 4000);
    }
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
        >
          {/* Background Animated Blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/10 blur-[100px] animate-blob" />
            <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-purple-500/10 blur-[80px] animate-blob [animation-delay:4s]" />
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 text-xs font-semibold mb-6 shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Open-Source Maintainer & Flutter Dev</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6"
              >
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Saurabh Kumar</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6"
              >
                Senior Flutter Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mb-8 leading-relaxed"
              >
                Passionate about building premium, high-performance, and pixel-perfect mobile and web applications using Flutter, Dart, and modern tech stacks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a
                  href="https://drive.google.com/file/d/1GqwtaZcYvBIzuA6SLbQUgEvNvLARFniH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-border bg-card/50 text-foreground font-semibold hover:bg-muted/80 transition-colors w-full sm:w-auto"
                >
                  <span>Contact Me</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-6 mt-12"
              >
                <a
                  href="https://github.com/saurabhkumar-sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-kumar-skr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-[380px] aspect-[4/5] rounded-3xl p-6 glass-panel border border-border shadow-2xl relative cursor-grab active:cursor-grabbing select-none"
                drag
                dragConstraints={{ left: -30, right: 30, top: -20, bottom: 20 }}
                whileDrag={{ scale: 1.02 }}
                whileHover={{ rotate: 1 }}
              >
                {/* Floating details inside card */}
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono opacity-50">PORTFOLIO CARD // DRAG ME</span>
                    <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-[10px] font-mono">
                      v2.0
                    </div>
                  </div>

                  <div className="my-auto space-y-4">
                    <div className="relative inline-block group/avatar">
                      {/* Animated Glow Border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-650 rounded-full blur opacity-65 group-hover/avatar:opacity-100 transition duration-1000 group-hover/avatar:duration-200 animate-pulse-slow" />
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-lg bg-card">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="assets/profile.jpeg"
                          alt="Saurabh Kumar"
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Saurabh Kumar</h3>
                      <p className="text-sm text-muted-foreground">saurabhkumar91536@gmail.com</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-background/50 font-mono">#Flutter</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-background/50 font-mono">#Dart</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-background/50 font-mono">#iOS</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-background/50 font-mono">#Android</span>
                    </div>
                  </div>

                  <div className="border-t border-border/80 pt-4 flex justify-between items-center text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      Star Project Page
                    </span>
                    <span>Bengaluru, IN</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-card/25 border-y border-border/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Professional Skills</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Core technologies and tools I specialize in to build cross-platform applications.
              </p>
            </div>

            {/* Skill Categories Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-full overflow-x-auto pb-2 scrollbar-none">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                    activeSkillCategory === cat.id
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-card/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card/50 shadow-sm hover:shadow-md hover:border-border/80 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="p-3.5 rounded-xl bg-background border border-border/50 mb-4 group-hover:scale-105 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">My Projects</h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
                Explore a collection of applications ranging from utilities to heavy retail and open-source packages.
              </p>
            </div>

            {/* Project Categories Filter */}
            <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    activeCategory === cat.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border bg-card/40 overflow-hidden flex flex-col group transition-all duration-300 shadow-sm hover:shadow-lg ${
                    project.isFeatured
                      ? "border-blue-500/50 ring-1 ring-blue-500/20 md:col-span-2 lg:col-span-3 flex-col lg:flex-row"
                      : "border-border hover:border-border/80"
                  }`}
                >
                  {/* Image container */}
                  <div
                    className={`relative overflow-hidden bg-muted/30 flex items-center justify-center ${
                      project.isFeatured ? "w-full lg:w-3/5 aspect-video lg:aspect-auto min-h-[250px] lg:h-full" : "aspect-video"
                    }`}
                  >
                    {project.slides ? (
                      <ImageCarousel project={project} />
                    ) : (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        {project.isFeatured && (
                          <span className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-md">
                            <Star className="h-3 w-3 fill-white" />
                            <span>FEATURED PACKAGE</span>
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className={`p-6 flex flex-col justify-between flex-grow ${project.isFeatured ? "lg:w-2/5" : ""}`}>
                    <div>
                      <h3 className="text-xl font-bold mb-2.5 flex items-center gap-2 group-hover:text-blue-500 transition-colors">
                        {project.title}
                        {project.isFeatured && <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />}
                      </h3>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-border/50">
                      {project.isFeatured && project.featuredPath ? (
                        <Link
                          href={project.featuredPath}
                          className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm"
                        >
                          <span>Explore Product Page</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        project.github && !(project.playStore && project.appStore) && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                          >
                            <Github className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                          </a>
                        )
                      )}

                      {project.apiDocs && (
                        <a
                          href={project.apiDocs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>API Docs</span>
                        </a>
                      )}

                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                        >
                          <span>Play Store</span>
                        </a>
                      )}
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                        >
                          <span>App Store</span>
                        </a>
                      )}
                      {!project.playStore && !project.appStore && project.liveDemo && !project.isFeatured && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                        >
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <PackagesSection />

        <ApiSection />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-card/10 border-t border-border/50 relative">
          <div className="max-w-md mx-auto px-6 flex flex-col items-center">
            <div className="text-center mb-10 w-full">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Contact Me</h2>
              <p className="text-muted-foreground text-sm">
                Get in touch for package support, inquiries, or work collaborations.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-5 w-full" noValidate>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-card/50 text-foreground text-sm focus:outline-none focus:ring-1 transition-colors ${
                    formErrors.name ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-blue-500"
                  }`}
                />
                {formErrors.name && (
                  <span className="text-[10px] text-red-500 font-semibold pl-1">{formErrors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-card/50 text-foreground text-sm focus:outline-none focus:ring-1 transition-colors ${
                    formErrors.email ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-blue-500"
                  }`}
                />
                {formErrors.email && (
                  <span className="text-[10px] text-red-500 font-semibold pl-1">{formErrors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-card/50 text-foreground text-sm focus:outline-none focus:ring-1 transition-colors resize-none ${
                    formErrors.message ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-blue-500"
                  }`}
                />
                {formErrors.message && (
                  <span className="text-[10px] text-red-500 font-semibold pl-1">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold text-sm transition-all shadow-md ${
                  formStatus === "sending"
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : formStatus === "success"
                    ? "bg-green-600 hover:bg-green-500 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {formStatus === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-4 h-4 border-2 border-muted-foreground border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formMsg && (
                <p
                  className={`text-xs text-center font-medium mt-2 ${
                    formStatus === "success" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {formMsg}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
