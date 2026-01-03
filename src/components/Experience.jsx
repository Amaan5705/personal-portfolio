import { motion } from "framer-motion";

const experienceTimeline = [
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
        points: [
          "Assisted in on-ground execution and participant coordination.",
          "Supported the core team during peak event hours.",
        ],
      },
      {
        fest: "Rotaract Club",
        org: "BMSCE",
        event: "Social Service Activities",
        role: "Member",
        period: "Nov 2023 – May 2024",
        highlight: false,
        points: [
          "Participated in social service initiatives.",
          "Contributed to volunteering and community-driven activities.",
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
        points: [
          "Led planning and execution of the DeathScape event.",
          "Handled laser maze design, testing, and final deployment.",
        ],
      },
      {
        fest: "Phase Shift",
        org: "BMSCE",
        event: "DeathScape",
        role: "Event Coordinator",
        period: "Nov 2024 – Dec 2024",
        highlight: false,
        points: [
          "Coordinated teams for smooth event flow.",
          "Managed logistics and issue resolution during the fest.",
        ],
      },
    ],
  },
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
        points: [
          "Organized and executed DeathScape 2.0 during UTSAV.",
          "Managed team coordination and on-site execution.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          Experience Timeline
        </motion.h2>

        <div className="space-y-20">
          {experienceTimeline.map((yearBlock, i) => (
            <div key={i}>
              {/* Year */}
              <h3 className="text-xl font-semibold text-indigo-400 mb-8">
                {yearBlock.year}
              </h3>

              <div className="border-l-2 border-slate-800 pl-6 space-y-10">
                {yearBlock.items.map((item, j) => (
                  <div key={j} className="relative pl-6">
                    {/* Timeline Dot */}
                    <span
                      className={`absolute -left-[14px] top-2 w-3 h-3 rounded-full
                      ${item.highlight ? "bg-indigo-400" : "bg-slate-400"}
                      border-4 border-slate-950`}
                    />

                    {/* Card */}
                    <div
                      className={`rounded-xl p-5 border
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
    </section>
  );
}

export default Experience;
