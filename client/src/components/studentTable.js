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
                        <StudentRow/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable