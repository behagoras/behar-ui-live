import React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../types';

const Container = styled.div`
  background:white;
  padding:0 40px 40px 40px;
  border-radius:0 0 0 50px;
  max-width:100%;
`;
const Header = styled.h2`
  background:#E0E0E0;
  display:block;
  width:100%;
  position:relative;
  padding:10px;
  text-align:center;
`;

const Image = styled.figure`
  width:auto;
  & img {
    margin-left:50px;
    text-align:center;
    display:inline;
  }
`;

const Attacks = styled.ul`
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  list-style-type:none;
  grid-gap:5px;
`;

const Attack = styled.li`
  padding:10px;
  background:#52AE5E;
`;

export interface PokemonCardProps {
  data: Pokemon;
}

const PokemonCard = ({ data: pokemon }: any) => {
  return (
    <Container>
      <Header>{pokemon.name}</Header>
      <Image>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </Image>
      <Attacks>
        <Attack>{pokemon.moves[0].move.name}</Attack>
        <Attack>{pokemon.moves[1].move.name}</Attack>
        <Attack>{pokemon.moves[2].move.name}</Attack>
        <Attack>{pokemon.moves[3].move.name}</Attack>
      </Attacks>
    </Container>
  );
};

export default PokemonCard;
