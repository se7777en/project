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
            colorFive: '#ffffff',
            colorsStatus: {
                colorOne: true,
                colorTwo: true,
                colorThree: true,
                colorFour: true,
                colorFive: true
            }
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

    colorChange = (newColorsStatus) => {
        this.setState(({ colorsStatus }) => ({
            colorsStatus: { ...colorsStatus, ...newColorsStatus }
        }))
    }



    generateRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let updatedColors = {};

        for (let key in this.state.colorsStatus) {
            if (this.state.colorsStatus[key]) {
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                updatedColors[key] = color;
            }
        }

        // Generate the new hash based on updated colors and existing colors
        const newColors = {
            ...this.state,
            ...updatedColors
        };
        const colorValues = [newColors.colorOne, newColors.colorTwo, newColors.colorThree, newColors.colorFour, newColors.colorFive];
        window.location.hash = this.colorsToUUIDString(colorValues);

        // Update state with the new colors
        this.setState({
            ...updatedColors
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


    colorNames = {
        "#000000": "Black",
        "#FFFFFF": "White",
        "#FF0000": "Red",
        "#00FF00": "Green",
        "#0000FF": "Blue",
        "#FF00FF": "Magenta",
        "#800000": "Maroon",
        "#808000": "Olive",
        "#008000": "Green",
        "#008080": "Teal",
        "#000080": "Navy",
        "#800080": "Purple",
        "#808080": "Gray",
        "#C0C0C0": "Silver",
        "#FFA500": "Orange",
        "#8B4513": "SaddleBrown",
        "#A0522D": "Sienna",
        "#D2691E": "Chocolate",
        "#CD853F": "Peru",
        "#F4A460": "SandyBrown",
        "#D2B48C": "Tan",
        "#DEB887": "BurlyWood",
        "#FFDAB9": "PeachPuff",
        "#F5DEB3": "Wheat",
        "#F5F5DC": "Beige",
        "#FFE4B5": "Moccasin",
        "#FFDEAD": "NavajoWhite",
        "#FAEBD7": "AntiqueWhite",
        "#FFEBCD": "BlanchedAlmond",
        "#FFEFD5": "PapayaWhip",
        "#FFFAF0": "FloralWhite",
        "#F0E68C": "Khaki",
        "#BDB76B": "DarkKhaki",
        "#EEE8AA": "PaleGoldenRod",
        "#FFF8DC": "Cornsilk",
        "#DAA520": "GoldenRod",
        "#FFD700": "Gold",
        "#FAFAD2": "LightGoldenRodYellow",
        "#FFFFE0": "LightYellow",
        "#FFFF00": "Yellow",
        "#FFFACD": "LemonChiffon",
        "#FFF5EE": "SeaShell",
        "#F5FFFA": "MintCream",
        "#F0FFFF": "Azure",
        "#F8F8FF": "GhostWhite",
        "#F0FFF0": "HoneyDew",
        "#F0F8FF": "LightBlue",
        "#E6E6FA": "Lavender",
        "#FFF0F5": "LavenderBlush",
        "#7B68EE": "MediumSlateBlue",
        "#9370DB": "MediumPurple",
        "#4B0082": "Indigo",
        "#6A5ACD": "SlateBlue",
        "#483D8B": "DarkSlateBlue",
        "#4169E1": "RoyalBlue",
        "#6495ED": "CornflowerBlue",
        "#B0C4DE": "LightSteelBlue",
        "#778899": "LightSlateGray",
        "#708090": "SlateGray",
        "#1E90FF": "DodgerBlue",
        "#4682B4": "SteelBlue",
        "#87CEFA": "LightSkyBlue",
        "#00BFFF": "DeepSkyBlue",
        "#ADD8E6": "LightBlue",
        "#B0E0E6": "PowderBlue",
        "#66CDAA": "MediumAquaMarine",
        "#20B2AA": "LightSeaGreen",
        "#40E0D0": "Turquoise",
        "#48D1CC": "MediumTurquoise",
        "#00CED1": "DarkTurquoise",
        "#AFEEEE": "PaleTurquoise",
        "#00FFFF": "Cyan",
        "#E0FFFF": "LightCyan",
        "#87CEEB": "SkyBlue",
        "#5F9EA0": "CadetBlue",
        "#7FFFD4": "Aquamarine"
        // Продолжайте добавлять другие цвета по мере необходимости
    };

    render() {
        const { colorOne, colorTwo, colorThree, colorFour, colorFive, colorsStatus } = this.state;
        console.log(colorsStatus);

        return (
            <>
                <div className="wrapper">
                    <Header />
                    <HeaderOps generateRandomColor={this.generateRandomColor} />

                    <div className="main">
                        <ColorOne colorOne={colorOne} colorsArr={this.colorNames} getColorIntensity={this.getColorIntensity} colorChange={this.colorChange} />
                        <ColorTwo colorTwo={colorTwo} colorsArr={this.colorNames} getColorIntensity={this.getColorIntensity} colorChange={this.colorChange} />
                        <ColorThree colorThree={colorThree} colorsArr={this.colorNames} getColorIntensity={this.getColorIntensity} colorChange={this.colorChange} />
                        <ColorFour colorFour={colorFour} colorsArr={this.colorNames} getColorIntensity={this.getColorIntensity} colorChange={this.colorChange} />
                        <ColorFive colorFive={colorFive} colorsArr={this.colorNames} getColorIntensity={this.getColorIntensity} colorChange={this.colorChange} />
                    </div>
                </div>
                <Modal />
            </>
        )
    }
}

export default App;
