"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiServicesData } from "./apiData";
import ApiCard from "./ApiCard";

export default function ApiSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Backend",
    "Python",
    "FastAPI",
    "REST API",
    "Authentication",
    "Database",
  ];

  // Filtering is completely data-driven
  const filteredApis = useMemo(() => {
    return apiServicesData.filter((api) => {
      if (activeFilter === "All") return true;
      return api.categories.some(
        (cat) => cat.toLowerCase() === activeFilter.toLowerCase()
      );
    });
  }, [activeFilter]);

  return (
    <section id="backend-apis" className="py-24 border-t border-border/50 relative bg-background">
      {/* Background radial blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-emerald-500/5 blur-[90px] animate-blob [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Backend APIs</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Production-ready backend services and REST APIs I have designed and developed for scalable applications.
          </p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-full overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-card/50 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* API Grid with Layout Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredApis.map((api) => (
              <ApiCard key={api.id} api={api} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
