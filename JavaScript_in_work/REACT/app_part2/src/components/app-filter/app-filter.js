
import './app-filter.css';

const AppFilter = (props) => {

    const btnData = [
        {name:'all', label: 'Все сотрудники'},
        {name:'rise', label: 'На повышение'},
        {name:'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = btnData.map(({name, label}) => {
        const result = props.filter === name
        //console.log(result)
        const clazz = result ? 'btn-light' : 'btn-outline-light' 
        const style = (result) ? {color: 'red'}: null;
        return (
        <button className={`btn ${clazz}`} 
                type="button" 
                key={name} 
                onClick={() => props.upName(name)}
                style={style}>
            {label}
        </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button className="btn btn-light" type="button">
                Все сотрудники
            </button>

            <button className="btn btn-outline-light" type="button">
                На повышение
            </button>

            <button className="btn btn-outline-light" type="button">
                З/П больше 1000$
            </button> */}
        </div>
    );
} 

export default AppFilter;