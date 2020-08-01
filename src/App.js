import React, { Component } from "react";
import Main from "./components/Main";


class App extends Component {
  // Setting this.state.friends to the friends json array
  // state = {
  //   friends
  // };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Main />
    );
  }
}

export default App;
