import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSallaryChange}) => {


    let employeer = data.map((item) => {
        
        const { id, ...proplist } = item;
        return (
            <EmployeesListItem onDelete={() => onDelete(id)} key={id} {...proplist}
                // onToggleIncrease={()=>onToggleIncrease(id)}
                // onToggleRice={()=>onToggleRice(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSallaryChange={(e)=>onSallaryChange(id, e.currentTarget.value)}
            />
            //name = {item.name} sallary = {item.sallary} key = {item.key} increase = {item.increase}
        );
    });

    if(employeer.length === 0) {
        employeer = <h3>Data not found</h3>;
    }

    return (
        <ul className="app-list list-group">
            {employeer}
        </ul>
    )
}

export default EmployeesList;