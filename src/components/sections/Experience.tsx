"use client";
import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "NTT DATA",
    role: "Trainee / iOS Developer (Práctica preprofesional)",
    technologies: ["Swift", "SwiftUI", "Git", "Xcode"],
    description:
      "Desarrollo y mantenimiento de soluciones iOS con enfoque en experiencia de usuario, integración con flujos de trabajo y entrega de funcionalidad con calidad técnica y documentación clara.",
  },
  {
    company: "AENZA",
    role: "Practicante TI (Práctica preprofesional)",
    technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Microsoft Lists"],
    description:
      "Participación en automatización de procesos, soporte operativo y desarrollo de soluciones empresariales dentro del ecosistema Microsoft, con atención en mejora de flujos, organización de información y reportes de gestión.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-24 max-w-6xl mx-auto px-4 relative z-10">
      <div className="mb-10 md:mb-14 text-center md:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.28em] text-cyan-400 font-semibold">Experience</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2">Experiencia</h2>
      </div>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{item.company}</h3>
                <p className="text-base md:text-lg text-zinc-300 mt-1">{item.role}</p>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 glass-panel rounded-3xl p-6 md:p-8 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Universidad Peruana de Ciencias Aplicadas — UPC</h3>
            <p className="text-zinc-300 mt-1">Ingeniería de Sistemas</p>
          </div>
          <div className="text-sm font-mono text-cyan-300">2022 — 2026</div>
        </div>

        <div className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-3">
          <p>Estado: Último ciclo.</p>
          <p>
            Proyecto de tesis / investigación: <span className="text-white">Sistema Predictivo para la Selección de Proveedores en el sector diseño de interiores de Lima Metropolitana.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
