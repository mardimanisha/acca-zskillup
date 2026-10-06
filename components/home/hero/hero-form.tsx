"use client";

import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { heroContent } from "@/content/home-hero";
import { heroFormSchema, type HeroFormValues } from "@/lib/validations/hero-form";

const { form: copy } = heroContent;

const inputClass =
  "h-10 short:h-9 rounded-lg border-slate-200 bg-white text-sm text-brand-navy shadow-none focus-visible:border-brand-teal focus-visible:ring-brand-teal/30 aria-invalid:border-red-500";

function FieldRow({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="flex gap-3 tight:gap-0">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center tight:hidden justify-center rounded-full border border-slate-200 bg-white text-brand-teal shadow-sm"
      >
        <Icon className="size-4" />
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

function IndiaFlag() {
  return (
    <svg viewBox="0 0 18 12" className="h-3 w-[18px] rounded-[2px]" aria-hidden="true">
      <rect width="18" height="4" fill="#FF9933" />
      <rect y="4" width="18" height="4" fill="#FFFFFF" />
      <rect y="8" width="18" height="4" fill="#138808" />
      <circle cx="9" cy="6" r="1.4" fill="none" stroke="#000080" strokeWidth="0.4" />
    </svg>
  );
}

export function HeroForm() {
  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: HeroFormValues) {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    // TODO: show success / error message once copy is finalised.
    if (response.ok) {
      form.reset();
    }
  }

  return (
    <Card className="gap-0 rounded-2xl border-white/80 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(11,26,61,0.2)] sm:p-7 short:px-6 short:py-5">
      <h2 className="text-[22px] font-bold tracking-tight text-brand-navy short:text-xl">{copy.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-body short:mt-1">{copy.subtitle}</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-5 space-y-3 short:mt-3 short:space-y-1.5 tight:space-y-2">
          <div className="space-y-3 short:space-y-1.5 tight:grid tight:grid-cols-2 tight:gap-x-3 tight:gap-y-2 tight:space-y-0">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={User}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.fullName.label}
                    </FormLabel>
                    <FormControl>
                      <Input autoComplete="name" className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={Phone}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.mobile.label}
                    </FormLabel>
                    <div className="flex gap-2">
                      <div className="flex h-10 shrink-0 items-center gap-1.5 short:h-9 rounded-lg border border-slate-200 bg-white px-2.5 text-sm text-brand-navy">
                        <IndiaFlag />
                        <span>{copy.fields.mobile.countryCode}</span>
                        <ChevronDown className="size-4 text-slate-500" aria-hidden="true" />
                      </div>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          maxLength={10}
                          className={inputClass}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={Mail}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.email.label}
                    </FormLabel>
                    <FormControl>
                      <Input type="email" autoComplete="email" className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentEducation"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={BookOpen}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.currentEducation.label}
                    </FormLabel>
                    <Select value={field.value ?? ""} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger ref={field.ref} onBlur={field.onBlur} className={`${inputClass} w-full data-[size=default]:h-10 short:data-[size=default]:h-9`}>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {copy.fields.currentEducation.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programInterest"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={GraduationCap}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.programInterest.label}
                    </FormLabel>
                    <Select value={field.value ?? ""} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger ref={field.ref} onBlur={field.onBlur} className={`${inputClass} w-full data-[size=default]:h-10 short:data-[size=default]:h-9`}>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {copy.fields.programInterest.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <FieldRow icon={MapPin}>
                    <FormLabel className="mb-1 text-[13px] font-medium text-brand-navy">
                      {copy.fields.city.label}
                    </FormLabel>
                    <FormControl>
                      <Input autoComplete="address-level2" className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage className="sr-only" />
                  </FieldRow>
                </FormItem>
              )}
            />

          </div>

          <Button
            type="submit"
            variant="brand"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="mt-1 w-full text-base short:h-11"
          >
            {copy.submit}
            {isSubmitting ? (
              <Loader2 className="animate-spin" aria-hidden="true" />
            ) : (
              <ArrowRight aria-hidden="true" />
            )}
          </Button>

          <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
            <Lock className="mt-0.5 size-3.5 shrink-0 text-brand-teal" aria-hidden="true" />
            <span>{copy.consent}</span>
          </p>
        </form>
      </Form>
    </Card>
  );
}
