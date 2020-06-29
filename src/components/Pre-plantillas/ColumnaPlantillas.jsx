import React from 'react'
import { Fragment } from 'react';
import { Container , col,Card,Button, ListGroupItem, ListGroup} from 'react-bootstrap';

import TarjetaPlantilla from "../../components/Pre-plantillas/TarjetaPlantilla"

const ColumnaPlantillas = (props) => {
    return ( 
        <Fragment>
            <div className="col-md-3 p-3 bg-dark card border-secondary" style={{minWidth:"200px"}}>
                <h4 className="p-2 text-white"> Plantillas</h4>
         
                <div className="table-wrapper-scroll-y"
                    style={{
                    position: "relative",
                    height: "470px",
                    width: "100%",
                    overflow: "auto",            
                }}>
                <div className="row" style={{maxWidth:"340px"}}>
                <TarjetaPlantilla ChangeTipoPlantilla={props.ChangeTipoPlantilla} tipo="A" nombre=""/>
                <TarjetaPlantilla ChangeTipoPlantilla={props.ChangeTipoPlantilla} tipo="B" nombre=""/>
                <TarjetaPlantilla ChangeTipoPlantilla={props.ChangeTipoPlantilla} tipo="C" nombre=""/> 
                  {
                    props.plantillasDB.map( item => (
                      <div key={item._id}>
                      <TarjetaPlantilla BottonEditar={props.BottonEditar} ChangeTipoPlantilla={props.ChangeTipoPlantilla} 
                                        tipo={item.TipoPlantilla} nombre={item.Nombre} 
                                        plantilla={item} EliminarPlantilla={props.EliminarPlantilla}/>
                      </div>
                    ))
                  }
                </div>  
              </div>
          </div>
        
        </Fragment>
     );
}
 
export default ColumnaPlantillas;