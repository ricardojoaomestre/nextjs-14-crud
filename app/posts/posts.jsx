import Link from "next/link";
import React from "react";

const Posts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return (
    <section className="section overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
