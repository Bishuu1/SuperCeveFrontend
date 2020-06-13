import Home from '../content/Home';
import Profile from '../content/Profile';
import Curriculum from '../content/Curriculum';

const routes = [
  { path: '/', component: Home, exact: true, title: 'Inicio' },
  { path: '/perfil', component: Profile, exact: true, title: 'Perfil' },
  {
    path: '/curriculum',
    component: Curriculum,
    exact: true,
    title: 'Curriculum',
  },
];

export default routes;
