import { Component } from 'react';
import './employees-add-form.css';


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            sallary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length < 3 || !this.state.sallary) return;
        this.props.addItem(this.state.name, this.state.sallary);
        this.setState({
            name: '',
            sallary: ''
        })
    }

    render() {
        const { name, sallary } = this.state;
        // const { addItem } = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" onSubmit = {this.onSubmit}>
                        
                    <input type="text" onChange={this.onValueChange} name="name" value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number" onChange={this.onValueChange} name="sallary" value={sallary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;