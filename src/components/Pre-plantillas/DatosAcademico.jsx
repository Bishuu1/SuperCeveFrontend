import React from 'react'
import { Fragment } from 'react';

const DatosAcademico = (props) => {
    return ( 
        <Fragment>         
                        <h6 style={{fontSize:"8px"}}>Rut: <h7 className="font-weight" style={{fontSize:"8px"}}> 
                        {props.academico.Rut}</h7></h6>
                        <h6 style={{fontSize:"8px"}}>Correo electrónico: <h7 className="font-weight" style={{fontSize:"8px"}}> 
                        {props.academico.Correo}</h7></h6>
                        <h6 style={{fontSize:"8px"}}>Fecha de nacimiento: <h7 className="font-weight" style={{fontSize:"8px"}}>
                        {props.academico.FechaNacimiento}</h7></h6>
                        <h6 style={{fontSize:"8px"}}>Código gooogle scholar: <h7 className="font-weight" style={{fontSize:"8px"}}> 
                        {props.academico.LinkGoogleScholar}</h7></h6>
        </Fragment>
     );
}
 
export default DatosAcademico;