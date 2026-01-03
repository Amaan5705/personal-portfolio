function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-white">
          Amaan
        </h1>

        {/* Nav Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
