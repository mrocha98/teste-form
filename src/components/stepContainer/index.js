import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import NumberCircle from '../numberCircle';
import './styles.scss';

function StepContainer({ children, stepNumber = 0, title = '' }) {
  const history = useHistory();

  const shouldHideBackButton = stepNumber <= 1;

  const previousPage = `step-${stepNumber - 1}`;
  const navigateBack = () => history.push(previousPage);

  return (
    <section className="section step-container px-6 py-6 my-3">
      <div className="box">
        <div className="container container--top px-3 py-3">
          <button
            type="button"
            className={`button is-white ${shouldHideBackButton && 'is-invisible'}`}
            disabled={shouldHideBackButton}
            onClick={navigateBack}
          >
            <FiArrowLeft className="icon" />
            <span>Voltar</span>
          </button>
          <button type="button" className="button is-white button--top">
            <BsCircleFill className="icon mr-2" />
            <span>Incluir um novo frete</span>
          </button>
        </div>
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
