"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const FloatingNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-120%", opacity: 0 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass-panel px-4 sm:px-6 py-3 rounded-full flex items-center justify-between gap-3 sm:gap-6 max-w-xl w-full border border-white/10 shadow-2xl shadow-black/50">
        <a href="#hero" className="font-bold tracking-tight text-sm text-white flex items-center gap-2 min-w-0 shrink-0" aria-label="Ir al inicio">
          <Image
            src="/Logo Pag.png"
            alt="Logo Ariana Del Carpio"
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
          <span className="hidden sm:inline">Ariana Del Carpio</span>
        </a>

        <div className="hidden md:flex items-center gap-5 text-xs text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">{language === "es" ? "Sobre mí" : "About"}</a>
          <a href="#experience" className="hover:text-white transition-colors">{language === "es" ? "Experiencia" : "Experience"}</a>
          <a href="#projects" className="hover:text-white transition-colors">{language === "es" ? "Proyectos" : "Projects"}</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleLanguage}
            className="text-[10px] sm:text-[11px] font-mono px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white hover:border-violet-500/50 transition-all"
            aria-label="Cambiar idioma"
          >
            <span className={language === "es" ? "text-violet-400 font-bold" : "text-zinc-500"}>ES</span>
            <span className="text-zinc-600 mx-1">|</span>
            <span className={language === "en" ? "text-violet-400 font-bold" : "text-zinc-500"}>EN</span>
          </button>

          <a
            href="https://wa.me/51944891339?text=%C2%A1Hola%20Ariana!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all"
            aria-label="Contactar por WhatsApp"
          >
            {language === "es" ? "Contactar" : "Contact"}
          </a>
        </div>
      </nav>
    </motion.header>
  );
};