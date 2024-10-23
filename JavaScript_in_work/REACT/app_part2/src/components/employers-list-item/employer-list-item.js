import { Component } from 'react'
import './employer-list-item.css';

class EmployerListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sallary: ''
        }
    }

  
    
    
    render() {
        const { name, onDelete, onToggleProp, increase, rise, sallary, SallaryChange } = this.props /*onToggleIncrease, onToggleRise  2 v odnom onToggleProp*/
       // const {sallary} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (rise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={sallary[sallary.length -1] !== '$' ? sallary + '$': sallary} onChange={SallaryChange} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp} data-toggle="increase" type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }


}

export default EmployerListItem;