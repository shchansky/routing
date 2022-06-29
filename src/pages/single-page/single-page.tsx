import React from "react";
import { useParams, Link } from "react-router-dom";

type Content = {
  id: number | string;
  userId: number | string;
  title: string;
  body: string;
};

export const Singlepage = () => {
  console.log(useParams());
  const { id } = useParams();

  const [post, setPost] = React.useState<Content | null>(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h1>single-page</h1>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};
