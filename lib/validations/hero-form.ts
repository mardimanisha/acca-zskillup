import { z } from "zod";

import {
  currentEducationOptions,
  programInterestOptions,
} from "@/content/home-hero";

// TODO: add field-level validation message copy once finalised.
export const heroFormSchema = z.object({
  fullName: z.string().trim().min(2),
  mobile: z.string().trim().regex(/^\d{10}$/),
  email: z.string().trim().min(1).email(),
  currentEducation: z.enum(currentEducationOptions),
  programInterest: z.enum(programInterestOptions),
  city: z.string().trim().min(1),
});

export type HeroFormValues = z.infer<typeof heroFormSchema>;

/** Program-page form: the program is fixed by the page and the city is not asked. */
export const programFormSchema = heroFormSchema.extend({ city: z.string().trim().optional() });
