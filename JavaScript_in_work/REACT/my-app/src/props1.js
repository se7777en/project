import './App2.css';
import { Component } from 'react';

class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 28,
            text: '+++'
        }
    }

    func = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }


    render() {
        const { name, surname, link } = this.props;
        return (
            <div className='content'>
                <div className="btn">
                    <button onClick={this.func}>{this.state.text}</button>
                </div>
                <h2>My name is - {name} Surname is - {surname} Age is - <span>{this.state.years}</span></h2>
                <div className="link">
                    <a href={link}>Link</a>
                </div>
            </div>

        );
    }
}

function App() {
    return (
        <div className='App'>
            <MyClass name="James" surname="Brown" age="27" link="https://facebook.com" />
            <MyClass name="James" surname="Brown" age="27" link="https://facebook.com" />
            <MyClass name="James" surname="Brown" age="27" link="https://facebook.com" />
        </div>
    );
}

export default App;