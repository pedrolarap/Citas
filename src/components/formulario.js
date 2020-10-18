import React,{ Fragment, useState } from 'react';
import {v1 as uuid} from "uuid"; 

const Formulario =(props)=>{ 
    const [cita, actualizarCitas] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });

    const [error, actualizarError] = useState(false);

    const actualizarState = e =>{
        actualizarCitas({
            ...cita,
           [e.target.name] : e.target.value
        })

    }
    const {mascota,propietario,fecha,hora,sintomas} = cita;
    const submitCita = e =>{
        e.preventDefault();
    
    //validar
    if(mascota.trim()=== '' || propietario.trim()==='' || fecha.trim()=== ''
    || hora.trim()==='' || sintomas.trim()=== '' ){
        actualizarError(true);
        return;        
    }
    actualizarError(false);
    cita.id = uuid();
    props.crearCitas(cita); 
    actualizarCitas({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });   
    }
   
   

 return(
     <Fragment>
         
         <h1>Crear cita</h1>
         {error ? <p className ="alerta-error">Se debe llenar todo los campos</p> :null}
         <form
         onSubmit= {submitCita} 
         >
             

             <label>Nombre mascota</label>
             <input
             type= "text"
             name= 'mascota'
             className= "u-full-width"
             placeholder= "Nombre de mascota"
             value = {mascota}
             onChange = {actualizarState}
             />

             <label>Propietario</label>
             <input 
             type= "text"
             name= "propietario"
             className= "u-full-width"
             placeholder= "Nombre dueno de la mascota"
             value = {propietario}
             onChange = {actualizarState}
             />

            <label>Fecha</label>
             <input 
             type= "date"
             name= "fecha"
             className= "u-full-width"
             value = {fecha}
             onChange = {actualizarState}          
             />

             <label>Hora</label>
             <input 
             type= "time"
             name= "hora"
             className= "u-full-width"
             value = {hora}
             onChange = {actualizarState}            
             />
             <label>Sintomas</label>
             <textarea
             name= "sintomas"
             className= "u-full-width"
             value = {sintomas}
             onChange = {actualizarState}             
             >
             </textarea>
             <button
             type="submit"
             className= "u-full-width button-primary" 
             >
             Agregar
             </button>
             

             
         </form>
     </Fragment>
 )
}
    

    


export default Formulario;