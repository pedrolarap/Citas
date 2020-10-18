import React, {Fragment, useState} from 'react';
import Formulario from './components/formulario';
import Citas from './components/Citas';
import './index.css';

function App() {

  const  [citas, actualizarCitas] = useState([])

  const crearCitas = cita  =>{
    actualizarCitas([
        ...citas,
        cita ]);
  }
  const eliminarCitas = id =>{
    const nuevasCitas = citas.filter( cita =>{
      return cita.id != id
    })
    actualizarCitas(nuevasCitas);    
  }
  console.log(citas);
  const titulo = citas.length ? 'Administrador de pacientes': 'No hay citas';
  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>    
      <div className = 'container'>
        < div className = 'row'>
          <div className = 'one-half column'>
          <Formulario
          crearCitas = {crearCitas}
          />
          </div>
          <div className = 'one-half column'>
          <h2>{titulo}</h2>
          {citas.map(cita =>(
            <Citas 
            key =  {cita.id}
            cita = {cita}
            eliminarCitas = {eliminarCitas}
            />
          )

          )}
           
          </div>

        </div>
      </div>      
    </Fragment>
  );
}

export default App;
