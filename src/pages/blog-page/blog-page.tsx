import React from "react";
import { Link, useSearchParams } from "react-router-dom";

type Content = {
  id: number;
  userId: number | string;
  title: string;
  body: string;
};

export const BlogPage = () => {
  const [posts, setPosts] = React.useState<Content[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isChecked, toggleChecked] = React.useState(false);

  const handleChecked = React.useCallback(() => {
    toggleChecked((prev) => !prev);
  }, []);

  let [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  /** привязка к 80 выполнена , т.к в response приходит 100 постов */
  const startsFrom = latest ? 80 : 1;

  const handlechange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(ev.target.value);
    },
    []
  );

  const handleSubmit = React.useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      const querry = searchValue;
      const isLatest = isChecked;

      const params: any = {};

      if (querry.length) params.post = querry;

      if (isLatest) params.latest = true;
      // ?post=dolorem&latest=true

      /** в адресной строке появится querry-параметр */
      setSearchParams(params);
    },
    [isChecked, searchValue, setSearchParams]
  );

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog page</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={searchValue}
          onChange={handlechange}
        />

        <label style={{ padding: "0 5px" }}>
          <input
            type="checkbox"
            name="latest"
            checked={isChecked}
            onChange={handleChecked}
          />
          New only
        </label>

        <input type="submit" value="Search" />
      </form>

      <Link to="/posts/new">Add new post</Link>
      <p>
        {posts
          .filter((post) => {
            return post.title.includes(postQuery) && post.id >= startsFrom;
          })
          .map((post, index) => (
            <Link key={index} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
      </p>
    </div>
  );
};
