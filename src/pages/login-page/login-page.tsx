import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hoc";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();

  // @ts-ignore
  const fromPage = location.state?.from?.pathname || "/";

  const [value, setValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />

        <button type="submit"> Login </button>
      </form>
    </div>
  );
};
