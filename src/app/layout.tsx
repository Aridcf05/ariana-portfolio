import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ariana Del Carpio | Software & UI/UX Engineer",
  description: "Portafolio profesional de soluciones digitales, AI y arquitectura de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-[#09090b] text-zinc-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}