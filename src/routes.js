import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import Step4 from './pages/step4';
import Step5 from './pages/step5';
import Step6 from './pages/step6';
import Step7 from './pages/step7';
import Step8 from './pages/step8';
import Step9 from './pages/step9';
import Step10 from './pages/step10';
import NotFound from './pages/notFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/step-1" component={Step1} />
      <Route path="/step-2" component={Step2} />
      <Route path="/step-3" component={Step3} />
      <Route path="/step-4" component={Step4} />
      <Route path="/step-5" component={Step5} />
      <Route path="/step-6" component={Step6} />
      <Route path="/step-7" component={Step7} />
      <Route path="/step-8" component={Step8} />
      <Route path="/step-9" component={Step9} />
      <Route path="/step-10" component={Step10} />
      <Route path="/" exact render={() => <Redirect to="/step-1" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
