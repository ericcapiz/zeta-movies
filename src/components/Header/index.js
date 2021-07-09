import React from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg'

import {Wrapper, Content, Logo, TMDBLogoImg} from './Header.styles'


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <TMDBLogoImg src={TMDBLogo} alt="rmdb-logo" />
                <Logo>Zeta Films </Logo>
            </Content>
        </Wrapper>
    )
}

export default Header
