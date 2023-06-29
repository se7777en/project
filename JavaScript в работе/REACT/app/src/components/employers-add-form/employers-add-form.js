
import './employers-add-form.css';

// const EmployersAddForm = () => {
//     return (
//         <div className="app-add-form">
//         <h3>Добавьте нового сотрудника</h3>
//         <form
//             className="add-form d-flex">
//             <input type="text"
//                 className="form-control new-post-label"
//                 placeholder="Как его зовут?" />
//             <input type="number"
//                 className="form-control new-post-label"
//                 placeholder="З/П в $?" />

//             <button type="submit"
//                     className="btn btn-outline-light">Добавить</button>
//         </form>
//     </div>
//     );
// }

/*upravlyaemie komponenti*/

import { Component } from 'react'

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            sallary: ''
        }
    }

    addItem = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.sallary);
        this.setState({
            name: '',
            sallary: ''
        })
    }

    onChangeInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, sallary } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.addItem}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChangeInputValue} required
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="sallary"
                        value={sallary}
                        onChange={this.onChangeInputValue} required
                    />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;