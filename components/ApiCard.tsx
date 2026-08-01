"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  FileJson,
  Server,
  Sparkles,
  Activity,
} from "lucide-react";
import { ApiService } from "./apiData";

interface ApiCardProps {
  api: ApiService;
}

export default function ApiCard({ api }: ApiCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-border bg-card/40 overflow-hidden flex flex-col group hover:border-border/80 transition-all duration-300 shadow-sm hover:shadow-xl relative backdrop-blur-sm"
    >
      {/* Decorative top border gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Header Row: Title & Status Badge */}
          <div className="flex justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-blue-500 transition-colors">
                {api.name}
                {api.status === "live" && (
                  <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                )}
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted">
                {api.version}
              </span>
            </div>

            {api.status === "live" ? (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[11px] font-semibold border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping-slow" />
                <span>🟢 Live</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-semibold border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>🚧 In Dev</span>
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
            {api.description}
          </p>

          {/* Quick Specifications Metadata Grid */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-zinc-900/30 border border-border/50 mb-6 text-[11px] font-medium text-muted-foreground">
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="h-4 w-4 text-indigo-400" />
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/50 font-mono">Auth</span>
              <span className="font-semibold text-foreground truncate max-w-full">{api.authType}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 border-x border-border/50">
              <FileJson className="h-4 w-4 text-cyan-400" />
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/50 font-mono">Format</span>
              <span className="font-semibold text-foreground truncate max-w-full">{api.responseFormat}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Server className="h-4 w-4 text-emerald-400" />
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/50 font-mono">Hosting</span>
              <span className="font-semibold text-foreground truncate max-w-full">{api.deploymentStatus}</span>
            </div>
          </div>

          {/* Feature List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-3 flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5" />
              <span>Service Capabilities</span>
            </h4>
            <ul className="space-y-2.5">
              {api.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground/90">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {api.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-border/50">
          {api.apiDocsUrl && (
            <a
              href={api.apiDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-all duration-300 shadow-sm"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>API Docs</span>
            </a>
          )}

          {api.liveUrl && (
            <a
              href={api.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Live API</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
