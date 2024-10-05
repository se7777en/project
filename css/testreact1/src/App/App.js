// import logo from './logo.svg';

import {useState} from 'react'
import './App.css';



function App() {

  const [value, setValue] = useState(0);

 function changeValue (i) {
  setValue(value => value + i)
 }

  return (
    <>
      <div className="cotainer">
        <h1 className="header">form</h1>
        <form className="form" action="#!">
          <input type="text" placeholder="enter your name" />
          <input type="text" placeholder="enter your email" />
          <textarea className="textarea" placeholder='Text'></textarea>

          <div className="form__num">{value}</div>
          <div className="form__btns">
            <button className='submit' type='submit'>send form</button>
            <div className="form__btns-left">
              <button onClick={() => changeValue(1)} className='btn'>+1</button>
              <button onClick={() => changeValue(-1)} className='btn' >-1</button>
              <button className='btn'>btn</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
