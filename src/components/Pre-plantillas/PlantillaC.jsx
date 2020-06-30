import React from 'react';
import PlantillaA_Entradas from './PlantillaA_Entradas';
import NombreDescripcion from './NombreDescripcion';
import DatosAcademico from './DatosAcademico';
import FiltradoTipoEntradas from './FiltradoTipoEntrada';
import TituloTipoEntrada from './TituloTipoEntrada';
import PlantillaCDatos from './PlantillaCDatos';
import { Fragment } from 'react';
import PlantillaBDatos from './PlantillaBDatos';

const PlantillaC = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div
        className="PlantillaC card border-dark"
        style={{
          width: '400px',
          height: '500px',
          fontFamily: props.plantilla.Fuente,
          overflowY: 'auto',
        }}
      >
        {props?.plantilla.Color == 'azul' ? (
          <>
            <div className="card border-primary mt-2 ml-4 mr-4 pb-2">
              <PlantillaCDatos
                academico={props.academico}
                plantilla={props.plantilla}
              />
            </div>
            <hr className="bg-primary ml-4 mr-4"></hr>
          </>
        ) : (
          ''
        )}
        {props?.plantilla.Color == 'rojo' ? (
          <>
            <div className="card border-danger mt-2 ml-4 mr-4 pb-2">
              <PlantillaCDatos
                academico={props.academico}
                plantilla={props.plantilla}
              />
            </div>
            <hr className="bg-danger ml-4 mr-4"></hr>
          </>
        ) : (
          ''
        )}
        {props?.plantilla.Color == 'negro' ? (
          <>
            <div className="card border-dark mt-2 ml-4 mr-4 pb-2">
              <PlantillaCDatos
                academico={props.academico}
                plantilla={props.plantilla}
              />
            </div>
            <hr className="bg-dark ml-4 mr-4"></hr>
          </>
        ) : (
          ''
        )}
        <div className="row pl-3 pr-3">
          <div className="col-md-10 mx-auto">
            <div className="PlantillaBody pt-2">
              {props?.entradas.filter(
                (entrada) => entrada.TipoEntrada === 'Publicación'
              ).length != 0 ? (
                <>
                  <TituloTipoEntrada titulo={'Publicaciones'} />
                  <PlantillaA_Entradas
                    entradas={props.entradas}
                    tipo={'Publicación'}
                  />
                </>
              ) : (
                ''
              )}
              {props?.entradas.filter(
                (entrada) => entrada.TipoEntrada === 'Conferencia'
              ).length != 0 ? (
                <>
                  <TituloTipoEntrada titulo={'Conferencias'} />
                  <PlantillaA_Entradas
                    entradas={props.entradas}
                    tipo={'Conferencia'}
                  />
                </>
              ) : (
                ''
              )}
              {props?.entradas.filter(
                (entrada) => entrada.TipoEntrada === 'Concurso'
              ).length != 0 ? (
                <>
                  <TituloTipoEntrada titulo={'Concursos'} />
                  <PlantillaA_Entradas
                    entradas={props.entradas}
                    tipo={'Concurso'}
                  />
                </>
              ) : (
                ''
              )}
              {props?.entradas.filter(
                (entrada) => entrada.TipoEntrada === 'Premio'
              ).length != 0 ? (
                <>
                  <TituloTipoEntrada titulo={'Premios'} />
                  <PlantillaA_Entradas
                    entradas={props.entradas}
                    tipo={'Premio'}
                  />
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlantillaC;
