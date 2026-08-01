"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  FileImage,
  PenTool,
  Sparkles,
  Database,
  Cpu,
  Layers,
  HelpCircle,
  Eye,
  Minimize2,
  RefreshCcw,
  Palette,
  LayoutGrid,
  Image,
  AlertTriangle,
  ZoomIn,
  Flame,
  CheckCircle,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Features() {
  const list: Feature[] = [
    {
      title: "Network Images",
      description: "Direct web-based image loaders supporting HTTP headers.",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Asset Images",
      description: "Fast loading of packaged local PNG, JPG, and webp graphics.",
      icon: <Image className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "SVG Support",
      description: "Full resolution-independent vector renders for icons and illustrations.",
      icon: <PenTool className="h-5 w-5 text-teal-500" />,
    },
    {
      title: "Cached Images",
      description: "Smart cached caching layers saving local SQLite logs and assets.",
      icon: <Database className="h-5 w-5 text-amber-500" />,
    },
    {
      title: "Memory Images",
      description: "Fast rendering from raw base64 or Uint8List byte streams.",
      icon: <Cpu className="h-5 w-5 text-orange-500" />,
    },
    {
      title: "File Images",
      description: "Support for loading photos directly from native device paths.",
      icon: <FileImage className="h-5 w-5 text-emerald-500" />,
    },
    {
      title: "Loading Placeholder",
      description: "Automatic shimmer effects adjusting to borders and sizes.",
      icon: <RefreshCcw className="h-5 w-5 text-indigo-500" />,
    },
    {
      title: "Error Widget",
      description: "Visual fallback UI for missing endpoints or offline scenarios.",
      icon: <AlertTriangle className="h-5 w-5 text-rose-500" />,
    },
    {
      title: "BlurHash Support",
      description: "Elegant loading hashes giving blurred visual previews first.",
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
    },
    {
      title: "Hero Animation",
      description: "Seamless page transitions mapped across layout routers.",
      icon: <Minimize2 className="h-5 w-5 text-cyan-500" />,
    },
    {
      title: "Fade Animation",
      description: "Smooth fade-in effects that resolve visual stutter on load.",
      icon: <Eye className="h-5 w-5 text-violet-500" />,
    },
    {
      title: "Border Radius",
      description: "Universal border styling matching containers automatically.",
      icon: <Layers className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "BoxFit Controls",
      description: "Configure how images fit containers (cover, fill, contain, etc.).",
      icon: <LayoutGrid className="h-5 w-5 text-rose-400" />,
    },
    {
      title: "Theme Support",
      description: "Adaptive rendering of assets reflecting Dark/Light configurations.",
      icon: <Palette className="h-5 w-5 text-green-400" />,
    },
    {
      title: "Retry Trigger",
      description: "Network listening mechanism auto-retrying failed resource fetches.",
      icon: <RefreshCcw className="h-5 w-5 text-indigo-400" />,
    },
    {
      title: "Custom Builders",
      description: "Tailor custom layout templates directly for errors and loaders.",
      icon: <HelpCircle className="h-5 w-5 text-slate-400" />,
    },
    {
      title: "Responsive Sizing",
      description: "Auto-computes optimal bounding boxes for mobile/tablet screens.",
      icon: <ZoomIn className="h-5 w-5 text-blue-400" />,
    },
    {
      title: "Performance Optimized",
      description: "Decodes images directly at display sizes to conserve device RAM.",
      icon: <Flame className="h-5 w-5 text-amber-600" />,
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-border/50 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Out-of-the-box Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            ImageX Flutter combines the features of multiple libraries into a single widget, giving you complete power over image loading and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-6 rounded-2xl border border-border bg-card/40 hover:bg-card/75 hover:border-border/80 hover:shadow-lg transition-all flex flex-col group relative"
            >
              <div className="p-3 rounded-xl bg-background border border-border/50 w-fit mb-4 group-hover:scale-105 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold mb-2 flex items-center gap-1.5">
                {feat.title}
                <CheckCircle className="h-3.5 w-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground/90 leading-relaxed flex-grow">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
