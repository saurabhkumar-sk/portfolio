"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

export default function Installation() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "1. Add Dependency",
      description: "Add imagex_flutter to your pubspec.yaml file under dependencies.",
      code: `dependencies:
  imagex_flutter: ^0.0.3`,
      lang: "yaml",
    },
    {
      title: "2. Fetch Package",
      description: "Run the flutter command in your project terminal to download dependencies.",
      code: "flutter pub get",
      lang: "bash",
    },
    {
      title: "3. Import & Use",
      description: "Import the namespace and start loading images with auto source type parsing.",
      code: `import 'package:imagex_flutter/imagex_flutter.dart';

ImageX(path: 'https://example.com/logo.png')`,
      lang: "dart",
    },
  ];

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="installation" className="py-24 border-t border-border/50 bg-[#09090b] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Installation Guide</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Get up and running with ImageX Flutter in less than a minute. Follow these simple steps.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col md:flex-row md:items-start gap-6 shadow-xl">
              {/* Step info */}
              <div className="md:w-2/5 space-y-2">
                <h3 className="text-base font-bold text-blue-400">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Code block */}
              <div className="md:w-3/5 rounded-xl border border-zinc-800 bg-[#0d0d10] relative overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#070709] text-[10px] font-mono text-zinc-500">
                  <span>{step.lang.toUpperCase()}</span>
                  <button
                    onClick={() => handleCopy(step.code, idx)}
                    className="flex items-center space-x-1 hover:text-zinc-300 transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="h-3 w-3 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
