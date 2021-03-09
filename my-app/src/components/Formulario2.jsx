import React from 'react'

const Formulario2 = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const initialState = []
    const [lista, setLista] = React.useState(initialState)

    const agregarElemento = (fruta, descripcion) => {
        setLista([
            ...lista,
            { fruta: fruta, descripcion: descripcion }
        ])
    }

    const guardarDatos = (e) => {
        e.preventDefault();

        if (!fruta.trim()) {
            console.log("esta vacio fruta")
            return
        }

        if (!descripcion.trim()) {
            console.log("esta vacio descripcion")
            return
        }

        console.log('procesando datos..' + fruta + descripcion)
        agregarElemento(fruta, descripcion)

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div>
            <div>
                <h2>Formulario</h2>
                <form onSubmit={guardarDatos}>
                    <input
                        type="text"
                        placeholder="Ingresa fruta"
                        className="form-control mb-2"
                        onChange={e => setFruta(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Ingresa Drescripcion"
                        className="form-control mb-3"
                        onChange={e => setDescripcion(e.target.value)}
                    />
                    <button className="btn btn-primary btn-block" type="submit">Agregar</button>

                </form>
            </div>
            <br/>
            <div>
                <h2>Lista</h2>
                <ul>
                    {
                        lista.map((item, index) => (
                            <li key={index}>{item.fruta} - {item.descripcion}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Formulario2
