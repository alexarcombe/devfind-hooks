import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function PrivateRoute(props) {
  const auth = useSelector((state) => state.auth);
  const { component: Component, path } = props;
  return (
    <Route exact path={path}>
      {auth.isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
