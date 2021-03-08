import React from 'react'

const Formulario = () => {
    return (
        <div>
            <h2>Formulario</h2>
            <form>
                <input
                    type="text"
                    placeholder="Ingresa fruta"
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="Ingresa Drescripcion"
                    className="form-control mb-3"
                />
                <button className="btn btn-primary btn-block">Agregar</button>

            </form>
        </div>
    )
}

export default Formulario
