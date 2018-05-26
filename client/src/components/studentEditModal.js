import React, { Component } from 'react'
import Modal from 'react-modal'
import { getSelectedStudentData } from '../components/actions'
import { connect } from 'react-redux'

class StudentEditModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            isActive: false,
            name: '',
            course: '',
            grade: '',
            errorMessage: ''
        }
    }

    componentWillMount(){
        Modal.setAppElement('body')

        const name = this.props.studentName
        const course = this.props.studentCourse
        const grade = this.props.studentGrade

        this.setState({
            name: name,
            course: course,
            grade: grade
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
            course: event.target.value,
            errorMessage: ''
        })
    }

    handleGradeEntry(event){
        this.setState({
            grade: event.target.value,
            errorMessage: ''
        })
    }

    toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
    }

    onEdit = (props) => {
        
        const { name, course, grade } = this.state

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
                errorMessage: 'Grade must be between 0 and 100'
            })
            return
        }

        this.props.handleEdit( name, course, grade )
        this.toggleModal()
    }

    render() {

        return (
            <section>
                <button className="editButtonModal" onClick={this.toggleModal}>Edit</button>
                <Modal className="studentsEditModal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div className="studentEditModalText">
                        <p>Enter New Values</p>
                        <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handleCourseEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                        <input onChange={this.handleGradeEntry.bind(this)} name="grade" placeholder="Grade" type="text" value={this.state.grade}/>
                        <div className="editButtons">
                            <button className="editCancel" onClick={this.toggleModal}>Cancel</button>
                            <button className="editConfirm" onClick={this.onEdit}>Confirm</button>
                        </div>
                        <h2 className="editStudentErrorMessage">{this.state.errorMessage}</h2>
                    </div>
                </Modal>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getSelectedStudentData})(StudentEditModal);