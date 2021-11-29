import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import UserContext from '../../contexts/UserContext';
import Container from '../shared/Container';

const ProtectedRoute = ({ children }) => {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      history.push('/sign-in');
      return null;
    }
    setIsAuthenticated(true);
    return setUser({ ...user, token });
  }, []);

  return isAuthenticated ? (
    children
  ) : (
    <Container>
      <Loader
        type="Bars"
        color="#fff"
        height={40}
        width={100}
      />
    </Container>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
    PropTypes.node,
  ]),
};

ProtectedRoute.defaultProps = {
  children: '',
};

export default ProtectedRoute;
