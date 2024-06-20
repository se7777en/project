import Header from '../color-header/color-header';
import HeaderOps from '../color-header-ops/color-header-ops';

import ColorOne from '../color-one/color-one';
import ColorTwo from '../color-two/color-two';
import ColorThree from '../color-three/color-three';
import ColorFour from '../color-four/color-four';
import ColorFive from '../color-five/color-five';

import Modal from '../modal/modal';
import './app.css';
import { Component } from 'react';


// import {generateRandomColor} from '../utils/utils';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorOne: '#777777',
            colorTwo: '#777771',
            colorThree: '#777771',
            colorFour: '#777771',
            colorFive: '#777771'
        };
    }
   
    componentDidMount() {
        this.generateRandomColor();
    }

    generateRandomColor = () => {
        const generatecolor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        this.setState({
            colorOne: generatecolor(),
            colorTwo: generatecolor(),
            colorThree: generatecolor(),
            colorFour: generatecolor(),
            colorFive: generatecolor()
        });
    };

    render() {
        const { colorOne, colorTwo, colorThree, colorFour, colorFive } = this.state

        return (
            <>
                <div className="wrapper">
                    <Header />
                    <HeaderOps generateRandomColor={this.generateRandomColor} />

                    <div className="main">
                        <ColorOne color={colorOne} />
                        <ColorTwo color={colorTwo} />
                        <ColorThree color={colorThree} />
                        <ColorFour color={colorFour} />
                        <ColorFive color={colorFive} />
                    </div>
                </div>
                <Modal />
            </>
        );
    }


}

export default App;