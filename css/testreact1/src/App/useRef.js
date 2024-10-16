// import logo from './logo.svg';

import { useState, useRef, useEffect } from 'react'
import './App.css';




const Form = () => {
    const [text, setText] = useState("");

    const myRef = useRef('');


    //  useEffect(() =>{
    //     myRef.current ++; // shitaem kolichestvo renderov 
    //      console.log(myRef.current);
    //  })

    useEffect(() => {
        myRef.current = text; // predidushee sostoyanie u ref
        //  console.log(myRef.current);
    })


// ispolzovanie ref kak silku na dom element eto odin iz variantov 
    const myRef2 = useRef(null);
    const linkElem = () => {
        console.log(myRef2.current)
    }






    return (
        <>


            <div className="cotainer">
                <h1 className="header">form</h1>
                <form className="form" action="#!">
                    <input onChange={(e) => setText(e.target.value)} type="text" placeholder="enter your name" />
                    <input ref={myRef2} type="text" placeholder="enter your email" />
                    <textarea value={myRef.current} className="textarea" placeholder='Text'></textarea>
                    {/* zapisivaem v textarea predidushee sostoyanie */}

                    {/* <div className="form__num">{val}</div> */}
                    <div className="form__btns">
                        <button className='submit' type='submit'>send form</button>
                        <div className="form__btns-left">
                            <button className='btn'>+1</button>
                            <button className='btn' >-1</button>
                            <button onClick={linkElem} className='btn'>+++</button>
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