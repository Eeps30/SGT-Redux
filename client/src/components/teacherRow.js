import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeacherList, deleteTeacher, editTeacher } from '../components/actions'
import TeacherModal from '../components/teacherModal'
import TeacherEditModal from './teacherEditModal'

class TeacherRow extends Component {
    
    componentDidMount() {
        this.props.getTeacherList()
    }

    async handleDelete(id){
        await this.props.deleteTeacher(id)
        this.props.getTeacherList()
    }

    async handleEdit(id, name, course_name, grade){
        await this.props.editTeacher(id, name, course_name, grade)
        this.props.getTeacherList()
    }

    render(){

        const { students } = this.props
        console.log('Teacher Row Component: ', students)
        
        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.class_size}</td>
                    <div className="operationsButtonsTeachers">
                        <td><TeacherEditModal handleEdit={this.handleEdit.bind(this, item.id)}/></td>
                        <td><TeacherModal handleDelete={this.handleDelete.bind(this, item.id)}/></td>
                    </div>
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

export default connect(mapStateToProps, {getTeacherList, deleteTeacher, editTeacher})(TeacherRow);