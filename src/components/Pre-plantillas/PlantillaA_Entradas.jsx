import React, { Fragment } from 'react'
import EntradaTipo from "../Pre-plantillas/EntradaTipo"
import TituloTipoEntrada from "../Pre-plantillas/TituloTipoEntrada"
const PlantillaA_Entradas = (props) => {

    return (  
        <Fragment>
                <>
                {
                props.entradas.length >0 ?
                props.entradas.map(entrada =>(
                <tr key={entrada._id}>
                 <td>  
                {(entrada.TipoEntrada) == props.tipo ?      
                    <><EntradaTipo  
                        tipo={props.tipo}
                        nombre={entrada.NombreEntrada}
                        fecha={entrada.FechaEntrada}
                        categoria={entrada.Categoria}
                        lugar={entrada.LugarObtenido}
                        institucion={entrada.Institucion}
                        autores={entrada.Autores}
                        revista={entrada.Revista}
                        tomo={entrada.NumeroTomo}
                        volumen={entrada.Volumen}
                        intervalo={entrada.IntervaloPaginas}
                    /></>: '' }
                </td>
                </tr>  
                )):( 
                <tr> no hay usuarios</tr>)
            }</>
            
        </Fragment>
    );
}
 
export default PlantillaA_Entradas;