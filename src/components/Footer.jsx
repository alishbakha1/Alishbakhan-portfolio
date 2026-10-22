import { Github, Linkedin, Mail } from "lucide-react";
import { NAV, SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [[Github, "GitHub", SITE.github, true], [Linkedin, "LinkedIn", SITE.linkedin, true], [Mail, "Email", `mailto:${SITE.email}`, false]];
  return (
    <footer className="bg-ink px-6 py-16 text-ivory md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-serif text-3xl">{SITE.name}</p>
          <p className="mt-2 text-ivory/70">{SITE.title}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="link-underline inline-block py-1.5 text-sm">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-1 md:col-span-3">
          {social.map(([Icon, name, href, external]) => (
            <li key={name}>
              <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="link-underline inline-flex items-center gap-2 py-1.5 text-sm">
                <Icon size={15} aria-hidden="true" />
                {name}
                {external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-14 max-w-7xl border-t border-ivory/20 pt-6 text-sm text-[#C9C4BA]">
        © {year} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
