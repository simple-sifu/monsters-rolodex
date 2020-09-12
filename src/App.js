import React from 'react';
import './App.css';
import { CardList } from './components/cardList';
import { SearchBox } from './components/searchBox';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className = 'App'>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )

  }
}

export default App;
