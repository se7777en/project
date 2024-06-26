import { Component } from 'react';
import './color-three.css';

class ColorThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragActive: false,
            colorActive: false,
            copyActive: false,
            lockActive: false,
            isLocked: false
        };
    }

    toggleLock = () => {
        this.setState(({ isLocked }) => ({
            isLocked: !isLocked
        }));
    }

    setTemporaryState = (stateName) => {
        this.setState({ [stateName]: true });
        setTimeout(() => {
            this.setState({ [stateName]: false });
        }, 900);
    }

    handleColorChange = () => {
        this.props.colorChange({ colorThree: this.state.isLocked ? true : false });
    }

    render() {
        const { dragActive, colorActive, copyActive, lockActive } = this.state;
        const {colorThree, getColorIntensity, colorsArr} = this.props;

        const textColor = getColorIntensity(colorThree) !== 'light' ? '#ffffff' : '#000000';
        const colorName = colorsArr[colorThree.toUpperCase()] ? colorsArr[colorThree.toUpperCase()] : '';

        const itemColor = `color__box ${colorActive ? 'hover' : ''}`;
        const dragOn = `drag__img item ${dragActive ? 'hover' : ''}`;
        const itemCopy = `copy__img item ${copyActive ? 'hover' : ''}`;
        const itemLock = `secure__img item ${lockActive ? 'hover' : ''}`;

        const { isLocked } = this.state;
        const lockClass = isLocked ? 'fa-lock' : 'fa-lock-open';
        const idStatus = isLocked ? '0' : '1';

        return (
            <div className="main__item three" style={{backgroundColor:colorThree}}>
                <div className="color__descr">
                    <div className={itemColor} onClick={() => this.setTemporaryState('colorActive')}>
                        <div className="color" style={{color: textColor}}>{colorThree}</div>
                    </div>
                    <div className="color__title" style={{color: textColor}}>{colorName}</div>
                </div>
                <div className="color__btns" style={{color: textColor}}>
                    <div className={dragOn} onClick={() => this.setTemporaryState('dragActive')}>
                        <i className="fa-solid fa-arrows-left-right color__btns-drag"></i>
                        <i className="fa-solid fa-arrows-up-down color__btns-drag"></i>
                    </div>

                    <div className={itemCopy} onClick={() => this.setTemporaryState('copyActive')}>
                        <i className="fa-solid fa-copy color__btns-copy"></i>
                    </div>
                    <div className={itemLock} onClick={() => {this.setTemporaryState('lockActive'); this.toggleLock(); this.handleColorChange();}} data-id={idStatus}>
                        <i className={`fa-solid ${lockClass} color__btns-secure`}></i>
                    </div>
                </div>
            </div>
        );
    }
}


export default ColorThree;
