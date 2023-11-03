"use server";

import { createUser, deleteUser } from "@/lib/prisma/users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteUserAction(id) {
  await deleteUser(id);
  revalidatePath("/users");
  redirect("/users");
}
