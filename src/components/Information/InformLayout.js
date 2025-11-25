import PropTypes from 'prop-types';
import styles from './Inform.module.css';

export default function InformLayout({ status }) {
  return (
    <div className={styles.field}>
      <h2 className={styles.status}>{status}</h2>
    </div>
  );
}

InformLayout.propTypes = {
  status: PropTypes.string.isRequired,
};
