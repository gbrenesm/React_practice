import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Home</h1>

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
          <Route component = { Home } path='/' exact/>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;