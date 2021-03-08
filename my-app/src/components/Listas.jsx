import React, { useState} from 'react'

const Listas = () => {

    const initialState = [
        {id: 1, texto: "Tarea 1"},
        {id: 2, texto: "Tarea 2"},
        {id: 3, texto: "Tarea 3"},
        {id: 4, texto: "Tarea 4"},
        {id: 5, texto: "Tarea 5"},
    ]

    const [lista, setlista] = useState(initialState)
    
    const agregarElemento = () => {
        setlista([ 
            ...lista,
            { id: 5, texto: "Tarea " + (lista.length + 1) }
        ])
    }

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={ index }>{ item.texto }</h4>
                ))
            }
            <button onClick={() => agregarElemento()} >Agregar</button>
        </div>
    )
}

export default Listas
