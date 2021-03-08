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

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={ item.id }>{ item.texto }</h4>
                ))
            }
        </div>
    )
}

export default Listas
