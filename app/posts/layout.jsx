import React from "react";
import Posts from "./posts";

const PostsLayout = ({ children }) => {
  return (
    <main className="flex">
      <div className="h-full flex flex-col bg-slate-100 w-1/3 flex-shrink-0">
        <Posts />
      </div>
      <section className="section">{children}</section>
    </main>
  );
};

export default PostsLayout;
