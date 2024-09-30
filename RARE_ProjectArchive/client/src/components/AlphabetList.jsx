import React from 'react';

import './AlphabetList.css'

const AlphabetList = ({ onLetterClick }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <div className="alphabet-list">
      <a href="#" onClick={() => onLetterClick('All')}>All</a>
      {alphabet.map(letter => (
        <a key={letter} href="#" onClick={() => onLetterClick(letter)}>
          {letter}
        </a>
      ))}
      <a href="#" onClick={() => onLetterClick('0-9')}>0-9</a>
    </div>
  );
};

export default AlphabetList;
