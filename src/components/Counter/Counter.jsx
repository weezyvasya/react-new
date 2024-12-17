import { useState } from "react";

function Counter({ data, plus, minus, sum, sumResult }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0)


  function random() {
    let color = Math.ceil(Math.random() * (255 - 0) + 0);

    let liColor = {
      backgroundColor: `rgb(${color}, ${color}, ${color})`,
    }

    return liColor
  }




  return (
    <>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          placeholder="LastName"
        />
        <input 
          onChange={(e) => setAge(e.target.value)}
          value={age} 
          type="number" 
          placeholder="Age"
        />
      </div>
      <div>
        {data.map((user) => (
          <ul>
            <li style={random()} key={user.id}>{`${user.name} ${user.lastName} ${user.age}`}</li>
          </ul>
        ))}
      </div>
      <div>
        <button disabled={name === '' || lastName === ''} onClick={() => plus(name, lastName, age)}>Add</button>
        <button disabled={!data.length} onClick={() => minus()}>RemoveLastUser</button>
        <button onClick={() => sum()}>{`Count users' sum ${sumResult}`}</button>
      </div>
    </>
  );
}

export default Counter;

///валидацию пустых инпутов и удаление последнего юзера из списка
