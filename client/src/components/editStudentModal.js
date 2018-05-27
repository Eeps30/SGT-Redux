import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { editTeacher } from '../components/actions'

class EditStudentModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            name: '',
            grade: '',
            course_name: '',
            errorMessage: ''
        }
    }

    componentWillReceiveProps(){
        const { id, name, grade, course_name } = this.props.studentInfo
        this.setState({
            id,
            name,
            grade,
            course_name
        })
    }

    handleNameEntry(event){
        this.setState({
            name: event.target.value,
            errorMessage: ''
        })
    }

    handleCourseEntry(event){
        this.setState({
            course_name: event.target.value,
            errorMessage: ''
        })
    }

    handleGradeEntry(event){
        this.setState({
            grade: event.target.value,
            errorMessage: ''
        })
    }

    onEdit = (props) => {
        
        const { id, name, grade, course_name } = this.state

        if(name === ''){
            this.setState({
                errorMessage: 'Please Enter a Name'
            })
            return
        }

        if(course_name === ''){
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
                errorMessage: 'Size Must be between 0 and 100'
            })
            return
        }

        this.props.handleEdit(id, name, grade, course_name)
        this.props.toggleModal()
    }

    render(){

        return (
            <Modal className="teachersEditModal" isOpen={this.props.editIsOpen} onRequestClose={this.props.toggleModal}>
                <div className="teachersEditModalText">
                    <p>Enter New Values</p>
                    <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                    <input onChange={this.handleCourseEntry.bind(this)} name="course_name" placeholder="Course" type="text" value={this.state.course_name}/>
                    <input onChange={this.handleGradeEntry.bind(this)} name="grade" placeholder="Grade" type="text" value={this.state.grade}/>
                    <div className="editButtons">
                        <button onClick={this.props.toggleModal}>Cancel</button>
                        <button className="editConfirm" onClick={this.onEdit}>Confirm</button>
                    </div>
                    <h2 className="editTeacherErrorMessage">{this.state.errorMessage}</h2>
                </div>
            </Modal>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, { editTeacher })(EditStudentModal);