"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

const signupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).trim(),
  dob: z.string().optional().refine((date) => {
    if (!date) return true; 
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime()) && parsedDate < new Date();
  }, { message: "Invalid date of birth" }),
});

export async function signup(
  prevState: any,
  formData: FormData
): Promise<{ error?: Record<string, string[]> }> {
  const result = signupSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, password, dob } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    redirect("/login");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      dob: dob ? new Date(dob) : null,
    },
  });

  await createSession(newUser.id);

  redirect("/home");
}
