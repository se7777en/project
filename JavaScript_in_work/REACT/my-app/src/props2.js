import './App2.css'
import { Component } from 'react'

class MyClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
            text: '+++'
        }
    }

    func = () => {
        const {year} = this.state;
       if(year < 35){
        this.setState((state)=>({
            year: state.year + 1
        }))
       }
    }

    func1 = () => {
        const {year} = this.state;
       if(year > 25){
         this.setState((state)=>({
            year: state.year - 1
        }))
       }
    }

    func2 = () => {
         this.setState(()=>({
            year: this.props.year
        }))
       
    }

    render() {
        // const {text, year} = this.state;
        // const {name, surname, link} = this.props;
        return (
            <div className="App">
                <button onClick={this.func}>{this.state.text}</button>
                <button onClick={this.func1}>{this.state.text}</button>
                <button onClick={this.func2}>{this.state.text}</button>
                <h2>Name {this.props.name()} Surname {this.props.surname} Age <span>{this.state.year}</span></h2>
                <a href={this.props.link}>MyLink</a>
            </div>
        )
    }
}

function App() {
    return (
        <MyClass name={() => { return 'Melik' }} surname="Papikyan" link="facebook.com" year = {27} />
    )
}

export default App;