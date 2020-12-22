import React from "react";
import { StyledButton} from "./styles";

const Button = () => {
  const handleClick = () => {
    console.log("Click!");
  }
  return <StyledButton onClick={() => handleClick()}>hola</StyledButton>;
};

export default Button;
