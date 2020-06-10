import React from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';

export default function StoreProvider({ children }) {
  createStore({
    freightage: {
      receivement: {
        date: '',
        time: '',
      },
      delivery: {
        date: '',
        time: '',
      },
      weight: 0,
      trackingCode: '',
      wantsToInsertValue: true,
      value: 0,
      modality: 0,
      location: {
        origin: '',
        destiny: '',
      },
      types: [],
    },
  });

  return <StateMachineProvider>{children}</StateMachineProvider>;
}
