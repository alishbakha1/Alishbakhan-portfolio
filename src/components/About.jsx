import Reveal from "./Reveal";

const highlights = [
  "Full-Stack Web Development",
  "UI/UX & Responsive Design",
  "Creative Problem-Solving",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label text-vermilion-deep">01 / About</p>
          <h2
            id="about-heading"
            className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            Who is Alishba Mustaqeem?
          </h2>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-3">
          <Reveal delay={0.1}>
            <p className="max-w-2xl font-serif text-xl leading-[1.7] md:text-2xl md:leading-[1.65]">
              I’m a developer who likes building digital products that are useful, easy to use, and visually polished.
              I work across the frontend and the backend, from responsive React interfaces to Node.js, ASP.NET Core and
              PHP applications backed by MongoDB and MySQL.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              I enjoy solving problems, turning rough ideas into working features, and paying attention to the small
              details that make an interface feel considered. Responsive design, practical functionality and continuous
              learning guide how I build.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-x-6 gap-y-5 sm:grid-cols-3">
            {highlights.map((label, i) => (
              <li key={label}>
                <Reveal delay={0.1 + i * 0.08} className="h-full border-t border-line py-4">
                  <span className="label text-vermilion-deep">0{i + 1}</span>
                  <p className="mt-3 font-serif text-lg leading-snug">{label}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
