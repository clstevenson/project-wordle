import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);

  const handleSubmitGuess = (newGuess) => {
    const guessArray = [...guessResults, newGuess];
    setGuessResults(guessArray);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
