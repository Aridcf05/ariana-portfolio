import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ariana Ileen del Carpio Flores",
  jobTitle: "Software Engineer",
  description:
    "Estudiante de Ingeniería de Sistemas enfocada en desarrollo iOS, Power Platform, automatización, datos e inteligencia artificial.",
  alumniOf: "Universidad Peruana de Ciencias Aplicadas",
  knowsAbout: [
    "Software Development",
    "iOS Development",
    "Power Platform",
    "Automation",
    "Data Analysis",
    "Machine Learning",
    "Artificial Intelligence",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.com"),
  title: "Ariana Ileen del Carpio Flores | Software Engineer",
  description:
    "Ariana Ileen del Carpio Flores — estudiante de Ingeniería de Sistemas en la UPC, enfocada en desarrollo iOS, Power Platform, automatización, datos e inteligencia artificial.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Logo.svg",
  },
  openGraph: {
    title: "Ariana Ileen del Carpio Flores | Software Engineer",
    description:
      "Ariana Ileen del Carpio Flores — estudiante de Ingeniería de Sistemas en la UPC, enfocada en desarrollo iOS, Power Platform, automatización, datos e inteligencia artificial.",
    siteName: "Ariana Ileen del Carpio Flores",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariana Ileen del Carpio Flores | Software Engineer",
    description:
      "Ariana Ileen del Carpio Flores — estudiante de Ingeniería de Sistemas en la UPC, enfocada en desarrollo iOS, Power Platform, automatización, datos e inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}