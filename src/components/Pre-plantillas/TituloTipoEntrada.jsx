import React, { Fragment } from 'react'
const TituloTipoEntrada = (props) => {
    return ( 
        <Fragment>
            <div className="row pl-3 pr-3 font-weight-bold  ">
                    <div style={{fontSize:"10px"}}>
                        {props.titulo}</div>
            </div>
        </Fragment>
     );
}
 
export default TituloTipoEntrada;