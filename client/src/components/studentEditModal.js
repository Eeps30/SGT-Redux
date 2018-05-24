import React, { Component } from 'react'
import Modal from 'react-modal'

class StudentEditModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            isActive: false,
            name: '',
            course: '',
            grade: '',
        }
    }

    componentWillMount(){
        Modal.setAppElement('body')
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

    toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
    }

    onEdit = (props) => {
        
        const { name, course, grade } = this.state

        this.props.handleEdit( name, course, grade )
        this.toggleModal()
    }

    render() {

        return (
            <section>
                <button onClick={this.toggleModal}>Edit</button>
                <Modal className="studentsModal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div className="studentModalText">
                        <p>Enter New Values</p>
                        <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handleCourseEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                        <input onChange={this.handleGradeEntry.bind(this)} name="grade" placeholder="Grade" type="text" value={this.state.grade}/>
                        <button onClick={this.toggleModal}>Cancel</button>
                        <button onClick={this.onEdit}>Confirm</button>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default StudentEditModal