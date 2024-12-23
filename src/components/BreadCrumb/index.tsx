import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.styles";

interface BreadCrumbProps {
  movieTitle: string;
}

const BreadCrumb = ({ movieTitle }: BreadCrumbProps) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
