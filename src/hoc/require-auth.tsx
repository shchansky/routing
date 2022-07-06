import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth-provider";

export const RequireAuth: React.FC<{}> = ({ children }) => {
  const location = useLocation();

  const { user } = useAuth();

  /**
   * Переадресация пользователя на "/login" при неудачной аутентификации
   */
  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return <>{children}</>;
};
