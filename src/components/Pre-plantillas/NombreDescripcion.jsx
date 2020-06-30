import React, { Fragment } from 'react';

const NombreDescripcion = (props) => {
  return (
    <Fragment>
      <h3 className="" style={{ fontSize: '13px' }}>
        {props.academico.Nombre}{' '}
      </h3>
      <h6 className="ml-3" style={{ fontSize: '9px' }}>
        {props.descripcion}
      </h6>
    </Fragment>
  );
};

export default NombreDescripcion;
