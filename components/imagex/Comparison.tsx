"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, Star } from "lucide-react";

interface RowData {
  name: string;
  network: boolean;
  asset: boolean;
  svg: boolean;
  caching: boolean;
  placeholder: boolean;
  errorWidget: boolean;
  singleApi: boolean;
  boilerplate: "High" | "Medium" | "Low";
  maintenance: "Complex" | "Standard" | "Simple";
  isFeatured?: boolean;
}

export default function Comparison() {
  const comparisonData: RowData[] = [
    {
      name: "Image.network",
      network: true,
      asset: false,
      svg: false,
      caching: false,
      placeholder: false,
      errorWidget: false,
      singleApi: false,
      boilerplate: "High",
      maintenance: "Complex",
    },
    {
      name: "Image.asset",
      network: false,
      asset: true,
      svg: false,
      caching: false,
      placeholder: false,
      errorWidget: false,
      singleApi: false,
      boilerplate: "Medium",
      maintenance: "Standard",
    },
    {
      name: "CachedNetworkImage",
      network: true,
      asset: false,
      svg: false,
      caching: true,
      placeholder: true,
      errorWidget: true,
      singleApi: false,
      boilerplate: "High",
      maintenance: "Standard",
    },
    {
      name: "flutter_svg",
      network: true,
      asset: true,
      svg: true,
      caching: false,
      placeholder: false,
      errorWidget: false,
      singleApi: false,
      boilerplate: "Medium",
      maintenance: "Standard",
    },
    {
      name: "ImageX Flutter",
      network: true,
      asset: true,
      svg: true,
      caching: true,
      placeholder: true,
      errorWidget: true,
      singleApi: true,
      boilerplate: "Low",
      maintenance: "Simple",
      isFeatured: true,
    },
  ];

  return (
    <section id="comparison" className="py-24 border-t border-border/50 bg-[#0c0c0e] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comparison Matrix</h2>
          <p className="text-zinc-400 leading-relaxed">
            See how ImageX Flutter stacks up against standard image loaders in the Flutter ecosystem. We consolidate fragmentation.
          </p>
        </div>

        {/* Scrollable table container */}
        <div className="w-full overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950/50 shadow-2xl">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-xs uppercase bg-zinc-950">
                <th className="py-4 px-6 font-semibold">Widget Name</th>
                <th className="py-4 px-4 text-center font-semibold">Network</th>
                <th className="py-4 px-4 text-center font-semibold">Asset</th>
                <th className="py-4 px-4 text-center font-semibold">SVG</th>
                <th className="py-4 px-4 text-center font-semibold">Caching</th>
                <th className="py-4 px-4 text-center font-semibold">Placeholder</th>
                <th className="py-4 px-4 text-center font-semibold">Error Widget</th>
                <th className="py-4 px-4 text-center font-semibold">Single API</th>
                <th className="py-4 px-4 text-center font-semibold">Boilerplate</th>
                <th className="py-4 px-6 text-center font-semibold">Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-zinc-900 transition-colors ${
                    row.isFeatured
                      ? "bg-blue-600/10 text-white font-semibold border-y-2 border-blue-500/50"
                      : "text-zinc-300 hover:bg-zinc-900/30"
                  }`}
                >
                  <td className="py-5 px-6 font-bold flex items-center gap-2">
                    {row.name}
                    {row.isFeatured && <Star className="h-4 w-4 fill-blue-500 text-blue-500 animate-pulse" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.network ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.asset ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.svg ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.caching ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.placeholder ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.errorWidget ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.singleApi ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-600 mx-auto" />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        row.boilerplate === "Low"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : row.boilerplate === "Medium"
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {row.boilerplate}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        row.maintenance === "Simple"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : row.maintenance === "Standard"
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {row.maintenance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
