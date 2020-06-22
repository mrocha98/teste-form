import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import nanoid from '../../services/nanoid';

function Step3() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: state.freightage,
  });
  const step = 3;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  useEffect(() => {
    async function validateTrackingCode() {
      const trackingCode = getValues('trackingCode');
      if (!trackingCode) await setValue('trackingCode', await nanoid());
    }
    validateTrackingCode();
  }, [getValues, setValue]);

  return (
    <StepContainer stepNumber={step} title="Qual o código de acompanhamento dessa entrega?">
      <form className="step-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="subtitle">
            O código de acompanhamento disponibilizado para a entrega é
            <input className="input is-inline is-medium is-static" ref={register} name="trackingCode" readOnly />
          </p>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step3;
