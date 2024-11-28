import { useState, useEffect } from "react";


// useEffect управляет жизненным циклом компонента
// Mount, Update, Unmount

// function Tik () {
//     let [tik, setTik] = useState(new Date())
    

//    let interval = setInterval(()=> {setTik(new Date())}, 1000)


//     useEffect(()=>{
//         console.log('Mount') 

//         return () => {
//             console.log('Unmount')
//             clearInterval(interval)
//         }

//     },[])

//     return (
//         <div>{tik.toLocaleTimeString()}</div>
//     )
// }





function ListUsers({data, value}) {

    return ( <>
       <ul>
          {data
          .filter((user)=> {return user.name.includes(value)})
          .map((user)=> (<li key={user.id}>{user.name}</li>))}
       </ul>
    </> );
}


export default ListUsers;