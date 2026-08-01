"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does caching work under the hood?",
      answer: "For remote image URLs, ImageX integrates with the SQLite-backed cached_network_image library. When an image path is loaded, it checks local directory indexers. If a cached version exists and is not expired, it serves it directly from disk. Otherwise, it downloads it and updates the SQLite record automatically.",
    },
    {
      question: "How is SVG rendering handled?",
      answer: "ImageX scans the file path ending structure at runtime. If the path terminates with '.svg' or path pattern includes vector markings, it forwards rendering to the optimized flutter_svg parser instead of normal bitmap decoders. You can also specify custom svgColor parameters to tint vector nodes dynamically.",
    },
    {
      question: "What is the status of Flutter Web support?",
      answer: "ImageX supports Flutter Web out-of-the-box! On Web platforms, images are rendered using browser canvases. To prevent CORS (Cross-Origin Resource Sharing) blockages on remote URLs, you can easily configure fallback image renderers or enable CORS headers on your object storage bucket.",
    },
    {
      question: "How does ImageX optimize device RAM footprint?",
      answer: "Standard image widgets decode the full resolution of a source image in RAM, even if shown in a small thumbnail. ImageX exposes memCacheWidth and memCacheHeight hooks. The decoders downscale the image layout before placing it in the widget rendering tree, reducing active memory leaks by up to 40%.",
    },
    {
      question: "How does error handling and retry mechanism work?",
      answer: "If an image fails to load due to network timeouts, server errors, or invalid paths, ImageX catches the exception silently and renders your custom errorWidget. Additionally, ImageX has listener hooks that automatically trigger retries when device connectivity changes from offline to online.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-border/50 bg-background relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="h-7 w-7 text-blue-500" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Everything you need to know about integrating ImageX Flutter into your workflows.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-border rounded-2xl bg-card/40 overflow-hidden transition-colors hover:border-border/80"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left text-sm font-bold text-foreground/90 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full bg-background border border-border/80 text-muted-foreground">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
