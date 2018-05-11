import React, { Component } from 'react';
import AddStudentForm from './components/addStudentForm';
import Header from './components/header';
import StudentTable from './components/studentTable';

class App extends Component {  
  
  render() {
    return (
        <div className="App">
          <Header/>
          <StudentTable/>
          <AddStudentForm/>
        </div>
    );
  }
}

export default App;
