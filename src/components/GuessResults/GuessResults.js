import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
