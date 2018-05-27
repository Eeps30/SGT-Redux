import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeacherList, deleteTeacher, editTeacher } from '../components/actions'
import TeacherModal from '../components/teacherModal'

class TeacherRow extends Component {
    
    async componentDidMount() {
        await this.props.getTeacherList()
    }

    async handleDelete(id){
        await this.props.deleteTeacher(id)
        this.props.getTeacherList()
    }

    async handleEdit(id, name, course_name, grade){
        await this.props.editTeacher(id, name, course_name, grade)
        this.props.getTeacherList()
    }

    editClicked = (id) => {
        this.props.editClickHandler(id);
    }

    render(){

        const { teachers } = this.props
        
        const itemElements = teachers.map((item, index) => {
            
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.class_size}</td>
                    <button className="editButtonModal" onClick={this.editClicked.bind(this, item.id)}>Edit</button>
                    <td><TeacherModal handleDelete={this.handleDelete.bind(this, item.id)}/></td>
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
        teachers: state.list.items
    }
}

export default connect(mapStateToProps, {getTeacherList, deleteTeacher, editTeacher})(TeacherRow);