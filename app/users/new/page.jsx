"use client";
import { createUserAction } from "@/app/actions";
import UserForm from "../userForm";

const CreateUser = () => {
  return (
    <div>
      <h2 className="page-title">Create new user</h2>
      <UserForm action={createUserAction} />
    </div>
  );
};

export default CreateUser;
