import { ExternalLink, Github } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

function Links({ project }) {
  if (!project.links.length) {
    return project.status ? <p className="label text-muted">{project.status}</p> : null;
  }
  return (
    <ul className="flex flex-wrap gap-3">
      {project.links.map((l) => {
        const Icon = l.kind === "live" ? ExternalLink : Github;
        return (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center gap-2 px-4 text-sm font-medium transition-colors ${
                l.kind === "live"
                  ? "bg-ink text-ivory hover:bg-vermilion-deep"
                  : "border border-ink hover:bg-ink hover:text-ivory"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {l.label}
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Tech({ items }) {
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="border border-line px-2.5 py-1 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

// variant "feature": large two-column showcase. variant "tile": compact gallery card.
export default function ProjectCard({ project, variant = "tile", flip = false, index }) {
  const label = project.imageAlt;

  if (variant === "feature") {
    return (
      <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className={`overflow-hidden rounded-xl border border-line bg-cream shadow-[0_24px_60px_rgba(25,25,25,0.08)] lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]">
            <ProjectPreview image={project.image} label={label} ratio="aspect-[16/10]" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="label text-vermilion-deep">Featured · {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">{project.title}</h3>
          <p className="mt-2 font-mono text-sm text-muted">{project.category}</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed">{project.description}</p>
          <div className="mt-6"><Tech items={project.tech} /></div>
          <div className="mt-8"><Links project={project} /></div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-vermilion hover:shadow-[0_18px_45px_rgba(25,25,25,0.10)] focus-within:border-ink">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04]">
          <ProjectPreview image={project.image} label={label} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-muted">{project.category}</p>
        <h3 className="mt-2 font-serif text-2xl leading-snug">{project.title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5"><Tech items={project.tech} /></div>
        <div className="mt-auto pt-6"><Links project={project} /></div>
      </div>
    </article>
  );
}
