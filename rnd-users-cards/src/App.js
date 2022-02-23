import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this); // in constructor
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Best Workers on the Month</h1>
        <SearchBox
          placeholder="search users"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
