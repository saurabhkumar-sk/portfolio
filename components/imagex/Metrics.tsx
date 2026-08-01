"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Zap, CheckSquare, RefreshCw, BarChart2 } from "lucide-react";

interface Metric {
  title: string;
  value: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Metrics() {
  const metrics: Metric[] = [
    {
      title: "Less Boilerplate",
      value: "-85%",
      desc: "Reduction in code volume compared to nested CachedNetworkImage configurations.",
      icon: <CheckSquare className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Faster Integration",
      value: "10x",
      desc: "Speed up development cycles. Switch path values, everything else is automatic.",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
    },
    {
      title: "Unified API",
      value: "1 Class",
      desc: "Replaces Image.network, Image.asset, SvgPicture, FileImage, and Memory loaders.",
      icon: <Flame className="h-5 w-5 text-rose-500" />,
    },
    {
      title: "RAM Savings",
      value: "-40%",
      desc: "Lower memory layout sizes by pre-decoding asset sizes dynamically.",
      icon: <BarChart2 className="h-5 w-5 text-emerald-500" />,
    },
  ];

  return (
    <section id="metrics" className="py-24 border-t border-border/50 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-muted-foreground leading-relaxed">
            By optimizing raw decoders and unifying interfaces under one widget, we eliminate duplication and reduce layout overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card/40 flex flex-col justify-between shadow-sm relative group hover:border-border/80 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-background border border-border/50 group-hover:scale-105 transition-transform">
                  {metric.icon}
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">verified metric</span>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent block mb-2">
                  {metric.value}
                </span>
                <h3 className="text-base font-bold mb-2 text-foreground/90">{metric.title}</h3>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">{metric.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
