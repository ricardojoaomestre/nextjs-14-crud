import React from "react";
import Users from "./users";

const UsersLayout = ({ children }) => {
  return (
    <main className="flex">
      <div className="h-full flex flex-col bg-slate-100 w-1/3 flex-shrink-0">
        <Users />
      </div>
      <section className="section">{children}</section>
    </main>
  );
};

export default UsersLayout;
