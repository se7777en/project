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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorOne: '#ffffff',
            colorTwo: '#ffffff',
            colorThree: '#ffffff',
            colorFour: '#ffffff',
            colorFive: '#ffffff'
        }
    }

    colorsToUUIDString(colors) {
        const uuidString = colors.join('').replace(/#/g, '');
        return uuidString.toLowerCase();
    };

    UUIDStringToColors(uuidString) {
        const colors = [];
        const cleanedUUIDString = uuidString.replace(/-/g, '');
        for (let i = 0; i < cleanedUUIDString.length; i += 6) {
            const color = '#' + cleanedUUIDString.substring(i, i + 6);
            colors.push(color);
        }
        return colors;
    };

    generateRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let updatedColors = [];

        for (let j = 0; j < 5; j++) {
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            updatedColors.push(color);
        }

        // Update window.location.hash with the new colors
        window.location.hash = this.colorsToUUIDString(updatedColors);

        this.setState({
            colorOne: updatedColors[0],
            colorTwo: updatedColors[1],
            colorThree: updatedColors[2],
            colorFour: updatedColors[3],
            colorFive: updatedColors[4]
        });
    };

    componentDidMount() {
        // Check if window.location.hash exists and is valid
        if (window.location.hash && window.location.hash.length > 24) {
            // Extract colors from hash
            const updatedColors = this.UUIDStringToColors(window.location.hash.slice(1));

            this.setState({
                colorOne: updatedColors[0],
                colorTwo: updatedColors[1],
                colorThree: updatedColors[2],
                colorFour: updatedColors[3],
                colorFive: updatedColors[4]
            });
        } else {
            // Generate random colors if hash is not valid or doesn't exist
            this.generateRandomColor();
        }
    }


    getColorIntensity(hexColor) {
        // Удаляем символ # из шестнадцатеричного значения
        hexColor = hexColor.replace('#', '');

        // Получаем значения RGB
        let r = parseInt(hexColor.substr(0, 2), 16);
        let g = parseInt(hexColor.substr(2, 2), 16);
        let b = parseInt(hexColor.substr(4, 2), 16);

        // Вычисляем яркость с учетом человеческого восприятия цвета
        let brightness = (r * 0.299 + g * 0.587 + b * 0.114);

        // Определяем контраст между фоном и текстом
        let contrast = Math.abs(brightness - 128);

        // Возвращаем результат
        if (brightness >= 128 && contrast >= 70) {
            return "light";
        } else if (brightness < 128 && contrast >= 70) {
            return "dark";
        } else {
            return "uncertain"; // Фон не является достаточно светлым или темным для хорошей видимости текста
        }
    };

    render() {
        const { colorOne, colorTwo, colorThree, colorFour, colorFive } = this.state;


        return (
            <>
                <div className="wrapper">
                    <Header />
                    <HeaderOps generateRandomColor={this.generateRandomColor} />

                    <div className="main">
                        <ColorOne colorOne={colorOne} getColorIntensity={this.getColorIntensity} />
                        <ColorTwo colorTwo={colorTwo} getColorIntensity={this.getColorIntensity} />
                        <ColorThree colorThree={colorThree} getColorIntensity={this.getColorIntensity} />
                        <ColorFour colorFour={colorFour} getColorIntensity={this.getColorIntensity} />
                        <ColorFive colorFive={colorFive} getColorIntensity={this.getColorIntensity} />
                    </div>
                </div>
                <Modal />
            </>
        )
    }
}

export default App;
