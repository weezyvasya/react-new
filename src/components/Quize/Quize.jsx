import { questions } from "../../constants/data";
import { useState } from "react";
import "./Quize.css";

function Game({ data, fn, step, allQwestion }) {
  let progress = Math.round((step / allQwestion) * 100);

  return (
    <>
      <section>
        <div>
          <div className="bar">
            <div style={{ width: `${progress}%` }}></div>
          </div>
          <div>
            <h3 className="title">{data.title}</h3>
          </div>
          <div>
            <ul>
              {data.variants.map((variant, ind) => (
                <li onClick={() => fn(ind)} key={variant}>
                  {variant}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Result({ trueAnswer, allQwestion }) {
  return (
    <>
      <div>
        <p>{`Вы ответили на ${trueAnswer} из ${allQwestion}`}</p>
      </div>
    </>
  );
}

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
