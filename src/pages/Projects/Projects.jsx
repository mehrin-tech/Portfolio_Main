import { useEffect, useRef, useState } from "react";
import skincare from '../../assets/skincare.png'
import library from '../../assets/library.png'
import Quran from '../../assets/Quran.png'
import nexaAI from '../../assets/nexaAI.jpeg'
/* ── InView hook ───────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Project data ───────────────────────────────────────── */
const projects = [
  {
    id: 1,
    image:library,
    title: "Library Portal",
    description:
      "A complete library management web application developed for managing books, users and library operations. Features include authentication, book management and responsive UI.",
    tech: ["EJS", "Node.js", "Express.js", "MongoDB"],
    // github: "https://github.com/mehrin-tech/library-Portal",
    demo: "https://library-portal-5toq.onrender.com/",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    accent: "#7C3AED",
    accentLight: "rgba(124,58,237,0.15)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
        <rect x="6" y="8" width="28" height="36" rx="3" fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.6)" strokeWidth="1.5"/>
        <rect x="14" y="8" width="28" height="36" rx="3" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5"/>
        <line x1="20" y1="18" x2="36" y2="18" stroke="rgba(167,139,250,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="24" x2="36" y2="24" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="30" x2="30" y2="30" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="26" r="3" fill="rgba(124,58,237,0.5)" stroke="rgba(167,139,250,0.6)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 2,
    image:skincare,
    title: "SkinCare Clinic Website",
    description:
      "A modern skincare clinic website designed using AI-assisted workflow. Includes responsive UI, service pages and optimized user experience.",
    tech: ["EJS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AI Assisted"],
    // github: "https://github.com/mehrin-tech/skincare",
    demo: "https://skincare-fezf.onrender.com",
    gradient: "from-fuchsia-600/20 via-pink-600/10 to-transparent",
    accent: "#a855f7",
    accentLight: "rgba(168,85,247,0.15)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="24" cy="20" r="12" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5"/>
        <path d="M18 20c0-3.3 2.7-6 6-6" stroke="rgba(216,180,254,0.8)" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24 8v4M24 32v4M8 24h4M36 24h4" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="20" r="3.5" fill="rgba(168,85,247,0.7)"/>
        <path d="M16 36c2.2-2 5-3 8-3s5.8 1 8 3" stroke="rgba(216,180,254,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
   {
    id: 3,
    image:Quran,
    title: "Al-Furqan",
    description:
    "AI Furqhan is an AI-powered Islamic application developed using HTML, CSS, JavaScript, Firebase, and Capacitor. The application provides users with easy access to Quran-related features through a clean and responsive interface. It supports AI-powered assistance for answering Islamic questions, includes audio playback, offline support through Progressive Web App (PWA) technology, and can be deployed as both a web application and an Android app. Firebase is used for backend services, while Capacitor enables Android app generation from the web application.",
    tech: ["HTML","CSS3","javascript","Firebase","Android Studio"],
    // github: "#",
    demo: "https://al-furqhan.web.app/index.html",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    accent: "#6366f1",
    accentLight: "rgba(99,102,241,0.15)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
        <rect x="8" y="14" width="32" height="26" rx="3" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5"/>
        <path d="M16 14v-3a8 8 0 0116 0v3" stroke="rgba(129,140,248,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="5" fill="rgba(99,102,241,0.4)" stroke="rgba(129,140,248,0.7)" strokeWidth="1.2"/>
        <path d="M24 25v6M21 28h6" stroke="rgba(199,210,254,0.9)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
   {
    id: 4,
    image:nexaAI,
    title: "Nexa-AI",
    description:
    "Nexa AI is a full-stack AI chatbot web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) and powered by the Google Gemini AI API. It features secure JWT authentication, role-based user and admin dashboards, real-time AI conversations, chat history management, responsive UI with dark/light mode, and an analytics dashboard for monitoring users, conversations, and AI usage. The application is deployed using Vercel (frontend), Render (backend), and MongoDB Atlas for cloud database storage.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Google Gemini API", "JWT", "Tailwind CSS"," Framer Motion", "Vercel", "Render"],
    // github: "#",
    demo: "  https://nexa-ai-jade.vercel.app/",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    accent: "#6366f1",
    accentLight: "rgba(99,102,241,0.15)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
        <rect x="8" y="14" width="32" height="26" rx="3" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5"/>
        <path d="M16 14v-3a8 8 0 0116 0v3" stroke="rgba(129,140,248,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="5" fill="rgba(99,102,241,0.4)" stroke="rgba(129,140,248,0.7)" strokeWidth="1.2"/>
        <path d="M24 25v6M21 28h6" stroke="rgba(199,210,254,0.9)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  // {
  //   id: 3,
  //   title: "PharmaCare Ecommerce",
  //   description:
  //     "A full stack ecommerce application developed using MERN stack with product management, authentication and responsive shopping experience.",
  //   tech: ["React", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
  //   github: "#",
  //   demo: "#",
  //   gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
  //   accent: "#6366f1",
  //   accentLight: "rgba(99,102,241,0.15)",
  //   icon: (
  //     <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
  //       <rect x="8" y="14" width="32" height="26" rx="3" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5"/>
  //       <path d="M16 14v-3a8 8 0 0116 0v3" stroke="rgba(129,140,248,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
  //       <circle cx="24" cy="28" r="5" fill="rgba(99,102,241,0.4)" stroke="rgba(129,140,248,0.7)" strokeWidth="1.2"/>
  //       <path d="M24 25v6M21 28h6" stroke="rgba(199,210,254,0.9)" strokeWidth="1.4" strokeLinecap="round"/>
  //     </svg>
  //   ),
  // },
];

/* ── Tech badge ─────────────────────────────────────────── */
const techColors = {
  "React":      "bg-cyan-500/10   border-cyan-500/25   text-cyan-300",
  "Node.js":    "bg-green-500/10  border-green-500/25  text-green-300",
  "Express.js": "bg-slate-500/10  border-slate-400/25  text-slate-300",
  "MongoDB":    "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
  "Tailwind CSS":"bg-sky-500/10   border-sky-500/25    text-sky-300",
  "EJS":        "bg-orange-500/10 border-orange-500/25  text-orange-300",
  "MERN Stack": "bg-violet-500/10 border-violet-500/25  text-violet-300",
  "AI Assisted":"bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-300",
};
const defaultBadge = "bg-purple-500/10 border-purple-500/20 text-purple-300";

function Badge({ label }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold border tracking-wide ${techColors[label] ?? defaultBadge}`}>
      {label}
    </span>
  );
}

/* ── Project card ───────────────────────────────────────── */
function ProjectCard({ project, index, sectionVisible }) {
  const [hovered, setHovered] = useState(false);
  const show = sectionVisible;

  return (
    <div
      className={[
        "group relative flex flex-col rounded-3xl overflow-hidden",
        "border border-white/[0.07]",
        "transition-all duration-700 ease-out",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      ].join(" ")}
      style={{
        background: "#111827",
        transitionDelay: `${index * 130}ms`,
        boxShadow: hovered
          ? `0 0 0 1px ${project.accent}40, 0 24px 64px rgba(0,0,0,0.5), 0 0 40px ${project.accent}18`
          : "0 4px 32px rgba(0,0,0,0.35)",
        transform: show
          ? hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)"
          : "translateY(40px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── image / illustration area ─────────────────── */}
      <div
        className="relative h-52 overflow-hidden flex-shrink-0"
        style={{ background: `linear-gradient(135deg, #0d1224 0%, #111827 100%)` }}
      >
        {/* gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-60"}`} />

        {/* animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(${project.accent}80 1px, transparent 1px), linear-gradient(90deg, ${project.accent}80 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 600ms ease",
          }}
        />

        {/* floating glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-700"
          style={{
            width: hovered ? "220px" : "160px",
            height: hovered ? "220px" : "160px",
            background: `radial-gradient(circle, ${project.accent}30 0%, transparent 70%)`,
          }}
        />

        {/* SVG illustration */}
       {/* Image / Icon */}
{project.image ? (

<img
  src={project.image}
  alt={project.title}
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  transition-all
  duration-700
  group-hover:scale-105
  "
/>

) : (

<div
 className="
 absolute
 top-1/2
 left-1/2
 -translate-x-1/2
 -translate-y-1/2
 w-24
 h-24
 transition-all
 duration-500
 "
 style={{
 transform:
 `translate(-50%, -50%)
 scale(${hovered ? 1.1 : 1})`
 }}
>
 {project.icon}
</div>

)}

        {/* corner badge */}
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wider uppercase border"
            style={{
              background: `${project.accent}18`,
              borderColor: `${project.accent}40`,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {project.id === 1 ? "Web App" : project.id === 2 ? "Web App" : "Quran App"}
          </span>
        </div>

        {/* bottom gradient fade into card */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111827] to-transparent" />
      </div>

      {/* ── card body ─────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* title */}
        <div>
          <h3
            className="text-white text-[18px] font-bold leading-snug mb-2 group-hover:text-violet-200 transition-colors duration-300"
          >
            {project.title}
          </h3>
          {/* accent underline */}
          <div
            className="h-[2px] rounded-full transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, ${project.accent}, transparent)`,
              width: hovered ? "100%" : "40px",
            }}
          />
        </div>

        {/* description */}
        <p className="text-[#CBD5E1] text-[13.5px] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => <Badge key={t} label={t} />)}
        </div>

        {/* divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* action buttons */}
        <div className="flex gap-3">
          {/* GitHub */}
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[13px] font-semibold
              border border-white/10 text-slate-300
              hover:text-white hover:border-white/25 hover:bg-white/[0.05]
              transition-all duration-250 active:scale-[0.97]"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.584 0 10.253c0 4.527 2.865 8.368 6.839 9.72.5.094.682-.222.682-.494 0-.244-.009-.89-.014-1.748-2.782.62-3.369-1.377-3.369-1.377-.454-1.18-1.108-1.496-1.108-1.496-.907-.636.069-.623.069-.623 1.003.072 1.531 1.056 1.531 1.056.891 1.567 2.341 1.114 2.91.852.091-.662.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.076 0-1.12.39-2.037 1.03-2.754-.104-.26-.447-1.303.097-2.717 0 0 .84-.276 2.75 1.053A9.356 9.356 0 0110 4.858c.85.004 1.705.118 2.504.345 1.909-1.329 2.747-1.053 2.747-1.053.546 1.414.202 2.457.1 2.717.64.717 1.028 1.634 1.028 2.754 0 3.944-2.337 4.814-4.565 5.067.359.317.678.944.678 1.903 0 1.372-.013 2.48-.013 2.817 0 .274.18.593.687.493C17.138 18.617 20 14.778 20 10.253 20 4.584 15.523 0 10 0z"/>
            </svg>
            GitHub
          </a> */}

          {/* Live Demo */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[13px] font-semibold
              text-white relative overflow-hidden transition-all duration-300 active:scale-[0.97]"
            style={{
              background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)`,
              boxShadow: hovered ? `0 0 20px ${project.accent}55` : `0 0 10px ${project.accent}30`,
            }}
          >
            {/* shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full
              bg-gradient-to-r from-transparent via-white/15 to-transparent
              transition-transform duration-600 skew-x-12" />
            <svg className="w-4 h-4 relative" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M15 3h2v2M11 9l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="relative">Live Demo</span>
          </a>
        </div>
      </div>

      {/* hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${project.accent}35`,
        }}
      />
    </div>
  );
}

/* ── Main component ─────────────────────────────────────── */
export default function Projects() {
  const [sectionRef, sectionVisible] = useInView(0.05);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#050B20" }}
    >
      {/* bg atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-80 rounded-full bg-violet-950/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-64 bg-purple-950/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-64 bg-indigo-950/30 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── heading ──────────────────────────────────── */}
        <div
          className={[
            "text-center mb-16 transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-[0.22em] uppercase mb-4">
            What I've built
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Featured{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500" />
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-[15px] max-w-xl mx-auto leading-relaxed">
            A selection of full-stack applications I've designed and developed,
            covering real-world use cases from library management to e-commerce.
          </p>
        </div>

        {/* ── 3-column card grid ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              sectionVisible={sectionVisible}
            />
          ))}
        </div>

        {/* ── view more CTA ────────────────────────────── */}
        <div
          className={[
            "mt-14 text-center transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "550ms" }}
        >
          <a
            href="https://github.com/mehrin-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl
              text-slate-300 text-[14px] font-semibold
              border border-white/10
              hover:text-white hover:border-violet-500/40 hover:bg-violet-500/[0.07]
              transition-all duration-300 active:scale-[0.97]"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.584 0 10.253c0 4.527 2.865 8.368 6.839 9.72.5.094.682-.222.682-.494 0-.244-.009-.89-.014-1.748-2.782.62-3.369-1.377-3.369-1.377-.454-1.18-1.108-1.496-1.108-1.496-.907-.636.069-.623.069-.623 1.003.072 1.531 1.056 1.531 1.056.891 1.567 2.341 1.114 2.91.852.091-.662.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.076 0-1.12.39-2.037 1.03-2.754-.104-.26-.447-1.303.097-2.717 0 0 .84-.276 2.75 1.053A9.356 9.356 0 0110 4.858c.85.004 1.705.118 2.504.345 1.909-1.329 2.747-1.053 2.747-1.053.546 1.414.202 2.457.1 2.717.64.717 1.028 1.634 1.028 2.754 0 3.944-2.337 4.814-4.565 5.067.359.317.678.944.678 1.903 0 1.372-.013 2.48-.013 2.817 0 .274.18.593.687.493C17.138 18.617 20 14.778 20 10.253 20 4.584 15.523 0 10 0z"/>
            </svg>
            View all projects on GitHub
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}