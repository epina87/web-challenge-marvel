import React from 'react';
import { CharacterProvider } from './context/CharacterContext';
import './App.scss';
import MainView from './components/MainView';
import Header from './components/Header'; // Importamos el componente Header

function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <Header /> 
        <MainView />
      </CharacterProvider>
    </div>
  );
}

export default App;
