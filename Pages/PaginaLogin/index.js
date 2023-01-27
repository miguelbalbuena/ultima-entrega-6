import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Componentes/Header";
import LoginPage from "../../Componentes/LoginPage";
import { Background } from "./styles";

function PaginaLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user1 = { email: "miguelbalbuena@gmail.com", password: "4567" };

  function Login() {
    if (user1.email === email && user1.password === password) {
      navigate("/home");
      console.log("Logado com sucesso");
    } else {
      console.log("Não foi possível logar");
    }
  }
  return (
    <Background>
      <Header />
      <PaginaLogin
        onChangeEmail={(text) => setEmail(text.target.value)}
        onChangePassword={(text) => setPassword(text.target.value)}
        onClick={Login}
      />
    </Background>
  );
}

export default PaginaLogin;
