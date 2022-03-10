import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pokemon, PokemonCard } from '../src';


const meta: Meta = {
  title: 'Pokemon/Pokemon Card',
  component: PokemonCard,
  argTypes: {},
  args: {
    data: {
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
    } as Pokemon,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Pokemon> = args => <PokemonCard {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
