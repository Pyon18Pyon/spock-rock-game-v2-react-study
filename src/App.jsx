import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Reset from './components/Reset';
import Result from './components/Result';
import styles from './App.module.css';
import { startConfetti, stopConfetti, removeConfetti } from './confetti';

const gameLogic = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};


function App() {

  // State
  const [score, setScore] = useState({
    playerScore: 0,
    computerScore: 0
  });

  const { playerScore, computerScore } = score;

  const [isSelected, setIsSelected] = useState({
    playerChoice: '',
    computerChoice: ''
  });

  const { playerChoice, computerChoice } = isSelected;

  const [ gameResult, setGameResult ] = useState('');


  const handleClick = (event) => {
    event.preventDefault();
    const choice = event.target.title;
    stopConfetti();
    removeConfetti();

    const computerChoiceNumber = Math.random();
    let computer = 'Paper';
    if (computerChoiceNumber < 0.2) {
      computer = 'Rock';
    } else if (computerChoiceNumber <= 0.4) {
      computer = 'Paper';
    } else if (computerChoiceNumber <= 0.6) {
      computer = 'Scissors';
    } else if (computerChoiceNumber <= 0.8) {
      computer = 'Lizard';
    } else {
      computer = 'Spock';
    }
    
    setIsSelected({ ...isSelected, playerChoice: choice, computerChoice: computer });
  };

    useEffect(() => {
      if (playerChoice && computerChoice) {
        
        if (playerChoice === computerChoice) {
          setGameResult('It\'s a tie.');
        } else {
          const game = gameLogic[playerChoice];
          console.log('game:', game, game.defeats.indexOf(computerChoice));
          if (game.defeats.indexOf(computerChoice) > -1) {
            setGameResult('You Won!');
            startConfetti();
            setScore({ ...score, playerScore: playerScore + 1 });
          } else {
            setGameResult('You Lost!');
            setScore({ ...score, computerScore: computerScore + 1});
          }
        }
      }
   
    }, [isSelected]);

    const handleReset = () => {
      setScore({
        playerScore: 0,
        computerScore: 0
      });
      setIsSelected({
        playerChoice: '',
        computerChoice: ''
      });
      setGameResult('');
      stopConfetti();
      removeConfetti();
    };

  return (
    <div className={styles.gameContainer}>
      <Header />
      <Player
        name="You"
        score={playerScore}
        choice={playerChoice}
        handleClick={handleClick}
      />
      <Player
        name="Computer"
        score={computerScore}
        choice={computerChoice}
      />
      <Reset 
        handleReset={handleReset}
      />
      <Result 
        gameResult={gameResult}
      />
    </div>
  );
}

export default App;
