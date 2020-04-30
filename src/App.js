import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor (){
    super();

    this.state = {
      monsters: [],
      searchVal: ''
    };

  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchVal: e.target.value })
  }

  render () {
    const { monsters, searchVal } = this.state;

    const filteredMonsters = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchVal.toLocaleLowerCase())
      )
    return(
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
          placeHolder='Search Monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters = { filteredMonsters }>  </CardList>
      </div>
    );
  }
}

export default App;
