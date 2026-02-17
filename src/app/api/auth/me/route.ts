import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/middleware";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    console.log("Auth/Me: Checking authentication...");
    const user = await requireAuth();
    console.log("Auth/Me: Authorized user:", user.email);
    return NextResponse.json({ user });
  } catch (error) {
    // console.error("Auth/Me: Unauthorized or error:", error); // Silencing expected unauthorized error
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
