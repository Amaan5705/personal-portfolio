import { motion } from "framer-motion";

const experiences = [
  {
    role: "Event Organizer & Coordinator",
    org: "BMS College of Engineering",
    period: "2023 – Present",
    points: [
      "Planned and executed large-scale college events with 1,000+ attendees.",
      "Coordinated cross-functional teams including logistics, marketing, and operations.",
      "Ensured smooth execution under tight deadlines and high-pressure situations."
    ],
  },
  {
    role: "Sponsorship & Fundraising Coordinator",
    org: "Tech & Cultural Fests (UTSAV, Phase Shift)",
    period: "2023 – 2024",
    points: [
      "Approached and negotiated with sponsors for financial and in-kind support.",
      "Secured sponsorships by presenting value-driven proposals to brands.",
      "Managed sponsor relations and ensured promised deliverables were met."
    ],
  },
  {
    role: "Volunteer & Core Team Member",
    org: "Rotaract Club – BMSCE",
    period: "2022 – 2023",
    points: [
      "Actively contributed to social initiatives and community service projects.",
      "Worked in teams to organize awareness drives and fundraising activities.",
      "Developed leadership, communication, and teamwork skills."
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
      >
        Experience & Activities
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-red-500">
                  {exp.role}
                </h3>
                <p className="text-gray-400">{exp.org}</p>
              </div>

              <span className="text-sm text-gray-500 mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
