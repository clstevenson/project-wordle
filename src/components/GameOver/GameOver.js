import React from 'react';

function GameOver({ status, answer, numGuesses }) {
  return status==='won'
    ?
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' ' + numGuesses} {numGuesses === 1 ? 'guess' : 'guesses'}</strong>.
      </p>
    </div>
    :
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
}

export default GameOver;
