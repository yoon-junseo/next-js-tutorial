import React from "react";
import { useRouter } from "next/router";
import posts from "../../posts.json";

export default function Post() {
  const router = useRouter();
  const post = posts[router.query.id];
  console.log(post);
  if (!post) return <p></p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
