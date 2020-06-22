import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import TextArea from 'react-textarea-autosize';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import './styles.scss';

function Step10() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.freightage,
  });
  const step = 10;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  return (
    <StepContainer stepNumber={step} title="Tem alguma observação?">
      <form className="step-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <TextArea className="textarea has-fixed-size" ref={register} name="observation" />
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step10;
