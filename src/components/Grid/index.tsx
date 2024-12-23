import React from "react";
import { Wrapper, Content } from "./Grid.styles";

interface GridProps {
  header: string;
  children: React.ReactNode;
}

const Grid = ({ header, children }: GridProps): JSX.Element => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
