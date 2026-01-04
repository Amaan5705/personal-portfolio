import { motion } from "framer-motion";

/* Map eventKey → logo (served from public/) */
const logoMap = {
  "phaseshift-2023": "/experience/phase-shift.png",
  "deathscape-2024": "/experience/phase-shift.png",
  "deathscape-3-2025": "/experience/phase-shift.png",

  "utsav-2024": "/experience/utsav.png",
  "deathscape-2-2025": "/experience/utsav.png",

  "vtvo-2025": "/experience/vtvo.png",
  "rotract-2024": "/experience/rotract.png",
};

const experiences = [
  {
    eventKey: "phaseshift-2023",
    period: "Nov 2023 – Dec 2023",
    location: "Bengaluru, Karnataka, India",
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
    eventKey: "rotract-2024",
    period: "Nov 2023 – May 2024",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Member",
        fest: "Rotaract Club of BMSCE",
        event: "Community & Club Activities",
        org: "Rotaract",
        points: [
          "Participated in Rotaract-led community service initiatives.",
          "Assisted in organizing and volunteering for club activities.",
        ],
      },
    ],
  },
  {
    eventKey: "utsav-2024",
    period: "May 2024",
    location: "Bengaluru, Karnataka, India",
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
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-600/70 -translate-x-1/2" />

          <div className="space-y-16">
            {[...experiences].reverse().map((exp, index) => {
              const isLeft = index % 2 === 0;
              const logo = logoMap[exp.eventKey];

              return (
                <div
                  key={exp.eventKey}
                  className={`relative flex items-start ${
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
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-[46%] bg-slate-900/90 border border-slate-800 rounded-2xl p-6
                               hover:border-emerald-500/60 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)]
                               transition-colors"
                  >
                    {/* Logo */}
                    {logo && (
                      <div className="absolute -top-6 left-6 bg-slate-950 rounded-xl p-2 border border-slate-700">
                        <img
                          src={logo}
                          alt="organization logo"
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    )}

                    {/* Period */}
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

