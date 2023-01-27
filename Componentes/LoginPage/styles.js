import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const Body = styled.div`
  width: 100vw;
  min-height: 85vh;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.White};
  justify-content: space-evenly;
`;

export const LoginTitle = styled.h1`
  color: ${Colors.Black};
  text-align: center;
  font-size: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
