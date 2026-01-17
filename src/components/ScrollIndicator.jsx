import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function ScrollIndicator() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed top-6 right-6 z-50
                 hidden md:flex items-center gap-6
                 px-6 py-3 rounded-full
                 bg-black/40 backdrop-blur-md
                 border border-white/10"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-2 group"
        >
          {/* Dot */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
              ${
                active === section.id
                  ? "bg-emerald-400 scale-125"
                  : "bg-slate-500 group-hover:bg-slate-300"
              }`}
          />

          {/* Label */}
          <span
            className={`text-xs tracking-wide transition-all duration-300
              ${
                active === section.id
                  ? "text-emerald-400 opacity-100"
                  : "text-slate-400 opacity-60 group-hover:opacity-100"
              }`}
          >
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
}
