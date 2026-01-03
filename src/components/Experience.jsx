import { motion } from "framer-motion";

const experienceData = [
  {
    org: "BMSCE Phase Shift",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Event Organizer",
        period: "Oct 2024 – Dec 2024",
        highlight: true,
        points: [
          "Led end-to-end planning and execution of the DeathScape event.",
          "Managed stage design, laser maze setup, testing, and on-ground execution.",
        ],
        images: ["deathscape-event.jpg", "stage-setup.jpg"],
      },
      {
        title: "Event Coordinator",
        period: "Nov 2024 – Dec 2024",
        highlight: false,
        points: [
          "Coordinated multiple teams to ensure smooth event flow.",
          "Handled logistics, scheduling, and issue resolution during the event.",
        ],
        images: ["certificate.jpg"],
      },
      {
        title: "Sponsorship Coordinator",
        period: "Apr 2025 – May 2025",
        highlight: false,
        points: [
          "Handled sponsor outreach and negotiations.",
          "Ensured sponsor branding and deliverables were fulfilled.",
        ],
        images: ["sponsor-poster.jpg"],
      },
      {
        title: "Event Volunteer",
        period: "Nov 2023 – Dec 2023",
        highlight: false,
        points: [
          "Supported event execution and participant management.",
          "Assisted core team during peak event hours.",
        ],
        images: [],
      },
    ],
  },
  {
    org: "BMSCE UTSAV",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Club Event Organizer",
        period: "Apr 2025 – May 2025",
        highlight: true,
        points: [
          "Organized and executed DeathScape 2.0 during UTSAV.",
          "Managed team coordination and on-site operations.",
        ],
        images: ["deathscape-2.jpg"],
      },
      {
        title: "Student Volunteer",
        period: "May 2024",
        highlight: false,
        points: [
          "Volunteered in cultural fest operations.",
          "Assisted with coordination and crowd management.",
        ],
        images: ["utsav-certificate.jpg"],
      },
    ],
  },
  {
    org: "Rotaract Club of BMSCE",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Member",
        period: "Nov 2023 – May 2024",
        highlight: false,
        points: [
          "Participated in social service initiatives.",
          "Contributed to volunteering and community activities.",
        ],
        images: [],
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
          Experience
        </motion.h2>

        <div className="space-y-20">
          {experienceData.map((org, i) => (
            <div key={i} className="border-l-2 border-slate-800 pl-6">
              <h3 className="text-xl font-semibold text-indigo-400">
                {org.org}
              </h3>
              <p className="text-sm text-gray-400 mb-8">
                {org.location}
              </p>

              <div className="space-y-10">
                {org.roles.map((role, j) => (
                  <div key={j} className="relative pl-6">
                    {/* Timeline Dot */}
                    <span
                      className={`absolute -left-[14px] top-2 w-3 h-3 rounded-full 
                      ${role.highlight ? "bg-indigo-400" : "bg-slate-400"}
                      border-4 border-slate-950`}
                    />

                    <div
                      className={`rounded-xl p-5 border 
                      ${role.highlight
                        ? "bg-slate-900 border-indigo-500/40"
                        : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">
                          {role.title}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {role.period}
                        </span>
                      </div>

                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {role.points.map((p, k) => (
                          <li key={k}>{p}</li>
                        ))}
                      </ul>

                      {role.images.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                          {role.images.map((img, k) => (
                            <img
                              key={k}
                              src={`/experience/${img}`}
                              alt=""
                              className="rounded-lg border border-slate-700 object-cover"
                            />
                          ))}
                        </div>
                      )}
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
