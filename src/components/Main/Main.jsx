import { useState } from 'react'
import './main.css'

let a = 'Мой первый сайт на реакте'
let b = 'Всем привет, я пишу свой первый сайт на реакте'

function Main(){
    let [x,setX] = useState(0)
    return(
        <main className="main">
            <div className="container">
                <section className="section-content">
                    <div className="section-content-title">
                        <h1 className='main-title'>
                            {a}
                        </h1>
                        <p className='main-text'>
                            {b}
                        </p>
                    </div>
                    <div className="section-content-btn">
                        {/* {1 === 2 ? 'true': 'false'} */}
                        {x}
                        <button className='main-btn' onClick={()=> setX(x += 1)}>
                            Click
                        </button>
                    </div>
                </section>
            </div>
        </main>
    ) 
    
}
export default Main