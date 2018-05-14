import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeacherList, deleteTeacher } from '../components/actions'

class TeacherRow extends Component {
    
    componentDidMount() {
        this.props.getTeacherList()
    }

    handleDelete(id){
        this.props.deleteTeacher(id)
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
                    <td><button onClick={this.handleDelete.bind(this, item.id)}>Delete</button></td>
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

export default connect(mapStateToProps, {getTeacherList, deleteTeacher})(TeacherRow);