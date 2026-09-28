import { useEffect, useState } from "react";
import profilePhoto from "../../assets/linkdlnprofile.jpg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mehrin-tech", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehrin-t-67611a330", icon: "linkedin" },
  { label: "Email", href: "mailto:meharinmehr2@gmail.com", icon: "email" },
];

function SocialIcon({ type }) {
  if (type === "email") {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.42h2.67ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.28-1.39-2.28s-1.6 1.08-1.6 2.21V18h-2.67V9.42h2.56v1.17h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.21 1.78 3.21 4.1Z"/></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.2.7-1.47-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.13-2.99-.12-.28-.49-1.42.11-2.95 0 0 .92-.29 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.43 3.04-1.14 3.04-1.14.6 1.53.23 2.67.11 2.95.7.78 1.12 1.77 1.12 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-3 py-4 text-center transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.06] sm:px-5">
      <p className="text-lg font-bold text-violet-300 sm:text-xl">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const reveal = (delay) => ({
    className: `transition-all duration-700 motion-reduce:transition-none ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`,
    style: { transitionDelay: `${delay}ms` },
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#080a15]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute -left-60 -top-60 h-[650px] w-[650px] rounded-full bg-violet-900/25 blur-[130px]" />
        <div className="absolute -bottom-48 -right-40 h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute right-[15%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-fuchsia-900/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-16">
          <div className="order-1 mx-auto w-full max-w-xl text-center md:mx-0 md:text-left">
            <p {...reveal(80)} className={`${reveal(80).className} text-sm font-medium uppercase tracking-[0.28em] text-slate-400 sm:text-base`}>Hello, I’m</p>
            <h1 {...reveal(160)} className={`${reveal(160).className} mt-2 text-6xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl`}>
              <span className="bg-gradient-to-r from-white via-white to-violet-200 bg-clip-text text-transparent">MEHRIN</span>
            </h1>
            <h2 {...reveal(240)} className={`${reveal(240).className} mt-5 text-lg font-semibold tracking-wide text-violet-300 sm:text-2xl`}>
              MERN Stack Developer
            </h2>
            <p {...reveal(320)} className={`${reveal(320).className} mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-300 md:mx-0 sm:text-base`}>
              I build responsive, scalable, and user-friendly web applications using React, Node.js, Express.js, and MongoDB. I enjoy creating clean user interfaces and efficient backend solutions.
            </p>

            <div {...reveal(400)} className={`${reveal(400).className} mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start`}>
              <a href="#projects" onClick={(event) => { event.preventDefault(); scrollTo("projects"); }} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                View Projects <span className="ml-2" aria-hidden="true">↗</span>
              </a>
              {/* Add your PDF as public/resume.pdf to activate this download link. */}
             
              <a href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                Contact Me <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>

            <nav aria-label="Social links" {...reveal(480)} className={`${reveal(480).className} mt-6 flex items-center justify-center gap-5 md:justify-start`}>
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm text-slate-400 transition-colors hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
                  <SocialIcon type={icon} /><span>{label}</span>
                </a>
              ))}
            </nav>

            <div {...reveal(560)} className={`${reveal(560).className} mt-8 grid grid-cols-3 gap-2.5 sm:gap-3`}>
              <Stat value="3+" label="Projects" />
              <Stat value="MERN" label="Stack" />
              <Stat value="10+" label="Technologies" />
            </div>
          </div>

          <div className={`order-2 mx-auto flex w-full max-w-sm items-center justify-center transition-all duration-1000 md:max-w-none ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`} style={{ transitionDelay: "180ms" }}>
            <div className="relative animate-[float_6s_ease-in-out_infinite] motion-reduce:animate-none">
              <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-violet-500/25 via-blue-500/15 to-fuchsia-500/25 blur-2xl" aria-hidden="true" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-violet-300/50 bg-[#111326] p-1.5 shadow-[0_0_50px_rgba(139,92,246,0.3)] transition duration-500 hover:scale-[1.025] hover:shadow-[0_0_65px_rgba(139,92,246,0.45)] sm:h-72 sm:w-72 lg:h-[350px] lg:w-[350px]">
                <img src={profilePhoto} alt="Mehrin, MERN Stack Developer" className="h-full w-full rounded-full object-cover object-center" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-300/25 bg-[#0d0f22]/95 px-4 py-2 text-xs font-semibold tracking-wide text-violet-100 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur sm:left-auto sm:right-[-1rem] sm:translate-x-0 sm:text-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />MERN Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } } @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; } }`}</style>
    </section>
  );
}
