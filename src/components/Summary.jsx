import React from "react";
import quizCompleteImg from "./../assets/trophy.png";
import question from "../utils/question";

function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter((ele)=>ele==null)
    const correctAnswers = userAnswers.filter((ele,i)=>ele== question[i].answers[0])
    const incorrectAnswers = userAnswers.filter((ele,i)=>(ele!=question[i].answers[0] && ele!=null))
    console.log(skippedAnswers,correctAnswers,incorrectAnswers)

    let skipScore = Math.round(skippedAnswers.length / userAnswers.length)*100
    let correctScore = Math.round(correctAnswers.length / userAnswers.length)*100
    let incorrectScore = Math.round(incorrectAnswers.length / userAnswers.length)*100


  return (
    <div id='summary'>
      <img src={quizCompleteImg} alt='complete img' />
      <h2>Quiz is Completed</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skipScore}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctScore}%</span>
          <span className='text'>correctly answer question</span>
        </p>
        <p>
          <span className='number'>{incorrectScore}%</span>
          <span className='text'>incorrectly answer question</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((ans,i) => {
            let cssClass = 'user-answer'
            if(ans==null){
                cssClass += " skipped"
            }else if (ans==question[i].answers[0]){
                cssClass += ' correct'
            }else {
                cssClass += ' wrong'
            }

          return (
            <li key={ans}>
              <h3>{i+1}</h3>
              <p className='question'>{question[i].text}</p>
              <p className={cssClass}>{ans==null?"Skipped":ans}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
