import { getUser } from "@/lib/prisma/users";
import React from "react";
import ProfilePicture from "./profilePicture";

const User = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  return (
    <div className="flex flex-row gap-8 items-center">
      <ProfilePicture user={user} />
      <div>
        <h2 className="text-3xl font-semibold capitalize">
          {user.name || user.email}
        </h2>
        <a href={`mailto:${user?.email}`}>{user.email}</a>
      </div>
    </div>
  );
};

export default User;
