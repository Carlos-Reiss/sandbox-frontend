import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Box from '../pages/Box';

const router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/boxes/:id" component={Box} />
  </Switch>
);

export default router;
