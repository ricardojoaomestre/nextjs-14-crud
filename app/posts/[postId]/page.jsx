import React from "react";

const Post = async ({ params }) => {
  const { postId } = params;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((response) => response.json());
  return (
    <div className="px-8">
      <h2 className="text-xl font-semibold capitalize mb-8">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
