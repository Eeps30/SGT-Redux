import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { getStudentList } from '../components/actions'

class AddStudentForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            course: '',
            grade: '',
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

    handleGradeEntry(event){
        this.setState({
            errorMessage: '',
            grade: event.target.value
        })
    }

    clearField(event){
        event.preventDefault();
        this.setState({
            name: '',
            course: '', 
            grade: '',
            errorMessage: ''
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const { name, grade, course } = this.state

        if(name === ''){
            this.setState({
                errorMessage: 'Please Enter a Name'
            })
            return
        }

        if(course === ''){
            this.setState({
                errorMessage: 'Please Enter a Course'
            })
            return
        }

        if(grade === ''){
            this.setState({
                errorMessage: 'Please Enter a Grade'
            })
            return
        }
        

        if( isNaN(grade) || grade > 100 ){
            this.setState({
                errorMessage: 'Grade Must be between 0 and 100'
            })
            return
        }

        axios.post('http://localhost:8000/students/addstudent', {
            name: name,
            grade: grade,
            course_name: course
          })

          .then((response) => {
            
            this.props.getStudentList()

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
            <div className="addStudentContainer">
                <div className="addStudentForm">
                    <h3>Add Item</h3>
                    <form>
                        <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handleCourseEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                        <input onChange={this.handleGradeEntry.bind(this)} name="grade" placeholder="Grade" type="text" value={this.state.grade}/>
                        <div className="addStudentFormButtons">
                            <button className="addStudentButton" onClick={this.handleSubmit.bind(this)}>Add</button>
                            <button className="cancelStudentButton" onClick={this.clearField.bind(this)}>Cancel</button>
                        </div>
                        <p className="addStudentErrorMessage">{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getStudentList})(AddStudentForm);