import { motion } from "framer-motion";

/* eventKey → logo path (from public/experience) */
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
        impact: ["On-ground execution", "Crowd coordination"],
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
        impact: ["Community outreach", "Volunteer coordination"],
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
        impact: ["Event operations", "Team support"],
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
        impact: ["300+ participants", "End-to-end execution"],
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
        impact: ["Team coordination", "Live issue resolution"],
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
        impact: ["Community service", "Social outreach"],
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
        impact: ["Multi-team coordination", "Smooth execution"],
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
        impact: ["Sponsor outreach", "Brand partnerships"],
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
        impact: ["Large-scale execution", "Zero downtime"],
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
        impact: ["₹50k+ raised", "Sponsor coordination"],
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
        impact: ["Sponsorship acquisition", "Brand placements"],
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
          {/* timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-600/70 -translate-x-1/2" />

          <div className="space-y-16">
            {[...experiences].reverse().map((exp, index) => {
              const isLeft = index % 2 === 0;
              const logo = logoMap[exp.eventKey];

              return (
                <div
                  key={exp.eventKey}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-10" : "justify-end pl-10"
                  }`}
                >
                  {/* dot pulse */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="w-5 h-5 rounded-full border-4 border-emerald-500 bg-slate-950
                                 shadow-[0_0_0_0_rgba(16,185,129,0.6)]
                                 animate-pulse-once"
                    />
                  </div>

                  {/* card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-[46%] bg-slate-900/90 border border-slate-800
                               rounded-2xl p-6 hover:border-emerald-500/60
                               hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)]"
                  >
                    {/* logo */}
                    {logo && (
                      <div className="absolute -top-6 left-6 rounded-xl p-2 bg-slate-950
                                      border border-slate-700 transition-all duration-300
                                      hover:border-emerald-400
                                      hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                        <img
                          src={logo}
                          alt="logo"
                          className="w-10 h-10 object-contain grayscale opacity-70
                                     hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    )}

                    <div className="flex justify-end mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-400">
                        {exp.period}
                      </span>
                    </div>

                    {exp.roles.map((role, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-white">
                          {role.title}
                        </h3>

                        {/* impact tags */}
                        {role.impact && (
                          <div className="flex flex-wrap gap-2 my-2">
                            {role.impact.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs rounded-full
                                           bg-emerald-500/10 text-emerald-400
                                           border border-emerald-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-sm text-gray-400 mb-2">
                          <span className="text-sky-400 font-medium">
                            {role.fest}
                          </span>{" "}
                          · {role.event} · {role.org}
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

