import React, { Component } from 'react';
import StudentRow from './studentRow';
import Header from '../components/header';
import AddStudentForm from '../components/addStudentForm';
import { Link } from 'react-router-dom';
import '../css/studentTable.css';
import '../css/mediaQueryStudent.css';


class StudentTable extends Component {

    render(){
        return(
            <div className="studentContainer">
                <Header/>
                <table className="studentTable">
                    <tbody>
                        <tr className="studentColumnLabels">
                            <td>Student Name</td>
                            <td>Course</td>
                            <td>Grade</td>
                            <td>Operations</td>
                        </tr>
                        <StudentRow/>
                    </tbody>
                </table>
                <AddStudentForm/>
                <Link className="btn viewStudentsButton" to="/">Students</Link>
                <Link className="btn viewTeachersTab" to="/teacherTable">Teachers</Link>
            </div>
        )
    }
}

export default StudentTable