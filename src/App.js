import React, { Component } from 'react';
import { CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

/* USING CLASS instead of Function APP*/
/* WE first need to import component {Component} from react 
   We can also import it as a React.Component */


  /** We now have a access to render method with the help of React's Component
   *  and render method returns any html we want 
   *  By using a class component we also have access to STATE
   *  STATE is some JS object with some properties, we have access in any point in our class
   *  Constructor and Super keywords shows how to use it 
   *  Super() method calls Constructor method on Component class, It gives us access to this.state
   *  this.state property now exists on our class App and we can set a value to it
   *  we are rendering in p tag this.state.string to get the Hello World string
   * 
   *  Instead of a tag below 
   *  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      WE may add a button Change Text 
   

  constructor() {
    super();
    this.state = {
      string: "Hello World"
    };
  }
  render() {
    return(
      <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { this.state.string }
        </p>
        <button onClick= { () => this.setState( { string: 'Hello Gkc' } ) }> Change Text </button>
       </header>
    </div>
    )
  }
  */

  /** MONSTER APPLICATION */
 class App extends Component {

 constructor() {
  super();
  this.state = {
    monsters: [],
    searchField: ''
  };
}
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()  )
  .then (users => this.setState({monsters: users}))

}

handleChange = (e) => {
  this.setState({searchField: e.target.value});
};

render() {

  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return(
    <div className="App">
      <h1>Monsters Rolodex</h1>

      <SearchBox placeholder='search monsters' handleChange = {this.handleChange }
      ></SearchBox>

      <CardList monsters = {filteredMonsters}>
        
      
      </CardList>
      
  </div>
  )
}
}

/* OLD/default CODE

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
