"use client";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 relative z-10">
      {/* Badge Disponibilidad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-8 shadow-lg shadow-cyan-500/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Disponible para proyectos internacionales & soluciones AI
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] text-white"
      >
        Construyendo el futuro digital con{" "}
        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          elegancia, código e inteligencia.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
      >
        Soy <span className="text-white font-semibold">Ariana Del Carpio</span>. 
        Especializada en <span className="text-cyan-400 font-medium">Desarrollo Web, Mobile, AI y Power Platform</span>.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-4 justify-center items-center"
      >
        <a
          href="#projects"
          className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 transform hover:scale-105 active:scale-95"
        >
          Explorar Casos de Estudio
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-full glass-panel text-zinc-200 font-bold text-sm hover:text-white hover:border-white/20 transition-all transform hover:scale-105 active:scale-95"
        >
          Iniciar Conversación
        </a>
      </motion.div>
    </section>
  );
};