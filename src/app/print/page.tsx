'use client';

import Image from 'next/image';
import { Globe, Smartphone, Printer, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const skills = {
  Languages: ['PHP', 'Dart', 'Go', 'JavaScript', 'TypeScript'],
  Frameworks: ['Laravel', 'CodeIgniter 4', 'Next.js', 'Flutter (GetX)', 'ERPNext / Frappe'],
  Styling: ['Tailwind CSS', 'Bootstrap'],
  Databases: ['MySQL', 'PostgreSQL'],
  DevOps: ['Docker', 'Vercel', 'Git'],
};

const workExperience = [
  {
    title: 'Mobile Application Developer',
    company: 'NXSYS Professional Solutions',
    period: 'Jun 2023 — Present',
    description:
      'Cross-platform mobile applications using Flutter with SQL database integration.',
    tags: ['Flutter', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Web & Mobile Developer',
    company: 'DT Peduli',
    period: 'Jun 2023 — Present',
    description: 'Web and mobile applications for social platforms with PHP and Flutter.',
    tags: ['Flutter', 'PHP', 'CodeIgniter', 'REST APIs'],
  },
  {
    title: 'Full-time Mobile Developer',
    company: 'DT Peduli',
    period: 'Apr 2021 — Jun 2023',
    description: 'Production-ready mobile applications using Flutter.',
    tags: ['Flutter', 'Dart', 'Firebase', 'State Management'],
  },
  {
    title: 'Web Developer',
    company: 'DT Peduli',
    period: 'Jan 2020 — Jun 2023',
    description: 'Enterprise web applications using PHP CodeIgniter framework.',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
  },
  {
    title: 'Creative Designer',
    company: 'DT Peduli',
    period: 'Jan 2019 — Jan 2020',
    description: 'Photography, video editing and digital design services.',
    tags: ['Photoshop', 'Sony Vegas Pro', 'Corel Draw'],
  },
  {
    title: 'Volunteer & Freelancer',
    company: 'Daarut Tauhiid Foundation',
    period: 'May 2018 — Jan 2019',
    description:
      'Front-office volunteer — assisted jamaah services, information desk, and light administrative tasks while ensuring a welcoming environment for visitors.',
    tags: ['Front Office', 'Customer Service', 'Public Relations'],
  },
  {
    title: 'Web Developer',
    company: 'DIGITAL CABINET™',
    period: 'Sep 2013 — May 2018',
    description: 'Custom web solutions and information systems for business clients.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
];

const education = [
  {
    title: "Bachelor's Degree in Informatics Engineering",
    institution: 'Nurtanio University Bandung',
    period: '2013 — 2017',
    note: 'GPA 3.00 · Best Thesis Award for Brainstorming Information System',
  },
  {
    title: 'Software Engineering Vocational Program',
    institution: 'SMK PGRI 1 Cimahi',
    period: '2010 — 2013',
    note: 'Programming, web development & database fundamentals',
  },
  {
    title: 'Early Tech Passion',
    institution: 'SMP Negeri 2 Cimahi',
    period: '2007 — 2010',
    note: "First exposure to coding & digital creativity in ICT (TIK) class — sparked the journey into tech.",
  },
];

type ProjectCategory = 'web' | 'mobile';

interface Project {
  title: string;
  category: ProjectCategory[];
  url: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'NXSYSPRO HRDT',
    category: ['web', 'mobile'],
    url: 'https://hrdt.nxsyspro.com',
    description:
      'HR ecosystem — web app, admin dashboard & cross-platform mobile app for employee operations.',
    tags: ['Flutter', 'CodeIgniter 4', 'MySQL'],
  },
  {
    title: 'Digital Cabinet',
    category: ['web'],
    url: 'https://www.digitalcabinet.co.id',
    description:
      'Maintained and extended this corporate web platform — shipping new features over time.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Bahagia Space',
    category: ['web'],
    url: 'https://bahagia.space',
    description:
      "A 'Library of Feelings' — wedding invitations evolving into a mental well-being ecosystem.",
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Kaspace',
    category: ['web'],
    url: 'https://kaspace.online',
    description:
      'Cashier (POS) system for Indonesian UMKM — shift management, real-time inventory & sales reports.',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Waspace',
    category: ['web'],
    url: 'https://waspace.bahagia.space',
    description:
      'Enterprise-grade WhatsApp Gateway for developers — high-performance API, multi-device scale.',
    tags: ['Next.js', 'WhatsApp API'],
  },
  {
    title: 'Joyspace',
    category: ['web'],
    url: 'https://joyspace.bahagia.space',
    description:
      'Media Sortir Pro — sort photo/video backlog with a gamepad controller.',
    tags: ['Next.js', 'Gamepad API'],
  },
  {
    title: 'DT Peduli Official',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=com.dtpeduli.official',
    description:
      'Official charity & donation app — campaigns, payment gateway, donor experience.',
    tags: ['Flutter', 'Payment Gateway'],
  },
  {
    title: 'DT Peduli Qurban',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=com.dtpeduli.qurban',
    description: 'Qurban donation management app with end-to-end payment & tracking.',
    tags: ['Flutter', 'REST API'],
  },
  {
    title: 'DT Peduli Mitra',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=org.dtpeduli.mitra',
    description:
      'Companion app for zakat-collection partners — streamlined workflows for field collectors.',
    tags: ['Flutter', 'REST API'],
  },
  {
    title: 'NXSYSPRO POS',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=com.nxsyspro.nxsyspos',
    description:
      'Point-of-sale mobile app for retail outlets with reliable transactions and back-office sync.',
    tags: ['Flutter', 'POS'],
  },
  {
    title: 'TEI Operation',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=com.tei.operation',
    description:
      'Transhipment operations app for coal-carrying vessels — tracks ship-to-ship loading & logistics.',
    tags: ['Flutter', 'Logistics'],
  },
  {
    title: 'Kopontren DT',
    category: ['mobile'],
    url: 'play.google.com/store/apps/details?id=org.kopontrendt.app',
    description:
      "Cooperative member portal — savings balance, withdrawals & transaction history.",
    tags: ['Flutter', 'REST API'],
  },
];

function CategoryTag({ c }: { c: ProjectCategory }) {
  const Icon = c === 'web' ? Globe : Smartphone;
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-[#e95420] border border-[#e95420]/40 bg-[#e95420]/[0.06] px-1.5 py-0.5 rounded">
      <Icon className="w-2.5 h-2.5" />
      {c}
    </span>
  );
}

export default function PrintPage() {
  return (
    <div className="print-document fixed inset-0 z-[100] overflow-auto bg-[#f6f4f0] text-[#1a1a1a]">
      {/* Toolbar — screen only */}
      <div className="no-print sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-black/10">
        <div className="max-w-[860px] mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-sm text-neutral-600">
            Preview portofolio cetak. Tekan tombol di kanan atau <kbd className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 rounded">Cmd/Ctrl + P</kbd> lalu pilih <em>Save as PDF</em>.
          </p>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-[#e95420] hover:bg-[#c2410c] text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* The sheet */}
      <article className="print-sheet max-w-[820px] mx-auto my-6 bg-white shadow-2xl print:shadow-none print:my-0 print:max-w-none">
        <div className="px-12 py-10 print:px-10 print:py-8">
          {/* Header */}
          <header className="flex items-start gap-6 pb-6 border-b border-black/10">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight leading-tight">Rama Permadoni</h1>
              <p className="text-base text-[#e95420] font-medium mt-1">Programmer &amp; Tech Explorer</p>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-neutral-700">
                <span className="inline-flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#e95420]" /> ramaprogramming@gmail.com</span>
                <span className="inline-flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#e95420]" /> +62 822 1777 6630</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#e95420]" /> Bandung, Indonesia</span>
                <span className="inline-flex items-center gap-1.5"><Globe className="w-3 h-3 text-[#e95420]" /> ramapermadoni.vercel.app</span>
                <span className="inline-flex items-center gap-1.5"><Github className="w-3 h-3 text-[#e95420]" /> github.com/ramapermadoni</span>
                <span className="inline-flex items-center gap-1.5"><Linkedin className="w-3 h-3 text-[#e95420]" /> linkedin.com/in/rama-permadoni-247416154</span>
              </div>
            </div>
            <Image
              src="/assets/images/avatar.jpeg"
              alt="Rama Permadoni"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#e95420]/40"
            />
          </header>

          {/* About */}
          <Section title="About">
            <p className="text-[12px] leading-relaxed text-neutral-800">
              Passionate programmer and tech explorer who thrives on solving complex problems and discovering
              innovative solutions. I enjoy turning ideas into reality through clean, efficient code. Beyond
              client work, I&apos;m also growing my own startup, <strong>Bahagia Space</strong>, where I combine
              technical skills with product management to solve real human problems.
            </p>
          </Section>

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[11.5px]">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="flex gap-2">
                  <dt className="font-semibold text-neutral-900 w-24 shrink-0">{group}</dt>
                  <dd className="text-neutral-700">{items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience">
            <div className="space-y-3">
              {workExperience.map((w) => (
                <div key={`${w.title}-${w.company}-${w.period}`} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[12.5px] font-semibold text-neutral-900">
                      {w.title} <span className="text-[#e95420]">· {w.company}</span>
                    </h3>
                    <span className="text-[10px] text-neutral-500 font-mono whitespace-nowrap">{w.period}</span>
                  </div>
                  <p className="text-[11px] text-neutral-700 mt-0.5 leading-relaxed">{w.description}</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{w.tags.join(' · ')}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="space-y-2">
              {education.map((e) => (
                <div key={e.title} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[12.5px] font-semibold text-neutral-900">
                      {e.title} <span className="text-[#e95420]">· {e.institution}</span>
                    </h3>
                    <span className="text-[10px] text-neutral-500 font-mono whitespace-nowrap">{e.period}</span>
                  </div>
                  <p className="text-[11px] text-neutral-700 mt-0.5">{e.note}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Entrepreneurial Journey */}
          <Section title="Entrepreneurial Journey">
            <div className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[12.5px] font-semibold text-neutral-900">
                  Bahagia Space <span className="text-[#e95420]">· Founder &amp; Product Engineer</span>
                </h3>
                <span className="text-[10px] text-neutral-500 font-mono whitespace-nowrap">2021 — Present</span>
              </div>
              <p className="text-[11px] text-neutral-700 mt-0.5 leading-relaxed">
                A holistic digital platform that evolved from a wedding-invitation tool (previously{' '}
                <em>Mengundanganda.com</em>) into a mental well-being ecosystem — Story Room, Wall of Gratitude
                and anxiety-relief resources alongside the core invitation engine.
              </p>
              <p className="text-[10px] text-neutral-500 mt-1">Next.js · PostgreSQL · Tailwind · Vercel</p>
            </div>
          </Section>

          {/* Featured Projects */}
          <Section title="Featured Projects">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {projects.map((p) => (
                <div key={p.title} className="break-inside-avoid">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[12px] font-semibold text-neutral-900">{p.title}</h3>
                    {p.category.map((c) => (
                      <CategoryTag key={c} c={c} />
                    ))}
                  </div>
                  <p className="text-[10.5px] text-neutral-700 leading-snug mt-0.5">{p.description}</p>
                  <p className="text-[9.5px] text-neutral-500 font-mono mt-0.5 truncate">{p.url}</p>
                  <p className="text-[9.5px] text-neutral-600 mt-0.5">{p.tags.join(' · ')}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Note */}
          <Section title="Additional Work">
            <p className="text-[11px] text-neutral-700 leading-relaxed">
              Several ERP systems built with <strong>ERPNext</strong>, plus internal tools and client projects
              under NDA — not shown publicly. Available to discuss on request.
            </p>
          </Section>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-[9.5px] text-neutral-500">
            <span>ramapermadoni.vercel.app</span>
            <span>Rama Permadoni · Portfolio</span>
          </footer>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="text-[10px] tracking-[0.22em] uppercase text-[#e95420] font-bold mb-2 pb-1 border-b border-[#e95420]/30">
        {title}
      </h2>
      {children}
    </section>
  );
}
