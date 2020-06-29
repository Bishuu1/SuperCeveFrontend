import React from 'react';
import PlantillaA_Entradas from "../Pre-plantillas/PlantillaA_Entradas"
import NombreDescripcion from "../Pre-plantillas/NombreDescripcion"
import DatosAcademico from "../Pre-plantillas/DatosAcademico"
import FiltradoTipoEntradas from "../Pre-plantillas/FiltradoTipoEntrada"
import TituloTipoEntrada from "../Pre-plantillas/TituloTipoEntrada"
import { Fragment } from 'react';


const PlantillaA = (props) => {
    return ( 
    <Fragment>
    <div className="PlantillaA card border-dark p-4 " style={{width:"400px",height:"500px", overflowY:"auto" ,fontFamily:props.plantilla.Fuente}}>
        {props.plantilla.Color === 'azul'?  
        <div className="">
            <div className="row pl-3 pr-3">
                <div className="col-md-6" style={{maxWidth:"175px"}}>
                    <NombreDescripcion academico={props.academico} descripcion={props.plantilla.Descripcion}/>
                </div>
                <div className="col-md-6 pt-2 card border-primary "style={{maxWidth:"173px"}}>
                    <DatosAcademico academico={props.academico}/>     
                </div>            
            </div>
            <hr/>  
            <div className="PlantillaBody">
            {props.entradas.filter(entrada => entrada.TipoEntrada === "Publicacion").length != 0?  
                <div className="card border-primary p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Publicaciones"}/>
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Publicacion"}/></>
                </div> 
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Conferencia").length != 0?   
                <div className="card border-primary p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Conferencias"}/>
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Conferencia"}/></> 
                    </div> 
                    :''}  
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Concurso").length != 0?  
                <div className="card border-primary p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Concursos"}/> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Concurso"}/></> 
                    </div>
                    :''}   
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Premio").length != 0? 
                <div className="card border-primary p-2 mb-2" > 
                <><TituloTipoEntrada titulo={"Premios"}/>  
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Premio"}/></> 
                    </div>
                    :''}
                
            </div>        
        </div>
        :''}
        {props.plantilla.Color === 'rojo'?  
        <div className="">
            <div className="row pl-3 pr-3">
                <div className="col-md-6" style={{maxWidth:"175px"}}>
                <NombreDescripcion academico={props.academico} descripcion={props.plantilla.Descripcion}/>
                </div>
                <div className="col-md-6 pt-2 card border-danger" style={{maxWidth:"173px"}}>
                <DatosAcademico academico={props.academico}/>   
                </div>              
            </div>
            <hr/>    
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Publicacion").length != 0?  
                <div className="card border-danger p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Publicaciones"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Publicacion"}/>
                </div> 
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Conferencia").length != 0?   
                <div className="card border-danger p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Conferencias"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Conferencia"}/>
                    </div> 
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Concurso").length != 0?  
                <div className="card border-danger p-2 mb-2" >   
                <><TituloTipoEntrada titulo={"Concursos"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Concurso"}/>
                    </div>
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Premio").length != 0? 
                <div className="card border-danger p-2 mb-2" >   
                <><TituloTipoEntrada titulo={"Premios"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Premio"}/>
                    </div>
                    :''}
            </div>        
        : ''}
        {props.plantilla.Color === 'negro'?  
        <div className="">
            <div className="row pl-3 pr-3">
                <div className="col-md-6" style={{maxWidth:"175px"}}>
                <NombreDescripcion academico={props.academico } descripcion={props.plantilla.Descripcion}/>
                </div>
                <div className="col-md-6 pt-2 card border-dark" style={{maxWidth:"173px"}}>
                <DatosAcademico academico={props.academico}/>   
                </div>              
            </div>
            <hr/>
            
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Publicacion").length != 0?  
                <div className="card border-dark p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Publicaciones"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Publicacion"}/>
                </div> 
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Conferencia").length != 0?   
                <div className="card border-dark p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Conferencias"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Conferencia"}/>
                    </div> 
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Concurso").length != 0?  
                <div className="card border-dark p-2 mb-2" > 
                <><TituloTipoEntrada titulo={"Concursos"}/></>  
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Concurso"}/>
                    </div>
                    :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Premio").length != 0? 
                <div className="card border-dark p-2 mb-2" >  
                <><TituloTipoEntrada titulo={"Premios"}/></> 
                    <PlantillaA_Entradas entradas={props.entradas} tipo={"Premio"}/>
                    </div>
                    :''}
             

        </div> 
        : ''}
    </div>
    </Fragment>
    );
}
 
export default PlantillaA;