import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

import TraderWidget from './Trader';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:orderCID" component={TraderWidget} />
        <Route path="/" component={TraderWidget} />
      </Switch>
    </Router>
  );
}
