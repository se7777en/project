import { Component } from 'react';
import './employees-list-item.css';


class EmployeesListItem extends Component { //name, sallary, increase

    constructor (props) {
        super(props);
        this.state = {
            sallary: this.props.sallary
        }

    }


    render(){
        const {name, onDelete, onToggleProp, increase, rise, onSallaryChange} = this.props;
        const {sallary} = this.state;

        let classlist = "list-group-item d-flex justify-content-between";
        if (increase) {
            classlist += " increase";
        }
    
        if (rise) {
            classlist += " like";
        }
    
        return (
            <li className={classlist}>
                <span onClick={onToggleProp} data-toggle="increase" className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={sallary + '$'} onChange={onSallaryChange} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" onClick={onToggleProp} data-toggle="rise"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                    onClick={onDelete}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
       
export default EmployeesListItem;



////////////////////////////////////////////////////////////////////
/*import {Component} from "react";
import './employees-list-item.css';


class EmployeesListItem extends Component { //name, sallary, increase
    constructor (props) {
        super(props);

        this.state = {
            increase: false,
            rise: false
        }
    }

    onIncrease  = () => {
        this.setState((state)=>({
            increase: !state.increase
        }))
    }

    onRise = () => {
        this.setState(({rise})=>({
            rise: !rise
        }))
    }


    // increase
   render() {
    const {name, sallary, onDelete} = this.props;

    const {increase, rise} = this.state;
    let classlist = "list-group-item d-flex justify-content-between";
    if (increase) {
        classlist += " increase";
    }

    if (rise) {
        classlist += " like";
    }

    return (
        <li className={classlist}>
            <span onClick={this.onRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={sallary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" onClick={this.onIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }
}

export default EmployeesListItem;*/