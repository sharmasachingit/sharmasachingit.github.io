import react from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
const AllRouters = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CovidTracker />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default AllRouters;
