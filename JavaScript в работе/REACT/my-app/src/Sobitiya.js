import './App.css';
import { Component } from 'react';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            data: '',
            val: 0
        }
        //this.Value = this.Value.bind(this);
        // eto dlya function declaration no dlya kajdogo metoda nujno otdelno pisat
        // 1 eto pervi variant
        // 2 variant eto strelochnaya funkciya
        // 3 variant peredat v rendere anonimnuu funkciu i vizvat ee minus v tom chto  collback
        // budet peredavatsya kajdi raz pri rendere
    }
    Value() {
        this.setState(state => ({
            val: state.val + 1
        }))
    }

    netxYear = () => {
        console.log('+++');
        //============================
        this.setState(state => ({ // napryamuu sostoyanie izmenit nelzya (this.state.years + 1 readonly) nujno ispolzovat this.setState
            years: state.years + 1 // i sozdaem obiekt s novim sostoyaniem years:  ana zapuskaet pererisovku komponenta s novim sostoyaniem
            // no esli v setState ne peredat funkciu novoe sostoyanie moje podlagivat i jelatelno peredat funkciu
            // setState eto osinxronnaya operaciya esli nujna posledovatelnost nujno peredavat callback
            // i menyaetsya tolko to chto menyaem ostanoe ostaetsa na meste
        }))
        //============================
    }


    LogChanges = (e) => {
        // e.preventDefault()
        this.setState({
            data: e.target.value
        })
    }

    LogChanges1 = (e, color) => {
        console.log(color) // peredaem color dalshe po ierarxii cherez callback funkciu
        //(e) => this.LogChanges(e,'color')
        // e.preventDefault()
        this.setState({
            data: e.target.value
        })
    }




    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.netxYear}>{this.state.text}</button>
                <h1>My name is {name} surname is {surname} age - {this.state.years} data {this.state.data}</h1>
                <a href={link}>My Profile</a>
                <button onClick={() => this.Value()}>+ value</button>

                <form>
                    <span>Введите должность </span>
                    <input onChange={this.LogChanges} type="text" />
                    <input onChange={(e) => this.LogChanges1(e, 'color')} type="text" />
                    <div>
                        <h2>{this.state.val}</h2>
                    </div>
                </form>
            </div>
        )
    }
}


function App() {
    return (
        <div className="App">
            <WhoAmI name='Melik' surname="Papikyan" link="facebook.com" />
            <WhoAmI name='John' surname="Smith" link="mail.com" />
        </div>
    );
}
// ====================================================================

export default App;
