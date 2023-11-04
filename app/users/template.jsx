import React from "react";
import Users from "./users";
import SideNav from "../components/SideNav";

const UsersLayout = ({ children }) => {
  return (
    <div className="h-full flex">
      <SideNav>
        <Users />
      </SideNav>
      <section className="section w-full">{children}</section>
    </div>
  );
};

export default UsersLayout;
