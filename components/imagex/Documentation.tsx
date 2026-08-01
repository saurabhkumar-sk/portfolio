"use client";

import React from "react";
import { BookOpen, Github, Code, FileText, ArrowUpRight } from "lucide-react";

export default function Documentation() {
  const cards = [
    {
      title: "API Reference Docs",
      desc: "Browse type signatures, widget parameters, BoxFit definitions, and cache controls.",
      href: "https://pub.dev/documentation/imagex_flutter/latest/",
      icon: <Code className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Medium Article Walkthrough",
      desc: "Read the full design rationale behind ImageX, solving Flutter image fragmentation.",
      href: "https://medium.com/@saurabhkumar91536/mastering-images-in-flutter-one-widget-to-rule-them-all-8e6880dbf4e9",
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "pub.dev Package Page",
      desc: "See scoreboards, dependency maps, versions history, and copy dependencies easily.",
      href: "https://pub.dev/packages/imagex_flutter",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "GitHub Repository",
      desc: "Inspect the raw package code, file issues, propose features, and fork the repository.",
      href: "https://github.com/saurabhkumar-sk/imagex_flutter",
      icon: <Github className="h-6 w-6 text-zinc-400" />,
    },
  ];

  return (
    <section id="documentation" className="py-24 border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 font-sans">Developer Resources</h2>
          <p className="text-muted-foreground leading-relaxed">
            Need advanced support or want to deep dive into parameters? Browse these source documentations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-border bg-card/40 hover:bg-card hover:border-border/80 hover:shadow-lg transition-all flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-background border border-border/50 w-fit group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-foreground/90 group-hover:text-blue-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-1 text-xs font-semibold text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>View resource</span>
                <ArrowUpRight className="h-3 w-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
