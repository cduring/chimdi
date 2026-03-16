import FadeSection from "./FadeSection";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

const projects = [
  {
    name: "TrivMe",
    description:
      "A full-stack trivia game platform with real-time scoring and live lobbies. Users can create rooms, join games, and compete with dynamically AI-generated questions.",
    link: "https://github.com/cduring/trivme",
    live: "https://triv-me.vercel.app",
    tags: [
      "React",
      "FastAPI",
      "Supabase",
      "OpenAI",
      "Tailwind CSS",
      "TanStack Query",
    ],
    highlight: true,
  },
  {
    name: "Attentive Learn",
    description:
      "A React-based quiz platform that uses OpenCV to monitor user attentiveness during a quiz.",
    link: "https://github.com/cduring/attentive-learn",
    tags: ["React", "OpenCV", "Supervision", "FastAPI"],
    highlight: false,
  },
  {
    name: "Genie AI Chatbot",
    description:
      "An AI based customer service Chatbot used by Generis Group to direct visitors to creating access requests..",
    tags: ["JavaScript", "Python", "FastAPI", "OpenAI API"],
    highlight: false,
  },
  {
    name: "Cuphead Mania",
    description:
      "A 2D mini-game inspired by Cuphead, featuring projectile shooting, collision detection, and gravity mechanics.",
    live: "https://drive.google.com/file/d/1h3xE_gs5eUN6ErQebLMUEkCuOh2mK4Rd/view",
    tags: ["Java", "JavaFX"],
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 bg-navy-900/30">
      <div className="mx-auto max-w-4xl">
        <FadeSection>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Work
          </p>
          <h2 className="section-heading">Projects</h2>
          <div className="section-subline" />
        </FadeSection>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <FadeSection key={i}>
              <div
                className={`card group ${p.highlight ? "border-blue-500/25" : ""}`}
              >
                <div className="flex gap-4 justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {p.name}
                  </h3>
                  <div className="flex flex-shrink-0 gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-white"
                        title="Live site"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-white"
                        title="GitHub"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <p className="mt-6 text-sm text-center text-gray-500">
            More on{" "}
            <a
              href="https://github.com/cduring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub →
            </a>
          </p>
        </FadeSection>
      </div>
    </section>
  );
}
