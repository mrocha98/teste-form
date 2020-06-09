export default function updateAction(state, payload) {
  return {
    ...state,
    freightage: {
      ...state.freightage,
      ...payload,
    },
  };
}
