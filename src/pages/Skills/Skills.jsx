import { useEffect, useRef, useState } from "react";

/* ── InView hook ───────────────────────────────────────── */
function useInView(threshold = 0.12) {
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

/* ── Skill data ────────────────────────────────────────── */
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥️",
    accent: { from: "from-violet-600", to: "to-purple-600", text: "text-violet-400", border: "border-violet-500/30", glow: "shadow-[0_0_20px_rgba(139,92,246,0.18)]", dot: "bg-violet-500", bar: "from-violet-500 to-purple-500" },
    skills: [
      { name: "HTML5",       level: 90, icon: "🌐" },
      { name: "CSS3",        level: 85, icon: "🎨" },
      { name: "Tailwind CSS",level: 80, icon: "💨" },
      { name: "JavaScript",  level: 80, icon: "⚡" },
      { name: "React",       level: 75, icon: "⚛️" },
      { name: "Redux",       level: 65, icon: "🔄" },
      { name: "EJS",         level: 70, icon: "📄" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    accent: { from: "from-emerald-600", to: "to-teal-600", text: "text-emerald-400", border: "border-emerald-500/30", glow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]", dot: "bg-emerald-500", bar: "from-emerald-500 to-teal-500" },
    skills: [
      { name: "Node.js",  level: 78, icon: "🟢" },
      { name: "Express",  level: 75, icon: "🚂" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄️",
    accent: { from: "from-sky-600", to: "to-cyan-600", text: "text-sky-400", border: "border-sky-500/30", glow: "shadow-[0_0_20px_rgba(56,189,248,0.15)]", dot: "bg-sky-500", bar: "from-sky-500 to-cyan-500" },
    skills: [
      { name: "MongoDB", level: 75, icon: "🍃" },
      {
      name: "Mongoose",
      level: 70,
      icon: "🔗"
    }
    ],
  },
  {
    id: "tools",
    label: "Tools & Dev",
    icon: "🛠️",
    accent: { from: "from-amber-500", to: "to-orange-600", text: "text-amber-400", border: "border-amber-500/30", glow: "shadow-[0_0_20px_rgba(251,191,36,0.13)]", dot: "bg-amber-400", bar: "from-amber-400 to-orange-500" },
    skills: [
      { name: "Git",        level: 80, icon: "🌿" },
      { name: "GitHub",     level: 80, icon: "🐙" },
      { name: "VS Code",    level: 90, icon: "💻" },
      { name: "Postman",    level: 72, icon: "📬" },
      { name: "npm",        level: 78, icon: "📦" },
    ],
  },
];

const levelLabel = (l) =>
  l >= 85 ? "Expert" : l >= 75 ? "Advanced" : l >= 60 ? "Intermediate" : "Learning";

const levelColor = (l) =>
  l >= 85
    ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    : l >= 75
    ? "text-violet-300 bg-violet-400/10 border-violet-400/20"
    : l >= 60
    ? "text-sky-300 bg-sky-400/10 border-sky-400/20"
    : "text-amber-300 bg-amber-400/10 border-amber-400/20";

/* ── Animated progress bar ──────────────────────────────── */
function Bar({ level, barClass, visible, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setWidth(level), delay + 300);
    return () => clearTimeout(t);
  }, [visible, level, delay]);

  return (
    <div className="relative h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
      <div
        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${barClass} transition-all duration-700 ease-out`}
        style={{ width: `${width}%` }}
      />
      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2.5s_ease-in-out_infinite]" />
    </div>
  );
}

/* ── Skill pill card ─────────────────────────────────────── */
function SkillCard({ skill, accent, visible, delay }) {
  return (
    <div
      className={[
        "group relative flex flex-col gap-3 p-4 rounded-2xl",
        "bg-white/[0.03] border border-white/[0.07]",
        `hover:${accent.border} hover:bg-white/[0.06] ${accent.glow}`,
        "transition-all duration-400 cursor-default",
        "opacity-0 translate-y-3",
        visible ? "!opacity-100 !translate-y-0" : "",
      ].join(" ")}
      style={{ transition: `opacity 500ms ${delay}ms, transform 500ms ${delay}ms, border-color 300ms, background 300ms` }}
    >
      {/* top row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xl leading-none">{skill.icon}</span>
          <span className="text-slate-200 text-[13px] font-semibold tracking-wide group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${levelColor(skill.level)}`}>
          {levelLabel(skill.level)}
        </span>
      </div>

      {/* bar + percent */}
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <Bar level={skill.level} barClass={accent.bar} visible={visible} delay={delay} />
        </div>
        <span className={`text-[11px] font-bold tabular-nums ${accent.text} min-w-[32px] text-right`}>
          {skill.level}%
        </span>
      </div>
    </div>
  );
}

/* ── Category block ──────────────────────────────────────── */
function CategoryBlock({ cat, globalVisible }) {
  const [ref, visible] = useInView(0.1);
  const show = globalVisible || visible;

  return (
    <div
      ref={ref}
      className={[
        "rounded-3xl p-6 lg:p-7",
        "bg-white/[0.025] border border-white/[0.06]",
        `hover:border-white/[0.1]`,
        "transition-all duration-500",
      ].join(" ")}
    >
      {/* category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={[
          "w-10 h-10 rounded-2xl flex items-center justify-center text-xl",
          `bg-gradient-to-br ${cat.accent.from} ${cat.accent.to} opacity-90`,
          "shadow-lg shrink-0",
        ].join(" ")}>
          {cat.icon}
        </div>
        <div>
          <h3 className="text-white font-bold text-[15px] tracking-wide">{cat.label}</h3>
          <p className={`text-[11px] font-medium ${cat.accent.text}`}>
            {cat.skills.length} {cat.skills.length === 1 ? "skill" : "skills"}
          </p>
        </div>

        {/* skill count pill */}
        <div className="ml-auto flex gap-1">
          {cat.skills.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${cat.accent.dot} opacity-60`}
              style={{ opacity: show ? 0.7 : 0.2, transition: `opacity 400ms ${i * 80}ms` }}
            />
          ))}
        </div>
      </div>

      {/* skill grid */}
      <div className={[
        "grid gap-3",
        cat.skills.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2",
      ].join(" ")}>
        {cat.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            accent={cat.accent}
            visible={show}
            delay={i * 70}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Summary ring ────────────────────────────────────────── */
function RadialRing({ value, label, color, visible, delay }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const [dash, setDash] = useState(circ);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setDash(circ * (1 - value / 100)), delay + 200);
    return () => clearTimeout(t);
  }, [visible, value, delay, circ]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg className="-rotate-90 w-full h-full" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
          <circle
            cx="32" cy="32" r={r} fill="none"
            stroke="url(#rg)" strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={dash}
            style={{ transition: `stroke-dashoffset 900ms ${delay}ms cubic-bezier(.4,0,.2,1)` }}
          />
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-white">
          {value}%
        </span>
      </div>
      <span className="text-slate-500 text-[11px] font-medium text-center">{label}</span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────── */
export default function Skills() {
  const [sectionRef, sectionVisible] = useInView(0.05);

  const totalSkills = categories.reduce((s, c) => s + c.skills.length, 0);
  const avgLevel = Math.round(
    categories.flatMap((c) => c.skills.map((s) => s.level)).reduce((a, b) => a + b, 0) /
    categories.flatMap((c) => c.skills).length
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#080a15] py-24 px-6 overflow-hidden"
    >
      {/* bg glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-violet-900/15 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-64 bg-purple-900/15 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section heading ──────────────────────────── */}
        <div
          className={[
            "mb-14 transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What I work with
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              My{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Skills
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
              </span>
            </h2>

            {/* summary rings */}
            <div className="flex items-center gap-8 sm:gap-6">
              <RadialRing value={avgLevel}    label="Avg. level"  color="violet" visible={sectionVisible} delay={400} />
              <RadialRing value={totalSkills * 6} label={`${totalSkills} skills`} color="fuchsia" visible={sectionVisible} delay={550} />
              <RadialRing value={100}         label="Self-taught" color="purple" visible={sectionVisible} delay={700} />
            </div>
          </div>
        </div>

        {/* ── Category grid: 2-col on lg ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Frontend spans full width */}
          <div className="lg:col-span-2">
            <CategoryBlock cat={categories[0]} globalVisible={sectionVisible} />
          </div>

          {/* Backend + Database side by side */}
          {categories.slice(1, 3).map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} globalVisible={false} />
          ))}

          {/* Tools spans full width */}
          <div className="lg:col-span-2">
            <CategoryBlock cat={categories[3]} globalVisible={false} />
          </div>
        </div>

        {/* ── Bottom legend ────────────────────────────── */}
        <div
          className={[
            "mt-10 flex flex-wrap justify-center gap-4",
            "transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "600ms" }}
        >
          {[
            { label: "Expert",       color: "bg-emerald-400", range: "85–100%" },
            { label: "Advanced",     color: "bg-violet-400",  range: "75–84%"  },
            { label: "Intermediate", color: "bg-sky-400",     range: "60–74%"  },
            { label: "Learning",     color: "bg-amber-400",   range: "< 60%"   },
          ].map(({ label, color, range }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              <span className="text-slate-400 text-[12px] font-medium">{label}</span>
              <span className="text-slate-600 text-[11px]">{range}</span>
            </div>
          ))}
        </div>

      </div>

      {/* shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(200%);  }
          100% { transform: translateX(200%);  }
        }
      `}</style>
    </section>
  );
}