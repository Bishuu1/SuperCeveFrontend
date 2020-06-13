import './../src/assets/styles/index.scss';
import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes/routes';
import RouteWrapper from './routes/RouterWrapper';
// import AppContextProvider from './AppContext';
const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return <RouteWrapper key={`route_${index}`} {...route} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
