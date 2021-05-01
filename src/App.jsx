import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => this.setState({ monsters: users}))
    }

    render(){
        return (
            <div className='App'>
                <CardList name="Yihua"/>
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
                }
            </div>
        )
    }


} 