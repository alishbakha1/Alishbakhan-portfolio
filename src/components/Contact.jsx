import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "../data/site";
import Reveal from "./Reveal";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(v.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (!v.message.trim()) errors.message = "Write a short message.";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">{label} <span className="text-muted">(required)</span></label>
      {children}
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-vermilion-deep">Error: {error}</p>}
    </div>
  );
}

const inputClass =
  "mt-2 w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-vermilion-deep focus-visible:outline-2";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: "error", text: "Please fix the highlighted fields and try again." });
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    if (ENDPOINT) {
      setStatus({ type: "loading", text: "Sending your message…" });
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus({ type: "success", text: "Message sent. Thank you — I’ll reply by email." });
        setValues({ name: "", email: "", message: "" });
      } catch {
        setStatus({ type: "error", text: `Your message could not be sent. Please email ${SITE.email} directly.` });
      }
      return;
    }

    // No form service configured: prepare an email in the visitor's own mail app.
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${values.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: "info", text: "Your email app should open with the message ready. Nothing is sent until you press Send there." });
  };

  const aria = (id) => ({ "aria-invalid": errors[id] ? "true" : undefined, "aria-describedby": errors[id] ? `${id}-error` : undefined });

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label text-vermilion-deep">05 / Contact</p>
          <h2 id="contact-heading" className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Let’s connect and turn your next idea into something meaningful.
          </p>
          <a href={`mailto:${SITE.email}`} className="link-underline mt-8 inline-flex items-center gap-3 break-all py-2 font-serif text-xl md:text-2xl">
            <Mail size={22} aria-hidden="true" className="shrink-0 text-vermilion-deep" />
            {SITE.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[[Github, "GitHub", SITE.github], [Linkedin, "LinkedIn", SITE.linkedin]].map(([Icon, name, href]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-line bg-cream px-4 text-sm font-medium transition-colors hover:border-vermilion hover:bg-vermilion hover:text-ink">
                  <Icon size={16} aria-hidden="true" />
                  {name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={onSubmit} noValidate className="space-y-6 border border-line bg-cream p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} className={inputClass} {...aria("name")} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className={inputClass} {...aria("email")} />
              </Field>
            </div>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange} className={`${inputClass} resize-y`} {...aria("message")} />
            </Field>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex min-h-12 items-center rounded-sm bg-vermilion px-8 text-sm font-medium text-ink transition-colors hover:bg-vermilion-deep hover:text-ivory disabled:opacity-60"
              >
                {ENDPOINT ? "Send message" : "Prepare email"}
              </button>
              {!ENDPOINT && (
                <p className="max-w-xs text-sm text-muted">
                  This form is not connected to an email service yet. It opens your email app with your message ready to send.
                </p>
              )}
            </div>

            <div role="status" aria-live="polite" className="min-h-6">
              {status.text && (
                <p className={`text-sm ${status.type === "error" ? "text-vermilion-deep" : "text-ink"}`}>
                  <strong className="font-medium">
                    {{ error: "Error: ", success: "Success: ", info: "Next step: ", loading: "" }[status.type]}
                  </strong>
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
