import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';
import FieldLayout from './FieldLayout';
import { store } from '../../store';

function Field() {
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate(prev => prev + 1);
    });

    return () => unsubscribe();  //  Исправлено
  }, []);

  const handleCellClick = (index) => {  // Функция создана там, где используется
    const currentState = store.getState();

    if (currentState.field[index] !== '' || currentState.isGameEnded || currentState.isDraw) {
      return;
    }

    const newField = [...currentState.field];
    newField[index] = currentState.currentPlayer;

    const isGameEnded = checkWinner(newField, currentState.currentPlayer);
    const isDraw = !isGameEnded && newField.every(cell => cell !== '');
    const nextPlayer = isGameEnded || isDraw ? currentState.currentPlayer :
                      (currentState.currentPlayer === 'X' ? '0' : 'X');

    store.dispatch({
      type: 'MAKE_MOVE',
      payload: {
        newField,
        nextPlayer,
        isGameEnded,
        isDraw
      }
    });
  };

  const checkWinner = (field, player) => {
    const WIN_PATTERNS = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return WIN_PATTERNS.some(pattern =>
      pattern.every(index => field[index] === player)
    );
  };

  const state = store.getState();

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {state.field.map((value, index) => (
          <FieldLayout
            key={index}
            value={value}
            onSquareClick={() => handleCellClick(index)}  //  Передаем только в less-компонент
          />
        ))}
      </div>
    </div>
  );
}

export default Field;
