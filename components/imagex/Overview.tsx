"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, RefreshCcw, Sparkles } from "lucide-react";

export default function Overview() {
  const painPoints = [
    {
      title: "Image.network Limitations",
      description: "No automatic memory caching out-of-the-box. Triggers repeated network requests, creating visual stutter and heavy data usage.",
    },
    {
      title: "SVGs require SvgPicture",
      description: "Standard widgets fail to render SVGs. Developers must import third-party packages and use entirely different widgets (SvgPicture.asset/network).",
    },
    {
      title: "Verbose Cache APIs",
      description: "CachedNetworkImage is powerful but requires substantial boilerplate for simple image caching, placeholder widgets, and error builders.",
    },
    {
      title: "Hardcoded File & Memory Fallbacks",
      description: "Handling file uploads, base64 bytes, and asset mocks requires writing custom switch-case logic across multiple screens.",
    },
  ];

  return (
    <section id="overview" className="py-24 border-t border-border/50 bg-card/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why ImageX Flutter?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Images are the lifeblood of mobile applications, yet handling them efficiently in Flutter involves juggling multiple packages and writing repetitive boilerplate. We built ImageX to solve this once and for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-red-500 font-semibold mb-4">
              <AlertCircle className="h-5 w-5" />
              <span className="tracking-wide">THE PROBLEM: API FRAGMENTATION</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-5 rounded-2xl border border-border bg-background shadow-sm hover:border-border/80 transition-colors"
                >
                  <h3 className="text-base font-bold mb-1 text-foreground/90">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-blue-500/30 bg-blue-500/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Sparkles className="h-48 w-48 text-blue-500" />
            </div>

            <div className="flex items-center space-x-2 text-blue-500 font-semibold mb-6">
              <CheckCircle className="h-5 w-5" />
              <span className="tracking-wide">THE SOLUTION: IMAGEX FLUTTER</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">One Widget to Rule Them All</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              ImageX is a smart wrapper that parses the input path automatically. It detects if the source is a web URL, local asset path, file system URI, base64 memory data, or SVG vector graphics — then serves it with optimized cache managers.
            </p>

            <ul className="space-y-4">
              {[
                "Automatic source type detection",
                "Built-in seamless shimmer loading animations",
                "Robust error widgets with auto-fallback styling",
                "Shared API for border radius, sizing, fit, and SVG tinting",
                "Lightweight footprint using existing production packages",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start space-x-2 text-sm text-foreground/90 font-medium">
                  <span className="mt-1 p-0.5 rounded-full bg-blue-500/10 text-blue-500">
                    <CheckCircle className="h-3 w-3" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-blue-500/20 flex items-center space-x-3 text-xs font-mono text-blue-500">
              <RefreshCcw className="h-4 w-4 animate-spin-slow" />
              <span>Smart parsing reduces boilerplate by 85%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
