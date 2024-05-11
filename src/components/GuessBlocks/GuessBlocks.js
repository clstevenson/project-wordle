import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessBlocks({ tentativeGuess='', answer }) {

  let check = '';
  if (tentativeGuess) check = checkGuess(tentativeGuess, answer);

  return (
    <p className="guess">
      {range(5).map((block, index) => {
        const cellClass = check ? 'cell ' + check[index].status : 'cell'
        return (<span key={index} className={cellClass}>{tentativeGuess[index] || ''}</span>)
      })}
    </p>
  )
}

export default GuessBlocks;
