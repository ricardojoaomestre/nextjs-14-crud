import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const { users } = await getUsers();
  return (
    <section className="section">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.email}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
