import { useState, useEffect } from 'react';
import InformLayout from './InformLayout';
import { store } from '../../store';

function Information() {
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate(prev => prev + 1);
    });

    return () => unsubscribe();  //  Исправлено
  }, []);

  const state = store.getState();

  let status;

  if (state.isDraw) {
    status = 'Ничья';
  } else if (state.isGameEnded) {
    status = `Победа: ${state.currentPlayer}`;
  } else {
    status = `Ходит: ${state.currentPlayer}`;
  }

  return <InformLayout status={status} />;
}

export default Information;
