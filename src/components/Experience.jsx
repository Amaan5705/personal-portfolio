import { motion } from "framer-motion";

const experienceTimeline = [
  {
    year: "2025",
    items: [
      {
        fest: "Phase Shift",
        org: "BMSCE",
        event: "DeathScape 2.0",
        role: "Sponsorship Coordinator",
        period: "Apr 2025 – May 2025",
        highlight: false,
        logo: "/experience/phaseshift.png",
        points: [
          "Handled sponsor outreach and negotiations.",
          "Managed sponsor branding and deliverables.",
        ],
      },
      {
        fest: "UTSAV",
        org: "BMSCE",
        event: "DeathScape 2.0",
        role: "Club Event Organizer",
        period: "Apr 2025 – May 2025",
        highlight: true,
        logo: "/experience/utsav.png",
        points: [
          "Organized and executed DeathScape 2.0 during UTSAV.",
          "Managed team coordination and on-site execution.",
        ],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        fest: "UTSAV",
        org: "BMSCE",
        event: "Cultural Fest",
        role: "Student Volunteer",
        period: "May 2024",
        highlight: false,
        logo: "/experience/utsav.png",
        points: [
          "Volunteered during UTSAV cultural fest.",
          "Assisted with coordination and event operations.",
        ],
      },
      {
        fest: "Phase Shift",
        org: "BMSCE",
        event: "DeathScape (Laser Maze)",
        role: "Event Organizer",
        period: "Oct 2024 – Dec 2024",
        highlight: true,
        logo: "/experience/phaseshift.png",
        points: [
          "Led planning and execution of the DeathScape event.",
          "Handled laser maze design, testing, and final deployment.",
        ],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        fest: "Phase Shift",
        org: "BMSCE",
        event: "Laser Tag Event",
        role: "Event Volunteer",
        period: "Nov 2023 – Dec 2023",
        highlight: false,
        logo: "/experience/phaseshift.png",
        points: [
          "Assisted in on-ground execution and participant coordination.",
          "Supported the core team during peak event hours.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          Experience Timeline
        </motion.h2>

        {/* Timeline layout */}
        <div className="relative pl-24">

          {/* Continuous vertical line */}
          <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-slate-800" />

          <div className="space-y-28">
            {experienceTimeline.map((yearBlock, i) => (
              <div key={i} className="relative">

                {/* YEAR — shifted left, no overlap */}
                <div
                  className="
                    absolute
                    left-12
                    -translate-x-full
                    pr-4
                    text-indigo-400
                    font-semibold
                  "
                >
                  {yearBlock.year}
                </div>

                <div className="space-y-12 mt-8">
                  {yearBlock.items.map((item, j) => (
                    <div key={j} className="relative flex gap-8">

                      {/* Logo on the line */}
                      <div className="relative z-10">
                        <img
                          src={item.logo}
                          alt={item.fest}
                          className={`w-12 h-12 rounded-full bg-slate-900 border
                          ${item.highlight
                            ? "border-indigo-400"
                            : "border-slate-700"
                          } object-cover`}
                        />
                      </div>

                      {/* Card */}
                      <div
                        className={`flex-1 rounded-xl p-5 border
                        ${item.highlight
                          ? "border-indigo-500/40 bg-slate-900"
                          : "border-slate-800 bg-slate-900"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-white">
                              {item.role}
                            </h4>
                            <p className="text-sm text-gray-400">
                              <span className="text-indigo-400">
                                {item.fest}
                              </span>{" "}
                              · {item.event} · {item.org}
                            </p>
                          </div>
                          <span className="text-xs text-gray-400">
                            {item.period}
                          </span>
                        </div>

                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          {item.points.map((p, k) => (
                            <li key={k}>{p}</li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
