import { Component } from 'react';

import './color-one.css';

class ColorOne extends Component {

    constructor() {
        super();
        this.state = {
            drag: false,
            color: false,
            copy: false,
            lock: false
        }
    }

    hoverOnDrag = () => {
        this.setState(( drag ) => ({
            drag: true
        }));
        setTimeout(() => {
            this.setState((drag) => ({
                drag: false
            }))
        }, 900);
    }

    hoverOnColor = () => {
        this.setState(( color ) => ({
            color: true
        }));
        setTimeout(() => {
            this.setState((color) => ({
                color: false
            }))
        }, 900);
    }

    hoverOnCopy = () => {
        this.setState(( copy ) => ({
            copy: true
        }));

        setTimeout(() => {
            this.setState((copy) => ({
                copy: false
            }))
        }, 900);
    }

    hoverOnLock = () => {
        this.setState(( lock ) => ({
            lock: true
        }));

        setTimeout(() => {
            this.setState((lock) => ({
                lock: false
            }))
        }, 900);
    }

    render() {
        const { drag, color, copy, lock } = this.state;
        const dragOn = `drag__img item ${drag ? 'hover' : ''}`;
        const itemColor = `color__box ${color ? 'hover' : ''}`;
        const itemCopy = `copy__img item ${copy ? 'hover' : ''}`;
        const itemLock = `secure__img item ${lock ? 'hover' : ''}`;

        return (
            <div className="main__item one">
                <div className="color__descr">
                    <div className={itemColor} onClick={this.hoverOnColor}>
                        <div className="color">#f7f4ea</div>
                    </div>
                    <div className="color__title">Electric blue</div>
                </div>
                <div className="color__btns">
                    <div className={dragOn} onClick={this.hoverOnDrag}>
                        <i className="fa-solid fa-arrows-left-right color__btns-drag"></i>
                        <i className="fa-solid fa-arrows-up-down color__btns-drag"></i>
                    </div>

                    <div className={itemCopy} onClick={this.hoverOnCopy}>
                        <i className="fa-solid fa-copy color__btns-copy"></i>
                    </div>
                    <div className={itemLock} onClick={this.hoverOnLock} data-id="0">

                        <i className="fa-solid fa-lock-open color__btns-secure"></i>

                    </div>
                </div>
            </div>
        )
    }
}

export default ColorOne;