"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          ¿Diseñamos el siguiente gran producto?
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8">
          Abierta a oportunidades profesionales, proyectos internacionales y desarrollo de software de alto impacto.
        </p>

        <a
          href="mailto:arianadcf@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all transform hover:scale-105"
        >
          Enviar Mensaje Directo
        </a>

        <div className="mt-16 flex justify-center gap-8 text-xs font-mono text-zinc-500">
          <a href="https://github.com/Aridcf05" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/arianadelcarpioflores/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <span>Ariana Del Carpio Flores © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};