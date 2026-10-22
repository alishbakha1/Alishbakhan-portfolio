import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);
// Desktop column spans (out of 6) for the gallery; mixes wide and narrow tiles.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl border-t border-line pt-10">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label text-vermilion-deep">02 / Work</p>
            <h2 id="work-heading" className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-md self-end text-lg leading-relaxed text-muted lg:col-span-5">
            A selection of projects built through experimentation, problem-solving, and hands-on development.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {featured.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} variant="feature" flip={i % 2 === 1} index={i} />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-28 border-b border-line pb-4 font-serif text-2xl md:mt-36">More projects</h3>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {rest.map((p, i) => (
            <li key={p.id} className={spans[i] ?? "lg:col-span-2"}>
              <Reveal className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
