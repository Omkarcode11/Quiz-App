import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import question from "../utils/question";

function Question({ index, onSelectAnswer, skipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = question[index].time;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect != null) {
    timer = 2000;
  }

  function handlerSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: question[index].answers[0] == answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id='question'>
      <QuestionTimer
        key={index}
        onTimeout={answer.selectedAnswer == "" ? skipAnswer : () => {}}
        timeout={timer}
        mode={answerState}
      />
      <h1 className='text-3xl text-center pb-4'>{question[index].text}</h1>
      <Answers
        answers={question[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handlerSelectAnswer}
      />
    </div>
  );
}

export default Question;
