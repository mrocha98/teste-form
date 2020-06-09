import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import NotFound from './pages/notFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/step-1" component={Step1} />
      <Route path="/step-2" component={Step2} />
      <Route path="/" exact render={() => <Redirect to="/step-1" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
