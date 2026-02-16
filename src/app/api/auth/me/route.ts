import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/middleware";

export async function GET() {
  try {
    const user = await requireAuth();
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
