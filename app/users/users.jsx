import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";
import React from "react";
import Avatar from "../components/Avatar";

const Users = async () => {
  const { users } = await getUsers();
  return (
    <section className="py-12 px-3">
      <div className="flex flex-row justify-between items-center px-3 mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Link className="btn btn-sm" href="/users/new">
          Create
        </Link>
      </div>
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
