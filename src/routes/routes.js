import Home from '../content/Home';
import Profile from '../content/Profile';
import Curriculum from '../content/Curriculum';
import Users from '../content/Users';
import Entradas from '../content/Entradas';

const routes = [
  { path: '/', component: Home, exact: true, title: 'Inicio' },
  { path: '/perfil', component: Profile, exact: true, title: 'Perfil' },
  {
    path: '/usuarios',
    component: Users,
    exact: true,
    title: 'Administracion de usuarios',
  },
  {
    path: '/curriculum',
    component: Curriculum,
    exact: true,
    title: 'Curriculum',
  },
  {
    path: '/entradas',
    component: Entradas,
    exact: true,
    title: 'Entradas',
  },
];

export default routes;
