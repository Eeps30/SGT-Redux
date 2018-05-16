import React, { Component } from 'react';
import axios from 'axios';

class AddTeacherForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            course: '',
            size: '',
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameEntry(event){
        this.setState({
            errorMessage: '',
            name: event.target.value
        })
    }

    handleCourseEntry(event){
        this.setState({
            errorMessage: '',
            course: event.target.value
        })
    }

    handleSizeEntry(event){
        this.setState({
            errorMessage: '',
            size: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const { name, course, size } = this.state

        if( isNaN(this.state.grade) ){
            this.setState({
                errorMessage: 'Not a Valid Class Size'
            })
            return
        }

        axios.post('http://localhost:8000/students/addteacher', {
            name: name,
            course_name: course,
            class_size: size
          })

          .then((response) => {
            console.log(response);

            this.setState({
                name: '',
                course: '',
                size: ''
            })

          })

          .catch(function (error) {
            console.log(error);
            return false
          });
 
    }

    render(){
        return (
            <div className="addTeacherContainer">
                <div className="addTeacherForm">
                    <h3>Add Item</h3>
                    <form>
                        <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handleCourseEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                        <input onChange={this.handleSizeEntry.bind(this)} name="class_size" placeholder="Class Size" type="text" value={this.state.size}/>
                        <button onClick={this.handleSubmit.bind(this)}>Add Teacher</button>
                        <p className="addTeacherErrorMessage">{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default AddTeacherForm