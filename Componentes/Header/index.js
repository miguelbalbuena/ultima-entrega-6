import React from "react";
import { Head, ButDiv } from "./styles";
import Button from "../Button";

function Header() {
  const buts = [
    { name: "Terminal", link: "/home" },
    { name: "Login", link: "/" },
  ];
  return (
    <Head>
      <ButDiv>
        {buts.map((item, index) => (
          <Button key={index} name={item.name} link={item.link} />
        ))}
      </ButDiv>
    </Head>
  );
}

export default Header;
