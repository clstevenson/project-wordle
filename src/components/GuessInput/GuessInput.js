import React, { useState } from 'react';

function GuessInput({ gameStatus,handleSubmitGuess }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // redundant validation in case form validation doesn't work
    if (guess.length !== 5) {
      window.alert('Please enter 5-letter word. 💖');
      return;
    }
    // update array of guesses in parent component
    handleSubmitGuess(guess);
    // clear the guess in the form
    setGuess('');
  };

  return (
        <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          disabled={gameStatus!=='running'}
          type="text"
          pattern="[A-Z]{5}"
          title="5 letter word"
          required
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
  )
}

export default GuessInput;
