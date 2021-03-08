import React from 'react'
import Eventos from './components/Eventos'
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'

function App() {
  return (
    <div>
      <h1>Hola Mundo React</h1>
      <Parrafo />
      <Variables/>
      <Eventos/>
    </div>
  );
}

export default App;