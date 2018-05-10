import React, { Component } from 'react';
import { retrieveStudentData } from './Helpers/retrieveStudentData';
import StudentRow from './studentRow';

class StudentTable extends Component {

    componentDidMount(){
        const studentData = retrieveStudentData();
        console.log(studentData);
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Student Name</td>
                            <td>Student Course</td>
                            <td>Student Grade</td>
                        </tr>
                        <StudentRow/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable