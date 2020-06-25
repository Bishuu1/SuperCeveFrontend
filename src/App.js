import './../src/assets/styles/index.scss';
import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes/routes';
import RouteWrapper from './routes/RouterWrapper';
import { ToastContainer } from 'react-toastify';
import AppContextProvider from './app/AppContext';
const App = () => {
  return (
    <>
      <Router>
        <AppContextProvider>
          <Switch>
            {routes.map((route, index) => {
              return <RouteWrapper key={`route_${index}`} {...route} />;
            })}
          </Switch>
        </AppContextProvider>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
