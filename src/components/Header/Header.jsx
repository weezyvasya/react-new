import { useState } from 'react'
import './header.css'

let a = 'logo'

function Header(){
    let [x,setX] = useState(0)
    return(
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        {a}
                    </div>
                    <nav className="navigation">
                        {/* {1 === 2 ? 'true': 'false'} */}
                        {x}
                        <button className='nav-btn' onClick={()=> setX(x += 1)}>
                            Click
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    ) 
    
}
export default Header