import React from "react";
import Link from "next/link";

function index() {
  const blog = "/blog";
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={blog}>blog</Link>
    </div>
  );
}

export default index;
