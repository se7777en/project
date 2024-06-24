import { Component } from 'react';
import './color-two.css';

class ColorTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragActive: false,
            colorActive: false,
            copyActive: false,
            lockActive: false
        };
    }

    setTemporaryState = (stateName) => {
        this.setState({ [stateName]: true });
        setTimeout(() => {
            this.setState({ [stateName]: false });
        }, 900);
    }

    render() {
        const { dragActive, colorActive, copyActive, lockActive } = this.state;
        const {colorTwo} = this.props;
        //console.log(ColorTwo);

        const itemColor = `color__box ${colorActive ? 'hover' : ''}`;
        const dragOn = `drag__img item ${dragActive ? 'hover' : ''}`;
        const itemCopy = `copy__img item ${copyActive ? 'hover' : ''}`;
        const itemLock = `secure__img item ${lockActive ? 'hover' : ''}`;

        return (
            <div className="main__item two" style={{backgroundColor: colorTwo}}>
                <div className="color__descr">
                    <div className={itemColor} onClick={() => this.setTemporaryState('colorActive')}>
                        <div className="color">{colorTwo}</div>
                    </div>
                    <div className="color__title">Electric blue</div>
                </div>
                <div className="color__btns">
                    <div className={dragOn} onClick={() => this.setTemporaryState('dragActive')}>
                        <i className="fa-solid fa-arrows-left-right color__btns-drag"></i>
                        <i className="fa-solid fa-arrows-up-down color__btns-drag"></i>
                    </div>

                    <div className={itemCopy} onClick={() => this.setTemporaryState('copyActive')}>
                        <i className="fa-solid fa-copy color__btns-copy"></i>
                    </div>
                    <div className={itemLock} onClick={() => this.setTemporaryState('lockActive')} data-id="0">
                        <i className="fa-solid fa-lock-open color__btns-secure"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorTwo;
