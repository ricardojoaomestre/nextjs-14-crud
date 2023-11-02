import { getUsers } from "@/lib/prisma/users";
import React from "react";
import JsonDebug from "../components/JsonDebug";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2 className="title">Users</h2>
      <JsonDebug json={users} />
    </div>
  );
};

export default UsersPage;
