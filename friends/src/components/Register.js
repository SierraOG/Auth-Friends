import React from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Register extends React.Component {
  state = {
    friend: {
      id: 1,
      name: '',
      age: '', 
      email: '',
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.setState({
        friend: {
            ...this.state.friend,
            id: Date.now()
        }
    })
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.friend)
      .then(res => {
        console.log('from inside register', res)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Register new friend</button>
        </form>
      </div>
    );
  }
}

export default Register;