
import EmployeesListItem from '../employers-list-item/employer-list-item';
import './employers-list.css';





// const EmployersList = () => {
//     return (
//         <ul className="app-list list-group">
//             <EmployeesListItem name="John C." sallary = {800}/>
//             <EmployeesListItem name="Alex M." sallary = {3000}/>
//             <EmployeesListItem name="Carl W." sallary = {5000}/>
//         </ul>
//     );
// }


const EmployersList = ({data, onDelete}) => {
    const element = data.map((item) => {
        const  {id, ...itemProps} = item; /*razbivaet obiekt masisa na 2 chasti 1 eto id a vtoroe vse ostalnoe iz item*/
        return (
            <EmployeesListItem key={id} {...itemProps}
            onDelete={()=>onDelete(id)}
            />/*...item      name={item.name} sallary = {item.sallary} increase = {item.increase}*/
        )
    })

    return (
        <ul className="app-list list-group">
           {element}
        </ul>
    )
}

export default EmployersList;