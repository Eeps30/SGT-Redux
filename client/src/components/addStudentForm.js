import React, { Component } from 'react';
import axios from 'axios';

class AddStudentForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            course: '',
            grade: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameEntry(event){
        this.setState({
            name: event.target.value
        })
    }

    handleCourseEntry(event){
        this.setState({
            course: event.target.value
        })
    }

    handleGradeEntry(event){
        this.setState({
            grade: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const { name, grade, course } = this.state

        //verify inputs before axios call

        axios.post('http://localhost:8000/students/addstudent', {
            name: name,
            grade: grade,
            course_name: course
          })

          .then((response) => {
            console.log(response);

            this.setState({
                name: '',
                course: '',
                grade: ''
            })

          })

          .catch(function (error) {
            console.log(error);
            return false
          });
 
    }

    render(){
        return (
            <div className="container">
                <h3>Add Item</h3>
                <form>
                    <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                    <input onChange={this.handleCourseEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                    <input onChange={this.handleGradeEntry.bind(this)} name="grade" placeholder="Grade" type="text" value={this.state.grade}/>
                    <button onClick={this.handleSubmit.bind(this)}>Add Student</button>
                </form>
            </div>
        )
    }
    
}

export default AddStudentForm