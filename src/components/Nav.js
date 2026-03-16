import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 border-b backdrop-blur-md bg-navy-950/90 border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 mx-auto max-w-6xl">
        <span className="text-lg font-bold tracking-tight text-white">
          CD<span className="text-blue-400">.</span>
        </span>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm tracking-wide text-gray-400 transition-colors duration-200 hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://www.linkedin.com/in/chimdiduring/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden gap-2 items-center px-4 py-2 text-sm font-medium text-blue-400 rounded-full border transition-all duration-200 md:inline-flex border-blue-500/50 hover:bg-blue-500/10"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
