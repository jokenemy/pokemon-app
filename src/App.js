import React, { useState } from 'react';
import CapaInicial from './CapaInicial';
import PokemonAvancado from './PokemonAvancado';

function App() {
  const [entrou, setEntrou] = useState(false);

  return (
    <div className="App">
      {!entrou ? (
        <CapaInicial onEnter={() => setEntrou(true)} />
      ) : (
        <PokemonAvancado />
      )}
    </div>
  );
}

export default App;
