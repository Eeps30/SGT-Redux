import React, { Component } from 'react';

class AddStudentForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            course: '',
            grade: ''
        }
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

    handleSubmit(){
        this.preventDefault();

        //axios call here
    }

    render(){
        return (
            <div>
                <h3>Add Item</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleNameEntry.bind(this)} name="name" type="text"/>
                    <input onChange={this.handleCourseEntry.bind(this)} name="course" type="text"/>
                    <input onChange={this.handleGradeEntry.bind(this)} name="grade" type="text"/>
                    <button>Add Student</button>
                </form>
            </div>
        )
    }
    
}

export default AddStudentForm