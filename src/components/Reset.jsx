import React from 'react';
import styles from './Reset.module.css';

function Reset({ handleReset }) {
  return (
    <i className={`fas fa-sync-alt ${styles.resetIcon}`} title="Reset" onClick={handleReset}></i>
  );
}

export default Reset;