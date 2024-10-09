// import logo from './logo.svg';

import { useCallback, useState, useEffect } from 'react'
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


  const printLog = useCallback(()=>{
    // console.log('log...');
    return ['1','2','3']
  },[val])


  return (
    <>
      {
        //  printLog()
         <PrintCallback printLog={printLog} />
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

const PrintCallback = ({ printLog }) => {
  const [loging, setLoging] = useState('');

  useEffect(() => {
    setLoging(printLog())
  }, [printLog])

  return (
    <>
       {
        <h2>{loging}</h2>
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
