"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl overflow-y-auto"
        >
          {/* Botón de Cierre Flotante */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300"
            aria-label={language === "es" ? "Cerrar modal" : "Close modal"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contenido del Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl my-12 mx-4 bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl text-zinc-100 relative overflow-hidden"
          >
            {/* Ambient Background Gradient */}
            <div
              className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-30"
              style={{ background: project.glowColor || "rgba(139, 92, 246, 0.2)" }}
            />

            {/* Header / Hero */}
            <div className="space-y-4 border-b border-white/10 pb-8 relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-violet-400 uppercase">
                  {project.category[language]}
                </span>
                <span className="text-[10px] px-3 py-0.5 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 font-mono">
                  {project.badge}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{project.title}</h1>
              <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
                {project.caseStudy.heroTagline[language]}
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-zinc-400">
                <div>
                  <span className="text-zinc-600 block uppercase text-[10px]">
                    {language === "es" ? "Rol" : "Role"}
                  </span>
                  <span className="text-zinc-200">{project.role[language]}</span>
                </div>
                <div>
                  <span className="text-zinc-600 block uppercase text-[10px]">
                    {language === "es" ? "Duración" : "Duration"}
                  </span>
                  <span className="text-zinc-200">{project.duration[language]}</span>
                </div>
              </div>
            </div>

            {/* Grid principal: Problema & Objetivos */}
            <div className="grid md:grid-cols-2 gap-8 my-10 relative z-10">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-violet-400">
                  {language === "es" ? "El Desafío / Problema" : "The Challenge / Problem"}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy.problem[language]}</p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-violet-400">
                  {language === "es" ? "Objetivos Clave" : "Key Objectives"}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {project.caseStudy.objectives[language].map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Showcase Visual Simulation / Dashboard Placeholder */}
            <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Preview Console // {project.id}.app</span>
              </div>

              {/* Interface Metrics Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {project.caseStudy.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{m.value}</p>
                    <p className="text-xs font-mono text-zinc-400 mt-1">{m.label[language]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arquitectura de Solución */}
            <div className="my-10 space-y-4 relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {language === "es" ? "Arquitectura del Sistema" : "System Architecture"}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy.architectureDescription[language]}</p>

              {/* Steps */}
              {project.caseStudy.processSteps && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                  {project.caseStudy.processSteps.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 space-y-2">
                      <span className="text-xs font-mono text-violet-400 font-bold">{s.step}</span>
                      <h4 className="text-sm font-semibold text-white">{s.title[language]}</h4>
                      <p className="text-xs text-zinc-400 leading-normal">{s.desc[language]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stack Utilizado */}
            <div className="my-8 relative z-10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                {language === "es" ? "Stack Tecnológico" : "Tech Stack"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Lecciones Aprendidas */}
            <div className="my-8 p-6 rounded-2xl bg-violet-950/20 border border-violet-800/30 space-y-3 relative z-10">
              <h4 className="text-sm font-mono uppercase tracking-wider text-violet-300">
                {language === "es" ? "Lecciones Aprendidas e Impacto" : "Lessons Learned & Impact"}
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                {project.caseStudy.lessons[language].map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-violet-400 font-bold">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Modal Actions */}
            <div className="pt-8 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-zinc-200 transition-colors"
              >
                {language === "es" ? "Cerrar Caso de Estudio" : "Close Case Study"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};