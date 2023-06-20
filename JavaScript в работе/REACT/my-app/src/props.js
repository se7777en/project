import './App.css';

/*
const WhoAmI = (props) => {
    return (
        <div>
            <h1>My name is {props.name} surname is {props.surname}</h1>
            <a href={props.link}>My Profile</a>
        </div>
    );
}*/

// ====================================================================
// propsi
// const WhoAmI = ({name, surname, link}) => {
//     return (
//         <div>
//             <h1>My name is {name()} surname is {surname}</h1>
//             <a href={link}>My Profile</a>
//         </div>
//     );
// }


// function App() {
//     return (
//         <div className="App">
//             {/* <WhoAmI name = {{firstname: 'Melik'}} surname = "Papikyan" link = "facebook.com"/>
//             <WhoAmI name = {{firstname: 'John'}} surname = "Smith" link = "mail.com"/> */}
//             <WhoAmI name = {() => {return 'Melik'}} surname = "Papikyan" link = "facebook.com"/>
//             <WhoAmI name = {() => {return 'John'}} surname = "Smith" link = "mail.com"/>
//         </div>
//     );
// }

// ====================================================================
// propsi - peredelivaem na klasovi variant

import { Component } from 'react';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    netxYear = () => {
        console.log('+++');
        // this.setState({  // eto bez funkcii
        //     years: this.state.years + 1
        // })
        //============================
          this.setState(state => ({ // napryamuu sostoyanie izmenit nelzya (this.state.years + 1 readonly) nujno ispolzovat this.setState
            years: state.years + 1 // i sozdaem obiekt s novim sostoyaniem years:  ana zapuskaet pererisovku komponenta s novim sostoyaniem
                // no esli v setState ne peredat funkciu novoe sostoyanie moje podlagivat i jelatelno peredat funkciu
                // setState eto osinxronnaya operaciya esli nujna posledovatelnost nujno peredavat callback
                // i menyaetsya tolko to chto menyaem ostanoe ostaetsa na meste 
        }))
        //============================
    }

 render() {
    const {name, surname, link} = this.props;
    return (
        <div>
            <button onClick={this.netxYear}>{this.state.text}</button>
            <h1>My name is {name} surname is {surname} age - {this.state.years}</h1>
            <a href={link}>My Profile</a>
        </div>
    )
 }
}


function App() {
    return (
        <div className="App">
            {/* <WhoAmI name = {{firstname: 'Melik'}} surname = "Papikyan" link = "facebook.com"/>
            <WhoAmI name = {{firstname: 'John'}} surname = "Smith" link = "mail.com"/> */}
            <WhoAmI name = 'Melik' surname = "Papikyan" link = "facebook.com"/>
            <WhoAmI name = 'John' surname = "Smith" link = "mail.com"/>
        </div>
    );  
}
// ====================================================================

export default App;
