import React, { useContext, useEffect, Fragment, useState } from 'react';
import { AppContext } from '../../app/AppContext';
import { useHistory } from 'react-router-dom';
import CurriculumTable from '../../components/CurriculumComponent/CurriculumTable';

const Curriculum = () => {
  const [etapa, setEtapa] = useState('0');
  const history = useHistory();
  const { user } = useContext(AppContext);
  const ChangeEtapa = (NuevaEtapa) => {
    setEtapa(NuevaEtapa);
  };
  useEffect(() => {
    user.user?.NivelAcceso === 1 && history.push('/');
  }, [user]);
  return (
    <Fragment>
      {etapa === '0' ? (
        <CurriculumTable ChangeEtapa={ChangeEtapa} /> //eleccion de curriculum
      ) : (
        ''
      )}
      {etapa === '1' ? (
        <CurriculumTable ChangeEtapa={ChangeEtapa} /> //eleccion de plantilla
      ) : (
        ''
      )}
      {etapa === '2' ? (
        <CurriculumTable ChangeEtapa={ChangeEtapa} /> //eleccion de conjuntos
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Curriculum;
