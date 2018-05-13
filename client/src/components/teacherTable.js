import React, { Component } from 'react';
import AddTeacherForm from '../components/addTeacherForm';
import { Link } from 'react-router-dom';
import TeacherRow from './teacherRow';

class TeacherTable extends Component {

    render(){
        return(
            <div>
                <table>
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
                <Link className="btn" to="/">View Students</Link>
            </div>
        )
    }
}

export default TeacherTable