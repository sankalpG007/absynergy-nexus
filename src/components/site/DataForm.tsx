import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { FormFieldConfig } from "@/data/forms";
import { submitForm } from "@/lib/submit-form";
import { cn } from "@/lib/utils";

function buildSchema(fields: FormFieldConfig[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    let base = z.string().trim().max(field.type === "textarea" ? 1500 : 160);
    if (field.type === "email") base = base.pipe(z.string().email("Enter a valid email address"));
    if (field.type === "tel")
      base = base.pipe(z.string().regex(/^[+\d][\d\s-]{7,19}$/, "Enter a valid phone number"));
    shape[field.name] = field.required
      ? base.pipe(z.string().min(1, `${field.label} is required`))
      : base.optional();
  }
  return z.object(shape);
}

export function DataForm({
  id,
  fields,
  formType,
  submitLabel,
}: {
  id: string;
  fields: FormFieldConfig[];
  formType: string;
  submitLabel: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = buildSchema(fields).safeParse(values);

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    const result = await submitForm(formType, parsed.data as Record<string, string>);
    setFeedback(result.message);
    setStatus(result.ok ? "done" : "error");
    if (result.ok) form.reset();
  }

  return (
    <form id={id} onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.name} className={cn("flex flex-col gap-2", field.full && "sm:col-span-2")}>
          <Label htmlFor={`${id}-${field.name}`} className="text-xs font-semibold">
            {field.label}
            {field.required ? <span className="text-accent"> *</span> : null}
          </Label>

          {field.type === "textarea" ? (
            <Textarea
              id={`${id}-${field.name}`}
              name={field.name}
              rows={4}
              placeholder={field.placeholder ?? ""}
              className="bg-card"
            />
          ) : field.type === "select" ? (
            <select
              id={`${id}-${field.name}`}
              name={field.name}
              defaultValue=""
              className="h-9 rounded-md border border-input bg-card px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="" disabled>
                Select a programme
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <Input
              id={`${id}-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder ?? ""}
              className="bg-card"
            />
          )}

          {errors[field.name] ? (
            <p className="text-xs text-destructive">{errors[field.name]}</p>
          ) : null}
        </div>
      ))}

      <div className="sm:col-span-2">
        <Button type="submit" variant="hero" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          {submitLabel}
        </Button>
        {feedback ? (
          <p
            role="status"
            className={cn(
              "mt-4 text-sm",
              status === "done" ? "text-emerald" : "text-destructive",
            )}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
