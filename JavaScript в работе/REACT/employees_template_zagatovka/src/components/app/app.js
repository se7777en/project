import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "James.K", sallary: "1500", increase: false, rise: false, id: 1 },
        { name: "William.S", sallary: "1800", increase: false, rise: false, id: 2 },
        { name: "Cameroon.L", sallary: "3000", increase: false, rise: true, id: 3 }
      ],

      term: '',
      filter: 'all'
    }
  }

  

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //const filtred = data.filter((item) => item.id !== id)

      return {
        data: data.filter((item) => item.id !== id)
      }
    })
  }

  addItem = (name, sallary) => {
    this.setState(({ data }) => {
      const dat = {
        name: name,
        sallary: sallary,
        increase: false,
        rise: false,
        id: nanoid()
      };
      const newData = [...data, dat]

      return {
        data: newData
      }

    })
  }

  // onToggleIncrease = (id) => {
  //   console.log(`increase ${id}`);
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase }
  //       }
  //       return item
  //     })
  //   }))
  // }

  // onToggleRice = (id) => {
  //   console.log(`Rice ${id}`);
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item
  //     })
  //   }))
  // }
  /////2 v odnom
  onToggleProp = (id, prop) => {
    console.log(`increase ${id}`);
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  }
  //////////////////////




  /////////poisk//////
  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.name.indexOf(term) > -1
    })
  }

  updateSearch = (term) => { // berem znachenie iz inputa i vstavltaet v term v staite
    this.setState({ term })
  }
  ///////////////////

  ////////////filter//////////
  filterPost = (items, filter) => {
    
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise)
      case 'moreThan1000':
        return items.filter((item) => item.sallary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }
  ////////////////////////////



  onSallaryChange = (id, sallary) => {
    this.setState(({ data }) => {
      const sall = data.map((item) => {
        if (item.id === id) {
          return { ...item, sallary: sallary }
        }
        return item
      })
      return {
        data: sall
      }
    })
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.rise).length;

    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel filter={this.filter} updateSearch={this.updateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          onDelete={this.deleteItem}
          data={visibleData}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRice={this.onToggleRice}
          onToggleProp={this.onToggleProp}
          onSallaryChange={this.onSallaryChange}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
