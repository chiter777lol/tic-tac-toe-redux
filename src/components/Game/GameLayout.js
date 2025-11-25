import PropTypes from 'prop-types';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './GameLayout.module.css';

export default function GameLayout({ onRestart }) {
  return (
    <div className={styles.container}>
      <Information />
      <Field />
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  onRestart: PropTypes.func.isRequired,
};
