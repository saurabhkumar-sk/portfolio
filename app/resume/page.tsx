import React from "react";
import type { Metadata } from "next";
import { parseResumePdf } from "./parser";
import ResumeClient from "./ResumeClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Resume | Saurabh Kumar - Flutter Developer",
  description: "Professional resume and career timeline of Saurabh Kumar, Flutter Developer with 2+ years of experience in building premium cross-platform applications.",
  keywords: ["Saurabh Kumar", "Flutter Developer", "Resume", "Mobile Engineer", "Portfolio", "ImageX Flutter"],
};

export default async function ResumePage() {
  const data = await parseResumePdf();
  return <ResumeClient data={data} />;
}
