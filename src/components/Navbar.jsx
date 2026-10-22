import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id) =>
    `link-underline py-1 text-sm ${active === id ? "text-vermilion-deep" : "text-ink"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ivory/95 shadow-[0_4px_20px_rgba(25,25,25,0.04)] backdrop-blur-xl"
          : "border-line bg-ivory/95"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-serif text-2xl leading-none tracking-tight" aria-label="Alishba Mustaqeem, back to top">
          AM<span className="text-vermilion">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.filter((n) => n.id !== "contact").map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={linkClass(n.id)} aria-current={active === n.id ? "true" : undefined}>
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              aria-current={active === "contact" ? "true" : undefined}
              className="inline-flex min-h-10 items-center rounded-sm border border-line bg-cream px-5 text-sm transition-colors hover:border-vermilion hover:bg-vermilion hover:text-ink"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ivory md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="px-6 py-8">
              {NAV.map((n) => (
                <li key={n.id} className="border-b border-line">
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center justify-between font-sans text-xl font-medium"
                    aria-current={active === n.id ? "true" : undefined}
                  >
                    {n.label}
                    {active === n.id && <span className="label text-vermilion-deep">Here</span>}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
