import React from 'react';
import styles from './Result.module.css';

function Result({ gameResult }) {
  return (
    <div className={styles.resultContainer}>
      <h3 className={styles.resultText} id="resultText">{gameResult}</h3>
    </div>
  );
}

export default Result;