import { prisma } from "@/app/lib/prisma";


async function saveNameEmailToDatabase(email: string): Promise<boolean> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email,
          password: "",
        },
      });
      console.log("New user created:", { name, email });
    } else {
      console.log("User already exists:", existingUser);
    }

    return true;
  } catch (error) {
    console.error('Error saving user name and email:', error);
    return false;
  }
}

export { saveNameEmailToDatabase };
