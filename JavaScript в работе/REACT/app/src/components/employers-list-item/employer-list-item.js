
// import './employer-list-item.css';

// const EmployerListItem = ({name, sallary, increase}) => {

//     let classNames = "list-group-item d-flex justify-content-between";
//     if (increase) {
//         classNames += ' increase';
//     }


//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={sallary + '$'} />
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                     className="btn-trash btn-sm">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     );
// }


import './employer-list-item.css';
import { Component } from 'react'

class EmployerListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    onRise = () => {
        this.setState(({ rise }) => ({
            rise: !rise
        }))
    }


    render() {
        const { name, sallary } = this.props
        const { rise, increase } = this.state

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (rise) {
            classNames += ' like';
        }

        //like
        return (
            <li className={classNames}>
                <span onClick={this.onRise} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={sallary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }

}

export default EmployerListItem;