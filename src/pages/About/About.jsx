import { useEffect, useRef, useState } from "react";

/* ── tiny hook: fires once when element enters viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── data ─────────────────────────────────────────────── */
const techStack = [
  { label: "HTML",       color: "from-orange-500 to-orange-400" },
  { label: "CSS",        color: "from-sky-500    to-sky-400"    },
  { label: "JavaScript", color: "from-yellow-400 to-yellow-300" },
  { label: "React",      color: "from-cyan-500   to-cyan-400"   },
  { label: "Node.js",    color: "from-green-500  to-green-400"  },
  { label: "Express",    color: "from-slate-400  to-slate-300"  },
  { label: "MongoDB",    color: "from-emerald-500 to-emerald-400"},
  { label: "Tailwind CSS",    color: "from-sky-500    to-sky-400" },
  { label: "VS Code",    color: "from-sky-500    to-sky-400" },
  { label: "Git",    color:"from-orange-500 to-orange-400"},
  { label: "GitHub",    color: "from-stone-700 to-stone-500"},

];

const journey = [
  {
    year: "2021 – 2024",
    title: "Graduation",
    detail: "Completed Bachelor's degree in Arabic from SNGS College, Pattambi",
    icon: "🎓",
    accent: "violet",
  },
  {
    year: "Mid 2024",
    title: "Web Dev Deep-Dive",
    detail: "After Bachelor's degree switched to IT field,  continuous self learning skills before transitioning into web development ",
    icon: "💻",
    accent: "purple",
  },
  {
    year: "Mid 2025",
    title: "First Full-Stack Projects",
    detail: "Committed fully to web development — started with HTML/CSS, then JavaScript, then the MERN stack.Built end-to-end applications connecting React frontends with Node/Express APIs and MongoDB.",
    icon: "🚀",
    accent: "fuchsia",
  },
  {
    year: "Now",
    title: "Seeking Opportunities",
    detail: "Actively growing my portfolio and looking for my first professional Full Stack Developer role.",
    icon: "🎯",
    accent: "pink",
  },
];

const accentLine = {
  violet: "border-violet-500",
  purple: "border-purple-500",
  fuchsia: "border-fuchsia-500",
  pink: "border-pink-500",
};
const accentDot = {
  violet: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]",
  purple: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]",
  fuchsia: "bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]",
  pink: "bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]",
};
const accentText = {
  violet: "text-violet-400",
  purple: "text-purple-400",
  fuchsia: "text-fuchsia-400",
  pink: "text-pink-400",
};

/* ── component ────────────────────────────────────────── */
export default function About() {
  const [sectionRef, sectionVisible] = useInView(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0c18] overflow-hidden py-24 px-6"
    >
      {/* ── background atmosphere ─────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* radial purple glow top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-900/20 blur-[120px]" />
        {/* radial glow bottom-right */}
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[100px]" />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section heading ───────────────────────────── */}
        <div className={[
          "mb-16 transition-all duration-700",
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}>
          <p className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-4xl
lg:text-5xl
font-bold
leading-tight
"
style={{
color:"#ffffff"
}}>
            About{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
            </span>
          </h2>
        </div>

        {/* ── Top grid: intro + goal ─────────────────── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">

          {/* Introduction card — wider */}
          <div
            className={[
              "lg:col-span-3 relative rounded-2xl p-8",
              "bg-white/[0.03] border border-white/[0.06]",
              "hover:border-violet-500/30 hover:bg-white/[0.05]",
              "transition-all duration-500 group",
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
            style={{ transitionDelay: "100ms" }}
          >
            {/* corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-2xl">
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-violet-500 to-transparent" />
              <div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            </div>

            {/* avatar placeholder + name row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-2xl font-bold text-white select-none shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  M
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0a0c18] shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">Mehrin</h3>
                <p className="text-violet-400 text-sm font-medium tracking-wide">
                  Full Stack Developer (Aspiring)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 text-[15px] leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-medium">Mehrin</span> — an aspiring
                Full Stack Developer passionate about creating{" "}
                <span className="text-violet-300">responsive and user-friendly</span>{" "}
                web applications.
              </p>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                
                 After completing my degree, I made a deliberate transition into web
  development driven by my interest in technology and problem-solving.
  Since then, I have focused on developing strong technical skills and
  building real-world projects using modern web technologies including
  the MERN stack. I enjoy transforming ideas into functional applications
  and continuously improving through hands-on learning and practical
  development experience.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="mt-6">
              <p className="text-slate-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(({ label, color }) => (
                  <span
                    key={label}
                    className={[
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg",
                      "bg-white/[0.04] border border-white/[0.07]",
                      "text-slate-300 text-[12px] font-medium",
                      "hover:border-white/20 hover:bg-white/[0.07]",
                      "transition-all duration-200 cursor-default",
                    ].join(" ")}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color} shrink-0`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Goal + Education */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Career Goal card */}
            <div
              className={[
                "relative flex-1 rounded-2xl p-7",
                "bg-gradient-to-br from-violet-950/60 to-purple-950/40",
                "border border-violet-800/30",
                "hover:border-violet-500/40 hover:from-violet-950/80",
                "transition-all duration-500",
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-lg shrink-0">
                  🎯
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-semibold tracking-[0.18em] uppercase">
                    Career Goal
                  </p>
                  <h3 className="text-white font-semibold text-[15px] mt-0.5">
                    My Mission
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-[14px] leading-relaxed">
                To become a skilled{" "}
                <span className="text-violet-300 font-medium">Full Stack Developer</span>{" "}
                and build impactful digital experiences — products that solve real problems
                and delight the people who use them.
              </p>
              <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <p className="text-slate-500 text-[12px]">Open to opportunities</p>
              </div>
            </div>

            {/* Education card */}
            <div
              className={[
                "relative rounded-2xl p-7",
                "bg-white/[0.03] border border-white/[0.06]",
                "hover:border-violet-500/30 hover:bg-white/[0.05]",
                "transition-all duration-500",
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-lg shrink-0">
                  🎓
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-semibold tracking-[0.18em] uppercase">
                    Education
                  </p>
                  <h3 className="text-white font-semibold text-[15px] mt-0.5">
                    Graduate
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-slate-300 text-[13px] font-medium">
                      Bachelor's Degree  in Ba Arabic
                    </p>
                    <p className="text-slate-500 text-[12px] mt-0.5">
                      SNGS College, Pattambi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-slate-300 text-[13px] font-medium">
                      Graduated 2024
                    </p>
                    <p className="text-slate-500 text-[12px] mt-0.5">
                      Now focused on full-time web development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Developer Journey timeline ─────────────── */}
        <div
          className={[
            "rounded-2xl p-8 lg:p-10",
            "bg-white/[0.02] border border-white/[0.06]",
            "transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center text-lg shrink-0">
              🗺️
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Timeline
              </p>
              <h3 className="text-white font-semibold text-[15px]">
                Developer Journey
              </h3>
            </div>
          </div>

          {/* Horizontal on lg, vertical on mobile */}
          <div className="hidden lg:grid grid-cols-4 gap-0 relative">
            {/* connector line */}
            <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 opacity-40" />

            {journey.map(({ year, title, detail, icon, accent }, i) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center px-4"
                style={{ transitionDelay: `${500 + i * 80}ms` }}
              >
                {/* dot */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4 z-10
                  bg-[#0a0c18] border-2 ${accentLine[accent]} shadow-lg`}>
                  {icon}
                </div>

                <p className={`text-[11px] font-semibold tracking-wide mb-1 ${accentText[accent]}`}>
                  {year}
                </p>
                <h4 className="text-white font-semibold text-[13px] mb-2">{title}</h4>
                <p className="text-slate-500 text-[12px] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden flex flex-col gap-0">
            {journey.map(({ year, title, detail, icon, accent }, i) => (
              <div key={title} className="flex gap-4">
                {/* track */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0
                    bg-[#0a0c18] border-2 ${accentLine[accent]}`}>
                    {icon}
                  </div>
                  {i < journey.length - 1 && (
                    <div className="w-[2px] flex-1 my-2 bg-gradient-to-b from-violet-600/40 to-transparent min-h-[32px]" />
                  )}
                </div>
                {/* content */}
                <div className="pb-8 flex-1">
                  <p className={`text-[11px] font-semibold tracking-wide ${accentText[accent]}`}>
                    {year}
                  </p>
                  <h4 className="text-white font-semibold text-[14px] mt-0.5 mb-1">{title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom stat strip ─────────────────────── */}
        <div
          className={[
            "mt-6 grid grid-cols-3 gap-4",
            "transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "600ms" }}
        >
          {[
            { value: "7+",      label: "Technologies",      glow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]" },
            { value: "MERN",    label: "Stack of Choice",   glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
            { value: "2024",    label: "Grad Year",         glow: "shadow-[0_0_20px_rgba(217,70,239,0.15)]" },
          ].map(({ value, label, glow }) => (
            <div
              key={label}
              className={[
                "rounded-2xl py-6 px-4 text-center",
                "bg-white/[0.03] border border-white/[0.06]",
                "hover:border-violet-500/25 hover:bg-white/[0.05]",
                "transition-all duration-300",
                glow,
              ].join(" ")}
            >
              <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent">
                {value}
              </p>
              <p className="text-slate-500 text-[12px] mt-1 font-medium tracking-wide">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}