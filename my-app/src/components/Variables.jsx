import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'
    const imagen = 'https://media-exp1.licdn.com/dms/image/C5603AQE7sLGWL6v2vQ/profile-displayphoto-shrink_200_200/0/1535981850978?e=1620864000&v=beta&t=Xmts4i7V2MoaCWkfYV62bFnyUWV4kIHAPGbMEFPZYqA'
    return (
        <div>
            <h2>Nuevo componente: {saludo} {1+1}</h2>
            <img src={imagen} alt =""></img>
        </div>
    )
}

export default Variables
