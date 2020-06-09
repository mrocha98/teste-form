import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import Step4 from './pages/step4';
import Step5 from './pages/step5';
import NotFound from './pages/notFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/step-1" component={Step1} />
      <Route path="/step-2" component={Step2} />
      <Route path="/step-3" component={Step3} />
      <Route path="/step-4" component={Step4} />
      <Route path="/step-5" component={Step5} />
      <Route path="/" exact render={() => <Redirect to="/step-1" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
