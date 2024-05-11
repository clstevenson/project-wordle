import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOver from '../GameOver';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleSubmitGuess = (newGuess) => {
    const guessArray = [...guessResults, newGuess];
    if (newGuess===answer) {
      setGameOver(true);
      setGameWon(true);
    } else if (guessArray.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
      setGameWon(false);
    }
    setGuessResults(guessArray);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    {gameOver && <GameOver gameWon={gameWon} answer={answer} numGuesses={guessResults.length}/>}
    </>
  );
}

export default Game;
