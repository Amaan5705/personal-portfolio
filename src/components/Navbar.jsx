import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Amaan</h1>

        {/* Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition duration-300
                ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-violet-500 after:transition-all after:duration-300
                ${
                  active === link.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
