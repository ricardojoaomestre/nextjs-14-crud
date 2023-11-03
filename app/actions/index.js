"use server";

import { createUser } from "@/lib/prisma/users";
import { revalidatePath } from "next/cache";

export async function createUserAction(prevState, formData) {
  try {
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      imageUrl: formData.get("imageUrl"),
    };
    await createUser(user);
    return revalidatePath("/users");
  } catch (error) {
    return { message: "Failed to create user." };
  }
}
