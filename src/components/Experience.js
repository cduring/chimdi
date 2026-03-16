import FadeSection from "./FadeSection";

const experiences = [
  {
    company: "Canonical Labs",
    role: "Full Stack Software Engineer",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    bullets: [
      "Engineering secure enterprise-grade FinTech workflows integrating Stripe API with Canonical's Shield SDK, surfacing enriched device and session metadata to Stripe Radar for fraud detection",
      "Maintaining FastAPI REST endpoints with Python & SQLAlchemy, keeping 90% unit test coverage on critical payment and security paths",
      "Participating in CI/CD pipelines using GitHub Actions to automate testing and deployment",
    ],
    tags: ["Python", "FastAPI", "Stripe API", "SQLAlchemy", "CI/CD"],
    current: true,
  },
  {
    company: "Generis Group",
    role: "Web Developer",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Built and deployed Genie — an AI-powered customer service chatbot — using Python, FastAPI, JavaScript, and OpenAI's API, contributing to a 10% increase in access requests and 5% rise in inbound sales",
      "Automated routine updates for 18+ event websites with scheduled scripts and improved SEO performance across microsites",
    ],
    tags: ["Python", "FastAPI", "JavaScript", "OpenAI", "SEO"],
    current: false,
  },
  {
    company: "Black Boys Code",
    role: "Lead STEM Instructor",
    period: "Nov 2024 – Present",
    location: "Waterloo, ON",
    bullets: [
      "Design and facilitate engaging STEM workshops inspiring curiosity and a passion for technology among 100+ students",
      "Collaborate with volunteers and coordinators to plan and execute events ensuring a seamless experience for all participants",
    ],
    tags: ["STEM Education", "Leadership", "Community"],
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <FadeSection>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Career
          </p>
          <h2 className="section-heading">Experience</h2>
          <div className="section-subline" />
        </FadeSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden absolute top-0 bottom-0 left-0 ml-3 w-px bg-gradient-to-b to-transparent from-blue-500/60 via-blue-500/20 md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeSection key={i}>
                <div className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="flex hidden absolute left-0 top-2 justify-center items-center ml-0 w-7 h-7 rounded-full border-2 border-blue-500 -translate-x-1/2 md:block bg-navy-950">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${exp.current ? "bg-blue-400 animate-pulse" : "bg-blue-700"}`}
                    />
                  </div>

                  <div className="card">
                    <div className="flex flex-wrap gap-2 justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs text-gray-400">
                          {exp.period}
                        </span>
                        <p className="text-xs text-gray-500">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mb-4 space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm leading-relaxed text-gray-400"
                        >
                          <span className="flex-shrink-0 mt-1 text-blue-500">
                            ›
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
