import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    console.log("Signin attempt for:", email);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const emailInput = email?.trim();
    const passwordInput = password?.trim();

    // BACKDOOR: Allow admin login even if DB is down
    if (emailInput === "admin@sristhi.com" && passwordInput === "admin123") {
      const token = await signToken({
        id: 1, // Mock ID
        email: "admin@sristhi.com",
        name: "Admin",
        role: "admin",
      });

      const response = NextResponse.json({
        message: "Signed in successfully (Dev Backdoor)",
        user: {
          id: 1,
          email: "admin@sristhi.com",
          name: "Admin",
          role: "admin",
        },
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    }

    let user;
    try {
      user = await prisma.user.findUnique({ where: { email: emailInput } });
    } catch (dbError) {
      console.error("DB Connection Error during signin:", dbError);
      return NextResponse.json(
        { error: "Database unreachable. Please use admin credentials if testing." },
        { status: 503 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(passwordInput, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await signToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    const response = NextResponse.json({
      message: "Signed in successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
