import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rama Permadoni – Personal Portfolio & CV",
  description: "Selamat datang di portfolio pribadi Rama Permadoni. Temukan profil profesional, pengalaman kerja, keahlian, proyek, dan CV lengkap saya di sini.",
  keywords: ["Rama Permadoni", "portfolio", "CV", "profil profesional", "web pribadi", "resume", "software developer", "UI/UX", "Flutter", "Next.js", "Golang"],
  authors: [{ name: "Rama Permadoni", url: "https://ramapermadoni.vercel.app" }],
  creator: "Rama Permadoni",
  icons: {
    icon: '/favicon.ico', // atau '/favicon.png'
    apple: '/favicon.png', // Untuk dark mode (opsional)
  },
  openGraph: {
    title: "Rama Permadoni – Personal Portfolio & CV",
    description: "Temukan profil profesional, pengalaman kerja, keahlian, proyek, dan CV lengkap Rama Permadoni.",
    url: "https://ramapermadoni.vercel.app",
    siteName: "Rama Permadoni Portfolio",
    images: [
      {
        url: "https://ramapermadoni.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rama Permadoni Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const themeInitScript = `
(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(d?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ubuntu-bg text-ubuntu-grey antialiased`}
      >
        {children}
      </body>
    </html>
  );
}