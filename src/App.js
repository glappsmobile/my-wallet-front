import ResetCss from "./styles/ResetCss";
import GlobalStyle from "./styles/GlobalStyle";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Wallet from "./components/Wallet/Wallet";
import AddCashFlow from "./components/AddCashFlow/AddCashFlow";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
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
          <Wallet />
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
  );
}

export default App;
