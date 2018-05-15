import React, { Component } from 'react';
import StudentRow from './studentRow';
import Header from '../components/header';
import AddStudentForm from '../components/addStudentForm';
import { Link } from 'react-router-dom';
import '../css/studentTable.css';

class StudentTable extends Component {

    render(){
        return(
            <div className="studentContainer">
                <Header/>
                <table className="studentTable">
                    <tbody>
                        <tr className="studentColumnLabels">
                            <td>Student Name</td>
                            <td>Student Course</td>
                            <td>Student Grade</td>
                            <td>Operations</td>
                        </tr>
                        <StudentRow/>
                    </tbody>
                </table>
                <AddStudentForm/>
                <Link className="btn viewTeachersButton" to="/teacherTable">View Teachers</Link>
            </div>
        )
    }
}

export default StudentTable