// import logo from './logo.svg';

import { useState, useCallback, useEffect } from 'react'
import './App.css';



const Form = () => {

  const [val, setVal] = useState(0);
  const [toggle, setToggle] = useState(false);

  function changeValue(i) {
    setVal(value => value + i)
  }

  function changeToggle() {
    setToggle(toggle => !toggle)
  }

  const callb = useCallback(() => { // hook funkciya use callBack robotoet kogda mi ee peredaem cherez props v drugoi komponent kak funkciu v docherni komponent
    console.log(`log: ${val}`);
    return [
      'link1',
      'link2',
      'link3',
    ]
  }, [val])





  // const changeToggle = useCallback(() => {
  //   console.log('log..');
  //     setToggle(toggle => !toggle)
  //   }, [val])


  return (
    <>
      {
        // callb().map((item, i) => {
        //   return  <p key={i}>{item}</p>
        // })


        // callb()
        <PrintCallback callb={callb} /> // peredaem v docherni funkcionalni komponent
      }

      <div className="cotainer">
        <h1 className="header">form</h1>
        <form className="form" action="#!">
          <input type="text" placeholder="enter your name" />
          <input type="text" placeholder="enter your email" />
          <textarea className="textarea" placeholder='Text'></textarea>

          <div className="form__num">{val}</div>
          <div className="form__btns">
            <button className='submit' type='submit'>send form</button>
            <div className="form__btns-left">
              <button onClick={() => changeValue(1)} className='btn'>+1</button>
              <button onClick={() => changeValue(-1)} className='btn' >-1</button>
              <button onClick={changeToggle} className='btn'>{toggle ? 'true' : 'false'}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const PrintCallback = ({ callb }) => { // sozdaem komponent
  const [loging, setLoging] = useState([]);

  useEffect(() => {
    setLoging(callb())
  }, [callb])

  return (
    <>
      {
        loging.map((item, i) => (
          <p key={i}>{item}</p>
        ))
      }
    </>
  )
}


function App() {
  return (
    <Form />
  )
}

export default App;