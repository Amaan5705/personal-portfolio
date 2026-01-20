import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL SPY ================= */
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
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL GLOW ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        transition-all duration-300
        ${
          scrolled
            ? "navbar shadow-[0_0_22px_rgba(34,197,94,0.35)]"
            : "navbar"
        }
      `}
    >
      <div className="flex items-center justify-between gap-10 px-6 py-3">

        {/* LOGO */}
        <button className="logo-btn px-4 py-1 rounded-full text-sm font-semibold">
          &gt;_ Amaan
        </button>

        {/* LINKS */}
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item relative text-sm font-medium
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[var(--green-main)]
                after:transition-all after:duration-300
                ${
                  active === link.id
                    ? "active after:w-full"
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
