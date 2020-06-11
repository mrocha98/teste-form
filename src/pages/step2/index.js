import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import './styles.scss';

function Step2() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.freightage,
  });
  const step = 2;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  return (
    <StepContainer stepNumber={step} title="Qual o peso dessa entrega?">
      <form className="step-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="subtitle">
            A entrega tem{' '}
            <input
              className="input is-inline is-medium is-static"
              type="number"
              step="0.01"
              ref={register}
              name="weight"
            />{' '}
            kg
          </p>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step2;
