<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, Logo, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const handleLogoClick = () => {
    // Clear session storage when clicking logo
    sessionStorage.removeItem("homeState");
  };

  return (
    <Wrapper>
      <Content>
        <Link
          style={{ textDecoration: "none" }}
          to="/"
          onClick={handleLogoClick}
        >
          <Logo>Zeta Movies</Logo>
        </Link>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <TMDBLogoImg src={TMDBLogo} alt="rmdb-logo" />
        </a>
      </Content>
    </Wrapper>
  );
};

export default Header;
=======
import React from 'react';
import {Link} from 'react-router-dom';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper, Content, Logo, TMDBLogoImg} from './Header.styles';


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link style={{textDecoration: "none"}} to="/">
                    <Logo>Zeta Movies</Logo>
                </Link>
                <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                    <TMDBLogoImg src={TMDBLogo} alt="rmdb-logo" />
                </a>
            </Content>
        </Wrapper>
    )
}

export default Header
>>>>>>> 5f1f4676f99ff4c2be008e43e2b334c407c9a12a
