

import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';




// function App() {

//     const data = [
//         {name: "John C.", sallary: 800, increase: false, id: 1},
//         {name: "Alex M.", sallary: 3000, increase: true, id: 2},
//         {name: "Carl W.", sallary: 15000, increase: false, id: 3}
//     ];

//     return (
//         <div className='app'>
//             <AppInfo/>
//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>
//             <EmployersList data={data}/>
//             <EmployersAddForm/>
//         </div>
//     );
// }


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "John C.", sallary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex M.", sallary: 3000, increase: true, rise: false, id: 2 },
                { name: "Carl W.", sallary: 15000, increase: false, rise: false, id: 3 }
            ],

            term: '',
            filter: 'all'

        }


        this.maxId = 4

    }


    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }


    //   generateUniqueId() {  dlya generacii klucha no ne sovsem nadejnaya
    //     return Date.now().toString(36) + Math.random().toString(36).substr(2);
    //   }

    addItem = (name, sallary) => {
        if (name.length < 3) return
        const item = {
            name: name,
            sallary: sallary,
            increase: false,
            rise: false,
            id: uuidv4()
        }

        this.setState(({ data }) => {
            const newarr = [...data, item];
            return {
                data: newarr
            }
        })

    }


    /*==============================*/
    /*
        onToggleIncrease = (id) => {
            console.log('ok1')
            //console.log(`Increase this ${id}`);
            this.setState(({ data }) => ({
                // const index = data.findIndex((elem) => elem.id === id);
                // const old = data[index];
                // const newItem = { ...old, increase: !old.increase }
                // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
    
                // return {
                //     data: newArr
                // }
    
    
                data: data.map((item) => {
                    if (item.id === id) {
                        return { ...item, increase: !item.increase }
                    }
                    return item
                })
    
            }))
        }
    
        onToggleRise = (id) => {
            console.log('ok2')
            this.setState(({ data }) => ({
                data: data.map((item) => {
                    if (item.id === id) {
                        return { ...item, rise: !item.rise }
                    }
                    return item
                })
            }))
        }
    */
    /*==============================*/

    // ukorocheni variant 2 v odnom
    onToggleProp = (id, prop) => {
        console.log('ok2')
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    filterDat = (dat, term) => {
        return dat.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    sendTerm = (term) => {
        this.setState({ term })
    }


    forFilter = (items, filt) => {
        switch (filt) {
            case 'moreThen1000':
                return items.filter((item) => item.sallary > 1000)
            case 'rise':
                return items.filter((item) => item.rise === true)
            default:
                return items
        }
    }

    upName = (filter) => {
        this.setState({ filter })
    }


    UpdateSallary = (id, sall) => {
      // sall =  sall[-1] !== '$' ? sall : sall.pop() 
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => {
                    if (item.id === id) {
                        console.log(sall)
                        return item.sallary = sall
                    }
                    return item;
                })
            }
        })
    }


    render() {
        const { data, term, filter } = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const result = this.forFilter(this.filterDat(data, term), filter);

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel sendTerm={this.sendTerm} />
                    <AppFilter filter={filter} upName={this.upName} />
                </div>
                <EmployersList
                    //data={this.state.data}
                    data={result}
                    onDelete={this.deleteItem}
                    UpdateSallary={this.UpdateSallary}
                    /*onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}*/
                    onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }

}


export default App;