import React, { useState } from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
// import GuessResults from '../GuessResults';
import GuessBlocks from '../GuessBlocks';

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
      {/* <GuessResults guessResults={guessResults}/> */}
      {
        range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
          <GuessBlocks tentativeGuess={guessResults[index]}/>
        ))
      }
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
