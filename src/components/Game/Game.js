import { useState, useEffect } from 'react';
import GameLayout from "./GameLayout";
import { store } from '../../store';

function Game() {
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate(prev => prev + 1);
    });

    return () => unsubscribe();  // Исправлено
  }, []);

  const handleRestart = () => {
    store.dispatch({ type: 'RESTART_GAME' });
  };

  const state = store.getState();

  return (
    <GameLayout
      onRestart={handleRestart}
    />
  );
}

export default Game;
