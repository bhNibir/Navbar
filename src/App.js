import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/layout/Layout";
import Home from "./containers/home/Home";
import Todos from "./containers/todos/Todos";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
