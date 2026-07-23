import React from "react";

export default function Footer() {
  return (
    <footer
      className="
      relative
      bg-[#050816]
      border-t
      border-violet-500/10
      overflow-hidden
      "
    >

      {/* glow */}
      <div
        className="
        absolute
        inset-0
        pointer-events-none
        z-0
        "
      >
        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[300px]
          bg-violet-900/10
          blur-[120px]
          "
        />
      </div>

      {/* content */}
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-8
        py-20
        "
      >

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          gap-14
          "
        >

          {/* LEFT */}
          <div className="relative z-20">

            <h2
              className="
              relative
z-20
inline-block
text-white
font-black
text-5xl
opacity-100
mix-blend-normal
              "
              style={{
color:"#ffffff",
textShadow:"0 0 1px rgba(255,255,255,0.2)"
}}
            >
              <span className="text-white">
MEH
</span>
<span
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
            </h2>

            <p
              className="
              mt-5
              text-slate-400
              text-lg
              max-w-lg
              leading-8
              "
            >
              Building modern and interactive digital experiences.
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            gap-10
            text-lg
            "
          >

            <a
              href="#about"
              className="
              text-slate-400
              hover:text-violet-400
              transition
              "
            >
              About
            </a>

            <a
              href="#projects"
              className="
              text-slate-400
              hover:text-violet-400
              transition
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              className="
              text-slate-400
              hover:text-violet-400
              transition
              "
            >
              Contact
            </a>

          </div>

        </div>

        {/* divider */}

        <div
          className="
          h-px
          my-12
          bg-gradient-to-r
          from-transparent
          via-violet-500/20
          to-transparent
          "
        />

        {/* bottom */}

        <div
          className="
          text-center
          text-slate-500
          "
        >
          © 2026 Mehrin. All rights reserved.
        </div>

      </div>

    </footer>
  );
}