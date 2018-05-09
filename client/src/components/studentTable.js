import React, { Component } from 'react';
import axios from 'axios';

class StudentTable extends Component {

    componentDidMount(){
        axios.get('http://localhost:8000/students')
            .then(function (response) {
                console.log('Data from Table: ',response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>First Row</td>
                            <td>COLUMN 1</td>
                            <td>COLUMN 2</td>
                        </tr>
                        <tr>
                            <td>Second Row</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable