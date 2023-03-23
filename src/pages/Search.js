import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import Axios from 'axios';
import SearchPokemons from '../components/SearchPokemons';

const StyledSearch = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 130vh;
    background-color: #1f242d;
    font-family: 'Poppins', Helvetica, Sans-serif;
`;

const Img = styled.img`
    width: 400px;
    height: 200px;
    margin-bottom: 1rem;
`;

const H2 = styled.h2`
    font-size: 2rem;
    color: #5783db;
`;

const Input = styled.input`
    width: 400px;
    height: auto;
    outline: none;
    font-size: 1.4rem;
    text-align: center;
    font-family: 'Poppins';
    padding: 0.8rem 0;
    border: none;
    border-bottom: 1px solid #5783db;
    background: none;
    color:#5783db;
    margin-bottom: 1.8rem;
`;

const Button = styled.button`
    width: 200px;
    font-size: 1.6rem;
    padding: 0.8rem 0;
    font-weight: bold;
    font-family: 'Poppins', Helvetica, Sans-serif;
    border-radius: 0.8rem;
    border: none;
    background: #5783db;
    color:  #1f242d;
    outline: none;
    cursor: pointer;
    margin-bottom: 0.7rem;
`;
const Search = () => {
    const [api, setApi] = useState([]);
    const [input, setInput] = useState("");

    const searchPokemon = () => {
        if (input != "") {
            Axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
                .then(res => setApi([...api, res.data]))
        }
        setInput("");
    }

    return (
        <StyledSearch>
            <Link to="/"><Img src={Logo} alt="Logo" /></Link>
            <H2>Írd be kedvenc Pokémonod nevét!</H2>

            <Input type="text" placeholder="Pikachu..." value={input} onChange={(e) => {
                setInput(e.target.value)
            }} />
            <Button onClick={searchPokemon}>Keresés</Button>
            
            {
                api.map(pokemon => {
                    return <SearchPokemons image={pokemon.sprites.front_default} name={pokemon.name} />
                })
            }
        </StyledSearch>
    )
}

export default Search;