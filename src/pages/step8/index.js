import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import StepContainer from '../../components/stepContainer';
import NavigateButton from '../../components/navigateButton';
import BodyworkTypesMock from '../../mock/bodyworkTypes.mock';
import '../../styles/checkbox.scss';

function Step8() {
  const history = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: state.freightage,
  });
  const step = 8;
  const nextDestination = `step-${step + 1}`;
  const onSubmit = async (data) => {
    await action(data);
    history.push(nextDestination);
  };

  const name = 'bodyworkTypes';

  const handleCheckAll = useCallback(() => {
    const values = getValues(name);
    if (values.length === 0) {
      const arr = Array(BodyworkTypesMock.length).fill();
      arr.forEach(() => values.push(false));
    }
    const allValuesChecked = values.map(() => true);
    setValue(name, allValuesChecked);
  }, [getValues, setValue]);

  return (
    <StepContainer stepNumber={step} title="Especifique o tipo de carroceria">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="control">
          <button type="button" className="button is-primary is-rounded" onClick={handleCheckAll}>
            Selecionar todos
          </button>
        </div>
        <div className="control my-5">
          <div className="checkbox-container">
            {BodyworkTypesMock.map((type, i) => (
              <label className="checkbox" key={type.id}>
                <input className="mx-2" type="checkbox" name={`${name}[${i}]`} ref={register} />
                {type.name}
              </label>
            ))}
          </div>
        </div>
        <NavigateButton destination={nextDestination} />
      </form>
    </StepContainer>
  );
}

export default Step8;
