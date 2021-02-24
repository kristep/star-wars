import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HeaderTabs from "./features/header/HeaderTabs";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route exact path="/second">
          <Layout customHeaderRenderer={() => <HeaderTabs />}>
            <SecondPage />
          </Layout>
        </Route>
        <Route exact path="/third">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
