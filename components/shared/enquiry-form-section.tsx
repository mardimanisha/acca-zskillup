"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { cardClass, container, programButtonClass } from "@/components/programs/program-ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currentEducationOptions, programInterestOptions } from "@/content/home-hero";
import { selectProgramEvent } from "@/content/fees";
import { brochureOptions, enquiryFormContent as copy } from "@/content/program-shared";
import { heroFormSchema, programFormSchema, type HeroFormValues } from "@/lib/validations/hero-form";
import { cn } from "@/lib/utils";

type ProgramInterest = (typeof programInterestOptions)[number];

const fieldClass =
  "h-12 w-full rounded-lg border-zs-line bg-white px-4 text-[15px] text-zs-navy shadow-none focus-visible:border-zs-green focus-visible:ring-zs-green/30 aria-invalid:border-red-500";

const labelClass = "mb-1.5 text-sm font-semibold text-zs-navy";

type EnquiryFormProps = {
  defaultProgram?: ProgramInterest;
  /** Program pages: the program is fixed by the page, so the program and city fields are not shown. */
  hideProgramAndCity?: boolean;
  className?: string;
  /** "brochure": the program select is limited to programs with a brochure, and the button downloads it. */
  variant?: "advisor" | "brochure";
  /** Called after a successful submit (the modal closes itself here). */
  onSuccess?: () => void;
};

function downloadBrochure(program: string) {
  const brochure = brochureOptions.find((option) => option.program === program);
  if (!brochure) return;
  const link = document.createElement("a");
  link.href = brochure.href;
  link.download = brochure.fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/** The enquiry fields, submit button and consent line (no heading), reusable inside a modal. */
export function EnquiryForm({
  defaultProgram,
  hideProgramAndCity = false,
  className,
  variant = "advisor",
  onSuccess,
}: EnquiryFormProps) {
  const isBrochure = variant === "brochure";
  const form = useForm<HeroFormValues>({
    resolver: zodResolver(hideProgramAndCity ? programFormSchema : heroFormSchema) as Resolver<HeroFormValues>,
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      programInterest: defaultProgram,
    },
  });

  const { isSubmitting } = form.formState;
  const selectedProgram = form.watch("programInterest");

  // Pages (e.g. /fees) can pre-select "Interested In" before scrolling to the form.
  const { setValue } = form;
  useEffect(() => {
    const onSelect = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if ((programInterestOptions as readonly string[]).includes(value)) {
        setValue("programInterest", value as ProgramInterest, { shouldDirty: true });
      }
    };
    window.addEventListener(selectProgramEvent, onSelect);
    return () => window.removeEventListener(selectProgramEvent, onSelect);
  }, [setValue]);

  async function onSubmit(values: HeroFormValues) {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, requestType: variant }),
    });

    // TODO: show success / error message once copy is finalised.
    if (response.ok) {
      if (isBrochure) downloadBrochure(values.programInterest);
      form.reset();
      onSuccess?.();
    }
  }

  const selectField = (
    name: "currentEducation" | "programInterest",
    options: readonly string[],
    label: string = copy.fields[name],
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-0">
          <FormLabel className={labelClass}>{label}</FormLabel>
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                ref={field.ref}
                onBlur={field.onBlur}
                className={cn(fieldClass, "data-[size=default]:h-12")}
              >
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className={className}>
        <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="gap-0">
                      <FormLabel className={labelClass}>{copy.fields.fullName}</FormLabel>
                      <FormControl>
                        <Input autoComplete="name" className={fieldClass} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="gap-0">
                      <FormLabel className={labelClass}>{copy.fields.mobile}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          maxLength={10}
                          className={fieldClass}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="gap-0">
                      <FormLabel className={labelClass}>{copy.fields.email}</FormLabel>
                      <FormControl>
                        <Input type="email" autoComplete="email" className={fieldClass} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {selectField("currentEducation", currentEducationOptions)}
                {isBrochure
                  ? selectField(
                      "programInterest",
                      brochureOptions.map((option) => option.program),
                      copy.brochure.programLabel,
                    )
                  : !hideProgramAndCity && selectField("programInterest", programInterestOptions)}
                {!hideProgramAndCity && (
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="gap-0">
                      <FormLabel className={labelClass}>{copy.fields.city}</FormLabel>
                      <FormControl>
                        <Input autoComplete="address-level2" className={fieldClass} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || (isBrochure && !selectedProgram)}
                aria-busy={isSubmitting}
                className={programButtonClass("primary", "mt-8 w-full disabled:opacity-70 sm:w-auto")}
              >
                {isBrochure ? copy.brochure.submit : copy.submit}
                {isSubmitting && <Loader2 className="animate-spin" aria-hidden="true" />}
              </button>

              <p className="mt-4 text-[13px] leading-relaxed text-zs-body">{copy.consent}</p>
            
      </form>
    </Form>
  );
}

/** Site-wide enquiry form. Every "Talk to an Advisor" CTA links to `#enquiry-form`. */
export function EnquiryFormSection({ defaultProgram, hideProgramAndCity = false }: EnquiryFormProps) {
  return (
    <section
      id={copy.id}
      aria-labelledby="enquiry-form-title"
      className="scroll-mt-[76px] bg-zs-mint"
    >
      {/* Alias for the header's "Talk to an Advisor" link. */}
      <span id="talk-to-advisor" aria-hidden="true" className="block scroll-mt-[76px]" />
      <div className={cn(container, "section-y")}>
        <div className={cn(cardClass, "mx-auto max-w-4xl p-6 sm:p-10")}>
          <h2
            id="enquiry-form-title"
            className="text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zs-navy md:text-[40px]"
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-zs-body">{copy.subtitle}</p>

          <EnquiryForm
            defaultProgram={defaultProgram}
            hideProgramAndCity={hideProgramAndCity}
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
}
