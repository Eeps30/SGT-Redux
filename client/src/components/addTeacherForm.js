import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { getTeacherList } from '../components/actions'

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

    clearField(){
        this.setState({
            name: '',
            course: '', 
            size: '',
            errorMessage: ''
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const { name, course, size } = this.state

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

        if(size === ''){
            this.setState({
                errorMessage: 'Please Enter a Class Size'
            })
            return
        }

        if( isNaN(size) ){
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
            
            this.props.getTeacherList()

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
                        <div className="addTeacherFormButtons">
                            <button className="addTeacherButton" onClick={this.handleSubmit.bind(this)}>Add</button>
                            <button className="cancelTeacherButton" onClick={this.clearField.bind(this)}>Cancel</button>
                        </div>
                        <p className="addTeacherErrorMessage">{this.state.errorMessage}</p>
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

export default connect(mapStateToProps, {getTeacherList})(AddTeacherForm);