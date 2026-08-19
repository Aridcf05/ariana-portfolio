"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA, Project } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";
import { useLanguage } from "@/context/LanguageContext";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 bg-[#09090b]">
      
      {/* Luz de fondo sutil (Ambient Glow) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header de la Sección */}
      <div className="mb-24 space-y-6 text-center md:text-left relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-violet-400 font-semibold"
        >
          {language === "es" ? "Proyectos destacados" : "Selected work"}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase"
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed"
        >
          {language === "es"
            ? "Proyectos seleccionados que demuestran mi experiencia en software empresarial, automatización, inteligencia artificial y desarrollo web moderno."
            : "Selected projects that showcase my experience in enterprise software, automation, artificial intelligence and modern web development."}
        </motion.p>
      </div>

      {/* Lista de Proyectos verticales */}
      <div className="space-y-16 relative z-10">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Modal interactivo de Case Study */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};