import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(guess => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
