import ResetCss from "./styles/ResetCss";
import GlobalStyle from "./styles/GlobalStyle";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

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

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
