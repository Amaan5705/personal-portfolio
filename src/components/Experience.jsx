import { motion } from "framer-motion";

const logoMap = {
  "deathscape-3-2025": "/experience/phase-shift.png",
  "utsav-2025": "/experience/utsav.png",
  "vtvo-2025": "/experience/vtvo.png",
  "deathscape-2024": "/experience/phase-shift.png",
  "rotract-2024": "/experience/rotract.png",
  "phaseshift-2023": "/experience/phase-shift.png",
};

const experiences = [
  {
    eventKey: "deathscape-3-2025",
    period: "Aug 2025 – Sep 2025",
    roles: [
      {
        title: "Club Event Organizer",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        impact: [
          "Founder of the event",
          "450+ participants",
          "Zero downtime",
          "End-to-end ownership",
        ],
        points: [
          "Conceptualized and founded DeathScape 3.0 as a flagship event.",
          "Led end-to-end planning and execution.",
          "Supervised LED strip testing and final installations.",
          "Managed on-ground operations during peak hours.",
        ],
      },
      {
        title: "Student Fundraiser",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        impact: ["Fund mobilisation", "Student outreach"],
        points: [
          "Raised funds through student outreach and internal promotions.",
          "Assisted in budgeting and financial planning.",
        ],
      },
      {
        title: "Sponsorship Coordinator",
        fest: "Phase Shift",
        event: "DeathScape 3.0",
        org: "BMSCE",
        impact: ["Sponsor acquisition", "Brand placements"],
        points: [
          "Handled sponsor acquisition and negotiations.",
          "Managed sponsor branding and on-ground visibility.",
        ],
      },
    ],
  },

  {
    eventKey: "utsav-2025",
    period: "Apr 2025 – May 2025",
    roles: [
      {
        title: "Club Event Organizer",
        fest: "UTSAV",
        event: "DeathScape 2.0",
        org: "BMSCE",
        impact: ["400+ participants", "Event execution"],
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
        impact: ["₹40k raised", "Sponsor outreach"],
        points: [
          "Handled sponsor outreach and negotiations.",
          "Managed sponsor branding and deliverables.",
        ],
      },
    ],
  },

  {
    eventKey: "vtvo-2025",
    period: "Mar 2025 – Jun 2025",
    roles: [
      {
        title: "Member",
        fest: "V The Volunteers (VTVO)",
        event: "Social Service Activities",
        org: "VTVO",
        impact: [
          "Community service",
          "Social outreach",
          "Volunteer engagement",
        ],
        points: [
          "Participated in social service and volunteering initiatives.",
          "Contributed to community-driven outreach programs.",
        ],
      },
    ],
  },

  {
    eventKey: "deathscape-2024",
    period: "Oct 2024 – Dec 2024",
    roles: [
      {
        title: "Event Organizer",
        fest: "Phase Shift",
        event: "DeathScape",
        org: "BMSCE",
        impact: ["₹80k raised (Whatfix & Yucca)", "Highest grossing event"],
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
        impact: ["500+ participants", "Team coordination"],
        points: [
          "Coordinated teams for smooth event flow.",
          "Managed logistics and issue resolution during the fest.",
        ],
      },
    ],
  },

  {
    eventKey: "rotract-2024",
    period: "Nov 2023 – May 2024",
    roles: [
      {
        title: "Member",
        fest: "Rotaract Club of BMSCE",
        event: "Community & Club Activities",
        org: "Rotaract",
        impact: ["Community outreach", "Volunteer engagement"],
        points: [
          "Participated in Rotaract-led community service initiatives.",
          "Assisted in organizing and volunteering for club activities.",
        ],
      },
    ],
  },

  {
    eventKey: "phaseshift-2023",
    period: "Nov 2023 – Dec 2023",
    roles: [
      {
        title: "Event Volunteer",
        fest: "Phase Shift",
        event: "Zapocalypse (Laser-Tag Event)",
        org: "BMSCE",
        impact: [
          "200+ participants",
          "₹1L sponsorship (Bosch)",
          "On-ground execution",
          "Crowd coordination",
        ],
        points: [
          "Assisted in on-ground execution and participant coordination.",
          "Supported the core team during peak event hours.",
        ],
      },
      {
        title: "Student Fundraiser",
        fest: "Phase Shift",
        event: "Tech Fest Fundraising",
        org: "BMSCE",
        impact: ["Sponsor outreach", "Budget coordination"],
        points: [
          "Assisted in fundraising through sponsor and student outreach.",
          "Supported budgeting and expense planning.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24">
          Experience Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-600/70 -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const logo = logoMap[exp.eventKey];

              return (
                <div
                  key={exp.eventKey}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-10" : "justify-end pl-10"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="w-5 h-5 rounded-full border-4 border-emerald-500 bg-slate-950"
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-[46%] bg-slate-900/90 border border-slate-800 rounded-2xl p-6
                               hover:border-emerald-500/60
                               hover:shadow-[0_25px_45px_-15px_rgba(16,185,129,0.35)]"
                  >
                    {/* Logo with idle float */}
                    {logo && (
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ y: -10, scale: 1.08 }}
                        className="absolute -top-6 left-6 rounded-xl p-2 bg-slate-950 border border-slate-700
                                   shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                      >
                        <img src={logo} alt="" className="w-10 h-10 object-contain" />
                      </motion.div>
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

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 my-3">
                          {role.impact.map((tag, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ y: -2, scale: 1.06 }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                              className="px-3 py-1 text-xs font-medium rounded-full
                                         bg-gradient-to-r from-emerald-500/15 to-cyan-500/15
                                         text-emerald-300 border border-emerald-400/30
                                         hover:border-cyan-400
                                         hover:shadow-[0_0_15px_rgba(34,211,238,0.45)]"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

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
