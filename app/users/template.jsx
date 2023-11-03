import React from "react";
import Users from "./users";

const UsersLayout = ({ children }) => {
  return (
    <div className="h-full flex">
      <div className="h-full hidden sm:flex flex-col bg-slate-100 w-1/3 max-w-xs flex-shrink-0">
        <Users />
      </div>
      <section className="section w-full">{children}</section>
    </div>
  );
};

export default UsersLayout;
