import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:border-brand-teal aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brand:
          "h-12 rounded-full bg-gradient-to-r from-brand-tealLight to-brand-tealDark px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(11,95,87,0.7)] hover:brightness-110 focus-visible:ring-offset-2",
        brandOutline:
          "h-12 rounded-full border-[1.5px] border-brand-teal bg-white px-6 text-[15px] font-semibold text-brand-teal hover:bg-brand-teal/5 hover:text-brand-tealDark focus-visible:ring-offset-2",
        brandOutlineSm:
          "h-11 rounded-full border-[1.5px] border-brand-teal bg-white px-6 text-sm font-semibold text-brand-teal hover:bg-accent-teal-tint focus-visible:ring-offset-2",
        brandOutlineRect:
          "h-12 w-full rounded-xl border-[1.5px] border-brand-teal bg-white px-6 text-[15px] font-bold text-brand-teal hover:bg-accent-teal-tint focus-visible:ring-offset-2",
        brandRect:
          "h-12 w-full rounded-xl bg-gradient-to-r from-brand-tealLight to-brand-tealDark px-6 text-[15px] font-bold text-white hover:brightness-90 focus-visible:ring-offset-2",
        white:
          "h-12 rounded-full bg-white px-6 text-[15px] font-bold text-brand-teal hover:bg-accent-teal-tint focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    compoundVariants: [
      { variant: ["brand", "brandOutline", "brandOutlineRect", "brandRect", "white"], size: "default", className: "h-12 px-6 py-0" },
      { variant: "brandOutlineSm", size: "default", className: "h-11 px-6 py-0" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
