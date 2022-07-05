import React from "react";
import { useAuth } from "../../hoc";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create post page</h1>
      {/** replace: true редирект на главную страницу без возможности вернуться назад */}
      <button onClick={() => signOut(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};
