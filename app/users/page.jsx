import React from "react";
import UserList from "./userList";

const UsersPage = async () => {
  return (
    <>
      <h2 className="page-title">Users</h2>
      <div className="hidden sm:flex">
        <p>Select a user</p>
      </div>
      <div className="flex sm:hidden">
        <UserList />
      </div>
    </>
  );
};

export default UsersPage;
