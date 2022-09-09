import React from "react";

function Boton({texto, esBotonDeClic, manejarClic }) {
    return (
    <button /*operador ternario     true            false */
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic} >
       {texto}
    </button>
    )
};


export default Boton;
