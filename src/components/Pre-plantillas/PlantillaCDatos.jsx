import React, { Fragment } from 'react'
const PlantillaCDatos = (props) => {
    return ( 
        <Fragment>
            <div className="row pr-3 pt-3">    
                <div className="col-md-10">
                    <div className="ml-4 pl-2" style={{fontSize:"14px"}}>
                    <div className="bg-primary text-white">
                        
                        
                    </div>
                        {(props.plantilla.Color === "azul")? 
                        <div className="" style={{color:"#0275d8"}}>
                        {props.academico.NombreAcademico}</div>:''} 
                        {(props.plantilla.Color === "rojo")? 
                        <div className="" style={{color:"#d9534f"}}>
                        {props.academico.NombreAcademico}</div>:''} 
                        {(props.plantilla.Color === "negro")? 
                        <div className="" style={{color:"#292b2c"}}>
                        {props.academico.NombreAcademico}</div>:''} 

                        <div className="pr-4" style={{fontSize:"10px" , width:"320px"}}>
                                    {props.plantilla.Descripcion}</div>                                   
                    </div>                       
                </div>       
            </div> 
            <div className="row pr-3">
            <div className="col-md-10 mx-auto">
                        <div className="row">
                                <div className="ml-4" style={{width:"130px"}} >
                                    <div className="font-weight-bold" style={{fontSize:"9px"}}>Rut:</div> 
                                    <div className="font-weight" style={{fontSize:"9px"}}> 
                                    {props.academico.Rut}</div>
                                    <div className="font-weight-bold" style={{fontSize:"9px"}}>Correo electrónico:</div> <div className="font-weight" style={{fontSize:"9px"}}> 
                                    {props.academico.Correo}</div>
                                </div>
                            <div className="" style={{width:"130x"}} >
                                <div className="font-weight-bold" style={{fontSize:"9px"}}>Fecha de nacimiento:</div> <div className="font-weight" style={{fontSize:"9px"}}>
                                {props.academico.FechaNacimiento}</div>
                                <div className="font-weight-bold" style={{fontSize:"9px"}}>Código gooogle scholar:</div><div className="font-weight" style={{fontSize:"9px"}}> 
                                {props.academico.LinkGoogleScholar}</div>
                            </div>  
                        </div>
            </div>
            </div>

        </Fragment>
     );
}
 
export default PlantillaCDatos;