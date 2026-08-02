"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Saurabh<span className="text-blue-500">.</span>
          </Link>
          <p className="text-xs text-muted-foreground">
            Building elegant, high-performance mobile & web experiences.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saurabhkumar-sk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-kumar-skr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:saurabhkumar91536@gmail.com?subject=Portfolio%20Inquiry"
            className="p-2 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        &copy; {currentYear} Saurabh Kumar. All rights reserved.
      </div>
    </footer>
  );
}
