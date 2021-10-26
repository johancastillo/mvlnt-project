import {Router, Route, Switch} from "wouter"
import Form from "./pages/Form";
// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./widgets/Navigation";

const AppRouting = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Home} />
        <Route path="/formulario" component={Form} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouting;
