import "./color-header-ops.css";
import { Component } from 'react';

class HeaderOps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data[0].name
        }
    }

    render() {
        const {name} = this.state;
        return (
            <div className="header__operations">
                <div className="header__btn" onClick={() => console.log(name)}>Generate</div>
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