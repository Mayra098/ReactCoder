import React from 'react'
import { useEffect } from 'react';



export default function Lol() {
  const [pokemonsList, setPokemonsList] = React.useState([]);

  const getPokemons = async () => {
    const pokemons = await pokemonsAPI();
    setPokemonsList(pokemons);
  };

  const pokemonsAPI = async () => {
    let pokemons = [];
    await fetch('https://pokeapi.co/api/v2/pokemon/?=limit1')
      .then((response) => response.json())
      .then((data) => (pokemons = data));
    console.log(pokemons.results);
    return pokemons.results;
  };
useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {pokemonsList.map((character, i) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}
