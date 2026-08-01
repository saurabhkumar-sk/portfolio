"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Milestone } from "lucide-react";

interface MilestoneItem {
  version: string;
  date: string;
  title: string;
  status: "completed" | "active" | "planned";
  features: string[];
}

export default function Roadmap() {
  const roadmap: MilestoneItem[] = [
    {
      version: "v0.0.3",
      date: "Released July 2026",
      title: "Core Launch",
      status: "completed",
      features: [
        "Network, Asset, File, Memory support",
        "Automatic type regex detection",
        "Built-in shimmer placeholders",
        "Default SQLite caching manager integration",
        "Double-tap full-screen image viewer overlays",
      ],
    },
    {
      version: "v0.1.0",
      date: "Q3 2026",
      title: "Next-gen Formats & Progressive Loaders",
      status: "active",
      features: [
        "Native AVIF decoders mapping",
        "WebP quality compression ratios",
        "BlurHash/progressive rendering hashes",
        "Multi-image preload precaching systems",
      ],
    },
    {
      version: "v0.2.0",
      date: "Q4 2026",
      title: "Web & AI Optimizations",
      status: "planned",
      features: [
        "HTML rendering fallbacks for CORS on Flutter Web",
        "AI-based cache sizing recommendation alerts",
        "High-performance GIF memory compression",
        "Dynamic content security policy templates",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 border-t border-border/50 bg-[#09090b] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-2">
            <Milestone className="h-7 w-7 text-blue-500" />
            <span>Product Roadmap</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            See the timeline and features planned for subsequent versions of ImageX Flutter.
          </p>
        </div>

        <div className="relative border-l border-zinc-800 space-y-12 pl-6 ml-4">
          {roadmap.map((item, idx) => (
            <motion.div
              key={item.version}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Bullet node on timeline line */}
              <span className="absolute -left-[35px] top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950">
                {item.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : item.status === "active" ? (
                  <Clock className="h-5 w-5 text-blue-500 animate-spin-slow" />
                ) : (
                  <Circle className="h-4 w-4 text-zinc-600" />
                )}
              </span>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/5 px-2.5 py-0.5 rounded border border-blue-500/10">
                    {item.version}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">{item.date}</span>
                  {item.status === "active" && (
                    <span className="text-[10px] px-2 py-0.2 rounded bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                      IN PROGRESS
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-zinc-200">{item.title}</h3>

                <ul className="space-y-2 mt-4">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 text-xs text-zinc-400 font-medium">
                      <div className="h-1 w-1 rounded-full bg-zinc-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
