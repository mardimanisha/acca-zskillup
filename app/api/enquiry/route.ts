import { NextResponse } from "next/server";

import { heroFormSchema } from "@/lib/validations/hero-form";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = heroFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // TODO: connect CRM / lead integration here (send parsed.data to the lead system).

  return NextResponse.json({ ok: true }, { status: 200 });
}
