import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label text-vermilion-deep">03 / Capabilities</p>
            <h2 id="skills-heading" className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Tools I Work With
            </h2>
          </div>
          <p className="max-w-md self-end text-lg leading-relaxed text-muted lg:col-span-5">
            The languages, frameworks and tools I use to design and build for the web.
          </p>
        </Reveal>

        <dl className="mt-16 border-t border-line">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04} className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-10">
              <dt className="font-serif text-2xl md:col-span-4">{g.title}</dt>
              <dd className="text-base leading-relaxed text-muted md:col-span-8 md:text-lg">{g.items.join(" · ")}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
