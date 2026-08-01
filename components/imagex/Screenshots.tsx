"use client";

import React, { useState } from "react";
import { motion as motion2, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { Monitor, Tablet, Smartphone, Maximize2, X, Battery, Wifi, Signal } from "lucide-react";

interface DeviceMockup {
  id: string;
  name: string;
  type: "desktop" | "tablet" | "mobile";
  description: string;
  child: React.ReactNode;
}

export default function Screenshots() {
  const [activeDevice, setActiveDevice] = useState<string>("mobile");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const mockups: DeviceMockup[] = [
    {
      id: "desktop",
      name: "Desktop Web Integration",
      type: "desktop",
      description: "Optimized image grids rendered inside desktop browser layouts.",
      child: (
        <div className="w-full h-full bg-zinc-900 text-zinc-100 p-4 font-sans text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="bg-zinc-800 rounded px-4 py-0.5 w-1/2 text-center text-[10px] text-zinc-400">
              https://admin.dashboard.dev/portfolio
            </div>
            <div className="w-6" />
          </div>
          <div className="grid grid-cols-3 gap-2 flex-grow">
            {[
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300",
              "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=300",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300",
            ].map((img, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="mockup grid" className="w-full h-full object-cover opacity-90" />
              </div>
            ))}
          </div>
          <div className="text-[10px] text-zinc-500 text-center mt-2">
            ImageX responsive grid render at 1080p
          </div>
        </div>
      ),
    },
    {
      id: "tablet",
      name: "Tablet App Layout",
      type: "tablet",
      description: "Grid view items loading with automatic shimmer heights.",
      child: (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-500 text-[10px] mb-2 font-mono">
            <span>TABLET VIEWPORT</span>
            <span>9:41 AM</span>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-grow">
            {/* Shimmer loading mock */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col justify-end p-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent -translate-x-full animate-[pulse_1.5s_infinite] bg-[length:200%_100%]" />
              <div className="h-4 w-2/3 bg-zinc-800 rounded mb-1" />
              <div className="h-3 w-1/2 bg-zinc-800 rounded" />
            </div>
            {/* Success image mock */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300"
                alt="Tablet simulation mock"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[8px] text-zinc-300">
                ImageX Network cached
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mobile",
      name: "Mobile App Screen",
      type: "mobile",
      description: "High-fidelity rendering of cached network profiles and vectors.",
      child: (
        <div className="w-full h-full bg-[#09090b] text-white flex flex-col justify-between">
          {/* iOS status bar */}
          <div className="px-5 py-1.5 flex items-center justify-between text-[10px] text-zinc-400 font-medium">
            <span>9:41</span>
            <div className="w-16 h-4 bg-zinc-950 rounded-full border border-zinc-800 flex items-center justify-center text-[7px] text-zinc-600 font-mono">
              DYNAMIC ISLAND
            </div>
            <div className="flex items-center space-x-1">
              <Signal className="h-2.5 w-2.5" />
              <Wifi className="h-2.5 w-2.5" />
              <Battery className="h-3 w-3" />
            </div>
          </div>

          {/* Chat app mock */}
          <div className="px-4 py-2 flex-grow overflow-y-auto space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">ImageX Live Preview</span>
              <span className="text-[10px] text-blue-500 font-mono">#FlutterActive</span>
            </div>

            {/* Simulated Avatar Profile */}
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-zinc-950 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150"
                  alt="avatar mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold">Profile Load Successful</h4>
                <p className="text-[9px] text-zinc-500 font-mono">ImageX path auto-detected type: Network</p>
              </div>
            </div>

            {/* Simulated SVG logo picture */}
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 0 1 8.716 6.747M12 3a9.003 9.003 0 0 0-8.716 6.747" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold">SVG Vector Graphic</h4>
                <p className="text-[9px] text-zinc-500 font-mono">ImageX path auto-detected type: SVG</p>
              </div>
            </div>

            {/* Simulated Error placeholder */}
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center text-rose-500 font-extrabold text-[10px]">
                ERR
              </div>
              <div>
                <h4 className="text-xs font-bold">Error Fallback Handled</h4>
                <p className="text-[9px] text-zinc-500 font-mono">Path broken, loaded custom errorWidget</p>
              </div>
            </div>
          </div>

          <div className="p-3 text-center text-[9px] text-zinc-600 border-t border-zinc-900">
            ImageX Engine Simulator v0.0.3
          </div>
        </div>
      ),
    },
  ];

  const currentDevice = mockups.find((m) => m.id === activeDevice) || mockups[2];

  return (
    <section id="screenshots" className="py-24 border-t border-border/50 bg-card/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">Live Visual Showcases</h2>
          <p className="text-muted-foreground leading-relaxed">
            See the performance and dynamic layout rendering. Toggle device shell tabs below to preview the loading pipelines.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-2 mb-12">
          {mockups.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveDevice(m.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                activeDevice === m.id
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-card/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.type === "desktop" && <Monitor className="h-3.5 w-3.5" />}
              {m.type === "tablet" && <Tablet className="h-3.5 w-3.5" />}
              {m.type === "mobile" && <Smartphone className="h-3.5 w-3.5" />}
              <span>{m.name}</span>
            </button>
          ))}
        </div>

        {/* Render Device Shell Frame with Hover Zoom */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="text-xs text-muted-foreground mb-4 font-mono">
            {currentDevice.description}
          </div>

          <motion2.div
            layoutId="device-shell"
            whileHover={{ scale: 1.005 }}
            className={`relative border-8 border-zinc-800 dark:border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden ${
              currentDevice.type === "desktop"
                ? "w-full max-w-[680px] aspect-[16/10] rounded-2xl"
                : currentDevice.type === "tablet"
                ? "w-[480px] aspect-[4/3] rounded-3xl"
                : "w-[300px] h-[550px] rounded-[40px]"
            }`}
          >
            {/* View Fullscreen Toggle */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              title="Expand screen"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>

            {currentDevice.child}
          </motion2.div>
        </div>
      </div>

      {/* Lightbox / Modal Support */}
      <AnimatePresence2>
        {lightboxOpen && (
          <motion2.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <motion2.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`bg-zinc-950 border border-zinc-800 overflow-hidden relative shadow-2xl ${
                currentDevice.type === "desktop"
                  ? "w-full max-w-[900px] aspect-[16/10] rounded-2xl"
                  : currentDevice.type === "tablet"
                  ? "w-[720px] aspect-[4/3] rounded-3xl"
                  : "w-[350px] h-[640px] rounded-[50px]"
              }`}
            >
              {currentDevice.child}
            </motion2.div>
          </motion2.div>
        )}
      </AnimatePresence2>
    </section>
  );
}
