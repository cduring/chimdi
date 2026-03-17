import FadeSection from "./FadeSection";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 bg-navy-900/30">
      <div className="mx-auto max-w-2xl text-center">
        <FadeSection>
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Say hello
          </p>
          <h2 className="section-heading">Get In Touch</h2>
          <div className="mx-auto section-subline" />
          <p className="mb-10 text-base leading-relaxed text-gray-400">
            Whether it's an opportunity, a collaboration, or just a chat about
            tech — I'm always open to connecting.
          </p>

          <div className="flex flex-col gap-4 justify-center mb-12 sm:flex-row">
            <a
              href="mailto:chimdi.during@gmail.com"
              className="flex gap-2 justify-center items-center px-8 py-4 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-200 hover:bg-blue-500 shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              <EmailIcon /> chimdi.during@gmail.com
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/chimdiduring/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/cduring"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
