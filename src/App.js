import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TabSection from "./components/TabSection/TabSection";
import ListUsers from "./components/ListUsers/ListUsers";
import Form from "./components/Form/Form";
import Quize from "./components/Quize/Quize";
import Counter from "./components/Counter/Counter";
import { users } from "./constants/data";
import { useState } from "react";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [result, setResult] = useState([])
  const [sum, setSum] = useState(0)

  function plus(name, lastName, age){
    const newUser = {name,  lastName , age, id: Math.random()}
    setResult([...result, newUser])
    
  }

  function minus(){
    let newArr = result.filter((el,i,arr) => i !== arr.length - 1 )
    setResult(newArr)//менять длинну массива
  }

  function sumAge(){
    for (let i = 0; i < result.length; i++){
      let resultSumArr = []
      return resultSumArr.push(result[i].age)
    }
    for (let i = 0; i < resultSumArr.length; i++){
      let finalSum = 0
      finalSum += resultSumArr[i]
      return finalSum
    }
    setSum(finalSum)
  }
  
  return (
    <div className="App">
      <Header/>
      <Main />
      <TabSection />
      <ListUsers data={users} />
      <Form />
      <Quize />
      <Counter data={result} plus={plus} minus={minus} />
      <ModalWindow />
    </div>
  );
}

export default App;
//добавить кажлму пользователю в каунтер поле с возрастом, добавить еще одну кнопку, которая считала бы суммарный возраст всех пользователей 
// у кажого пользователя свой цвет фона