// Paso 1: Importar createRoot
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { CharacterProvider } from './context/CharacterContext'; // Asegúrate de que la ruta es correcta

// Paso 2: Seleccionar el contenedor del DOM
const container = document.getElementById('root');

// Paso 3: Crear una raíz y usarla para renderizar la App
const root = createRoot(container); // Crear la raíz
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
);
