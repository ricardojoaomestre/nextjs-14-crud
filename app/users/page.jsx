import { getUsers } from "@/lib/prisma/users";
import React from "react";
import JsonDebug from "../components/JsonDebug";

const UsersPage = async () => {
  return (
    <div>
      <h2 className="page-title">Users</h2>
      <p>Select a user</p>
    </div>
  );
};

export default UsersPage;
