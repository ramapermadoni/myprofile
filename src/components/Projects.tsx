'use client';

import Image from "next/image";
import { Globe, Smartphone, Lock } from "lucide-react";
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

type Category = "web" | "mobile";

interface ProjectLink {
  url: string;
  label: string;
  kind: "web" | "mobile";
}

interface Project {
  title: string;
  description: string;
  image: string;
  categories: Category[];
  tags: string[];
  primary: ProjectLink;
  secondary?: ProjectLink;
}

const IMG = "/assets/images/featured-projects";

const projects: Project[] = [
  {
    title: "DT Peduli Official",
    description:
      "Official charity & donation mobile app — campaigns, payment gateway integration, and donor experience.",
    image: `${IMG}/play.google.com_store_apps_details_id=com.dtpeduli.official(HD).png`,
    categories: ["mobile"],
    tags: ["Flutter", "Payment Gateway", "REST API"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=com.dtpeduli.official&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "DT Peduli Qurban",
    description:
      "Mobile app for Qurban (sacrifice) donation management with end-to-end payment & tracking.",
    image: `${IMG}/play.google.com_store_apps_details_id=com.dtpeduli.qurban(HD).png`,
    categories: ["mobile"],
    tags: ["Flutter", "REST API"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=com.dtpeduli.qurban&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "DT Peduli Mitra",
    description:
      "Companion app for zakat-collection partners — streamlined workflows for field collectors and partner organizations.",
    image: `${IMG}/play.google.com_store_apps_details_id=org.dtpeduli.mitra(HD).png`,
    categories: ["mobile"],
    tags: ["Flutter", "REST API"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=org.dtpeduli.mitra&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "NXSYSPRO POS",
    description:
      "Point-of-sale mobile app for retail outlets with reliable transactions and back-office sync.",
    image: `${IMG}/play.google.com_store_apps_details_id=com.nxsyspro.nxsyspos(hd).png`,
    categories: ["mobile"],
    tags: ["Flutter", "REST API", "POS"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=com.nxsyspro.nxsyspos&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "TEI Operation",
    description:
      "Transhipment operations app for coal-carrying vessels — tracks ship-to-ship loading, transfer, and logistics in the field.",
    image: `${IMG}/play.google.com_store_apps_details_id=com.tei.operation(hd).png`,
    categories: ["mobile"],
    tags: ["Flutter", "Logistics", "REST API"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=com.tei.operation&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "Kopontren DT",
    description:
      "Cooperative member portal — view savings balance, withdrawals, and transaction history across the cooperative's businesses.",
    image: `${IMG}/play.google.com_store_apps_details_id=org.kopontrendt.app(hd).png`,
    categories: ["mobile"],
    tags: ["Flutter", "REST API"],
    primary: {
      url: "https://play.google.com/store/apps/details?id=org.kopontrendt.app&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "NXSYSPRO HRDT",
    description:
      "Human Resources ecosystem — web app, admin dashboard, and cross-platform mobile app for end-to-end employee operations.",
    image: `${IMG}/hrdt.nxsyspro.com_(hd).png`,
    categories: ["web", "mobile"],
    tags: ["Flutter", "CodeIgniter 4", "MySQL", "REST API"],
    primary: { url: "https://hrdt.nxsyspro.com", label: "Visit Website", kind: "web" },
    secondary: {
      url: "https://play.google.com/store/apps/details?id=com.nxsyspro.hrd&hl=id",
      label: "Play Store",
      kind: "mobile",
    },
  },
  {
    title: "Digital Cabinet",
    description:
      "Maintained and extended this corporate web platform — building and shipping new features over time.",
    image: `${IMG}/www.digitalcabinet.co.id_(hd).png`,
    categories: ["web"],
    tags: ["PHP", "MySQL", "JavaScript"],
    primary: { url: "https://www.digitalcabinet.co.id", label: "Visit", kind: "web" },
  },
  {
    title: "Bahagia Space",
    description:
      "A 'Library of Feelings' — wedding invitation platform evolving into a mental well-being ecosystem with Story Room, Wall of Gratitude, and anxiety-relief resources.",
    image: `${IMG}/bahagia.space_(hd).png`,
    categories: ["web"],
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Vercel"],
    primary: { url: "https://bahagia.space", label: "Visit Platform", kind: "web" },
  },
  {
    title: "Kaspace",
    description:
      "Cashier (POS) system for Indonesian UMKM — Shift Management, real-time inventory, and accurate sales reports in a single app.",
    image: `${IMG}/kaspace.online_(hd).png`,
    categories: ["web"],
    tags: ["Next.js", "Tailwind", "POS"],
    primary: { url: "https://kaspace.online", label: "Visit", kind: "web" },
  },
  {
    title: "Waspace",
    description:
      "Enterprise-grade WhatsApp Gateway for developers — high-performance API, multi-device scale, and cosmic reliability.",
    image: `${IMG}/waspace.bahagia.space_(hd).png`,
    categories: ["web"],
    tags: ["Next.js", "WhatsApp API", "Tailwind"],
    primary: { url: "https://waspace.bahagia.space", label: "Visit", kind: "web" },
  },
  {
    title: "Joyspace",
    description:
      "Media Sortir Pro — sort your photo & video backlog with a gamepad. Plug in your controller, sit back, and triage media in a flash.",
    image: `${IMG}/joyspace.bahagia.space_(hd).png`,
    categories: ["web"],
    tags: ["Next.js", "Gamepad API", "Tailwind"],
    primary: { url: "https://joyspace.bahagia.space", label: "Visit", kind: "web" },
  },
];

function CategoryBadge({ category }: { category: Category }) {
  const Icon = category === "web" ? Globe : Smartphone;
  const label = category === "web" ? "Web App" : "Mobile App";
  return (
    <span className="glass-pill-neutral inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full">
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}

function LinkButton({ link, variant = "primary" }: { link: ProjectLink; variant?: "primary" | "secondary" }) {
  const isMobile = link.kind === "mobile";
  const base =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium text-sm flex-1";
  const styles =
    variant === "primary"
      ? "bg-ubuntu-purple hover:bg-purple-700 text-white"
      : "glass-pill-neutral hover:bg-white/10";
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {isMobile ? (
        <FontAwesomeIcon icon={faGooglePlay} className="w-4 h-4" />
      ) : (
        <Globe className="w-4 h-4" />
      )}
      {link.label}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange tracking-tight">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <article
              key={p.title}
              className="ubuntu-card rounded-3xl overflow-hidden shadow-xl hover-lift flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={p.image}
                  alt={p.title}
                  width={640}
                  height={360}
                  loading="lazy"
                />
              </div>
              <div className="p-6 relative z-10 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  {p.categories.map((c) => (
                    <CategoryBadge key={c} category={c} />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                <p className="text-ubuntu-grey mb-4 flex-1 text-sm leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="glass-pill px-2.5 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <LinkButton link={p.primary} />
                  {p.secondary && <LinkButton link={p.secondary} variant="secondary" />}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note: hidden / NDA work */}
        <div className="mt-10 ubuntu-card rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
          <div className="glass-icon-tile rounded-2xl p-3 inline-flex items-center justify-center shrink-0 relative z-10">
            <Lock className="w-5 h-5 text-ubuntu-orange" />
          </div>
          <p className="text-sm text-ubuntu-grey leading-relaxed relative z-10">
            And there&apos;s more I can&apos;t showcase publicly — including several ERP systems
            I&apos;ve built with{" "}
            <span className="text-ubuntu-orange font-semibold">ERPNext</span>, plus internal
            tools and client projects under NDA. Reach out if you&apos;d like to know more.
          </p>
        </div>
      </div>
    </section>
  );
}
