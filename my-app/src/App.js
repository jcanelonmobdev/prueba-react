import React from 'react'
import Contador from './components/Contador'
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
      <Contador/>
    </div>
  );
}

export default App;