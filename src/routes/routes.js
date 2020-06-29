import Home from '../content/Home';
import Profile from '../content/Profile';
import Curriculum from '../content/Curriculum';
import SetEntries from '../content/SetEntries';
import Users from '../content/Users';
import Plantillas from '../content/Plantillas';
import AddUser from '../content/Users/AddUser';
import EditUser from '../content/Users/EditUser';
import Login from '../content/Login';

const routes = [
  { path: '/', component: Home, exact: true, title: 'Inicio' },
  {
    path: '/login',
    component: Login,
    exact: true,
    title: 'Login',
    isPublic: true,
  },
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
    path: '/plantillas',
    component: Plantillas,
    exact: true,
    title: 'Plantillas',
  },
];

export default routes;
