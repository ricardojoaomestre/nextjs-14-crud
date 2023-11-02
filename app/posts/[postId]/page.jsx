import React from "react";

const Post = async ({ params }) => {
  const { postId } = params;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((response) => response.json());
  return (
    <div>
      <h2 className="title mb-8">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
