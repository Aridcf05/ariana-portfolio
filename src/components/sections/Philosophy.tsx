"use client";
import React from "react";
import { motion } from "framer-motion";

export const Philosophy = () => {
  return (
    <section id="about" className="py-20 md:py-24 max-w-5xl mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-14 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-400 font-semibold">
          About Me
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
          Soy Ariana Ileen del Carpio Flores, estudiante de Ingeniería de Sistemas con experiencia práctica y enfoque en soluciones reales.
        </h2>

        <div className="space-y-4 text-zinc-300 leading-relaxed font-light text-sm md:text-base">
          <p>
            Actualmente estoy en el último ciclo de Ingeniería de Sistemas, y además de mi formación académica,
            ya tengo experiencia profesional trabajando en desarrollo de software, automatización y soluciones
            empresariales.
          </p>
          <p>
            Me interesa el <strong className="text-white">Software Development</strong> con enfoque práctico,
            especialmente en <strong className="text-white">iOS</strong>, <strong className="text-white">Power Platform</strong>,
            <strong className="text-white"> Python / ML / AI</strong> y la construcción de herramientas que resuelven
            problemas de negocio con una base técnica sólida.
          </p>
          <p>
            Mi perfil combina análisis, ingeniería y producto: construyo soluciones que conectan procesos,
            datos y experiencia de usuario, con atención a la calidad, escalabilidad y claridad de la entrega.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono text-zinc-400">
          <div><span className="text-cyan-400">01.</span> iOS</div>
          <div><span className="text-cyan-400">02.</span> Power Platform</div>
          <div><span className="text-cyan-400">03.</span> Python / ML / AI</div>
          <div><span className="text-cyan-400">04.</span> Business solutions</div>
        </div>
      </motion.div>
    </section>
  );
};