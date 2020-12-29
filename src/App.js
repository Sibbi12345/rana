import React from 'react';
import './App.css';

const SimpleComponent = (props) => {
  return (
    <>
      {props.name}
    </>
  )
}

function App() {
  return (
    <>
      <SimpleComponent name="text" />
      {this.props.lastname}
    </>
  );
}


export default App


