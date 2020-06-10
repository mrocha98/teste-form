import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import ModalitiesMock from '../../mock/modalities.mock';

function Step5() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.freightage,
  });
  const step = 5;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  return (
    <StepContainer stepNumber={step} title="Deseja categorizar a entrega?">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="subtitle">
            A modalidade da minha entrega é
            <span className="select is-primary is-rounded ml-2">
              <select name="modality" ref={register}>
                {ModalitiesMock.map((modality) => (
                  <option key={modality.id} value={modality.name}>
                    {modality.name}
                  </option>
                ))}
              </select>
            </span>
          </p>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step5;
