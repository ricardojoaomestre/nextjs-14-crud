import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";
import React from "react";
import Avatar from "../components/Avatar";

const Users = async () => {
  const { users } = await getUsers();
  return (
    <section className="section">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <ul className="menu">
        {users.map((user) => (
          <li key={user.id} className="inline-flex overflow-clip">
            <Link href={`/users/${user.id}`}>
              <Avatar user={user} />
              <span className="ml-2">{user.name || user.email}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
