import React, { Component } from 'react';
import AddTeacherForm from '../components/addTeacherForm';
import { Link } from 'react-router-dom';
import TeacherRow from './teacherRow';
import '../css/teacherTable.css';

class TeacherTable extends Component {

    render(){
        return(
            <div className="teacherContainer">
                <table className="teacherTable">
                    <tbody>
                        <tr>
                            <td>Teacher Name</td>
                            <td>Course</td>
                            <td>Class Size</td>
                            <td>Operations</td>
                        </tr>
                        <TeacherRow/>
                    </tbody>
                </table>
                <AddTeacherForm/>
                <Link className="btn viewStudentsButton" to="/">View Students Table</Link>
            </div>
        )
    }
}

export default TeacherTable