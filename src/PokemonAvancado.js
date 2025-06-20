import React, { useEffect, useState } from 'react';

const PokemonAvancado = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1; 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(); 
  }, []);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div style={{ background: 'purple', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <h1>Meu Pokémon Aleatório</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
        width="150"
      />
      <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>

      <div>
        {pokemon.types.map((type) => (
          <span key={type.slot} style={{ margin: '5px', background: '#ffa500', padding: '5px', borderRadius: '5px' }}>
            {type.type.name}
          </span>
        ))}
      </div>

      <h3>Detalhes</h3>
      <p>Altura: {pokemon.height / 10} m | Peso: {pokemon.weight} kg</p>

      <h3>Habilidades</h3>
      <ul>
        {pokemon.abilities.map((ab, index) => (
          <li key={index}>{ab.ability.name}</li>
        ))}
      </ul>

      <h3>Estatísticas Base</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>

      <button
        onClick={fetchPokemon}
        style={{ marginTop: '10px', padding: '10px', background: 'green', color: 'white', borderRadius: '5px' }}
      >
        Sortear Novo Pokémon
      </button>
    </div>
  );
};

export default PokemonAvancado;
