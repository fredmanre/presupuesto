import React, {Fragment, useState} from 'react';
import Error from './Error';


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // definir el state del componente
    const [cantidad, guardarCantidad] = useState("");
    const [error, guardarError] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));  // base 10 para sistema decimal con base 10
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        // Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(0);
        guardarRestante(0);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El valor debe ser un número entero mayor a cero."/> : null}

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir el Presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;