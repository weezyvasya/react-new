import { questions } from "../../constants/data";
import { useState } from "react";
import Game from "./QuizeRules/Game";
import Result from "./QuizeRules/Result";
import "./Quize.css";


function Quize() {
  const [step, setStep] = useState(0); // step
  const [count, setCount] = useState(0); // count

  let currentQuestion = questions[step];

  function check(answer) {
    setStep(step + 1);

    if (answer === currentQuestion.correct) {
      setCount(count + 1);
    }
  }

  return (
    <>
      <div class='qwez'>
        {step !== questions.length ? (
          <Game
            data={currentQuestion}
            fn={check}
            step={step}
            allQwestion={questions.length}
          />
        ) : (
          <Result trueAnswer={count} allQwestion={questions.length} />
        )}
      </div>
    </>
  );
}

export default Quize;
