import { redirect } from "next/navigation";
import prisma from ".";

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
};

export const getUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return { user };
  } catch (error) {
    return { error };
  }
};

export const createUser = async (userData) => {
  try {
    const newUser = await prisma.user.create({ data: userData });
    return { user: newUser };
  } catch (error) {
    return { error };
  }
};

export const deleteUser = async (id) => {
  try {
    await prisma.user.delete({ where: { id } });
    return redirect("/users");
  } catch (error) {
    return { error };
  }
};
