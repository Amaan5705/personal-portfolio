import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ScrollIndicator from "./components/ScrollIndicator";

import heroBg from "./assets/hero/hero-bg.jpg";

function App() {
  const { scrollY } = useScroll();

  /* ================= HERO SCROLL TRANSFORMS ================= */
  const titleY = useTransform(scrollY, [0, 520], [0, -95]);
  const titleOpacity = useTransform(scrollY, [140, 560], [1, 0]);
  const subOpacity = useTransform(scrollY, [90, 430], [1, 0]);
  const buttonOpacity = useTransform(scrollY, [70, 300], [1, 0]);
  const scrollOpacity = useTransform(scrollY, [180, 520], [1, 0]);

  /* ================= TERMINAL NAME TYPING ================= */
  const fullText = "Amaan";
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 120);

    const blink = setInterval(() => {
      setCursor((c) => !c);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(blink);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-gray-200 overflow-x-hidden">
      {/* ================= BACKGROUND ================= */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 z-10 bg-black/70" />

      {/* ================= TOP LEFT TERMINAL NAME ================= */}
      <div className="fixed top-6 left-6 z-50">
        <a
          href="#home"
          className="
            inline-flex items-center
            rounded-xl
            bg-black/80
            border border-emerald-400/80
            shadow-[0_0_22px_rgba(34,197,94,0.45)]
            hover:shadow-[0_0_32px_rgba(34,197,94,0.65)]
            transition-shadow
          "
        >
          <span
            className="
              flex items-center
              px-5 py-2
              font-mono font-bold
              text-emerald-400
              text-base
              leading-none
            "
          >
            <span className="mr-2">{">_"}</span>
            <span className="inline-block w-[5.6ch]">{text}</span>
            <span className="ml-1">{cursor ? "|" : "\u00A0"}</span>
          </span>
        </a>
      </div>

      <ScrollIndicator />

      <main className="relative z-20">
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <div className="translate-y-12 md:translate-y-16">
            <motion.h1
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5"
            >
              Amaan’s Portfolio 🚀
            </motion.h1>

            <motion.p
              style={{ opacity: subOpacity }}
              className="text-lg text-gray-300 mb-12"
            >
              CSE Student · AI · Full Stack · Web
            </motion.p>

            <motion.div
              style={{ opacity: buttonOpacity }}
              className="flex gap-4 justify-center"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500
                           rounded-xl font-semibold transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-gray-400/70
                           hover:bg-white/10 rounded-xl font-semibold transition hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section
          id="about"
          className="scroll-mt-24 py-40 px-6 bg-slate-950"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: ABOUT TEXT */}
            <div>
              <h2
                className="
                  text-3xl md:text-4xl font-semibold mb-10
                  bg-gradient-to-r from-white via-slate-100 to-indigo-400
                  bg-clip-text text-transparent
                "
                style={{
                  textShadow:
                    "0 0 12px rgba(255,255,255,0.25), 0 0 28px rgba(99,102,241,0.35)",
                }}
              >
                About Me
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
                I’m a Computer Science Engineering student with a strong interest
                in building real-world applications using modern technologies.
                I enjoy working across the stack — from clean UI design to
                intelligent systems using AI and machine learning.
              </p>

              <p className="text-gray-300 leading-relaxed max-w-xl">
                I’ve worked on projects involving AI-based traffic detection,
                lightweight language models on edge devices, and interactive
                web platforms. I focus on clean code, continuous learning,
                and turning ideas into practical solutions.
              </p>
            </div>

            {/* RIGHT: SKILL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "AI & ML", desc: "Computer Vision, LLMs, Edge AI" },
                { title: "Web Dev", desc: "React, Vite, Tailwind CSS" },
                { title: "Game Dev", desc: "Interactive browser-based games" },
                { title: "Problem Solving", desc: "DSA & real-world logic" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900/80 backdrop-blur
                             border border-slate-800
                             rounded-xl p-6
                             hover:border-indigo-500
                             transition hover:-translate-y-1"
                >
                  <h3 className="font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="relative z-30">
          <Projects />
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="relative z-30">
          <Experience />
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="relative z-30 py-32 px-6 bg-slate-900 text-center"
        >
          <h2
            className="
              text-4xl font-bold mb-6
              bg-gradient-to-r from-white to-indigo-400
              bg-clip-text text-transparent
            "
            style={{
              textShadow:
                "0 0 14px rgba(255,255,255,0.25), 0 0 30px rgba(99,102,241,0.35)",
            }}
          >
            Contact Me
          </h2>
          <a
            href="mailto:amaan05.mo@email.com"
            className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500
                       rounded-xl font-semibold transition"
          >
            Send Email
          </a>
        </section>

        <footer className="border-t border-slate-800 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Amaan
        </footer>
      </main>
    </div>
  );
}

export default App;
