import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)

    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero: { contador }</h3>
            <button onClick= { () =>  setContador(contador + 1)} > Aumentar </button>
            <button onClick= { () =>  setContador(0)} > Resetear </button>
        </div>
    )
}

export default Contador
