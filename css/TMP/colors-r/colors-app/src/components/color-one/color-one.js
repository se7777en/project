import { Component } from 'react';
import './color-one.css';

class ColorOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragActive: false,
            colorActive: false,
            copyActive: false,
            isLocked: false,
            lockActive: false
        };
    }

    toggleLock = () => {
        this.setState(({ isLocked }) => ({
            isLocked: !isLocked
        }));
    }

    setTemporaryState = (stateName) => {
        // this.toggleLock();
        this.setState({ [stateName]: true });
        setTimeout(() => {
            this.setState({ [stateName]: false });
        }, 900);
    }

    handleColorChange = () => {
        this.props.colorChange({ colorOne: this.state.isLocked ? true : false });
    }



    render() {
        const { dragActive, colorActive, copyActive, isLocked, lockActive } = this.state;
        const { colorOne, getColorIntensity, colorsArr } = this.props;
        // console.log(colorNames)


        const textColor = getColorIntensity(colorOne) !== 'light' ? '#ffffff' : '#000000';
        const colorName = colorsArr[colorOne.toUpperCase()] ? colorsArr[colorOne.toUpperCase()] : '';
        // console.log(colorsArr);
        // console.log(colorOne);


        const itemColor = `color__box ${colorActive ? 'hover' : ''}`;
        const dragOn = `drag__img item ${dragActive ? 'hover' : ''}`;
        const itemCopy = `copy__img item ${copyActive ? 'hover' : ''}`;
        const itemLock = `secure__img item ${lockActive ? 'hover' : ''}`;


        // const { isLocked } = this.state;
        const lockClass = isLocked ? 'fa-lock' : 'fa-lock-open';


        const idStatus = isLocked ? '0' : '1';

      

        //console.log('ok');



        return (
            <div className="main__item one" style={{ backgroundColor: colorOne }}>
                <div className="color__descr">
                    <div className={itemColor} onClick={() => this.setTemporaryState('colorActive')}>
                        <div className="color" style={{ color: textColor }}>{colorOne}</div>
                    </div>
                    <div className="color__title" style={{ color: textColor }}>{colorName}</div>
                </div>
                <div className="color__btns" style={{ color: textColor }}>
                    <div className={dragOn} onClick={() => this.setTemporaryState('dragActive')}>
                        <i className="fa-solid fa-arrows-left-right color__btns-drag"></i>
                        <i className="fa-solid fa-arrows-up-down color__btns-drag"></i>
                    </div>


                    <div className={itemCopy} onClick={() => this.setTemporaryState('copyActive')}>
                        <i className="fa-solid fa-copy color__btns-copy"></i>
                    </div>
                    <div className={itemLock} onClick={() => { this.setTemporaryState('lockActive'); this.toggleLock(); this.handleColorChange(); }} data-id={idStatus}>
                        <i className={`fa-solid ${lockClass} color__btns-secure`}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorOne;
