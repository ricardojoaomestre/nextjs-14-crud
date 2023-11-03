"use server";

import { createUser } from "@/lib/prisma/users";
import { revalidatePath } from "next/cache";

export async function createUserAction(prevState, formData) {
  try {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      imageUrl: formData.get("imageUrl"),
    };
    const { user } = await createUser(userData);
    revalidatePath("/users");
    return { message: "User created with success", user };
  } catch (error) {
    return { message: "Failed to create user." };
  }
}
