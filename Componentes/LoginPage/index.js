import React from "react";
import InputLogin from "../InputLogin";
import { Body, LoginTitle } from "./styles";
import ButtonLogin from "../ButtonLogin";

function LoginPage({ OnClick, OnChangeEmail, onChangePassword }) {
  return (
    <body>
      <LoginTitle>Login</LoginTitle>
      <InputLogin placeholder="Email" type="text" onChange={OnChangeEmail} />
      <InputLogin
        placeholder="Senha"
        type="password"
        onChange={onChangePassword}
      />
      <ButtonLogin OnClick={OnClick} />
    </body>
  );
}

export default LoginPage;
