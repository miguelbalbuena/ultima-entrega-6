import React from "react";
import { Link } from "react-router-dom";
import { Buttons, Tag } from "./styles";

function Button({ link, name }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Buttons>
        <Tag>{name}</Tag>
      </Buttons>
    </Link>
  );
}

export default Button;
