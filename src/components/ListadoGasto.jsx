import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';


const ListadoGasto = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado de Gastos</h2>

            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
     );
}
ListadoGasto.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default ListadoGasto;