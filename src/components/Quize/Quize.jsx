    import { questions } from "../../constants/data";
    import { useState } from "react";


    function Game ({currentQuestions}) {
        const [title,setTitle] = useState(questions[0].title)
        const [variants,setVariants] = useState(questions[0].variants)
        function nextQuestion(e){
            setTitle(questions[1].title)
        }
        return (
            <>
              <section>
                <div>
                    <div>
                        <h3>Квиз</h3>
                        <p>title</p>
                    </div>
                    <div>
                        <button>variants[0]</button>
                        <button>variants[1]</button>
                        <button>variants[2]</button>
                    </div>
                    <div>
                        <button onClick={nextQuestion}>Следующий вопрос</button>
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
        // const [] = useState() // step
        // const [] = useState() // count
        // const currentQuestions = questions[step]

        function check(params) {
            
        }
        
        return (
            <>
                <Game />
            </>
          );
    }
    
    export default Quize;
    
