import React from "react";
import UserList from "./userList";
import Link from "next/link";

const UsersPage = async () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h2 className="page-title">Users</h2>
        <Link className="flex sm:hidden btn btn-primary" href="/users/new">
          Create
        </Link>
      </div>
      <p className="hidden sm:flex">Select a user</p>
      <div className="flex sm:hidden">
        <UserList />
      </div>
    </>
  );
};

export default UsersPage;
