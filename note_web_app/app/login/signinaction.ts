"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSession } from "../lib/session";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
});

export async function signin(
  prevState: any,
  formData: FormData
): Promise<{ error?: Record<string, string[]> }> {
  const result = signinSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return {
      error: { email: ["User not found. Please sign up first."] }
    };
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordMatch) {
    return {
      error: { password: ["Invalid password. Please try again."] }
    };
  }

  await createSession(existingUser.id);

  redirect("/home");
}
