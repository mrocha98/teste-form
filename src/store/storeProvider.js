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
    },
  });

  return <StateMachineProvider>{children}</StateMachineProvider>;
}
