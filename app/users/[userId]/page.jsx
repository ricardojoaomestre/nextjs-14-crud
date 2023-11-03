import { getUser } from "@/lib/prisma/users";

import Avatar from "@/app/components/Avatar";
import DeleteUser from "./deleteUser";

const User = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  if (!user) return null;
  return (
    <div className="block gap-4">
      <div className="flex flex-row gap-8 items-center mb-4">
        <Avatar user={user} size="xl" />
        <div>
          <h2 className="title">{user.name || user.email}</h2>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
      <DeleteUser id={userId} />
    </div>
  );
};

export default User;
