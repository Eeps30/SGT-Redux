import React, { Component } from 'react';
import StudentTable from './components/studentTable';
import TeacherTable from './components/teacherTable';
import { Route } from 'react-router-dom';
import './css/app.css';

class App extends Component {  
  
  render() {
    return (
        <div className="App">
          <Route exact path = '/' component={StudentTable}/>
          <Route path = '/teacherTable' component={TeacherTable}/>
        </div>
    );
  }
}

export default App;