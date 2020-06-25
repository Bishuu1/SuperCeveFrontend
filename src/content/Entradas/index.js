import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../app/AppContext';
import { useHistory } from 'react-router-dom';

const Entradas = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    user.user?.NivelAcceso === 1 && history.push('/');
  }, [history, user]);
  return (
    <>
      <h1>wena los cauros</h1>
      <h2>va a fallar</h2>
    </>
  );
};

export default Entradas;
