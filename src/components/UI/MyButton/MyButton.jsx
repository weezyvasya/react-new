import './MyButton.css'


function MyButton({isActive, onClick, children}) {
    return ( <button className={isActive ? 'my-button active' : 'my-button'} onClick={onClick}>{children}</button> );
}

export default MyButton;