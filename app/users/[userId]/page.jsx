import { getUser } from "@/lib/prisma/users";
import React from "react";

import Avatar from "@/app/components/Avatar";

const User = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);
  if (!user) return null;
  return (
    <div className="flex flex-row gap-8 items-center">
      <Avatar user={user} size="xl" />
      <div>
        <h2 className="title">{user.name || user.email}</h2>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    </div>
  );
};

export default User;
