import React from 'react';
import StepNavigation from '../stepNavigation';
import NumberCircle from '../numberCircle';
import './styles.scss';

function StepContainer({ children, stepNumber = 0, title = '' }) {
  return (
    <section className="section step-container px-6 py-6 my-3">
      <div className="box">
        <StepNavigation stepNumber={stepNumber} />
        <section className="section content">
          <NumberCircle className="my-5" number={stepNumber} />
          <h1 className="title mb-6">{title}</h1>
          <div>{children}</div>
        </section>
      </div>
    </section>
  );
}

export default StepContainer;
