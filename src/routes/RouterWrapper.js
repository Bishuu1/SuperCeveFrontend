import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
// import { isLogin } from '../utils/session';
import PrivateLayout from '../components/Layout/PrivateLayout';
import PublicLayout from '../components/Layout/PublicLayout';
import { isLogin } from '../utils/session';

const RouteWrapper = ({
  component: Component,
  path,
  restricted = false,
  isPublic = false,
  title,
}) => {
  window.document.title = title ? `${title} | CV` : 'CV';
  // Window's title

  return isPublic ? (
    isLogin() ? ( //TODO: LOGIN
      <Redirect to="/" />
    ) : (
      <Route
        path={path}
        render={(props) => (
          <PublicLayout {...props}>
            <Component {...props} />
          </PublicLayout>
        )}
      />
    )
  ) : isLogin() ? ( //TODO: LOGIN
    <Route
      path={path}
      render={(props) => (
        <PrivateLayout {...props}>
          <Component {...props} />
        </PrivateLayout>
      )}
    />
  ) : (
    <Redirect to="/login" />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  restricted: PropTypes.bool,
  isPublic: PropTypes.bool,
};

export default RouteWrapper;
