import React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../types';
import PokemonCard from './Pokemon';

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  padding:20px;
  grid-gap:50px;
  justify-items:center;
  background:#DD412D;
  max-width:100%;
`;

export interface PokemonListProps {
  data: Pokemon[];
}

const Pokemons = ({ data: pokemons }:PokemonListProps) => {
  return (
    <Container>
      {pokemons.map((pokemon:any) => (
        <PokemonCard data={pokemon} />
      ))}
    </Container>
  );
};

export default Pokemons;
