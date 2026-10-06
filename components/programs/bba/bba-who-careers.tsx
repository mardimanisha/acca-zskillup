import { Eyebrow, IconCircle, cardClass, container } from "@/components/programs/program-ui";
import { bbaCareers, bbaWhoFor } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

export function BbaWhoFor() {
  const { eyebrow, body, note } = bbaWhoFor;

  return (
    <section aria-label={eyebrow} className="bg-zs-mint">
      <div className={cn(container, "py-16 lg:py-24")}>
        <div className={cn(cardClass, "flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-start md:gap-8")}>
          <IconCircle icon="users" />
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <p className="mt-3 text-xl font-bold leading-[1.5] text-zs-navy md:text-2xl">{body}</p>
            <p className="mt-5 text-sm text-zs-body">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BbaCareers() {
  const { eyebrow, roles } = bbaCareers;

  return (
    <section aria-label={eyebrow} className="bg-white">
      <div className={cn(container, "py-16 lg:py-24")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <ul className="mt-6 flex flex-wrap gap-3">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-zs-green/20 bg-zs-mint px-5 py-2.5 text-[15px] font-semibold text-zs-green"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
