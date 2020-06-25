import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../app/AppContext';
import { useHistory } from 'react-router-dom';

const Curriculum = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    user.user?.NivelAcceso === 1 && history.push('/');
  }, [user]);
  return <div>Curriculum1</div>;
};

export default Curriculum;
