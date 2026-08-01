"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/imagex/Hero";
import Overview from "@/components/imagex/Overview";
import Features from "@/components/imagex/Features";

// Lazy-loaded heavier interactive sections to optimize bundle size and page load times
const CodeExamples = dynamic(() => import("@/components/imagex/CodeExamples"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading interactive examples...</div>,
});
const Architecture = dynamic(() => import("@/components/imagex/Architecture"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading architecture flow...</div>,
});
const Comparison = dynamic(() => import("@/components/imagex/Comparison"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading comparison matrix...</div>,
});
const Metrics = dynamic(() => import("@/components/imagex/Metrics"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading performance metrics...</div>,
});
const Screenshots = dynamic(() => import("@/components/imagex/Screenshots"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading visual gallery...</div>,
});
const Installation = dynamic(() => import("@/components/imagex/Installation"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading installation guide...</div>,
});
const Documentation = dynamic(() => import("@/components/imagex/Documentation"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading developer resources...</div>,
});
const Roadmap = dynamic(() => import("@/components/imagex/Roadmap"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading product roadmap...</div>,
});
const Faq = dynamic(() => import("@/components/imagex/Faq"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading FAQs...</div>,
});
const OpenSource = dynamic(() => import("@/components/imagex/OpenSource"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading open-source guidelines...</div>,
});
const Cta = dynamic(() => import("@/components/imagex/Cta"), {
  loading: () => <div className="py-24 text-center text-sm text-muted-foreground">Loading call-to-action...</div>,
});

export default function ImageXPage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="min-h-screen">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Overview Section */}
        <Overview />

        {/* 3. Features Section */}
        <Features />

        {/* 4. Code Examples Section */}
        <CodeExamples />

        {/* 5. Architecture Flow Section */}
        <Architecture />

        {/* 6. Comparison Table Section */}
        <Comparison />

        {/* 7. Animated Metrics Section */}
        <Metrics />

        {/* 8. Screenshots Simulator Gallery Section */}
        <Screenshots />

        {/* 9. Installation Guide Section */}
        <Installation />

        {/* 10. Documentation Links Section */}
        <Documentation />

        {/* 11. Roadmap Timeline Section */}
        <Roadmap />

        {/* 12. Accordion FAQ Section */}
        <Faq />

        {/* 13. Open Source Contribution Section */}
        <OpenSource />

        {/* 14. Final Call to Action Section */}
        <Cta />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
