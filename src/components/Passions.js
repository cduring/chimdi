import FadeSection from "./FadeSection";

const passions = [
  {
    icon: "🎓",
    title: "STEM Education",
    desc: "Passionate about inspiring the next generation of Black engineers through hands-on teaching and mentorship.",
  },
  {
    icon: "🔐",
    title: "FinTech & Security",
    desc: "Fascinated by the intersection of finance and software security — building systems that are both powerful and trustworthy.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Products",
    desc: "Excited by products that harness AI to solve real user problems — from smarter customer service to adaptive learning tools.",
  },
  {
    icon: "🌍",
    title: "Tech for Good",
    desc: "Committed to building software that lifts communities and creates genuine opportunity, especially in underrepresented spaces.",
  },
];

export default function Passions() {
  return (
    <section className="px-6 py-28 bg-navy-900/30">
      <div className="mx-auto max-w-4xl">
        <FadeSection>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Interests
          </p>
          <h2 className="section-heading">What I Care About</h2>
          <div className="section-subline" />
        </FadeSection>

        <div className="grid gap-5 sm:grid-cols-2">
          {passions.map((p, i) => (
            <FadeSection key={i}>
              <div className="flex gap-4 card">
                <span className="flex-shrink-0 mt-0.5 text-2xl">{p.icon}</span>
                <div>
                  <h3 className="mb-1 font-semibold text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
