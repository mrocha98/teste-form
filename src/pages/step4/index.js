import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import './styles.scss';

function Step4() {
  const history = useHistory();

  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, watch, setValue } = useForm({
    defaultValues: state.freightage,
  });

  const step = 4;
  const nextDestination = `step-${step + 1}`;

  const radioValue = watch('wantsToInsertValue');

  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  useEffect(() => {
    if (radioValue === 'no') setValue('value', 'COMBINAR');
  }, [radioValue, setValue]);

  return (
    <StepContainer stepNumber={step} title="Deseja incluir um valor ao seu frete?">
      <form className="step-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="control">
          <label className="radio" htmlFor="wantsToInsertValue">
            <input className="mx-2" type="radio" name="wantsToInsertValue" value="yes" ref={register} />
            Sim
          </label>
          <label className="radio" htmlFor="wantsToInsertValue">
            <input className="mx-2" type="radio" name="wantsToInsertValue" value="no" ref={register} />
            Não
          </label>
        </div>
        <div className="field">
          <p className="subtitle">
            {radioValue === 'yes' && (
              <>
                O valor proposto é R$
                <input
                  className="input is-inline is-medium is-static has-text-left step-4-input"
                  ref={register}
                  step="0.01"
                  name="value"
                />
              </>
            )}
            {radioValue === 'no' && (
              <>
                Valor à
                <input
                  className="input is-inline is-medium is-static has-text-left ml-2 step-4-input"
                  ref={register}
                  name="value"
                  readOnly
                />
              </>
            )}
          </p>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step4;
