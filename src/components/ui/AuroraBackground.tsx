"use client";
import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-hidden bg-noise">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25], rotate: [0, 90, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-[130px]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};