import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Functional component
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters : [
        // {
        //   id:'asc1',
        //   name : 'Frankenstein'
        // },
        // {
        //   id:'asr2',
        //   name : 'Dracula'
        // },
        // {
        //   id:'as1w',
        //   name : 'Zombie'
        // },
      ],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users ')
      .then( response => 
        //console.log(response) 
        response.json()
      )
      .then(users => 
        //console.log(users)
        this.setState({ monsters : users})
      )
  }

  handleChange = (e) => (
    this.setState({searchField: e.target.value}) 
  )

  render(){
    const { monsters, searchField  } = this.state;
    // OR
    // monsters = this.state.monsters 
    // searchField = this.state.searchFiled 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return(
      <div className="App">
        <h1> Monsters List </h1>

        {/* <input type='search' placeholder='search monsters' onChange={ e => 
          // {
          //   this.setState({searchField : e.target.value}, ()=> 
          //     console.log(this.state)
          //   ); 
          // }
          //this.setState({searchField: e.target.value})
        } /> */}

        <SearchBox
          placeholder="search monsters"
          //handleChange={ e => this.setState({searchField: e.target.value}) }
          handleChange={this.handleChange}
        />
        <CardList name="Sky" 
          //monsters={this.state.monsters}
          monsters={filteredMonsters}
        > 
          {/* {
            this.state.monsters.map( monster => 
              <h1 key={monster.id}>{ monster.name }</h1>
            )
          } */}
        </CardList>
     </div>
    )
  }

}

export default App;
