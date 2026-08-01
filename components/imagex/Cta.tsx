"use client";

import React from "react";
import { Star, Heart, BookOpen, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Cta() {
  const triggerConfetti = () => {
    // Standard confetti blast
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 z-10 relative">
        <div className="p-8 sm:p-16 rounded-[40px] border border-blue-500/20 bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-transparent text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-6 right-8 opacity-10 animate-pulse">
            <Sparkles className="h-24 w-24 text-blue-500" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Like the package?
          </h2>
          <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
            ImageX is free and open-source. If it helped you save development hours and boilerplate code, show some love by starring the repository or liking it on pub.dev!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/saurabhkumar-sk/imagex_flutter"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-full bg-foreground text-background hover:opacity-90 font-bold text-sm w-full sm:w-auto shadow-xl transition-all cursor-pointer select-none group"
            >
              <Star className="h-4.5 w-4.5 fill-yellow-500 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span>Star Repository</span>
            </a>

            <a
              href="https://pub.dev/packages/imagex_flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-full border border-border bg-card/60 hover:bg-muted font-bold text-sm w-full sm:w-auto transition-colors group"
            >
              <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500/10 group-hover:fill-rose-500 transition-colors" />
              <span>Like on pub.dev</span>
            </a>

            <a
              href="https://medium.com/@saurabhkumar91536/mastering-images-in-flutter-one-widget-to-rule-them-all-8e6880dbf4e9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-full border border-border bg-card/60 hover:bg-muted font-bold text-sm w-full sm:w-auto transition-colors"
            >
              <BookOpen className="h-4.5 w-4.5 text-blue-500" />
              <span>Read Article</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
