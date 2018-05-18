import React, { Component } from 'react';
import AddTeacherForm from '../components/addTeacherForm';
import { Link } from 'react-router-dom';
import TeacherRow from './teacherRow';
import '../css/teacherTable.css';
import '../css/mediaQueryTeachers.css';
import TeacherHeader from '../components/teacherHeader';

class TeacherTable extends Component {

    render(){
        return(
            <div className="teacherContainer">
                <TeacherHeader/>
                <table className="teacherTable">
                    <tbody>
                        <tr className="teacherColumnLabels">
                            <td>Teacher Name</td>
                            <td>Course</td>
                            <td>Class Size</td>
                            <td>Operations</td>
                        </tr>
                        <TeacherRow/>
                    </tbody>
                </table>
                <AddTeacherForm/>
                <Link className="btn viewStudentsButton" to="/">Students</Link>
                <Link className="btn viewTeachersTab" to="/teacherTable">Teachers</Link>
            </div>
        )
    }
}

export default TeacherTable