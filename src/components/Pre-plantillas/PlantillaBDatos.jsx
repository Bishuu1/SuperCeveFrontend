import React, { Fragment } from 'react';
const PlantillaBDatos = (props) => {
  return (
    <Fragment>
      <div className="card-header">
        <div className="" style={{ fontSize: '12px' }}>
          {props.academico.Nombre}{' '}
        </div>
      </div>
      <div className="pl-3 pr-3 pt-2" style={{ fontSize: '10px' }}>
        {props.plantilla.Descripcion}
      </div>
      <div className="p-3">
        <div className="font-weight-bold" style={{ fontSize: '10px' }}>
          Rut:
        </div>
        <div className="font-weight" style={{ fontSize: '10px' }}>
          {props.academico.Rut}
        </div>
        <div className="font-weight-bold" style={{ fontSize: '10px' }}>
          Correo electrónico:
        </div>{' '}
        <div className="font-weight" style={{ fontSize: '10px' }}>
          {props.academico.CorreoUsuario}
        </div>
        <div className="font-weight-bold" style={{ fontSize: '10px' }}>
          Fecha de nacimiento:
        </div>{' '}
        <div className="font-weight" style={{ fontSize: '10px' }}>
          {props.academico.FechaNacimiento}
        </div>
        <div className="font-weight-bold" style={{ fontSize: '10px' }}>
          Código gooogle scholar:
        </div>
        <div className="font-weight" style={{ fontSize: '10px' }}>
          {props.academico.LinkGoogleScholar}
        </div>
      </div>
    </Fragment>
  );
};

export default PlantillaBDatos;
