import { motion } from "framer-motion";
import {
  MapPin,
  Languages,
  GraduationCap,
  BookOpen,
  Cpu,
  User,
} from "lucide-react";

export default function ProfileOverview() {
  return (
    <section className="relative z-10 w-full px-6 py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">

        {/* ================= LEFT PROFILE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-green-500/40" />
            <img
              src="/avatar.png"
              alt="Profile"
              className="relative z-10 h-56 w-56 rounded-full border-4 border-green-500 object-cover"
            />
          </div>

          <div className="mt-6 rounded-full border border-green-500 px-6 py-2 text-sm font-semibold tracking-widest text-green-400">
            AVAILABLE FOR HIRE
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-wide text-cyan-400">
            Aadyoth Sreeram
          </h2>
        </motion.div>

        {/* ================= RIGHT INFO ================= */}
        <div className="space-y-8">

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InfoCard
              icon={<MapPin />}
              label="📍 Location"
              value="India"
            />
            <InfoCard
              icon={<Languages />}
              label="🌐 Languages"
              value="English, Hindi, Kannada, Sanskrit"
            />
            <InfoCard
              icon={<GraduationCap />}
              label="🏛️ College"
              value="BMS College of Engineering"
            />
            <InfoCard
              icon={<BookOpen />}
              label="🎓 Major"
              value="CSE (Core)"
            />
            <InfoCard
              icon={<Cpu />}
              label="🤖 Fields"
              value="ML, Full Stack Development"
            />
            <InfoCard
              icon={<User />}
              label="👨🏻‍💻 Role"
              value="Intern"
            />
          </div>

          {/* WHAT I BRING */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-400">
              What I Bring
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Basketball Player",
                "Team Player",
                "Problem Solver",
                "Goal-Oriented",
                "Public Speaker",
                "Researcher",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:border-green-400/40 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-400">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm backdrop-blur hover:border-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm backdrop-blur hover:border-cyan-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= INFO CARD ================= */
function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-green-400/40 transition">
      
      {/* ICON */}
      <div className="mt-1 text-green-400">
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <p className="text-sm font-medium text-white/70 tracking-wide">
          {label}
        </p>
        <p className="text-base font-semibold text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
