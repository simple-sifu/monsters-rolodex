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

    // this.handleChange = this.handleChange.bind(this);  

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  // will see this and bind it to where it was declared(App)....bind this context to place where they were defined.
  handleChange =(e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>

        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )

  }
}

export default App;
