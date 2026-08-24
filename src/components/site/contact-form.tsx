import { useState } from "react";
import { toast } from "sonner";
import { Magnetic } from "./primitives";
import { CONTACT } from "@/data/sttps";

const FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company", type: "text" },
] as const;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        // No backend exists yet — hand off to the visitor's own email client
        // instead of pretending the message was sent somewhere.
        const subject = `Message from ${values.name}${values.company ? ` (${values.company})` : ""}`;
        const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
        const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        toast.success("Opening your email app…", {
          description: `This message will go to ${CONTACT.email}.`,
        });
      }}
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {FIELDS.map((f) => (
          <label key={f.name} className="block">
            <span className="label-xs text-muted-foreground">{f.label}</span>
            <input
              required={f.name !== "company"}
              type={f.type}
              value={values[f.name]}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
              className="mt-3 w-full border-b border-foreground/20 bg-transparent pb-3 text-lg outline-none transition-colors focus:border-foreground"
            />
          </label>
        ))}
      </div>

      <label className="mt-10 block">
        <span className="label-xs text-muted-foreground">Message</span>
        <textarea
          required
          rows={3}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="mt-3 w-full resize-none border-b border-foreground/20 bg-transparent pb-3 text-lg outline-none transition-colors focus:border-foreground"
        />
      </label>

      <div className="mt-10">
        <Magnetic>
          <button
            type="submit"
            data-cursor="SEND →"
            className="label-xs group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85"
          >
            Send Message
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
