import Home from '../content/Home';
import Profile from '../content/Profile';
import Curriculum from '../content/Curriculum';
import SetEntries from '../content/SetEntries';
import Users from '../content/Users';
import Entradas from '../content/Entradas';
import AddUser from '../content/Users/AddUser';
import EditUser from '../content/Users/EditUser';

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
    path: '/usuarios/agregar-usuario',
    component: AddUser,
    exact: true,
    title: 'Agregar usuario',
  },
  {
    path: '/usuarios/editar-usuario/:id',
    component: EditUser,
    exact: true,
    title: 'Editar usuario',
  },
  {
    path: '/curriculum',
    component: Curriculum,
    exact: true,
    title: 'Curriculum',
  },
  {
    path: '/conjunto-entradas',
    component: SetEntries,
    exact: true,
    title: 'Conjunto de entradas',
  },

  {
    path: '/entradas',
    component: Entradas,
    exact: true,
    title: 'Entradas',
  },
];



export default routes;
