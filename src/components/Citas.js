import React, { Fragment } from 'react';
const Citas = ({cita, eliminarCitas})=>{
const {id, mascota, propietario, fecha, hora,sintoma } = cita;
return(
<div className = 'cita'>
<p>Mascota: <spam>{mascota}</spam></p>
<p>Propietario: <spam>{propietario}</spam></p>
<p>Fecha: <spam>{fecha}</spam></p>
<p>Hora: <spam>{hora}</spam></p>
<p>Sintomas: <spam>{sintoma}</spam></p>
<button
className = " eliminar button u-full-width"
onClick = {()=>eliminarCitas(id)}
>
    Eliminar
</button>
</div>

)

}

export default Citas;