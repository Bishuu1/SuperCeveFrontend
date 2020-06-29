import React from 'react'
import { Fragment, useState } from 'react';
const EntradaTipo = (props) => {
    return (  
        <Fragment>
            <div className="ml-3">
                <div className="font-weight-bold " style={{fontSize:"7px"}}>
                    {props.nombre}
                </div>
                <div className="ml-1" style={{fontSize:"7px"}}>
                    {(props.tipo === "Publicación")? 
                        <>{props.fecha}
                        {( props.fecha)? <>, {props.revista}</>: props.revista}
                        {( props.fecha !== null || props.revista !== null )? <>, Tomo {props.tomo}</>:<>Tomo{props.tomo}</>}
                        {( props.fecha !== null || props.revista !== null || props.tomo !== null  )?
                                                    <>, Vol.{props.volumen}</>: <>Vol.{props.volumen}</>}
                        {( props.fecha !== null || props.revista !== null || props.tomo !== null 
                                                || props.volumen !== null)?
                                                    <>, paginas {props.intervalo}</>: <>paginas {props.intervalo}</>}
                        {( props.fecha !== null || props.revista !== null || props.tomo !== null 
                                                || props.volumen !== null || props.fecha !== null)?
                                                    <>, {props.autores}</>: <>{props.autores}</>}
                        </>:''}
                    {(props.tipo === "Conferencia")? 
                        <>{props.fecha}
                        {( props.fecha)? <>, paginas {props.intervalo}</>: <>paginas {props.intervalo}</>} 
                        {( props.fecha !== null || props.intervalo !== null )? <>, {props.autores}</>: props.autores}
                        </>:''}
                    {(props.tipo === "Concurso")? 
                        <>{props.institucion}
                        {( props.institucion)? <>, {props.categoria}</>: props.categoria}
                        {( props.institucion !== null || props.categoria != null )? <>, {props.fecha}</>: props.fecha}
                        </>:''}
                    {(props.tipo === "Premio")? 
                        <>{props.institucion}
                        {( props.institucion)? <>, {props.categoria}</>: props.categoria}
                        {( props.institucion !== null || props.categoria != null )? <>, {props.fecha}</>: props.fecha}
                        {( props.institucion !== null || props.categoria != null || props.fecha != null  )?
                                                    <>, {props.lugar}</>: props.lugar}
                        </>:''}

                </div>
            </div>
        </Fragment>
    );
}
 
export default EntradaTipo;