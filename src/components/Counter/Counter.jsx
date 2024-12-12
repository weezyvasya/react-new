import { useState } from "react";

function Counter({ data, plus, minus }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0)

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
            <li key={user.id}>{`${user.name} ${user.lastName} ${user.age}`}</li>
          </ul>
        ))}
      </div>
      <div>
        <button disabled={name === '' || lastName === ''} onClick={() => plus(name, lastName, age)}>Add</button>
        <button disabled={!data.length} onClick={() => minus()}>RemoveLastUser</button>
        <button>Count users' age</button>
      </div>
    </>
  );
}

export default Counter;

///валидацию пустых инпутов и удаление последнего юзера из списка
