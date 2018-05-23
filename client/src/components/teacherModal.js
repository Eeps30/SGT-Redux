import React, { Component } from 'react'
import Modal from 'react-modal'

class TeacherModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            isActive: false
        }
    }

    componentWillMount(){
        Modal.setAppElement('body')
    }

    toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
    }

    onDelete = (props) => {
        this.props.handleDelete()
        this.toggleModal()
    }

    render() {
        return (
            <section>
                <button className="teacherDeleteButton" onClick={this.toggleModal}>Delete</button>
                <Modal className="teachersModal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                        <p className="teacherModalText">Are you sure you want to delete this teacher?</p>
                        <button className="modalTeacherCancel" onClick={this.toggleModal}>Cancel</button>
                        <button className="modalDeleteTeacher" onClick={this.onDelete}>Confirm Delete</button>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default TeacherModal