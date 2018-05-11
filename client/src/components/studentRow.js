import React, { Component } from 'react'
import axios from 'axios'

class StudentRow extends Component {
    constructor(props){
        super(props)

        this.state = {
            students:[]
        }
    }

    componentDidMount() {

        
        axios.get('http://localhost:8000/students')
        .then(response => {
            console.log(response.data.data);
            this.setState({
                students: response.data.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    handleDelete(id){
    
        axios.post('http://localhost:8000/students/delete', {
            id: id
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
        
    }

    render(){

        const { students } = this.state
        
        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.grade}</td>
                    <td><button onClick={this.handleDelete.bind(this, item.id)}>Delete</button></td>
                </tr>
            )

        });
        
        return (
           itemElements
        )
    }
}

export default StudentRow;