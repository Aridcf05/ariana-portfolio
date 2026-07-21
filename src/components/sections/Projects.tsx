"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecosistema de Automatización & Analytics Empresarial",
    category: "Power Platform & Cloud",
    tag: "Enterprise Ready",
    problem: "Procesos manuales desconectados y falta de métricas consolidadas en tiempo real.",
    solution: "Arquitectura de flujos automatizados con Power Automate, SharePoint y tableros interactivos en Power BI.",
    stack: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "DAX"],
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    title: "iOS Mobile Platform - Clean Architecture",
    category: "Mobile Development",
    tag: "SwiftUI + Combine",
    problem: "Necesidad de una interfaz reactiva, nativa y con renderizado fluido a 120fps.",
    solution: "Desarrollo con patrones MVVM y Clean Architecture garantizando desacoplamiento y alta mantenibilidad.",
    stack: ["Swift", "SwiftUI", "REST APIs", "Git", "iOS"],
    gradient: "from-purple-600/20 to-blue-500/20"
  },
  {
    title: "Next.js AI Productivity Suite",
    category: "Web & Machine Learning",
    tag: "Next.js 15 + AI",
    problem: "Interfaces tradicionales complejas e ineficientes para interacción con modelos de ML.",
    solution: "Plataforma web hiperrápida optimizada para SEO y UX minimalista con componentes Server/Client.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python"],
    gradient: "from-cyan-600/20 to-emerald-500/20"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 relative z-10">
      <div className="mb-14 text-center md:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          Proyectos Destacados
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2">
          Casos de Estudio
        </h2>
      </div>

      <div className="space-y-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="space-y-5 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase">{proj.category}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium">
                    {proj.tag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white">{proj.title}</h3>

                <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-cyan-300 font-semibold mb-1">El Desafío</p>
                    <p className="text-zinc-400">{proj.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-cyan-300 font-semibold mb-1">La Solución</p>
                    <p className="text-zinc-400">{proj.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.stack.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`w-full lg:w-80 h-56 rounded-2xl bg-gradient-to-br ${proj.gradient} border border-white/10 flex items-center justify-center p-6 text-center relative overflow-hidden group`}>
                <span className="text-xs font-mono text-zinc-400 group-hover:scale-110 transition-transform">
                  [ Live Preview Component ]
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};