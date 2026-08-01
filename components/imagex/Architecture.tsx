"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, ArrowDown, ShieldAlert, Cpu, HardDrive, RefreshCw } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  details: string[];
}

export default function Architecture() {
  const steps: Step[] = [
    {
      num: "01",
      title: "User Widget",
      desc: "Instantiate ImageX passing path or raw bytes.",
      details: ["ImageX(path: '...')", "Set border radius", "Set fit & dimensions"],
    },
    {
      num: "02",
      title: "Source Detection",
      desc: "Regex/bytes analyze source pattern instantly.",
      details: ["Regex checks URL/asset", "Base64 structure check", "Auto SVG file mapping"],
    },
    {
      num: "03",
      title: "Cache Layer",
      desc: "Check SQLite / filesystem records.",
      details: ["Check local database", "Map ETag header logs", "Fallbacks on failure"],
    },
    {
      num: "04",
      title: "Renderer Engine",
      desc: "Decode raster bytes or parse XML vectors.",
      details: ["SvgPicture parser", "CachedNetwork renderer", "Uint8List decoded buffer"],
    },
    {
      num: "05",
      title: "Optimized Output",
      desc: "Render final pixel-perfect raster or vector layer.",
      details: ["Hardware accelerated", "Proper cache size bounds", "Fade-in transition finish"],
    },
  ];

  return (
    <section id="architecture" className="py-24 border-t border-border/50 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">Pipeline Architecture</h2>
          <p className="text-muted-foreground leading-relaxed">
            Here is how ImageX processes image paths dynamically at runtime, optimizing file parsing, loading, and system RAM footprint.
          </p>
        </div>

        {/* Visual Pipeline Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start relative">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card/50 flex flex-col shadow-sm relative group hover:border-blue-500/40 hover:bg-card transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-blue-500 font-bold bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                    {step.num}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground/90">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{step.desc}</p>

                <div className="border-t border-border/60 pt-3 space-y-2 mt-auto">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center space-x-1.5 text-[11px] font-medium text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Connecting arrow (hidden on last step, changes direction based on mobile vs desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none"
                     style={{ left: `${(idx + 1) * 20 - 2}%`, width: '4%' }}>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </motion.div>
                </div>
              )}

              {idx < steps.length - 1 && (
                <div className="flex lg:hidden items-center justify-center py-2 opacity-50">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowDown className="h-5 w-5 text-blue-500" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
