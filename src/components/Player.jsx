import React from "react";
import styles from "./Player.module.css";
import cx from "classnames";

function Player({
  score,
  handleClick,
  choice,
  name,
}) {
  const playerColour = (name === 'Computer') ? styles.red : styles.purple;
  const playerSelected = (name === 'Computer') ? '' : styles.selectable;

  const playerIcon = cx(playerSelected, playerColour, styles.playerIcon, 'far');

  return (
    <div className={styles.playerContainer} id="player">
      <h2 className={styles.marginBottom}>
        {name} - <span id="playerScore">{score}</span>
        <span className={playerColour} id="playerChoice"></span>
      </h2>
      <i
        className={`${playerIcon} fa-hand-rock ${
          choice === "Rock" ? styles.selected : ""
        }`}
        title="Rock"
        onClick={handleClick}
      ></i>
      <i
        className={`${playerIcon} fa-hand-paper ${
          choice === "Paper" ? styles.selected : ""
        }`}
        title="Paper"
        onClick={handleClick}
      ></i>
      <i
        className={`${playerIcon} fa-hand-scissors ${
          choice === "Scissors" ? styles.selected : ""
        }`}
        title="Scissors"
        onClick={handleClick}
      ></i>
      <i
        className={`${playerIcon} fa-hand-lizard ${
          choice === "Lizard" ? styles.selected : ""
        }`}
        title="Lizard"
        onClick={handleClick}
      ></i>
      <i
        className={`${playerIcon} fa-hand-spock ${
          choice === "Spock" ? styles.selected : ""
        }`}
        title="Spock"
        onClick={handleClick}
      ></i>
    </div>
  );
}

export default Player;
