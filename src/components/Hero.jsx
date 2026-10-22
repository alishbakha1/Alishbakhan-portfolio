import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SITE } from "../data/site";
import { projects } from "../data/projects";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const heroProjects = ["biteflow", "marketlink", "coffee"]
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

function ProjectCollage() {
  const [feature, ...supporting] = heroProjects;

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
        <p className="label text-muted">Selected projects</p>
        <p className="font-mono text-xs text-muted">01—03</p>
      </div>

      <figure className="overflow-hidden border border-line bg-cream shadow-[0_18px_48px_rgba(25,25,25,0.08)]">
        <img
          src={feature.image}
          alt={feature.imageAlt}
          width="1440"
          height="900"
          className="aspect-[16/10] w-full object-cover"
        />
        <figcaption className="flex items-center justify-between gap-4 px-4 py-3">
          <span className="font-serif text-lg">{feature.title}</span>
          <span className="label text-right text-muted">{feature.category}</span>
        </figcaption>
      </figure>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {supporting.map((project) => (
          <figure key={project.id} className="overflow-hidden border border-line bg-cream">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1280"
              height="800"
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="px-3 py-2.5">
              <span className="font-serif text-base">{project.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center overflow-hidden px-6 pb-16 pt-28 md:min-h-[92svh] md:px-10 md:pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <motion.div className="lg:col-span-7" variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="label text-vermilion-deep">
            Full-Stack Developer &amp; UI/UX Designer
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 max-w-[13ch] font-serif text-[clamp(2.35rem,5.2vw,4.6rem)] font-normal leading-[1.06] tracking-[-0.025em]"
          >
            I build <span className="text-vermilion-deep">digital</span> experiences that mean something.
          </motion.h1>
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-ink" />
            <p className="font-serif text-xl italic">{SITE.name}</p>
          </motion.div>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I turn ideas into thoughtful, responsive, and functional digital experiences through development, design,
            and creative problem-solving.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center rounded-sm bg-vermilion px-7 text-sm font-medium text-ink transition-colors hover:bg-vermilion-deep hover:text-ivory"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="link-underline inline-flex min-h-12 items-center gap-1 py-2 text-sm font-medium"
            >
              Let&apos;s Connect
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
            <p className="inline-flex items-center gap-2 text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-vermilion" />
              Open to Opportunities
            </p>
            <span aria-hidden="true" className="h-4 w-px bg-line" />
            <ul className="flex items-center gap-1">
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-vermilion-deep"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-vermilion-deep"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectCollage />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="label">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
