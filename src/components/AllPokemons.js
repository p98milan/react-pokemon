import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPokemons = styled.div`
  font-family: 'poppins';
  background: #5783db;
  text-align: center;
  padding: 1.7rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  box-sizing: border-box;
`;

const H3 = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #9B2335;
  font-weight: 500;
`;
const AllPokemons = ({name,url}) => {
  return (
    <StyledPokemons>
        <H3>{name}</H3>
        <StyledLink to={url}>{url}</StyledLink>
    </StyledPokemons>
  )
}

export default AllPokemons;