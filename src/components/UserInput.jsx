import React from 'react';

const UserInput = (props) => {
  const style = {
    border: '2px solid cornflowerblue',
  }

  return <input 
    type="text" 
    onChange={props.changed}
    value={props.currentName}
    style={style} />
};

export default UserInput;