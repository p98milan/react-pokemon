import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
    text-align: center;
    width: 400px;
    height: 300px;
    padding: 2rem 0;
    background: #5783db;
    color:  #1f242d;
    border-radius: 0.8rem;
`;
const H2 = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
`;

const Img = styled.img`
    width: 200px;
    height: 300px;
`;
const SearchPokemons = ({name,image}) => {
  return (
    <Search>
        <H2>{name}</H2>
        <Img src={image} alt={name} />
    </Search>
  )
}

export default SearchPokemons;