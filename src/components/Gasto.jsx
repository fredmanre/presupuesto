import React from 'react';
import PropTypes from 'prop-types';


const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombreGasto}

            <span className="gasto">$ {gasto.cantidadGasto}</span>
        </p>
    </li>
);
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;