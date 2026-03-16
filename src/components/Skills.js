import FadeSection from "./FadeSection";

const skillGroups = [
  {
    label: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C/C++",
      "SQL",
      "HTML/CSS",
      "PHP",
    ],
  },
  {
    label: "Frameworks & Databases",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Flask",
      "SvelteKit",
      "PostgreSQL",
      "SQLAlchemy",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Supabase",
      "Linux",
      "VS Code",
      "Stripe API",
      "OpenAI API",
    ],
  },
  {
    label: "Libraries",
    items: [
      "TanStack Query",
      "Tailwind CSS",
      "React Native",
      "Pydantic",
      "Alembic",
      "Logfire",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <FadeSection>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Stack
          </p>
          <h2 className="section-heading">Skills</h2>
          <div className="section-subline" />
        </FadeSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <FadeSection key={i}>
              <div className="card">
                <h3 className="mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm text-gray-300 rounded-lg border transition-all duration-200 bg-white/5 border-white/8 hover:border-blue-500/40 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
