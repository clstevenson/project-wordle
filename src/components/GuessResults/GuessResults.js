import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import GuessBlocks from '../GuessBlocks';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
          <GuessBlocks key={index} tentativeGuess={guessResults[index]}/>
        ))
      }
    </div>
  );
}

export default GuessResults;
