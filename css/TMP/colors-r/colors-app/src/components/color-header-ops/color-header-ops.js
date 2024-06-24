import "./color-header-ops.css";
import { Component } from 'react';
// import {generateRandomColor} from '../utils/utils';

class HeaderOps extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //name: this.props.data[0].name,
    //         generateRandomColor: this.props.generateRandomColor
    //     }
    // }



    render() {
        const { generateRandomColor } = this.props;

        return (
            <div className="header__operations">
                <div className="header__btn" onClick={() => generateRandomColor()}>Generate</div>
                <div className="header__comunity">
                    <a href="#!" className="header__share">
                        <i className="fa-solid fa-share-nodes"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeaderOps;