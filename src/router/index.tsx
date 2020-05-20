import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Box from '../pages/Box';
import Boxes from '../pages/Boxes';

const router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/boxes/:id" component={Box} />
    <Route path="/boxes" component={Boxes} />
  </Switch>
);

export default router;
