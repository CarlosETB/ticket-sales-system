
import React from "react";

// Native
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Pages
import Home from 'pages/Home'
import Login from 'pages/Login'
import Create from 'pages/Create'

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Login} path="/login" exact />
          <Route component={Create} path="/create" exact />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;