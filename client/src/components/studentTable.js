import React, { Component } from 'react';
import StudentRow from './studentRow';

class StudentTable extends Component {

    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default StudentTable