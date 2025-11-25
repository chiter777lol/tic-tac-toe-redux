import PropTypes from 'prop-types';
import styles from './Field.module.css';

export default function FieldLayout({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

FieldLayout.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};
