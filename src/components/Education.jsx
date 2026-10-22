import { education, kindLabels } from "../data/education";
import Reveal from "./Reveal";

function Tag({ kind }) {
  const tone =
    kind === "ongoing" ? "border-vermilion-deep text-vermilion-deep" : kind === "certification" ? "border-ink text-ink" : "border-line text-muted";
  return (
    <span className={`label inline-block border px-2 py-0.5 ${tone} ${kind === "future" ? "border-dashed" : ""}`}>
      {kindLabels[kind]}
    </span>
  );
}

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="label text-vermilion-deep">04 / Education</p>
            <h2 id="education-heading" className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
              Education &amp;
              <br />
              Certifications
            </h2>
            <ul className="label mt-10 hidden space-y-3 text-muted lg:block" aria-label="Key">
              <li>Certification</li>
              <li>Completed</li>
              <li>Completed</li>
              <li>Planned</li>
            </ul>
          </div>
        </Reveal>

        <ol className="relative ml-1.5 border-l border-line lg:col-span-7">
          {education.map((e, i) => (
            <li key={e.id} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <Reveal delay={i * 0.05}>
                <span aria-hidden="true" className="absolute left-0 top-2 block h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-ivory bg-vermilion" />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Tag kind={e.kind} />
                  {e.meta?.map((m) => (
                    <span key={m} className="font-mono text-xs tracking-wide text-muted">{m}</span>
                  ))}
                </div>
                <h3 className={`mt-3 font-serif text-2xl leading-snug md:text-[1.75rem] ${e.kind === "future" ? "text-muted" : ""}`}>
                  {e.title}
                </h3>
                {e.institution && <p className="mt-2 text-base">{e.institution}</p>}
                {e.note && <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">{e.note}</p>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
