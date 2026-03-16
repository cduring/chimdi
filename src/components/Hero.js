import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="about"
      className="flex overflow-hidden relative items-center min-h-screen"
    >
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" /> */}
      <div className="absolute inset-0 bg-[#020818]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-blue-600/10" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-cyan-600/8" />

      {/* Portrait — large, dark, spectral */}
      <div
        className="hidden absolute inset-y-0 right-0 md:block animate-fade-in"
        style={{ width: "58%", animationDuration: "2s" }}
      >
        <img
          src="/headshot.png"
          alt=""
          aria-hidden="true"
          className="object-cover object-top w-full h-full"
          style={{
            filter: "brightness(0.28) saturate(0.5) contrast(1.15)",
            mixBlendMode: "luminosity",
          }}
        />
        {/* Left edge — primary dissolve into background */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "60%",
            background:
              "linear-gradient(to right, #020818 0%, #020818 30%, transparent 100%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t to-transparent from-navy-950" />
        {/* Overall navy tint */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(2, 8, 24, 0.38)" }}
        />
      </div>

      <div className="relative z-10 px-8 py-2 md:px-16 lg:px-24">
        {/* Text — left-aligned */}
        <div className="max-w-xl text-left">
          <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase opacity-0 animate-fade-in">
            Chimdi During
          </p>
          <p className="mb-8 max-w-md text-4xl leading-relaxed text-white opacity-0 animate-fade-up-delay">
            CS student at the University of Waterloo building secure, scalable
            software — from FinTech payment flows to AI-powered web apps. I care
            about technology that{" "}
            <span className="font-medium text-blue-500">
              actually makes an impact
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up-delay2">
            <a
              href="https://www.linkedin.com/in/chimdiduring/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-200 hover:bg-blue-500 shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/cduring"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-3 text-sm font-semibold text-white rounded-full border transition-all duration-200 border-white/15 hover:border-white/40 hover:bg-white/5"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="#contact"
              className="flex gap-2 items-center px-6 py-3 text-sm font-semibold text-blue-400 rounded-full border transition-all duration-200 border-blue-500/40 hover:bg-blue-500/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex absolute bottom-8 left-1/2 flex-col gap-2 items-center text-gray-600 -translate-x-1/2">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
