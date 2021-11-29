import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Theme from './styles/Theme';
import ResetCss from './styles/ResetCss';
import GlobalStyle from './styles/GlobalStyle';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Wallet from './components/Wallet/Wallet';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AddCashFlow from './components/AddCashFlow/AddCashFlow';
import UserContext from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      setUser({ ...user, token });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Theme>
        <BrowserRouter>
          <ResetCss />
          <GlobalStyle />
          <Switch>
            <Route path="/sign-in" exact>
              <SignIn />
            </Route>

            <Route path="/sign-up" exact>
              <SignUp />
            </Route>

            <Route path="/wallet" exact>
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            </Route>

            <Route path="/add-inflow" exact>
              <AddCashFlow />
            </Route>

            <Route path="/add-outflow" exact>
              <AddCashFlow />
            </Route>

            <Redirect to="/sign-in" />
          </Switch>
        </BrowserRouter>
      </Theme>
    </UserContext.Provider>
  );
};
export default App;
