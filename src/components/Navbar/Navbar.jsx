import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
   { label: "Contact",  href: "#contact"  },
];


export default function Navbar() {
  const navigate=useNavigate()
  const [isOpen,      setIsOpen]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("#home");

  /* ── scroll shadow + spy ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter(({ href }) => href.startsWith("#"))
.map(({ href }) => ({
href,
el: document.querySelector(href),
}))
.filter(({ el }) => el);

      const current = sections
        .filter(({ el }) => el.getBoundingClientRect().top <= 96)
        .at(-1);

      if (current) setActiveLink(current.href);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close mobile menu on resize ────────────────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── lock body scroll when mobile menu open ──────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

const handleNavClick = (e, href) => {

e.preventDefault();

setIsOpen(false);



  if (window.location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setActiveLink(href);
      }
    }, 300);

    return;
  }

  setActiveLink(href);

  const target =
    document.querySelector(href);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-[#0d0f1a]/95 backdrop-blur-md shadow-[0_1px_0_rgba(139,92,246,0.15)] shadow-lg"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* subtle top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-80" />

        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* ── Logo ───────────────────────────────────── */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-2 select-none"
              aria-label="Home"
            >
              {/* geometric mark */}
              <span className="relative flex items-center justify-center w-8 h-8">
                <span className="absolute inset-0 rounded-md bg-violet-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <span className="relative block w-4 h-4 rounded-sm bg-gradient-to-br from-violet-400 to-purple-600 rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
              </span>
              <span className="text-white font-semibold text-[15px] tracking-wide">
                Meh<span className="text-violet-400">rin</span>
              </span>
            </a>

            {/* ── Desktop links ──────────────────────────── */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map(({ label, href }) => {
                const isActive = activeLink === href;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={[
                        "relative px-4 py-2 rounded-lg text-[13.5px] font-medium tracking-wide",
                        "transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white",
                      ].join(" ")}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-lg bg-violet-600/20 border border-violet-500/30" />
                      )}
                      <span className="relative">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ── CTA button (desktop) ───────────────────── */}
            <a
              // href="#contact"
              onClick={() => {
  document
    .querySelector("#contact")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}}
              className={[
                "hidden md:inline-flex items-center gap-2",
                "px-4 py-2 rounded-lg text-[13.5px] font-semibold tracking-wide",
                "bg-gradient-to-br from-violet-600 to-purple-700",
                "text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]",
                "hover:shadow-[0_0_24px_rgba(139,92,246,0.55)]",
                "hover:from-violet-500 hover:to-purple-600",
                "transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
              ].join(" ")}
            >
              <span>Hire me</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* ── Hamburger (mobile) ─────────────────────── */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={[
                "md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]",
                "rounded-lg transition-colors duration-200",
                "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
              ].join(" ")}
            >
              <span className={["block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300 origin-center",
                isOpen ? "translate-y-[6.5px] rotate-45" : ""].join(" ")} />
              <span className={["block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300",
                isOpen ? "opacity-0 scale-x-0" : ""].join(" ")} />
              <span className={["block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300 origin-center",
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""].join(" ")} />
            </button>

          </div>
        </nav>
      </header>

      {/* ── Mobile overlay ────────────────────────────────────── */}
      <div
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-72",
          "bg-[#0d0f1a] border-l border-violet-900/40",
          "flex flex-col",
          "transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* drawer header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-violet-900/30">
          <span className="text-white font-semibold text-sm tracking-wide">
            port<span className="text-violet-400">folio</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <svg viewBox="0 0 14 14" className="w-4 h-4" fill="none" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ label, href }, i) => {
              const isActive = activeLink === href;
              return (
                <li key={href} style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                  className={["transition-all duration-300",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"].join(" ")}
                >
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={[
                      "flex items-center gap-3 px-4 py-3 rounded-xl",
                      "text-[15px] font-medium tracking-wide",
                      "transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                      isActive
                        ? "bg-violet-600/20 text-white border border-violet-500/30"
                        : "text-slate-400 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    )}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* drawer CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-violet-900/30">
          <a
           // href="#contact"
          onClick={() => {
  setIsOpen(false);

  document
    .querySelector("#contact")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}}
            className={[
              "flex items-center justify-center gap-2 w-full",
              "px-4 py-3 rounded-xl",
              "bg-gradient-to-br from-violet-600 to-purple-700",
              "text-white text-[14px] font-semibold tracking-wide",
              "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
              "hover:shadow-[0_0_28px_rgba(139,92,246,0.6)]",
              "transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
            ].join(" ")}
          >
            Hire me
            <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}