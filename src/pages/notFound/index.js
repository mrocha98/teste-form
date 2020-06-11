import React from 'react';
import { Ghost } from 'react-kawaii';
import { useHistory } from 'react-router-dom';
import './styles.scss';

function NotFound() {
  const history = useHistory();
  const handleBackToCivilization = () => history.goBack();

  return (
    <section className="not-found section">
      <h1 className="title is-1">Erro 404</h1>
      <Ghost size={360} mood="shocked" color="#D3D3D3" />
      <h2 className="title is-3">Página não encontrada</h2>
      <button className="button is-primary is-outlined is-large" type="button" onClick={handleBackToCivilization}>
        Voltar à civilização
      </button>
    </section>
  );
}

export default NotFound;
