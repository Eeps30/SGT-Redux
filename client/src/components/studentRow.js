import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList, deleteStudent, editStudent } from '../components/actions'
import StudentModal from './studentModal'
import StudentEditModal from './studentEditModal'


class StudentRow extends Component {
    
    componentDidMount() {
        this.props.getStudentList()
    }

    async handleDelete(id){
        await this.props.deleteStudent(id)
        this.props.getStudentList()
    }

    async handleEdit(id, name, course_name, grade){
        await this.props.editStudent(id, name, course_name, grade)
        this.props.getStudentList()
    }

    render(){

        const { students } = this.props
        
        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.grade}</td>
                    <td><StudentEditModal handleEdit={this.handleEdit.bind(this, item.id)}/></td>
                    <td><StudentModal handleDelete={this.handleDelete.bind(this, item.id)}/></td>
                </tr>
            )

        });
        
        return (
           itemElements
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getStudentList, deleteStudent, editStudent})(StudentRow);