import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

type Content = {
  id: number | string;
  userId: number | string;
  title: string;
  body: string;
};

export const Singlepage = () => {
  console.log(useParams());
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = React.useState<Content | null>(null);

  /** Переход на одну страницу назад*/
  const goBack = () => navigate(-1);

  /**
   * Переход на домашнюю страницу
   * {replace:true} -позволяет не записывать в историю движение от одной ссылки к другой,
   * т.к. мне нужна только переадресация
   * */
  const goHome = () => navigate("/", { replace: true });

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())

      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h1>Single page</h1>
      <button onClick={goBack}>Go back</button>
      {/**
       * Плохой пример (лучше применить NavLink или  Link),
       * goHome следовало применить для перехода на главную
       * страницу после отправки формы
       */}
      <button onClick={goHome}>Go home</button>
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
