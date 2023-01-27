import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const Buttons = styled.button`
  background-color: #0000;
  color: ${Colors.White};
  height: 7vh;
  border-radius: 10px;
  width: 8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 2vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Tag = styled.h1`
  text-decoration: none;
  font-size: 1.7vw;
  font-weight: bold;
`;
