import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
// import Presupuesto from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);  // para el presupuesto inicial
  const [restante, guardarRestante] = useState(0);  // para el restante de las operaciones
  const [mostrarPregunta, actualizarPregunta] = useState(true);  // mostrar el form de Pregunta

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
              <div class="one-half column">
                <Formulario />
              </div>
              <div class="one-half column">
                2
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
