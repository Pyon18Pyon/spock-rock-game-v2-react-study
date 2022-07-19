import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Rock Paper Scissors Lizard Spock</h1>
    </div>
  )
}

export default Header;