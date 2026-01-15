import { motion } from "framer-motion";

// PROJECT IMAGES
import trafficImg from "../assets/projects/ai-traffic-real.jpg";
import nanogptImg from "../assets/projects/nanogpt-pi.jpg";

// CUSTOM LANGCHAIN LOGO
import langchainLogo from "../assets/logos/langchain.png";

// TECH LOGOS
const techConfig = {
  Python: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  React: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Node.js": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  OpenCV: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  PyTorch: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  HuggingFace: {
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  LangChain: {
    logo: langchainLogo,
  },
  Vite: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  "Tailwind CSS": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
};

function Projects() {
  const featuredProjects = [
    {
      title: "AI Traffic Detection",
      description:
        "AI-based system that analyzes traffic density using computer vision techniques for smarter traffic control.",
      tech: ["Python", "OpenCV"],
      badge: "AI / CV",
      image: trafficImg,
    },
    {
      title: "NanoGPT on Raspberry Pi",
      description:
        "A lightweight GPT-style language model deployed locally on low-power hardware, optimized for edge inference.",
      tech: ["PyTorch", "HuggingFace", "LangChain"],
      badge: "Edge AI",
      image: nanogptImg,
    },
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio website showcasing projects, experience, and skills with a modern UI.",
      tech: ["React", "Vite", "Tailwind CSS"],
      badge: "Web App",
      image: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20 text-emerald-400"
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden
                       border border-slate-800 bg-slate-950
                       hover:border-emerald-400
                       hover:shadow-[0_0_35px_rgba(52,211,153,0.22)]
                       transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-72 bg-black overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                  Image coming soon
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <span
                className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full
                           bg-emerald-500/20 text-emerald-400
                           border border-emerald-500/30"
              >
                {project.badge}
              </span>

              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* TECH PILLS – FIXED */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="group inline-flex items-center gap-2
                               px-3 py-1.5 rounded-md
                               bg-black border border-slate-700
                               text-sm text-gray-200
                               transition-all duration-200
                               hover:border-slate-400"
                  >
                    <img
                      src={techConfig[tech]?.logo}
                      alt={tech}
                      className="w-4 h-4
                                 brightness-90
                                 transition-all duration-200
                                 group-hover:brightness-110"
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

