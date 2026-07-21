"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const FloatingNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
      <nav className="glass-panel px-6 py-3 rounded-full flex items-center justify-between gap-8 max-w-xl w-full border border-white/10 shadow-2xl shadow-black/50">
        <a href="#hero" className="font-bold tracking-tight text-sm text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Ariana Del Carpio
        </a>
        <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
        </div>
        <a href="#contact" className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all">
          Contactar
        </a>
      </nav>
    </motion.header>
  );
};