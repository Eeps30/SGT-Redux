import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList, deleteStudent } from '../components/actions'
import StudentModal from './studentModal';


class StudentRow extends Component {
    
    componentDidMount() {
        this.props.getStudentList()
    }

    handleDelete(id){
        this.props.deleteStudent(id)
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

export default connect(mapStateToProps, {getStudentList, deleteStudent})(StudentRow);