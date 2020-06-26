import React from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends React.Component {
  state = {
    username: 'Mirage',
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div>
        <UserInput 
          changed={this.usernameChangeHandler} 
          currentName={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Eddie" />
        <UserOutput username="Alice" />
      </div>
    );
  }
}

export default App;
