import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Navbar />

      {/* Spacing fix for fixed navbar */}
      <main className="pt-24">

        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/20 blur-[120px] rounded-full" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Amaan’s Portfolio 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10"
          >
            CSE Student · AI · Game Dev · Web
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 bg-slate-950"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* About Text */}
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

            {/* Skill Highlights */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "AI & ML", desc: "Computer Vision, LLMs, Edge AI" },
                { title: "Web Dev", desc: "React, Vite, Tailwind CSS" },
                { title: "Game Dev", desc: "Interactive browser-based games" },
                { title: "Problem Solving", desc: "DSA & real-world logic" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition"
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
        </motion.section>

        {/* ================= PROJECTS SECTION ================= */}
        <Projects />

        {/* ================= CONTACT SECTION ================= */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition shadow-lg shadow-indigo-500/20"
          >
            Send Email
          </a>
        </motion.section>

      </main>
    </div>
  );
}

export default App;

