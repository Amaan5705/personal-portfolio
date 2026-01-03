import { motion } from "framer-motion";

const experiences = [
  {
    title: "Sponsorship Coordinator",
    fest: "Phase Shift",
    event: "DeathScape 2.0",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Apr 2025 – May 2025",
    side: "left",
    points: [
      "Handled sponsor outreach and negotiations.",
      "Managed sponsor branding and deliverables.",
    ],
  },
  {
    title: "Club Event Organizer",
    fest: "UTSAV",
    event: "DeathScape 2.0",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Apr 2025 – May 2025",
    side: "right",
    points: [
      "Organized and executed DeathScape 2.0 during UTSAV.",
      "Managed team coordination and on-site execution.",
    ],
  },
  {
    title: "Member",
    fest: "V The Volunteers (VTVO)",
    event: "Social Service Activities",
    org: "VTVO",
    location: "Bengaluru, Karnataka, India",
    period: "Mar 2025 – Jun 2025",
    side: "left",
    points: [
      "Participated in social service and volunteering initiatives.",
      "Contributed to community-driven activities and outreach programs.",
    ],
  },
  {
    title: "Event Organizer",
    fest: "Phase Shift",
    event: "DeathScape (Laser Maze)",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Oct 2024 – Dec 2024",
    side: "right",
    points: [
      "Led planning and execution of the DeathScape event.",
      "Handled laser maze design, testing, and final deployment.",
    ],
  },
  {
    title: "Event Coordinator",
    fest: "Phase Shift",
    event: "DeathScape",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Nov 2024 – Dec 2024",
    side: "left",
    points: [
      "Coordinated teams for smooth event flow.",
      "Managed logistics and issue resolution during the fest.",
    ],
  },
  {
    title: "Student Volunteer",
    fest: "UTSAV",
    event: "Cultural Fest",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "May 2024",
    side: "right",
    points: [
      "Volunteered during UTSAV cultural fest.",
      "Assisted with coordination and event operations.",
    ],
  },
  {
    title: "Event Volunteer",
    fest: "Phase Shift",
    event: "Laser Tag Event",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Nov 2023 – Dec 2023",
    side: "left",
    points: [
      "Assisted in on-ground execution and participant coordination.",
      "Supported the core team during peak event hours.",
    ],
  },
  {
    title: "Member",
    fest: "Rotaract Club",
    event: "Social Service Activities",
    org: "BMSCE",
    location: "Bengaluru, Karnataka, India",
    period: "Nov 2023 – May 2024",
    side: "right",
    points: [
      "Participated in social service initiatives.",
      "Contributed to volunteering and community-driven activities.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-24"
        >
          Experience Timeline
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-600/70 -translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, i) => {
              const isLeft = exp.side === "left";

              return (
                <div
                  key={i}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-10" : "justify-end pl-10"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <div className="w-5 h-5 rounded-full border-4 border-emerald-500 bg-slate-950" />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] bg-slate-900/90 border border-slate-800 rounded-2xl p-6"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>

                      {/* Highlighted date */}
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-400 font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-2">
                      <span className="text-sky-400 font-medium">
                        {exp.fest}
                      </span>{" "}
                      · {exp.event} · {exp.org}
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                      {exp.location}
                    </p>

                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
