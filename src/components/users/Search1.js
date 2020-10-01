import React, { Component } from 'react';

export class Search1 extends Component {
  state = {
    text: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='from'>
          <input
            type='text'
            name='text'
            placeholder='Search Buddy...'
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    );
  }
}

export default Search1;
