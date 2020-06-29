import React from 'react'
import Moment from 'react-moment';
import { Fragment, useState } from 'react';
const EntradaTipo = (props) => {
    return (  
        <Fragment>
            <div className="ml-3">
                <div className="font-weight-bold " style={{fontSize:"7px"}}>
                    {props.nombre}
                </div>
                <div className="ml-1" style={{fontSize:"7px"}}>
                    {(props.tipo === "Publicacion")? 
                        <>{(props.fecha !== null)? 
                            <Moment format="D MMM YYYY" withTitle>
                            {props.fecha}</Moment>:""}
                        {(( props.fecha!= null) && (props.revista !== ""))? <>, {props.revista}</>: props.revista}
                        {(( props.fecha !== null || props.revista !== "" )&& (props.tomo !== null) )? <>, Tomo {props.tomo}</>:
                                                    <>{(props.tomo !== null)? 'Tomo.': '' }{props.tomo}</>}
                        {(( props.fecha !== null || props.revista !== "" || props.tomo !== null  ) && (props.volumen !== null))?
                                                    <>, Vol.{props.volumen}</>: <> {(props.volumen !== null)? 'Vol.': '' }{props.volumen}</>}
                        {(( props.fecha !== null || props.revista !== "" || props.tomo !== null 
                                                || props.volumen !== null)&& (props.intervalo !== ""))?
                                                    <>, paginas {props.intervalo}</>: <>{(props.intervalo !== "")? 'paginas':''}{props.intervalo}</>}
                        {(( props.fecha !== null || props.revista !== "" || props.tomo !== null 
                                                || props.volumen !== null || props.fecha !== null)&&(props.autores !== ""))?
                                                    <>, {props.autores}</>: <>{props.autores}</>}
                        </>:''}
                    {(props.tipo === "Conferencia")? 
                        <>{(props.fecha !== null)? 
                        <Moment format="D MMM YYYY" withTitle>
                        {props.fecha}</Moment>:""}
                        {(( props.fecha !== null) && props.intervalo !== "")? <>, paginas {props.intervalo}</>: <> 
                        {(props.intervalo !== "")? 'Paginas ' : ''}{props.intervalo}</>} 
                        {(( props.fecha !== null || props.intervalo !== "" )&& (props.autores !== ""))? <>, {props.autores}</>: props.autores}
                        </>:''}
                    {(props.tipo === "Concurso")? 
                        <>{props.institucion}
                        {(( props.institucion !=="")&&(props.categoria !== ""))? <>, {props.categoria}</>: props.categoria}
                        {(( props.institucion !== "" || props.categoria !== "" )&& (props.fecha !== null))? 
                        <>, <Moment format="D MMM YYYY" withTitle>{props.fecha}</Moment>
                        </>:<>{(props.fecha !== null)? <Moment format="D MMM YYYY" withTitle>
                            {props.fecha}</Moment>:''}</>}
                        </>:''}
                    {(props.tipo === "Premio")? 
                        <>{props.institucion}
                        {( props.institucion !== "" && props.categoria !=="")? <>, {props.categoria}</>: props.categoria}
                        {(( props.institucion !== "" || props.categoria !== "" )&& (props.fecha!== null)) ? <>, 
                        <Moment format="D MMM YYYY" withTitle>
                            {props.fecha}</Moment>
                        </>: <>{(props.fecha !== null)? <Moment format="D MMM YYYY" withTitle>
                            {props.fecha}</Moment>:''}</>}
                        {(( props.institucion !== "" || props.categoria !== "" || props.fecha !== null  ) && (props.lugar !==""))?
                                                    <>, {props.lugar}</>: props.lugar}
                        </>:''}

                </div>
            </div>
        </Fragment>
    );
}
 
export default EntradaTipo;