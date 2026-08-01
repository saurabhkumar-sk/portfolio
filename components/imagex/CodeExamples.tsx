"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, Play, MonitorSmartphone } from "lucide-react";

interface Example {
  id: string;
  name: string;
  code: string;
  previewUrl?: string;
  previewType: "image" | "svg" | "shimmer" | "error" | "gallery";
}

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState("basic");
  const [copied, setCopied] = useState(false);

  const examples: Example[] = [
    {
      id: "basic",
      name: "Basic Auto-Detection",
      previewType: "image",
      previewUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
      code: `import 'package:imagex_flutter/imagex_flutter.dart';

// The engine automatically detects source type from path structure
// Renders Network, Asset, Svg, or local Files automatically.

// 1. Network Image loading
ImageX(path: 'https://example.com/banner.png')

// 2. Asset Image loading
ImageX(path: 'assets/images/profile.jpg')

// 3. SVG vector graphics
ImageX(path: 'assets/icons/home.svg')

// 4. Memory bytes
ImageX(bytes: uint8ListBytes)
`,
    },
    {
      id: "advanced",
      name: "Advanced Caching & Sizing",
      previewType: "image",
      previewUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
      code: `ImageX(
  path: 'https://example.com/user_avatar.jpg',
  width: 120.0,
  height: 120.0,
  borderRadius: 60.0, // Perfect circle avatar
  fit: BoxFit.cover,
  
  // Custom builders (optional)
  placeholder: ShimmerPlaceholder(),
  errorWidget: AvatarFallback(),
  
  // Performance RAM optimizations
  memCacheWidth: 240, 
  memCacheHeight: 240,
)
`,
    },
    {
      id: "svg",
      name: "SVG with Color Filter",
      previewType: "svg",
      code: `// Set specific tint mapping to vectors dynamically matching themes
ImageX(
  path: 'assets/icons/settings.svg',
  width: 48.0,
  height: 48.0,
  svgColor: ColorFilter.mode(
    Colors.blueAccent, 
    BlendMode.srcIn,
  ),
)
`,
    },
    {
      id: "viewer",
      name: "Image Viewer & Gallery",
      previewType: "gallery",
      previewUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
      code: `// Enable built-in interactive double-tap zoom 
// and multi-image swipeable gallery viewer overlays
ImageX(
  path: 'https://images.unsplash.com/photo1.jpg',
  useImageViewer: true,
  imageList: [
    'https://images.unsplash.com/photo1.jpg',
    'https://images.unsplash.com/photo2.jpg',
    'https://images.unsplash.com/photo3.jpg',
  ],
)
`,
    },
  ];

  const currentExample = examples.find((ex) => ex.id === activeTab) || examples[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="examples" className="py-24 border-t border-border/50 bg-card/25">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Live Code Examples</h2>
          <p className="text-muted-foreground leading-relaxed">
            See how clean the code stays. No nesting network image loaders inside caching managers, custom clip behaviors, and image decoders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation and Live Preview Mockup */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col gap-2">
              {examples.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveTab(ex.id)}
                  className={`px-5 py-3.5 rounded-xl text-sm font-semibold text-left transition-all border flex items-center justify-between ${
                    activeTab === ex.id
                      ? "bg-foreground text-background border-foreground shadow-md"
                      : "bg-card/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{ex.name}</span>
                  <Play className={`h-3.5 w-3.5 ${activeTab === ex.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                </button>
              ))}
            </div>

            {/* Live Visual Widget Simulator */}
            <div className="p-6 rounded-3xl border border-border bg-background shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground mb-4">
                <MonitorSmartphone className="h-4 w-4" />
                <span>WIDGET SIMULATION PREVIEW</span>
              </div>

              <div className="aspect-video w-full rounded-2xl bg-muted/20 border border-border/60 overflow-hidden flex items-center justify-center relative">
                {currentExample.previewType === "image" && currentExample.previewUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={currentExample.previewUrl}
                    alt="Flutter Simulation Output"
                    className="w-full h-full object-cover"
                  />
                )}

                {currentExample.previewType === "svg" && (
                  <svg
                    className="w-16 h-16 text-blue-500 animate-pulse"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}

                {currentExample.previewType === "gallery" && currentExample.previewUrl && (
                  <div className="w-full h-full relative group/preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentExample.previewUrl}
                      alt="Simulation Output Gallery"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center gap-2 opacity-100 transition-opacity">
                      <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                        Swipe / Zoom Gesture Active
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Code Display block */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-[#09090b] shadow-2xl relative overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-950 border-b border-border/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-blue-500" />
                <span>lib/main.dart</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>DART</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1 hover:text-white transition-colors p-1"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>
            </div>

            {/* Code Content */}
            <pre className="p-6 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed select-text">
              <code>{currentExample.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
