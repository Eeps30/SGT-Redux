import React, { Component } from 'react'
import Modal from 'react-modal'

class StudentModal extends Component {
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
                <button className="studentDeleteButton" onClick={this.toggleModal}>Delete</button>
                <Modal className="studentsModal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div className="modalText">
                        <p>Are you sure you want to delete this student?</p>
                        <button onClick={this.onDelete}>Confirm Delete</button>
                        <button onClick={this.toggleModal}>Cancel</button>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default StudentModal