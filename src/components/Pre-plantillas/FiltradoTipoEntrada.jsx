import React from 'react'
import { Fragment } from 'react';
import PlantillaA_Entradas from "../../components/Pre-plantillas/PlantillaA_Entradas"
const FiltradoTipoEntrada = (props) => {
    return ( 
        <Fragment>
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Premio").length != 0?   
                <PlantillaA_Entradas entradas={props.entradas} tipo={"Premio"}/>
                :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Conferencia").length != 0?   
                <PlantillaA_Entradas entradas={props.entradas} tipo={"Conferencia"}/>
                :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Publicacion").length != 0?   
                <PlantillaA_Entradas entradas={props.entradas} tipo={"Publicacion"}/>
                :''}
                {props.entradas.filter(entrada => entrada.TipoEntrada === "Concurso").length != 0?   
                <PlantillaA_Entradas entradas={props.entradas} tipo={"Concurso"}/>
                :''}
        </Fragment>
     );
}
 
export default FiltradoTipoEntrada;