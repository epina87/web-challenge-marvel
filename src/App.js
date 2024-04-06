// En src/App.js
import React from 'react';
import { CharacterProvider } from './context/CharacterContext';
import CharacterList from './components/CharacterList'; 

function App() {
  return (
    <div className="App">
      <CharacterProvider> {/* Asegúrate de que CharacterProvider envuelve toda la aplicación */}
        <CharacterList />
      </CharacterProvider>
    </div>
  );
}

export default App;
