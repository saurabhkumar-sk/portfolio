"use client";

import React from "react";
import { GitFork, AlertCircle, CheckSquare, MessageSquare, Terminal } from "lucide-react";

export default function OpenSource() {
  const steps = [
    {
      title: "1. Fork & Clone",
      desc: "Fork the repository to your own account, then clone it locally to set up the dev workspace.",
      command: "git clone https://github.com/YOUR_USERNAME/imagex_flutter.git",
      icon: <GitFork className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "2. Open Issues",
      desc: "Found a bug or have a suggestion? Open an issue detailing context, code examples, and logs.",
      command: "Browse current open reports on GitHub",
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
    },
    {
      title: "3. Format and Test",
      desc: "Ensure code formatting aligns with Dart styling guidelines and that tests verify clean behavior.",
      command: "dart format . && flutter test",
      icon: <Terminal className="h-5 w-5 text-teal-500" />,
    },
    {
      title: "4. Create Pull Request",
      desc: "Push changes to your fork and submit a PR. Our automation checks benchmarks and merge rules.",
      command: "Review guidelines before publishing",
      icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
    },
  ];

  return (
    <section id="opensource" className="py-24 border-t border-border/50 bg-[#09090b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 font-sans">Open-Source Community</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            ImageX is built by developers, for developers. We welcome community additions, bug patches, performance tweaks, and platform enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between shadow-lg relative group hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 w-fit mb-4 group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-zinc-200">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {step.command && (
                <div className="mt-auto border-t border-zinc-900 pt-4 text-[10px] font-mono text-zinc-500">
                  <div className="text-zinc-600 mb-1 uppercase tracking-wider text-[8px]">terminal / action</div>
                  <div className="bg-[#0b0b0d] p-2 rounded border border-zinc-900 text-zinc-300 break-all select-all">
                    {step.command}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
