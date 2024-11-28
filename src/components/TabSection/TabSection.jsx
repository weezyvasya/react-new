import MyButton from '../UI/MyButton/MyButton';
import { data } from '../../constants/data';
import { useState } from 'react';


function TabSection() {

    let [current, setCurrent] = useState('text')

    return ( 
        <div>
           <MyButton isActive={current === 'text'} onClick={()=> setCurrent('text')}>text</MyButton>
           <MyButton isActive={current === 'text1'} onClick={()=> setCurrent('text1')}>text1</MyButton>
           <MyButton isActive={current === 'text3'} onClick={()=> setCurrent('text3')}>text3</MyButton>
            {/* <button className={current === 'text' && s.active} onClick={()=> click('text')} >text</button>
            <button className={current === 'text1' && s.active} onClick={()=> click('text1')}>text1</button>
            <button className={current === 'text3' && s.active} onClick={()=> click('text3')}>text2</button> */}
            <p>{data[current]}</p>
        </div>
     );
}

export default TabSection;