import { getUser } from "@/lib/prisma/users";

import Avatar from "@/app/components/Avatar";
import DeleteUser from "./deleteUser";
import Link from "next/link";

const User = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  if (!user) return null;
  return (
    <div className="block gap-4">
      <div className="flex flex-row gap-8 items-center mb-4">
        <Avatar user={user} size="xl" />
        <div>
          <h2 className="text-2xl font-semibold">{user.name || user.email}</h2>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <Link href={`/users/${userId}/edit`} className="link">
          Edit
        </Link>
        <DeleteUser id={userId} />
      </div>
    </div>
  );
};

export default User;
