import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = ["home", "projects", "contact"];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold text-white tracking-wide">
          Amaan
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`relative group transition ${
                active === link ? "text-white" : "text-gray-400"
              }`}
            >
              <span className="capitalize">{link}</span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all
                ${active === link ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
        >
          {open ? (
            <X size={28} className="transition-transform rotate-90" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="flex flex-col items-center py-6 gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className={`text-lg capitalize transition ${
                active === link
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
