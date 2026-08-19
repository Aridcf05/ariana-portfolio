"use client";
import React from "react";

const socialLinks = {
  github: "https://github.com/Aridcf05",
  linkedin: "https://www.linkedin.com/in/arianadelcarpioflores/",
  cv: "/cv.pdf",
};

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 md:py-24 border-t border-white/10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          ¿Buscas a una Junior Software Engineer o Intern para tu equipo?
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-8">
          Estoy en etapa final de carrera, con experiencia práctica en iOS, Power Platform, automatización y soluciones de datos.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-100 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-200"
            aria-label="Ir a LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-100 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-200"
            aria-label="Ir a GitHub"
          >
            GitHub
          </a>
          <a
            href={socialLinks.cv}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400"
            aria-label="Descargar CV"
            download
          >
            Descargar CV
          </a>
          <a
            href="mailto:arianadcf@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white text-black font-bold text-sm hover:bg-zinc-200"
            aria-label="Contactarme por correo"
          >
            Contactarme
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-mono text-zinc-500">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub de Ariana">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn de Ariana">
            LinkedIn
          </a>
          <span>Ariana Del Carpio Flores © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};