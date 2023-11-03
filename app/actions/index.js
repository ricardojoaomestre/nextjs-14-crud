"use server";

import { createUser, deleteUser, updateUser } from "@/lib/prisma/users";
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
    return { status: "ok", message: "User created with success", user };
  } catch (error) {
    return { status: "nok", message: "Failed to create user." };
  }
}

export async function updateUserAction(prevState, formData) {
  try {
    const id = formData.get("id");
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      imageUrl: formData.get("imageUrl"),
    };
    const { user, error } = await updateUser(id, userData);
    if (error) throw error;
    revalidatePath("/users");
    revalidatePath(`/users/${formData.get("id")}`);
    return { status: "ok", message: "User created with success", user };
  } catch (error) {
    return { status: "nok", message: "Failed to create user." };
  }
}

export async function deleteUserAction(id) {
  await deleteUser(id);
  revalidatePath("/users");
  redirect("/users");
}
