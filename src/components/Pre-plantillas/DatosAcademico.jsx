import React from 'react';
import { Fragment } from 'react';

const DatosAcademico = (props) => {
  return (
    <Fragment>
      <h6 style={{ fontSize: '8px' }}>
        Rut:{' '}
        <div className="font-weight" style={{ fontSize: '8px' }}>
          {props.academico.Rut}
        </div>
      </h6>
      <h6 style={{ fontSize: '8px' }}>
        Correo electrónico:{' '}
        <div className="font-weight" style={{ fontSize: '8px' }}>
          {props.academico.CorreoUsuario}
        </div>
      </h6>
      <h6 style={{ fontSize: '8px' }}>
        Fecha de nacimiento:{' '}
        <div className="font-weight" style={{ fontSize: '8px' }}>
          {props.academico.FechaNacimiento}
        </div>
      </h6>
      <h6 style={{ fontSize: '8px' }}>
        Código gooogle scholar:{' '}
        <div className="font-weight" style={{ fontSize: '8px' }}>
          {props.academico.LinkGoogleScholar}
        </div>
      </h6>
    </Fragment>
  );
};

export default DatosAcademico;
