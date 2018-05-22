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

    render() {
        return (
            <section>
                <button className="teacherDeleteButton" onClick={this.toggleModal}>Delete</button>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    Hello From the Modal
                    <button onClick={this.toggleModal}>Hide Modal</button>
                </Modal>
            </section>
        )
    }
}

export default TeacherModal