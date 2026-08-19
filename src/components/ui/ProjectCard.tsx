"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

const insightMap: Record<string, [string, string]> = {
  "supplier-management-platform": ["Automatización de procesos", "Centralización de información"],
  "predictive-supplier-selection": ["Análisis predictivo", "Selección de proveedores"],
  "executive-dashboard": ["Indicadores clave", "Visualización ejecutiva"],
  "ai-copilot": ["Asistente conversacional", "Base de conocimiento"],
  "ios-applications": ["Arquitectura MVVM", "Interfaz nativa"],
  "personal-portfolio": ["Diseño UX", "Frontend moderno"],
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const [primaryInsight, secondaryInsight] = insightMap[project.id] ?? ["Solución funcional", "Diseño técnico"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full rounded-3xl bg-[#0d0d10] border border-white/10 p-6 md:p-12 overflow-hidden transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-3xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${project.glowColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
        <div className="space-y-6 flex-1 w-full">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-violet-400 uppercase">
              {project.projectType?.[language] ?? project.category[language]}
            </span>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
              {project.badge}
            </span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-violet-200 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            {project.shortDescription[language]}
          </p>

          <div className="flex items-center gap-6 text-xs font-mono text-zinc-500 border-t border-b border-white/5 py-3">
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase">{language === "es" ? "Rol" : "Role"}</span>
              <span className="text-zinc-300">{project.role[language]}</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase">{language === "es" ? "Duración" : "Duration"}</span>
              <span className="text-zinc-300">{project.duration[language]}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 group-hover:border-violet-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-violet-300 transition-colors group/btn"
              aria-label={language === "es" ? `Abrir caso de estudio de ${project.title}` : `Open case study for ${project.title}`}
            >
              <span>{language === "es" ? "Ver caso de estudio" : "View case study"}</span>
              <span className="text-violet-400 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[480px] h-64 md:h-80 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">{project.badge}</span>
          </div>

          <div className="my-auto space-y-3">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 backdrop-blur-sm">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>{language === "es" ? "Detalle clave" : "Key detail"}</span>
                <span className="text-emerald-400 font-semibold">{language === "es" ? "Activo" : "Active"}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "65%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/5">
                <p className="text-xs font-mono text-zinc-500">{language === "es" ? "Resultado" : "Outcome"}</p>
                <p className="text-sm font-bold text-white mt-0.5">{primaryInsight}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/5">
                <p className="text-xs font-mono text-zinc-500">{language === "es" ? "Enfoque" : "Focus"}</p>
                <p className="text-sm font-bold text-violet-400 mt-0.5">{secondaryInsight}</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-2 border-t border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider group-hover:text-zinc-300 transition-colors">
              {language === "es" ? "Abrir caso de estudio" : "Open case study"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};