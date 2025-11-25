const initialState = {
  field: Array(9).fill(''),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'MAKE_MOVE':
      return {
        ...state,
        field: payload.newField,
        currentPlayer: payload.nextPlayer,
        isGameEnded: payload.isGameEnded,
        isDraw: payload.isDraw
      };

    case 'RESTART_GAME':
      return initialState;

    default:
      return state;
  }
};
