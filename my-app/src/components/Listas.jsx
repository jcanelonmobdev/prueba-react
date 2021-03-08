import React, { useState} from 'react'

const Listas = () => {

    const initialState = [0, 1, 2, 3, 4]
    const [lista, setlista] = useState(initialState)

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={ index }>{ item }</h4>
                ))
            }
        </div>
    )
}

export default Listas
