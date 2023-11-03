import Link from "next/link";

import Avatar from "../components/Avatar";
import { getUsers } from "@/lib/prisma/users";

const UserList = async () => {
  const { users } = await getUsers();
  return (
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
  );
};

export default UserList;
