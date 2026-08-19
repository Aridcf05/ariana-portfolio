"use client";
import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "NTT DATA PERÚ",
    role: "Trainee — iOS Development",
    dates: "Marzo 2026 – Octubre 2026",
    technologies: ["Swift", "SwiftUI", "MVVM", "REST APIs", "async/await", "URLSession", "Git", "Xcode"],
    description: "Desarrollo de módulos iOS utilizando Swift y SwiftUI bajo arquitectura MVVM, integrando APIs REST mediante programación asíncrona y procesamiento de datos JSON.",
    bullets: [
      "Desarrollo de módulos iOS con Swift y SwiftUI siguiendo arquitectura MVVM.",
      "Integración con APIs REST usando async/await y URLSession para consumo y procesamiento de JSON.",
      "Colaboración con el equipo en control de versiones y pruebas para entrega de funcionalidades.",
    ],
  },
  {
    company: "AENZA",
    role: "Practicante TI",
    dates: "Mayo 2025 – Febrero 2026",
    technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Microsoft Lists"],
    description: "",
    bullets: [
      "Automatización de procesos internos mediante Power Apps y Power Automate.",
      "Desarrollo de dashboards en Power BI para seguimiento de KPIs y soporte a la toma de decisiones.",
      "Consolidación, validación y estructuración de información para control y monitoreo de indicadores.",
      "Implementación de mejoras que redujeron tiempos de gestión aproximadamente 30%.",
    ],
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
                            {item.dates && <div className="text-sm text-zinc-400 mt-1">{item.dates}</div>}
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

            {item.bullets ? (
              <ul className="list-disc ml-5 text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl space-y-2">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">{item.description}</p>
            )}
          </motion.article>
        ))}
      </div>

    </section>
  );
};
