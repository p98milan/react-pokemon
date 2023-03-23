import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #1f242d;
    margin: 0;
    font-family: 'Poppins', Helvetica, Sans-serif;
`;

const Img = styled.img`
    width: 400px;
    height: 200px;
    margin-bottom: 4rem;
`;

const StyledLink = styled(Link)`
    max-width: 1200px;
    text-decoration: none;
    padding: 20px;
    color: #1f242d;
    font-size: 2rem;
    background: #5783db;
    margin-right: 20px;
    border-radius: 1rem;
    font-weight: bold;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Home = () => {
    return (
        <HomeStyled>
            <Link to="/"><Img src={Logo} alt="PokeAPI" /></Link>
            <LinkContainer>
                <StyledLink to="/all">Összes Pokémon</StyledLink>
                <StyledLink to="/search">Pokémon keresése</StyledLink>
            </LinkContainer>
        </HomeStyled>
    )
}

export default Home;