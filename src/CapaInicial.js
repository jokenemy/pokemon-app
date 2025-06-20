import React from 'react';

const CapaInicial = ({ onEnter }) => {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.2rem', color: '#222' }}>MariaRailane/pokemon-info</h1>
      <p style={{ fontSize: '1rem', color: '#555', margin: '10px 0 30px' }}>
        Website que exibe um Pokémon aleatório e suas informações.
      </p>
      <button
        onClick={onEnter}
        style={{
          backgroundColor: '#2ea44f',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: '0.3s'
        }}
      >
        Entrar
      </button>
    </div>
  );
};

export default CapaInicial;
