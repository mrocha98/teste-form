import React from 'react';
import LocationsMock from '../../mock/locations.mock';

function LocationsSelectOptions({ hash }) {
  return (
    <>
      {LocationsMock.map((location) => {
        const { refe_codigo, refe_descricao, refe_endereco_empresa_terceiro, cida_cidade } = location;
        const {
          cida_descricao,
          esta_estado: { esta_sigla },
        } = cida_cidade;
        const value = `${refe_descricao} / ${refe_endereco_empresa_terceiro} / ${cida_descricao} / ${esta_sigla}`;
        return (
          <option key={`${hash}-${refe_codigo}`} value={value}>
            {value}
          </option>
        );
      })}
    </>
  );
}

export default LocationsSelectOptions;
