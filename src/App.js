// En src/App.js
import React from 'react';
import './App.css';
import Character from './components/Character'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <h1>Marvel Challenge</h1>
      <Character /> {/* Usar el componente Character */}
    </div>
  );
}

export default App;
