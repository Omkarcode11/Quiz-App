import React, { useRef } from 'react'
import { shuffledArray } from '../utils/shuffled';

function Answers({answers,selectedAnswer,answerState,onSelect}) {
    let shuffled = useRef()

    if (!shuffled.current)
        shuffled.current = shuffledArray([...answers]);


  return (
    <ul id='answer'>
    {shuffled.current.map((option) => {
      const isSelected = selectedAnswer == option;
      let cssClasses = "";
      if (answerState == "answered" && isSelected) {
        cssClasses = "selected";
      }
      if (
        (answerState == "wrong" || answerState == "correct") &&
        isSelected
      ) {
        cssClasses = answerState;
      }

      return (
        <li className='answer py-2 text-lg' key={option}>
          <button
            onClick={()=>onSelect(option)}
            className={cssClasses}
            disabled={answerState!==""}
            >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
  )
}

export default Answers