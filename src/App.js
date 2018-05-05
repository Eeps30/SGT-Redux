import React, { Component } from 'react';
import AddStudentForm from './components/addStudent';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AddStudentForm/>
      </div>
    );
  }
}

export default App;
