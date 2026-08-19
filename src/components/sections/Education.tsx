"use client";
import React from "react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section id="education" className="py-12 md:py-20 max-w-6xl mx-auto px-4 relative z-10">
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.28em] text-cyan-400 font-semibold">Education</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2">Educación</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Universidad Peruana de Ciencias Aplicadas — UPC</h3>
            <p className="text-zinc-300 mt-1">Ingeniería de Sistemas de Información</p>
          </div>

          <div className="text-right">
            <div className="text-sm font-mono text-cyan-300">2022 – 2026</div>
            <div className="mt-3 flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-zinc-100">Último ciclo</span>
              <span className="px-3 py-1.5 rounded-md bg-cyan-600 text-white text-sm font-bold tracking-wide">DÉCIMO SUPERIOR</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-zinc-300 text-sm md:text-base leading-relaxed">
          <p>No mostrar edad ni fecha de nacimiento.</p>
        </div>
      </motion.div>
    </section>
  );
};