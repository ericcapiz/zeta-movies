import React from "react";
import { Wrapper } from "./Button.style";

interface ButtonProps {
  text: string;
  callback: () => void;
}

const Button = ({ text, callback }: ButtonProps): JSX.Element => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;