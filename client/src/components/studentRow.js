import React from 'react'
import { retrieveStudentData } from './Helpers/retrieveStudentData';

const StudentRow = () => {
    const studentData = retrieveStudentData()
    console.log('Data at StudentRow: ', studentData);
    //async await here until axios call retrieves data before
    //building rows

    const studentRows = studentData.map(item => (
        <tr>
            <td>{studentData.name}</td>
            <td>{studentData.grade}</td>
            <td>{studentData.course_name}</td>
        </tr>
    ))

    return (
        {studentRows}
    )
}

export default StudentRow;