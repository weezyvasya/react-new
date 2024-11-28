import { useState, useEffect, useRef } from "react";
import { users } from "../../constants/data";
import ListUsers from "../ListUsers/ListUsers";

const inputStyleError = {
    backgroundColor: 'red',

}
const inputStyleSecsses = {
  backgroundColor: 'green'
}


function Form() {
  const [name, setName] = useState('');
  const [select, setSelect] = useState("One");
  const [error, setError] = useState(true);
  const dialog = useRef()
  const divExmpl = useRef()

  useEffect(()=>{
    dialog.current.showModal()
    console.log(divExmpl.current)
  },[])
  
  useEffect(()=>{
    if (name.length !== 0) {
      setError(false)
    } else {
      setError(true)
    }
  },[name])

  function hendleChang(e) {
    setName(e.target.value);
  }
  function hendleSelect(e) {
    setSelect(e.target.value);
  }
 
 return (
    <>
      <label>Name</label>
      <input style={error ? inputStyleError : inputStyleSecsses }
        onChange={hendleChang}
        value={name}
      ></input>
      <select onChange={hendleSelect} value={select}>
        <option value="One">1</option>
        <option value="Two">2</option>
        <option value="Tree">3</option>
      </select>
      <dialog ref={dialog}>
        <button onClick={()=>{dialog.current.close()}}>Close</button>
        lorem
      </dialog>
      <pre>
        Name: {name}
        <br />
        Option: {select}
      </pre>
      <div ref={divExmpl}>useRef</div>
      <button disabled={error}>Click</button>
       <ListUsers data={users} value={name} />
       <ListUsers data={[{name: 'ada', name: 'dcc'}]} value={name}/>
    </>
  )}
  

export default Form;
//сделать валидацию. Если интпут пустой, кнопка неактивна, если не пустой, активна
//Если инпут и селкт не выбраны, они красные, а если выбраны - зеленое
//Затем поменять обычную кнопку на кастомную 
