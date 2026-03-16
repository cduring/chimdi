import { LinkedInIcon, GitHubIcon, EmailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="flex flex-col gap-4 justify-between items-center mx-auto max-w-6xl sm:flex-row">
        <span className="text-sm text-gray-600">
          © {new Date().getFullYear()} Chimdi During
        </span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/chimdiduring/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/cduring"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-white"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:chimdi.during@gmail.com"
            className="text-gray-600 transition-colors hover:text-white"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
