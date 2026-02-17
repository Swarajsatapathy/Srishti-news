import { cookies } from "next/headers";
import { verifyToken, JWTPayload } from "./auth";

export async function requireAuth(): Promise<JWTPayload> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;


  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const payload = await verifyToken(token);
    return payload;
  } catch (error) {
    throw new Error("Unauthorized");
  }
}

export async function requireAdmin(): Promise<JWTPayload> {
  const user = await requireAuth();
  if (user.role !== "admin") {
    throw new Error("Forbidden");
  }
  return user;
}
