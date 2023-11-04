import React from "react";
import Posts from "./posts";
import SideNav from "../components/SideNav";

const PostsLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav>
        <Posts />
      </SideNav>
      <section className="section">{children}</section>
    </div>
  );
};

export default PostsLayout;
