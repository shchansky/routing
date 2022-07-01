import React from "react";
import { Link, useLocation } from "react-router-dom";

type Content = {
  id: number | string;
  userId: number | string;
  title: string;
  body: string;
};

export const BlogPage = () => {
  const [posts, setPosts] = React.useState<Content[]>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog page</h1>
      <Link to="/posts/new">Add new post</Link>
      <p>
        {posts.map((post, index) => (
          <Link key={index} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </p>
    </div>
  );
};
