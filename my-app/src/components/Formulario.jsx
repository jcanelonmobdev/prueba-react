import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const guardarDatos = (e) => {
        e.preventDefault();

        if (!fruta.trim()){
            console.log("esta vacio fruta")
            return
        }
        
        if (!descripcion.trim()){
            console.log("esta vacio descripcion")
            return
        }
        
        console.log('procesando datos..' + fruta + descripcion)

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div>
            <h2>Formulario1</h2>
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
    )
}

export default Formulario
