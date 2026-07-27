"use client";
import React from "react";
import { motion } from "framer-motion";

export const Philosophy = () => {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-14 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          Filosofía de Ingeniería
        </span>
        
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
          &quot;Elegancia en el diseño, precisión analítica en el código.&quot;
        </h2>

        <div className="space-y-4 text-zinc-300 leading-relaxed font-light text-sm md:text-base">
          <p>
            Como desarrolladora enfocada en <strong className="text-white">Sistemas e Inteligencia Artificial</strong>, no entiendo el software solo como código funcional, sino como una experiencia fluida que resuelve problemas reales de negocio.
          </p>
          <p>
            Mi enfoque combina la estructuración limpia de la <strong className="text-white">arquitectura de software</strong> con la automatización inteligente (Power Platform / ML) y la estética hiperpulida del desarrollo frontend moderno (React, Next.js, SwiftUI).
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono text-zinc-400">
          <div><span className="text-cyan-400">01.</span> Perfeccionismo UI</div>
          <div><span className="text-cyan-400">02.</span> Automatización AI</div>
          <div><span className="text-cyan-400">03.</span> Clean Architecture</div>
          <div><span className="text-cyan-400">04.</span> Enfoque End-to-End</div>
        </div>
      </motion.div>
    </section>
  );
};