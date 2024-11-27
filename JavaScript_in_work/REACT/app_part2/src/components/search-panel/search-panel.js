import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
    }

    filT = (e) => {
        const item = e.target.value
        this.setState({item})
        this.props.sendTerm(item)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника" 
                value={this.state.item}
                onChange={this.filT}
                />
        );
    }

}

export default SearchPanel;