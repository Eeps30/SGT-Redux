import React, { Component } from 'react'
import Modal from 'react-modal'

class EditModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            course_name: '',
            class_size: '',
            errorMessage: ''
        }
    }

    componentWillReceiveProps(){
        const {name, course_name, class_size } = this.props.teacherInfo
        this.setState({
            name, 
            course_name, 
            class_size
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

    handleSizeEntry(event){
        this.setState({
            class_size: event.target.value,
            errorMessage: ''
        })
    }

    render(){

        return (
            <Modal className="teachersEditModal" isOpen={this.props.editIsOpen} onRequestClose={this.props.toggleModal}>
                <div className="teachersEditModalText">
                    <p>Enter New Values</p>
                    <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                    <input onChange={this.handleCourseEntry.bind(this)} name="course_name" placeholder="Course" type="text" value={this.state.course_name}/>
                    <input onChange={this.handleSizeEntry.bind(this)} name="class_size" placeholder="Class Size" type="text" value={this.state.class_size}/>
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

export default EditModal