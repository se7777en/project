import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    updateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.updateSearch(term) // peredaem e.target.value naverx
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.updateSearch}
            />
        )
    }
}

export default SearchPanel;