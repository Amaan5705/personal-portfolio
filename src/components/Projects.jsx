import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Featured (manual) projects
  const featuredProjects = [
    {
      title: "AI Traffic Detection",
      description:
        "AI-based system to analyze traffic density using computer vision.",
      tech: ["Python", "OpenCV", "ML"],
      link: "https://github.com/Amaan5705", // change if repo link exists
    },
    {
      title: "NanoGPT on Raspberry Pi",
      description:
        "Lightweight LLM running locally on low-power hardware.",
      tech: ["PyTorch", "LLM", "Edge AI"],
      link: "https://github.com/Amaan5705",
    },
    {
      title: "Game Portfolio Hub",
      description:
        "Web platform to showcase and launch browser-based games.",
      tech: ["React", "Vite", "Web"],
      link: "https://game-port-ashen.vercel.app/",
    },
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/Amaan5705/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* ================= FEATURED PROJECTS ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-xl font-semibold mb-8 text-gray-300">
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 p-6 rounded-2xl border border-slate-800
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.02]
              hover:border-indigo-500
              hover:shadow-xl hover:shadow-indigo-500/20"
            >
              <h4 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
                {project.title}
              </h4>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-indigo-400">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ================= GITHUB PROJECTS ================= */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-8 text-gray-300">
          More Projects on GitHub
        </h3>

        {loading ? (
          <p className="text-center text-gray-400">
            Loading GitHub projects...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-900 p-6 rounded-2xl border border-slate-800
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]
                hover:border-indigo-500
                hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition">
                  {repo.name}
                </h4>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">
                    {repo.language || "Unknown"}
                  </span>
                  <span className="text-indigo-400">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;


