    import { questions } from "../../constants/data";
    import { useState } from "react";


    function Game ({questions, step}) {
        // function nextQuestion(e){
        //     setTitle(questions[1].title)
        // }
        return (
            <>
              <section>
                <div>
                    <div>
                        <h3>Квиз</h3>
                        <p>title</p>
                    </div>
                    <div>
                      <ul>
                         {questions[step].variants.map(()=> (<li key={variants.id}>{variants.answer}</li>))}
                      </ul>
                    </div>
                    <div>
                        <button >Следующий вопрос</button>
                    </div>
                </div>
              </section>
            </>
        )
    }


    function Result ({count}) {
        return (
            <>
              Выводит результат
            </>
        )
    }
    
    
    
    
    function Quize() {
        const [step,setStep] = useState(0) // step
        const [count,setCount] = useState(0) // count
        

        function check(params) {
            
        }
        
        return (
            <>
                <Game data={questions,step} />
            </>
          );
    }
    
    export default Quize;
    
