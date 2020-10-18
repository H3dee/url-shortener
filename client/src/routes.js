import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import Create from "./pages/CreatePage";
import Links from "./pages/LinksPage";
import Auth from "./pages/AuthPage";
import Detail from "./pages/DetailPage";

export const useRoutes = (isAuthinticated) => {
  if (isAuthinticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <Links />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
