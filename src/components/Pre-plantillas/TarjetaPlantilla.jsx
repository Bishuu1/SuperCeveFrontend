import React from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlantillaImgA from '../../assets/images/PlantillaAimg.JPG';
import PlantillaImgB from '../../assets/images/PlantillaBimg.JPG';
import PlantillaImgC from '../../assets/images/PlantillaCimg.JPG';

const TarjetaPlantilla = (props) => {
  return (
    <Fragment>
      <div className="mb-4">
        {props.nombre === '' ? (
          <>
            <h6 className="ml-4 text-white">{props.tipo}</h6>
            <div className="ml-4 mb-2" style={{ height: '7rem' }}>
              {props.tipo === 'A' ? (
                <img
                  className="card-img"
                  src={PlantillaImgA}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
              {props.tipo === 'B' ? (
                <img
                  className="card-img"
                  src={PlantillaImgB}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
              {props.tipo === 'C' ? (
                <img
                  className="card-img"
                  src={PlantillaImgC}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
            </div>
            <div className="ml-4">
              <div
                className="btn-group btn-group-sm mb-2 ml-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-success text-dark btn-sm mr-1"
                  title="Agregar plantilla"
                  onClick={() => props.ChangeTipoPlantilla(props.tipo)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  type="button"
                  className="btn btn-danger text-dark btn-sm text-dark"
                  title="No es eliminable"
                  disabled
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h6 className="ml-4 text-white">{props.nombre}</h6>
            <div className="ml-4 mb-2" style={{ height: '7rem' }}>
              {props.tipo === 'A' ? (
                <img
                  className="card-img"
                  src={PlantillaImgA}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
              {props.tipo === 'B' ? (
                <img
                  className="card-img"
                  src={PlantillaImgB}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
              {props.tipo === 'C' ? (
                <img
                  className="card-img"
                  src={PlantillaImgC}
                  alt="Plantilla_demo"
                  style={{ width: '8rem' }}
                />
              ) : (
                ''
              )}
            </div>
            <div className="ml-4">
              <div
                className="btn-group btn-group-sm mb-2 ml-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-warning text-dark btn-sm mr-1"
                  title="Editar"
                  onClick={() => props.BottonEditar(props.plantilla)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  type="button"
                  className="btn btn-danger text-dark btn-sm text-dark"
                  title="Eliminar"
                  onClick={() => props.EliminarPlantilla(props.plantilla._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default TarjetaPlantilla;
