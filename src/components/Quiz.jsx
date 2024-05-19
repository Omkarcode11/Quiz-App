import React, { useCallback, useEffect, useRef, useState } from "react";
import question from "../utils/question";

import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
  const [ans, setAns] = useState([]);

  const activeQuizI = ans.length;
  const questionComplete = question.length <= activeQuizI;

  const handlerSelectAnswer = useCallback(function handlerSelect(selectedAns) {
    setAns((prev) => [...prev, selectedAns]);
  }, []);

  const handleSkipAns = useCallback(
    () => handlerSelectAnswer(null),
    [handlerSelectAnswer]
  );

  if (questionComplete) {
    console.log(ans);
    return (
     <Summary userAnswers={ans}/>
    );
  }

  return (
    <div id='quiz'>
      <Question
        onSelectAnswer={handlerSelectAnswer}
        skipAnswer={handleSkipAns}
        key={activeQuizI}
        index={activeQuizI}
      />
    </div>
  );
}

export default Quiz;
