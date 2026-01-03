import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 flex flex-col">
      <Navbar />

      {/* Spacing fix for fixed navbar */}
      <main className="pt-24 flex-grow">

        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* Base background */}
          <div className="absolute inset-0 bg-slate-950 -z-20" />

          {/* STRONG WAVY LINE BACKGROUND */}
          <div className="absolute inset-0 -z-10 pointer-events-none mix-blend-screen">
            <svg
              viewBox="0 0 1400 900"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="rgba(168,85,247,0.8)"
                strokeWidth="2"
              >
                {[...Array(28)].map((_, i) => (
                  <path
                    key={i}
                    d={`
                      M -200 ${30 * i}
                      C 300 ${80 + 20 * i},
                        700 ${-40 + 25 * i},
                        1600 ${30 * i}
                    `}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left content */}
            <div className="flex items-start gap-6">
              {/* Vertical accent */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-3 h-3 rounded-full bg-violet-500 mb-2" />
                <div className="w-[2px] h-32 bg-violet-500/80" />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-violet-500">Amaan</span>
                </h1>

                <p className="mt-4 text-xl text-gray-300 max-w-xl">
                  I build modern user interfaces, intelligent systems, and
                  interactive experiences.
                </p>

                <p className="mt-2 text-gray-400">
                  CSE Student · AI · Game Dev · Web
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition hover:scale-[1.03]"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition hover:scale-[1.03]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Empty right column for balance */}
            <div />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
            <span>Scroll</span>
            <span className="text-xl">↓</span>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="py-32 px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Me
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                I’m a Computer Science Engineering student with a strong interest
                in building real-world applications using modern technologies.
                I enjoy working across the stack — from clean UI design to
                intelligent systems using AI and machine learning.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I’ve worked on projects involving AI-based traffic detection,
                lightweight language models on edge devices, and interactive
                web platforms. I focus on clean code, continuous learning,
                and turning ideas into practical solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "AI & ML", desc: "Computer Vision, LLMs, Edge AI" },
                { title: "Web Dev", desc: "React, Vite, Tailwind CSS" },
                { title: "Game Dev", desc: "Interactive browser-based games" },
                { title: "Problem Solving", desc: "DSA & real-world logic" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition hover:-translate-y-1"
                >
                  <h3 className="font-semibold mb-2">
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

        {/* ================= PROJECTS SECTION ================= */}
        <Projects />

        {/* ================= EXPERIENCE SECTION ================= */}
        <Experience />

        {/* ================= CONTACT SECTION ================= */}
        <section
          id="contact"
          className="py-32 px-6 bg-slate-900 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-8">
            Let’s connect and build something awesome 🚀
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition hover:scale-[1.02]"
          >
            Send Email
          </a>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Amaan · Built with React & Tailwind CSS
        </p>

        <div className="mt-2 flex justify-center gap-6">
          <a
            href="https://github.com/Amaan5705"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:your-email@example.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;


