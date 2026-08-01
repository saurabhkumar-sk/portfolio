"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  ExternalLink,
  Sparkles,
  Download,
  Heart,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 border-t border-border/50 relative bg-background/50">
      {/* Background visual accent */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[20%] left-[15%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px] animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Open-Source Packages</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Premium open-source packages and developer tools designed to make app building faster and more efficient.
          </p>
        </div>

        {/* Highlight Package Row */}
        <div className="rounded-3xl border border-border bg-card/30 overflow-hidden flex flex-col lg:flex-row group hover:border-border/80 transition-all duration-300 shadow-xl backdrop-blur-sm relative">
          
          {/* Infographic Banner Container */}
          <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto min-h-[300px] relative overflow-hidden bg-muted/20 border-b lg:border-b-0 lg:border-r border-border/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio/assets/imagex_banner.jpg"
              alt="ImageX Flutter Infographic Specs"
              className="w-full h-full object-contain p-4 bg-zinc-950 group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Details Column */}
          <div className="p-8 flex flex-col justify-between flex-grow lg:w-2/5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20">
                  FLUTTER PACKAGE
                </span>
                <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                  v1.0.0
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                ImageX Flutter
                <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
              </h3>

              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                A premium, unified image rendering widget for Flutter that replaces Image.network, Image.asset, CachedNetworkImage, and flutter_svg with automatic source detection, placeholders, shimmer, error builders, caching, and zoom viewers.
              </p>

              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="p-3 rounded-2xl border border-border/55 bg-zinc-950/40 text-center flex flex-col items-center">
                  <Heart className="h-4 w-4 text-rose-500 mb-1" />
                  <span className="text-[10px] text-muted-foreground font-mono">Likes</span>
                  <span className="text-sm font-extrabold text-foreground mt-0.5">3</span>
                </div>
                <div className="p-3 rounded-2xl border border-border/55 bg-zinc-950/40 text-center flex flex-col items-center">
                  <Star className="h-4 w-4 text-yellow-500 mb-1" />
                  <span className="text-[10px] text-muted-foreground font-mono">Pub Points</span>
                  <span className="text-sm font-extrabold text-foreground mt-0.5">150</span>
                </div>
                <div className="p-3 rounded-2xl border border-border/55 bg-zinc-950/40 text-center flex flex-col items-center">
                  <Download className="h-4 w-4 text-teal-400 mb-1" />
                  <span className="text-[10px] text-muted-foreground font-mono">Downloads</span>
                  <span className="text-sm font-extrabold text-foreground mt-0.5">112</span>
                </div>
              </div>
            </div>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">Multi-Source</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">Auto-Detection</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">SVG Color Filter</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">Caching Index</span>
            </div>

            {/* Links and Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
              <Link
                href="/projects/imagex-flutter"
                className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Explore Product Page</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://github.com/saurabhkumar91536/imagex_flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://pub.dev/packages/imagex_flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-xs font-semibold text-blue-400 transition-colors"
              >
                <TrendingUp className="h-3.5 w-3.5" />
                <span>pub.dev</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
