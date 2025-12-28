import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Navbar />

      {/* HERO SECTION */}
      <main
        id="home"
        className="pt-24 flex flex-col items-center justify-center h-screen text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Amaan’s Portfolio 🚀
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          CSE Student · AI · Game Dev · Web
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-2">
              AI Traffic Detection
            </h3>
            <p className="text-gray-400 mb-4">
              AI-based system to analyze traffic density using computer vision.
            </p>
            <div className="flex gap-3 text-sm text-indigo-400">
              <span>Python</span>
              <span>OpenCV</span>
              <span>ML</span>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-2">
              NanoGPT on Raspberry Pi
            </h3>
            <p className="text-gray-400 mb-4">
              Lightweight LLM running locally on low-power hardware.
            </p>
            <div className="flex gap-3 text-sm text-indigo-400">
              <span>PyTorch</span>
              <span>LLM</span>
              <span>Edge AI</span>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-2">
              Game Portfolio Hub
            </h3>
            <p className="text-gray-400 mb-4">
              Web platform to showcase and launch browser-based games.
            </p>
            <div className="flex gap-3 text-sm text-indigo-400">
              <span>React</span>
              <span>Vite</span>
              <span>Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-6">
          Let’s connect and build something awesome 🚀
        </p>

        <a
          href="mailto:your-email@example.com"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition"
        >
          Send Email
        </a>
      </section>
    </div>
  );
}

export default App;
