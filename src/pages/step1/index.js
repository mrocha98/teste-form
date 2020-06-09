import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';

function Step1() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.freightage,
  });
  const step = 1;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  return (
    <StepContainer stepNumber={step} title="Quando será a retirada e a entrega da carga?">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="subtitle">
            A retirada será feita no dia{' '}
            <input className="input is-inline is-medium is-static" type="date" ref={register} name="receivement.date" />
            às{' '}
            <input className="input is-inline is-medium is-static" type="time" ref={register} name="receivement.time" />
          </p>
        </div>
        <div className="field">
          <p className="subtitle">
            A retirada será feita no dia{' '}
            <input className="input is-inline is-medium is-static" type="date" ref={register} name="delivery.date" />
            às <input className="input is-inline is-medium is-static" type="time" ref={register} name="delivery.time" />
          </p>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step1;
