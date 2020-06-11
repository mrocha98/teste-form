import React, { useState } from 'react';
import { useStateMachine } from 'little-state-machine';
import StepNavigation from '../../components/stepNavigation';
import CheckoutInfo from '../../components/checkoutInfo';
import TitlesMock from '../../mock/titles.mock';
import VehiclesMock from '../../mock/vehicleTypes.mock';
import BodyworkMock from '../../mock/bodyworkTypes.mock';
import TechnologyMock from '../../mock/technologyTypes.mock';
import { formatDate, formatMoney, parseOriginWithMock, getNames } from '../../utils/format';
import alert from '../../utils/alert';
import './styles.scss';

function Checkout() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stepNumber = 11;
  const {
    state: { freightage: data },
  } = useStateMachine();

  const {
    receivement,
    delivery,
    weight,
    trackingCode,
    wantsToInsertValue,
    value,
    modality,
    location,
    vehicleTypes,
    bodyworkTypes,
    technologyTypes,
    observation,
  } = data;

  const LocationContent = () => {
    const titles = ['Origem', 'Endereço', 'Cidade', 'Estado'];
    const { origin, destiny } = location;
    const render = (prop) =>
      prop.split(' / ').map((field, index) => (
        <li key={`${field + index}`}>
          <p>{titles[index]}</p>
          <p className="has-text-weight-bold">{field}</p>
        </li>
      ));
    return (
      <>
        <ul className="content-list content-list--mobile-border">{render(origin)}</ul>
        <ul className="content-list content-list--mobile-border">{render(destiny)}</ul>
      </>
    );
  };

  const ListContent = ({ origin, mock }) => {
    const parsedItems = parseOriginWithMock(origin, mock);
    return (
      <>
        {parsedItems.map((item) => (
          <li key={item.id}>
            <p className="has-text-weight-bold">{item.name}</p>
          </li>
        ))}
      </>
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1250)); // simulando chamada à API
    const submited = data;
    delete submited.wantsToInsertValue;

    submited.vehicleTypes = getNames(submited.vehicleTypes, VehiclesMock);
    submited.bodyworkTypes = getNames(submited.bodyworkTypes, BodyworkMock);
    submited.technologyTypes = getNames(submited.technologyTypes, TechnologyMock);

    const stringifyied = JSON.stringify(submited, null, 2);
    alert({
      icon: 'info',
      title: 'Esse seria o JSON submetido',
      confirmButtonText: 'Fechar',
      footer: `<pre>${stringifyied}</pre>`,
    });
    setIsSubmitting(false);
  };

  return (
    <section className="section checkout-container px-6 py-6 my-3">
      <div className="box">
        <StepNavigation stepNumber={stepNumber} />
        <section className="checkout section">
          <h1 className="title is-4">Confirme os dados do seu novo frete:</h1>
          <ul>
            <li>
              <CheckoutInfo number={TitlesMock[0].step} title={TitlesMock[0].title}>
                <ul className="content-list">
                  <li>
                    <p>Data da retirada</p>
                    <p className="has-text-weight-bold">{receivement.date && formatDate(receivement.date)}</p>
                  </li>
                  <li>
                    <p>Hora da retirada</p>
                    <p className="has-text-weight-bold">{receivement.time}</p>
                  </li>
                  <li>
                    <p>Data da entrega</p>
                    <p className="has-text-weight-bold">{delivery.date && formatDate(delivery.date)}</p>
                  </li>
                  <li>
                    <p>Hora da entrega</p>
                    <p className="has-text-weight-bold">{delivery.time}</p>
                  </li>
                </ul>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[1].step} title={TitlesMock[1].title}>
                <p>Unidade (kg)</p>
                <p className="has-text-weight-bold">{weight} kg</p>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[2].step} title={TitlesMock[2].title}>
                <p>Código de acompanhamento</p>
                <p className="has-text-weight-bold">{trackingCode}</p>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[3].step} title={TitlesMock[3].title}>
                <p>Valor frete</p>
                <p className="has-text-weight-bold">{wantsToInsertValue ? value : formatMoney(value)}</p>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[4].step} title={TitlesMock[4].title}>
                <p>Modalidade</p>
                <p className="has-text-weight-bold">{modality}</p>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[5].step} title={TitlesMock[5].title}>
                <LocationContent />
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[6].step} title={TitlesMock[6].title}>
                <p>Tipos de veículo</p>
                <ul className="content-list">
                  <ListContent origin={vehicleTypes} mock={VehiclesMock} />
                </ul>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[7].step} title={TitlesMock[7].title}>
                <p>Tipos de carroceria</p>
                <ul className="content-list">
                  <ListContent origin={bodyworkTypes} mock={BodyworkMock} />
                </ul>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[8].step} title={TitlesMock[8].title}>
                <p>Tecnologia de rastreio</p>
                <ul className="content-list">
                  <ListContent origin={technologyTypes} mock={TechnologyMock} />
                </ul>
              </CheckoutInfo>
            </li>
            <li>
              <CheckoutInfo number={TitlesMock[9].step} title={TitlesMock[9].title}>
                <p>Observação</p>
                <p className="has-text-weight-bold">{observation}</p>
              </CheckoutInfo>
            </li>
          </ul>
          <div className="submit">
            <button type="button" className={`button is-info ${isSubmitting && 'is-loading'}`} onClick={handleSubmit}>
              Salvar
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Checkout;
