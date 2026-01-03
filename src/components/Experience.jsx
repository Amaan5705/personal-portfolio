import { motion } from "framer-motion";

const experiences = [
  {
    eventKey: "phaseshift-2023",
    period: "Nov 2023 – Dec 2023",
    location: "Bengaluru, Karnataka, India",
    side: "right",
    roles: [
      {
        title: "Event Volunteer",
        fest: "Phase Shift",
        event: "Zapocalypse (Laser-Tag Event)",
        org: "BMSCE",
        points: [
          "Assisted in on-ground execution and participant coordination.",
          "Supported the core team during peak event hours.",
        ],
      },
    ],
  },
  {
    eventKey: "utsav-2024",
    period: "May 2024",
    location: "Bengaluru, Karnataka, India",
    side: "left",
    roles: [
      {
        title: "Student Volunteer",
        fest: "UTSAV",
        event: "Cultural Fest",
        org: "BMSCE",
        points: [
          "Volunteered during UTSAV cultural fest.",
          "Assisted with coordination and event operations.",
        ],
      },
    ],
  },
  {
    eventKey: "deathscape-2024",
    period: "Oct 2024 – Dec 2024",
    location: "Bengaluru, Karnataka, India",
    side: "right",
    roles: [
      {
        title: "Event Organizer",
        fest: "Phase Shift",
        event: "DeathScape",
        org: "BMSCE",
        points: [
          "Led planning and execution of the DeathScape event.",
          "Handled event setup, testing, and deployment.",
        ],
      },
      {
        title: "Event Coordinator",
        fest: "Phase Shift",
        event: "DeathScape",
        org: "BMSCE",
        points: [
          "Coordinated teams for smooth event flow.",
          "Managed logistics and issue resolution during the fest.",
        ],
      },
    ],
  },
  {
    eventKey: "vtvo-2025",
    period: "Mar 2025 – Jun 2025",
    location: "Bengaluru, Karnataka, India",
    side: "left",
    roles: [
      {
        title: "Member",
        fest: "V The Volunteers (VTVO)",
        event: "Social Service Activities",
        org: "VTVO",
        points: [
          "Participated in social service and volunteering initiatives.",
          "Contributed to community-driven outreach programs.",
        ],
      },
    ],
  },
  {
    eventKey: "deathscape-2-2025",
    period: "Apr 2025 – May 2025",
    location: "Bengaluru, Karnataka, India",
    side: "right",
    roles: [
      {
        title: "Club Event Organizer",
        fest: "UTSAV",
        event: "DeathScape 2.0",
        org: "BMSCE",
        points: [
          "Organized and executed DeathScape 2.0 during UTSAV.",
          "Managed team coordination and on-site execution.",
        ],
      },
      {
        title: "Sponsorship Coordinator",
        fest: "UTSAV",
        event: "DeathScape 2.0",
        org: "BMSCE",
        points: [
          "Handled sponsor outreach and negotiations.",
          "Managed sponsor branding and deliverables.",
        ],
      },
    ],
  },
  {
    eventKey: "deathscape-3-2025",
    period: "Aug 2025 – Sep 2025",
    location: "Bengaluru, Karnataka, India",
    side: "left",
    roles: [
      {
        title: "Club Event Organizer",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        points: [
          "Led end-to-end planning and execution of DeathScape 3.0.",
          "Supervised LED strip testing and final installations.",
          "Managed on-ground operations during the event.",
        ],
      },
      {
        title: "Student Fundraiser",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        points: [
          "Raised funds through student and sponsor outreach.",
          "Assisted in budgeting and expense coordination.",
        ],
      },
      {
        title: "Sponsorship Coordinator",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        points: [
          "Handled sponsorship acquisition and negotiations.",
          "Managed sponsor branding and promotional placements.",
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
          className="text-3xl md:text-4xl font-bold text-center mb-24"
        >
          Experience Timeline
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-600/70 -translate-x-1/2" />

          <div className="space-y-28">
            {[...experiences].reverse().map((exp) => {
              const isLeft = exp.side === "left";

              return (
                <div
                  key={exp.eventKey}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-10" : "justify-end pl-10"
                  }`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 z-10">
                    <div className="w-5 h-5 rounded-full border-4 border-emerald-500 bg-slate-950" />
                  </div>

                  {/* EXPERIENCE CARD WITH HOVER */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    viewport={{ once: true }}
                    className="w-full md:w-[46%] bg-slate-900/90 border border-slate-800 rounded-2xl p-6
                               hover:border-emerald-500/60 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)]
                               transition-colors"
                  >
                    <div className="flex justify-end mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    {exp.roles.map((role, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-white">
                          {role.title}
                        </h3>

                        <p className="text-sm text-gray-400 mb-2">
                          <span className="text-sky-400 font-medium">
                            {role.fest}
                          </span>{" "}
                          · {role.event} · {role.org}
                        </p>

                        <p className="text-xs text-gray-500 mb-3">
                          {exp.location}
                        </p>

                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          {role.points.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ul>

                        {idx !== exp.roles.length - 1 && (
                          <div className="my-5 border-t border-slate-700/60" />
                        )}
                      </div>
                    ))}
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


