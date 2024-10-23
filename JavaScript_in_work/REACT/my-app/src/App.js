// import logo from './logo.svg';
import {Component} from 'react';
import './App.css';



const Header = () => {
  return <h2>Hellow World!!</h2>
}

// const Field = () => {
//   const holder = 'text here';
//   const styledField = {
//     width: '300px'
//   }

//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField}
//   />
// }

class Field extends Component {  //variant s klassom
  render() {
    const holder = 'text here';
    const styledField = {width: '300px'}

    return <input
      placeholder={holder}
      type="text"
      style={styledField}
    />
  }
}

function Btn() {
  const text = 'Log In';
  const logged = true;
  // const res = () => {
  //   return 'Log In'
  // }
  // const p = <p>Log In</p>
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

// ' export  {Header};'
export default App;
