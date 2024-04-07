import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { CharacterProvider } from './context/CharacterContext';
import './App.scss';
import MainView from './components/MainView';
import Header from './components/Header';
import FavoritesList from './components/FavoritesView'; 
import CharacterDeatil from './components/CharacterDetail'; 

function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <Router> 
          <Header />
          <Routes> 
            <Route path="/" element={<MainView />} /> 
            <Route path="/favorites" element={<FavoritesList />} /> 
            <Route path="/detail/:id" element={< CharacterDeatil />} /> 
          </Routes>
        </Router>
      </CharacterProvider>
    </div>
  );
}

export default App;
