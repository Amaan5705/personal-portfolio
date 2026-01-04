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
    <nav
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-[#0f172a]/70 via-[#020617]/70 to-[#0f172a]/70
        backdrop-blur-xl
        border-b border-indigo-500/20
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Amaan
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition duration-300
                ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
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

