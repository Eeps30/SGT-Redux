import React, { Component } from 'react';
import Header from '../components/header';
import AddStudentForm from '../components/addStudentForm';
import { Link } from 'react-router-dom';
import StudentRow from './studentRow';

class TeacherTable extends Component {

    render(){
        return(
            <div>
                <Header/>
                <table>
                    <tbody>
                        <tr>
                            <td>Student Name</td>
                            <td>Student Course</td>
                            <td>Student Grade</td>
                            <td>Operations</td>
                        </tr>
                        <StudentRow/>
                    </tbody>
                </table>
                <AddStudentForm/>
                <Link className="btn" to="/">View Students</Link>
            </div>
        )
    }
}

export default TeacherTable