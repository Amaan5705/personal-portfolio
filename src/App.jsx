import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#05070f] text-gray-200">
      <Navbar />

      <main className="pt-24">

        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* WAVE BACKGROUND (CSS – GUARANTEED) */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundColor: "#05070f",
              backgroundImage: `
                repeating-radial-gradient(
                  circle at 80% 50%,
                  rgba(168,85,247,0.35) 0px,
                  rgba(168,85,247,0.35) 1px,
                  transparent 1px,
                  transparent 18px
                )
              `,
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="flex gap-6 max-w-3xl">

              {/* Vertical accent */}
              <div className="flex flex-col items-center pt-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 mb-2" />
                <div className="w-[2px] h-40 bg-violet-500/80" />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-violet-500">Amaan</span>
                </h1>

                <p className="mt-6 text-2xl text-white leading-snug">
                  I develop user interfaces <br />
                  and web applications
                </p>

                <p className="mt-4 text-gray-400">
                  CSE Student · AI · Game Dev · Web
                </p>

                <div className="mt-10 flex gap-4">
                  <a
                    href="#projects"
                    className="px-7 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition hover:scale-[1.05]"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="px-7 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition hover:scale-[1.05]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
            Scroll
            <div className="text-xl">↓</div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-gray-400 max-w-3xl">
              I’m a Computer Science Engineering student passionate about
              building modern web interfaces and intelligent systems.
            </p>
          </div>
        </section>

        <Projects />
        <Experience />

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 bg-slate-900 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Me
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s connect and build something awesome 🚀
          </p>
          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition"
          >
            Send Email
          </a>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Amaan
      </footer>
    </div>
  );
}

export default App;
