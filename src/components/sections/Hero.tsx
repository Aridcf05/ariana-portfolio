"use client";
import React from "react";
import { motion } from "framer-motion";

const socialLinks = {
  github: "https://github.com/Aridcf05",
  linkedin: "https://www.linkedin.com/in/arianadelcarpioflores/",
  cv: "/cv.pdf",
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-12 relative z-10"
      aria-labelledby="hero-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-[11px] sm:text-xs font-semibold text-cyan-300 mb-7 shadow-lg shadow-cyan-500/10"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Junior Software Engineer / Software Engineering Intern
      </motion.div>

      <motion.h1
        id="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] max-w-5xl leading-[1.08] text-white"
      >
        <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
          Software Engineer
        </span>{" "}
        <span className="text-zinc-200">| iOS · Power Platform · AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed"
      >
        Soy estudiante de Ingeniería de Sistemas en el último ciclo y ya tengo experiencia
        práctica en desarrollo de software, automatización y soluciones empresariales. Trabajo
        con iOS, Power Platform, Python, Machine Learning y la construcción de soluciones
        funcionales con impacto real.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs font-medium text-zinc-300"
      >
        {[
          "iOS",
          "Power Platform",
          "Automation",
          "Data & AI",
          "Python",
          "Business Solutions",
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-200"
          >
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center items-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 shadow-lg shadow-cyan-500/25"
          aria-label="Ver proyectos"
        >
          Ver proyectos
        </a>
        <a
          href={socialLinks.cv}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full glass-panel text-zinc-100 font-semibold text-sm hover:text-white hover:border-cyan-400/50"
          aria-label="Descargar CV"
          download
        >
          Descargar CV
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10 bg-white/5 text-zinc-100 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-200"
          aria-label="Ir a LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10 bg-white/5 text-zinc-100 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-200"
          aria-label="Ir a GitHub"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
};