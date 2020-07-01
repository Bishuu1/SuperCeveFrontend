import React from 'react';
import PlantillaA_Entradas from '../Pre-plantillas/PlantillaA_Entradas';
import NombreDescripcion from '../Pre-plantillas/NombreDescripcion';
import DatosAcademico from '../Pre-plantillas/DatosAcademico';
import FiltradoTipoEntradas from '../Pre-plantillas/FiltradoTipoEntrada';
import TituloTipoEntrada from '../Pre-plantillas/TituloTipoEntrada';
import PlantillaBDatos from '../Pre-plantillas/PlantillaBDatos';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

const PlantillaB = (props) => {
  return (
    <Fragment>
      <div
        className="PlantillaB card border-dark"
        style={{
          width: '400px',
          height: '500px',
          fontFamily: props.plantilla.Fuente,
          overflowY: 'auto',
        }}
      >
        <Container>
          <div className="row">
            <div className="col-sm-4 p-0" style={{ width: '140px' }}>
              {props.plantilla.Color == 'azul' ? (
                <div
                  className="bg-primary text-white"
                  style={{
                    width: '140px',
                    minHeight: '496px',
                    height: '100%',
                  }}
                >
                  <PlantillaBDatos
                    academico={props.academico}
                    plantilla={props.plantilla}
                  />
                </div>
              ) : (
                ''
              )}
              {props.plantilla.Color == 'rojo' ? (
                <div
                  className="bg-danger text-white"
                  style={{ width: '140px', minHeight: '496px' }}
                >
                  <PlantillaBDatos
                    academico={props.academico}
                    plantilla={props.plantilla}
                  />
                </div>
              ) : (
                ''
              )}
              {props.plantilla.Color == 'negro' ? (
                <div
                  className="bg-secondary text-white"
                  style={{ width: '140px', minHeight: '496px' }}
                >
                  <PlantillaBDatos
                    academico={props.academico}
                    plantilla={props.plantilla}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="col-sm-8">
              <div className="p-3">
                <div className="PlantillaBody">
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
        </Container>
      </div>
    </Fragment>
  );
};

export default PlantillaB;
