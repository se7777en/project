// import logo from './logo.svg';

import { useState, useEffect, useMemo } from 'react'
import './App.css';


// const countNum = (num) => {
//   return num * 10;
// }

const Form = () => {

    const [val, setVal] = useState(0);
    const [toggle, setToggle] = useState(false);

    function changeValue(i) {
        setVal(value => value + i)
    }

    function changeToggle() {
        setToggle(toggle => !toggle)
    }



    //////////////////// memoiziruem obiekt
    const style = useMemo(() => (
        { color: val > 7 ? 'red' : 'white' } // memoiziruem obiekt pri izmenenii val
    ), [val])

    const number = useMemo(() => { // memoiziruem funkciu pri izmenenii steita val
        return val + 1
    }, [val])

    useEffect(() => {
        console.log('styles');
    }, [val])
    ////////////////////
    return (
        <>
            <div className="cotainer">
                <h1 className="header">form</h1>
                <form className="form" action="#!">
                    <input type="text" placeholder="enter your name" />
                    <input type="text" placeholder="enter your email" />
                    <textarea className="textarea" placeholder='Text'></textarea>

                    <div className="form__num">{number}</div>
                    <div className="form__btns">
                        <button className='submit' type='submit'>send form</button>
                        <div className="form__btns-left">
                            <button onClick={() => changeValue(1)} className='btn'>+1</button>
                            <button onClick={() => changeValue(-1)} className='btn' >-1</button>
                            <button style={style} onClick={changeToggle} className='btn'>{toggle ? 'true' : 'false'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}


function App() {
    return (
        <Form />
    )
}

export default App;