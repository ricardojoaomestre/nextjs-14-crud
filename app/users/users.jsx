import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";
import UserList from "./userList";
const Users = () => {
  return (
    <section className="py-12 px-3">
      <div className="flex flex-row justify-between items-center px-3 mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Link className="btn btn-sm" href="/users/new">
          Create
        </Link>
      </div>
      <UserList />
    </section>
  );
};

export default Users;
