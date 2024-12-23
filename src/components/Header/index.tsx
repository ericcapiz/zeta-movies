import React from "react";
import { Link } from "react-router-dom";

import ZetaLogo from "../../images/zeta-logo.svg";

import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = (): JSX.Element => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={ZetaLogo} alt="zeta-logo" />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
