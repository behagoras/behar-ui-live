import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pokemon, PokemonList } from '../src';
import { PokemonListProps } from '../src/components/Pokemons';

const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  moves: [
    { move: { name: 'Tackle' } },
    { move: { name: 'Vine Whip' } },
    { move: { name: 'Razor Leaf' } },
    { move: { name: 'Poison Powder' } }
  ]
}

const charmander = {
  id: 4,
  name: 'Charmander',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  },
  moves: [
    { move: { name: 'Ember' } },
    { move: { name: 'Scratch' } },
    { move: { name: 'Fire Spin' } },
    { move: { name: 'Flamethrower' } }
  ]
}

const meta: Meta = {
  title: 'Pokemon/Pokemon List',
  component: PokemonList,
  argTypes: {},
  args: {
    data: [charmander, bulbasaur]
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PokemonListProps> = args => <PokemonList {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
