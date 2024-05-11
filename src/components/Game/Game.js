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
  // status can be 'running', 'won', or 'lost'
  const [gameStatus, setGameStatus] = useState('running');

  const handleSubmitGuess = (newGuess) => {
    const guessArray = [...guessResults, newGuess];
    if (newGuess===answer) {
      setGameStatus('won');
    } else if (guessArray.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
    setGuessResults(guessArray);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}/>
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
    {gameStatus !== 'running' && <GameOver gameStatus={gameStatus} answer={answer} numGuesses={guessResults.length}/>}
    </>
  );
}

export default Game;
