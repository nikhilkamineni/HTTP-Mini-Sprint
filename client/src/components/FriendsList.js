import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: []
  };

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then((response) => {
      console.log('data', response.data);
      this.setState({friends: response.data})
    })
    .catch((error) => {
      console.log('there was an error', error);
    });
  }
}

export default FriendsList;

// http://localhost:5000/friends