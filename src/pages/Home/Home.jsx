import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "React Enthusiast",
  "MERN Stack Builder"
  
];

/* ── Typewriter ────────────────────────────────────────── */
function Typewriter({ words }) {
  const [index,   setIndex]   = useState(0);
  const [text,    setText]    = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word    = words[index % words.length];
    const speed   = deleting ? 45 : 90;
    const pause   = 1800;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText((t) => deleting ? t.slice(0, -1) : word.slice(0, t.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
      {text}
      <span className="inline-block w-[3px] h-[1em] ml-1 align-middle bg-violet-400 animate-pulse rounded-sm" />
    </span>
  );
}

/* ── stat card ─────────────────────────────────────────── */
function Stat({ value, label, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={[
      "flex flex-col items-center gap-1 px-6 py-4 rounded-2xl",
      "bg-white/[0.04] border border-white/[0.07]",
      "hover:border-violet-500/40 hover:bg-white/[0.07]",
      "transition-all duration-500 cursor-default group",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
    ].join(" ")}
      style={{ transition: `opacity 600ms ${delay}ms, transform 600ms ${delay}ms, border-color 300ms, background 300ms` }}
    >
      <span className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent group-hover:from-violet-200 group-hover:to-fuchsia-300 transition-all duration-300">
        {value}
      </span>
      <span className="text-slate-500 text-[12px] font-medium tracking-wide">{label}</span>
    </div>
  );
}

/* ── Main ──────────────────────────────────────────────── */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const anim = (delay = 0) => ({
    style: { transitionDelay: `${delay}ms` },
    className: [
      "transition-all duration-700",
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
    ].join(" "),
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#080a15] overflow-hidden"
    >

      {/* ── background layers ────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* top-left large glow */}
        <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-violet-900/25 blur-[130px]" />
        {/* bottom-right glow */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[110px]" />
        {/* center faint glow behind avatar */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-900/10 blur-[90px]" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* diagonal line accent */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
          <defs>
            <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#a78bfa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      {/* ── content wrapper ───────────────────────────── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-20">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* ── LEFT: text ─────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            {/* greeting pill */}
            {/* <div {...anim(0)} >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium
                bg-violet-950/60 border border-violet-700/40 text-violet-300 mb-6
                hover:border-violet-500/60 transition-colors duration-300 cursor-default">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                Available for opportunities
              </span>
            </div> */}

            {/* Hello line */}
            <div {...anim(100)}>
              <p className="text-slate-400 text-lg font-light tracking-widest uppercase mb-1">
                Hello, I'm
              </p>
            </div>

            {/* Name */}
            <div {...anim(200)}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 leading-none">
                <span className="text-white">
MEH
</span><span
className="
bg-gradient-to-r
from-violet-400
to-purple-500
bg-clip-text
text-transparent
"
>
RIN
</span>
                {/* underline flourish */}
                <span className="block h-1.5 mt-2 w-24 lg:w-32 rounded-full mx-auto lg:mx-0
                  bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500" />
              </h1>
            </div>

            {/* Typewriter role */}
            <div {...anim(320)} >
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 min-h-[2rem]">
                <Typewriter words={ROLES} />
              </h2>
            </div>

            {/* Bio */}
            <div {...anim(420)}>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                I build{" "}
                <span className="text-slate-200 font-medium">responsive, scalable</span> and{" "}
                <span className="text-slate-200 font-medium">user-friendly</span> web
                applications using modern web technologies. Passionate about creating
                clean UI and efficient backend solutions.
              </p>
            </div>

            {/* CTA buttons */}
            <div {...anim(520)}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">

                {/* Primary */}
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative inline-flex items-center justify-center gap-2
                    px-7 py-3.5 rounded-xl font-semibold text-[14px] text-white overflow-hidden
                    bg-gradient-to-br from-violet-600 to-purple-700
                    shadow-[0_0_20px_rgba(139,92,246,0.4)]
                    hover:shadow-[0_0_32px_rgba(139,92,246,0.65)]
                    hover:from-violet-500 hover:to-purple-600
                    active:scale-[0.97] transition-all duration-300"
                >
                  {/* shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    bg-gradient-to-r from-transparent via-white/10 to-transparent
                    transition-transform duration-700 skew-x-12" />
                  <svg className="w-4 h-4 relative" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  <span className="relative">View Projects</span>
                </a>

                {/* Secondary */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-center gap-2
                    px-7 py-3.5 rounded-xl font-semibold text-[14px]
                    text-slate-300 border border-white/10
                    hover:text-white hover:border-violet-500/50 hover:bg-white/[0.04]
                    active:scale-[0.97] transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div {...anim(620)}>
              <div className="grid grid-cols-3 gap-3">
                <Stat value="3+"    label="Projects"     delay={700} />
                <Stat value="10+"   label="Technologies" delay={800} />
                <Stat value="100%"  label="Learning"     delay={900} />
              </div>
            </div>
          </div>

          {/* ── RIGHT: profile image ───────────────────── */}
          <div
            className={[
              "relative shrink-0 transition-all duration-1000",
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
            ].join(" ")}
            style={{ transitionDelay: "300ms" }}
          >
            {/* outer decorative ring */}
            <div className="absolute -inset-5 rounded-full border border-violet-500/10 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.9)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </div>
            {/* inner glow ring */}
            <div className="absolute -inset-3 rounded-full border border-violet-500/20 animate-[spin_14s_linear_infinite_reverse]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.9)]" />
            </div>

            {/* image container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
              ring-4 ring-violet-600/30 shadow-[0_0_60px_rgba(139,92,246,0.35)]">

              {/* Replace src with real photo path e.g. src="/assets/images/avatar.jpg" */}
              <img
                src="/assets/images/avatar.jpg"
                alt="Mehrin — Full Stack Developer"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />

              {/* Fallback placeholder shown when no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center
                bg-gradient-to-br from-violet-900/80 via-[#0d0f22] to-purple-900/80
                text-violet-200"
                aria-hidden="true"
              >
                <span className="text-7xl font-black tracking-tight leading-none select-none">M</span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-violet-400 mt-1">
                  Mehrin
                </span>
              </div>
            </div>

            {/* floating badge: years */}
            <div className="absolute -bottom-3 -left-4 flex items-center gap-2
              px-4 py-2.5 rounded-2xl
              bg-[#0d0f22] border border-violet-700/40
              shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="text-white text-[12px] font-semibold leading-tight">Fresh Graduate</p>
                <p className="text-slate-500 text-[10px]">Class of 2024</p>
              </div>
            </div>

            {/* floating badge: stack */}
            <div className="absolute -top-2 -right-4 flex items-center gap-2
              px-4 py-2.5 rounded-2xl
              bg-[#0d0f22] border border-violet-700/40
              shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <div className="flex gap-1">
                {["⚛️","🟢","🍃"].map((e) => (
                  <span key={e} className="text-base">{e}</span>
                ))}
              </div>
              <p className="text-white text-[12px] font-semibold">MERN Stack</p>
            </div>
          </div>

        </div>

        {/* ── scroll cue ───────────────────────────────── */}
        <div
          className={[
            "absolute bottom-8 left-1/2 -translate-x-1/2",
            "flex flex-col items-center gap-1.5",
            "transition-all duration-700",
            mounted ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDelay: "1100ms" }}
        >
          <span className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-violet-500/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}