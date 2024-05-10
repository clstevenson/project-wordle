import React from 'react';
import { range } from '../../utils';

function GuessBlocks({ tentativeGuess='' }) {

  return (
    <p className="guess">
      {range(5).map((block, index) => {
        return (<span key={index} className="cell">{tentativeGuess[index] || ''}</span>)
      })}
    </p>
  )
}

export default GuessBlocks;
