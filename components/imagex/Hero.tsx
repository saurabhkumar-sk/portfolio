"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, Layers, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-background"
    >
      {/* Premium Animated Blob Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[100px] animate-blob [animation-delay:5s]" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 dark:text-blue-400 text-xs font-semibold mb-8 shadow-sm hover:border-blue-500/50 transition-colors cursor-default"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-500" />
          <span>ImageX Flutter v0.0.3 is Live</span>
        </motion.div>

        {/* Premium Package Logo / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-2xl mb-8 group"
        >
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-3xl group-hover:blur-3xl transition-all" />
          <Layers className="h-12 w-12 text-white relative transform group-hover:scale-105 transition-transform" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent"
        >
          ImageX Flutter
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
        >
          A unified, high-performance image widget for Flutter that replaces standard Image boilerplate, network caching logic, SVG loaders, and error builders with a single, auto-detecting API.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <a
            href="https://pub.dev/packages/imagex_flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm w-full sm:w-auto shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <span>View on Pub.dev</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/saurabhkumar-sk/imagex_flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-border bg-card/65 text-foreground hover:bg-muted font-semibold text-sm w-full sm:w-auto transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub Repository</span>
          </a>
          <a
            href="https://medium.com/@saurabhkumar91536/mastering-images-in-flutter-one-widget-to-rule-them-all-8e6880dbf4e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-border bg-card/65 text-foreground hover:bg-muted font-semibold text-sm w-full sm:w-auto transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Read Medium Article</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
