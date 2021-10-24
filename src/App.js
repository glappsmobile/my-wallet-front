import ResetCss from "./styles/ResetCss";
import GlobalStyle from "./styles/GlobalStyle";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ResetCss />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
