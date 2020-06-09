import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import LocationsSelectOptions from '../../components/locationsSelectOptions';
import './styles.scss';

function Step6() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.freightage,
  });
  const step = 6;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  return (
    <StepContainer stepNumber={step} title="Qual o local de retirada e o destino de sua entrega?">
      <form className="step-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="selects-container">
          <div className="control">
            <p className="subtitle">A minha entrega será retirada em</p>
            <div className="select is-primary">
              <select name="location.origin" ref={register}>
                <LocationsSelectOptions hash="origin" />
              </select>
            </div>
          </div>
          <div className="control">
            <p className="subtitle">A minha entrega será destinada para</p>
            <div className="select is-primary">
              <select name="location.destiny" ref={register}>
                <LocationsSelectOptions hash="destiny" />
              </select>
            </div>
          </div>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step6;
