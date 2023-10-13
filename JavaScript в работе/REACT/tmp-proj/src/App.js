
import {Component} from 'react';
import './App.css';
/*  -----funkcionalni komponent----

function WhoAmI({name, surname}){
  return (
    <div>
      <div className="wrapper">
      <h1>My name is {name} surname is {surname}</h1>
      <a href="http://vk.com">My Profile</a>
      </div>
    </div>
  );
}

function App(){
  return (
    <div className="App">
      <WhoAmI name = "Melik" surname = "Papikyan"/>
      <WhoAmI name = "Lela" surname = "Putkaradze"/>
    </div>
  );
}
*/

/*klasovi komponent*/
class WhoAmI extends Component{
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  counter = () => {
    this.setState(state =>({
      counter: state.counter + 1
    }))
  }

  counterInc = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }

render() {
  const {names, surnames} = this.props;
  return (
    <div>
      <div className="wrapper">
        <button onClick={this.counter}>+++</button>
        <button onClick={this.counterInc}>---</button>
      <h1>My name is {names} surname is {surnames}</h1>
      <a href="http://vk.com">My Profile</a>
        <p>{this.state.counter}</p>
      </div>
    </div>
  );
}}

function App(){
  return (
    <div className="App">
      <WhoAmI names = "Melik" surnames = "Papikyan"/>
      <WhoAmI names = "James" surnames = "Gordon"/>
      <WhoAmI names = "Wiliam" surnames = "Ant"/>
    </div>
  );
}


export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
      
//       </header>
//     </div>
//   );
// }

// export default App;
