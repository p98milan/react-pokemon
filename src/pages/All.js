import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import AllPokemons from '../components/AllPokemons';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";


const StyledAll = styled.div`
    background: #1f242d;
    color: #1f242d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', Helvetica, Sans-serif;
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

const Img = styled.img`
    width: 400px;
    height: 200px;
    margin: 4rem 0;
`;
const All = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        Axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res=>setPokemon(res.data.results))
    })

    return (
        <StyledAll>
            <Link to="/"><Img src={Logo} alt="PokeAPI" /></Link>
            {
                pokemon.map(p=>{
                    return <AllPokemons name={p.name} url={p.url}/>
                })
            }
        </StyledAll>
    )
}

export default All;