"use client";
import React from "react";

const stack = [
  { group: "Frontend & Mobile", items: ["React", "Next.js", "Tailwind CSS", "Swift (iOS)", "TypeScript", "HTML/CSS"] },
  { group: "Enterprise & Automation", items: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Microsoft Lists"] },
  { group: "Data, Backend & AI", items: ["Python", "Machine Learning", "SQL", "Firebase", "REST APIs", "Git / GitHub"] },
];

export const TechStack = () => {
  return (
    <section id="stack" className="py-20 max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2">Tech Stack & Herramientas</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stack.map((cat, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {cat.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};