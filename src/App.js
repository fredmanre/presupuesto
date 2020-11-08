import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListadoGasto from './components/ListadoGasto';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);  // para el presupuesto inicial
  const [restante, guardarRestante] = useState(0);  // para el restante de las operaciones
  const [mostrarPregunta, actualizarPregunta] = useState(true);  // mostrar el form de Pregunta

  const [gastos, guardarGastos] = useState([]);  // gastos. Un array de objetos
  const [gasto, guardarGasto] = useState({})  // un nuevo gasto
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      // agrwga el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto,
      ]);
      // resta al presupuesto actual
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
      // una vez ejecutado y/o creado un gasto, reseteat a false
      guardarCrearGasto(false);
    }
  }, [gastos, gasto, crearGasto, restante]);

  return (
    <div className="container">

      <header>
        <h1>Presupuesto React</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta 
          ? 
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
            />
            )
          :
            (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <ListadoGasto
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
            )
          }

        </div>
      </header>

    </div>
  );
}

export default App;
