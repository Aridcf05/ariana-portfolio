"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = {
  github: "https://github.com/Aridcf05",
  linkedin: "https://www.linkedin.com/in/arianadelcarpioflores/",
  cv: "/cv.pdf",
};

export const Hero = () => {
  const handleCvClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = socialLinks.cv;
    // Try to open PDF in a new tab first
    const newWin = window.open(url, '_blank', 'noopener');
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('Network response was not ok');
      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      // Use a filename consistent with the user's CV
      a.download = 'CV_Ariana_Ileen_del_Carpio_Flores.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // If fetching or download fails, ensure the PDF is at least opened/navigated to
      if (!newWin) {
        window.location.href = url;
      }
    }
  }
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
        Junior Software Engineer — Estudiante de Ingeniería de Sistemas (Último ciclo)
      </motion.div>

      {/* Nombre, rol y foto */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center md:text-left">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.02] text-white"
          >
            Ariana Ileen del Carpio Flores
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 text-lg sm:text-2xl md:text-3xl font-bold max-w-3xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Software Engineer
            </span>
            <span className="text-zinc-200"> {"| iOS · Power Platform · AI"}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl font-normal leading-relaxed"
          >
            Estudiante de Ingeniería de Sistemas (Último ciclo) con experiencia profesional en
            desarrollo iOS, automatización y soluciones empresariales. Trabajo con Power Platform,
            Python y técnicas de Machine Learning para construir soluciones prácticas con impacto real.
          </motion.p>

          {/* Currently compact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-4 flex flex-wrap gap-3 items-center text-sm text-zinc-300"
            aria-hidden={false}
          >
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">🎓 Ingeniería de Sistemas — UPC</span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">💻 Trainee / iOS Developer — NTT DATA</span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">🤖 AI / ML — Python & XGBoost</span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">⚡ Power Platform — Power Apps & Power Automate</span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">📍 Lima, Perú</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-start items-center"
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
                          onClick={handleCvClick}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 sm:px-8 sm:py-4 rounded-full glass-panel text-zinc-100 font-semibold text-sm hover:text-white hover:border-cyan-400/50"
                          aria-label="Descargar CV (abre en nueva pestaña y descarga)"
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
        </div>

        {/* Imagen de perfil (optimizada: /images/ariana-profile.webp) */}
        <div className="shrink-0">
          <picture>
            <source srcSet="/images/ariana-profile.webp" type="image/webp" />
            <Image
              src="/images/ariana-profile.webp"
              alt="Ariana Ileen del Carpio Flores"
              width={160}
              height={160}
              className="rounded-full border border-white/10 object-cover w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
              priority={false}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};