import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import alert from '../../utils/alert';
import './styles.scss';

export default function StepNavigation({ stepNumber }) {
  const history = useHistory();

  const shouldHideBackButton = stepNumber <= 1;

  const previousPage = `step-${stepNumber - 1}`;
  const navigateBack = () => history.push(previousPage);

  const handleInsertNewFreightage = () =>
    alert({
      icon: 'warning',
      title: 'Ooops!',
      text: 'Essa função ainda não foi implementada...',
      confirmButtonText: 'OK',
      footer: '¯\\_(ツ)_/¯',
    });

  return (
    <nav className="step-navigation container px-3 py-3">
      <button
        type="button"
        className={`button is-white ${shouldHideBackButton && 'is-invisible'}`}
        disabled={shouldHideBackButton}
        onClick={navigateBack}
      >
        <FiArrowLeft className="icon" />
        <span>Voltar</span>
      </button>
      <button type="button" className="button is-white button--top" onClick={handleInsertNewFreightage}>
        <BsCircleFill className="icon mr-2" />
        <span>Incluir um novo frete</span>
      </button>
    </nav>
  );
}
