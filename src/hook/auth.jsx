import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rockeatfood:user", JSON.stringify(user));
      localStorage.setItem("@rockeatfood:token", token);

      setData({ user, token });

      //Adicionando o token do tipo bearer de authorization por padrão de todas requisições
      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar!");
      }
    }
  }

    function Logout() {
    localStorage.removeItem("@rockeatfood:token");
    localStorage.removeItem("@rockeatfood:user");
    setData({});
    return
  }

  useEffect(() => {
    const token = localStorage.getItem("@rockeatfood:token");
    const user = localStorage.getItem("@rockeatfood:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
