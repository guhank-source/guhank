import React, { Component } from 'react';
import Guhan from './components/layout/Guhan';
import User1 from './components/users/User1';
import Search1 from './components/users/Search1';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: true });
  // }
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: true });
  };

  render() {
    return (
      <div className='App1'>
        <Guhan />
        <div className='container'>
          <Search1 searchUser={this.searchUsers} />
          <User1 loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
