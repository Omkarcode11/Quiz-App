import React, { useEffect, useRef, useState } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
  let [remaining, setRemaining] = useState(timeout);

  useEffect(() => {
    let timeOutId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeOutId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    let intId = setInterval(() => {
      setRemaining((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(intId);
    };
  }, []);

  return (
    <progress
      id='question-time'
      value={remaining}
      max={timeout}
      className={mode}
    />
  );
}

export default QuestionTimer;
