import React, {useState} from 'react';
import shortid from 'shortid';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombreGasto, guardarNombreGasto] = useState("");
    const [cantidadGasto, guardarCantidadGasto] = useState(0);

    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if (nombreGasto.trim() === "" || (cantidadGasto <= 0 || isNaN(cantidadGasto)) ) {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate(),
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombreGasto("");
        guardarCantidadGasto(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos Campos son Obligatorios o Presupuesto Incorrecto"/> : null}

            <div className="campo">
                <label htmlFor="gasto">Nombre del Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Gastos comunes"
                    value={nombreGasto}
                    onChange={e => guardarNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="gasto">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidadGasto}
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                />
            </div>

            <button type="submit" className="button-primary u-full-width">Agregar Gasto</button>

        </form>
     );
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}

export default Formulario;