import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeacherList, deleteTeacher, editTeacher } from '../components/actions'
import TeacherModal from '../components/teacherModal'
import EditModal from '../components/editModal'
// import TeacherEditModal from './teacherEditModal'

class TeacherRow extends Component {
    constructor(props){
        super(props)

        this.state = {
            editModalIsActive: false,
        }
    }
    
    async componentDidMount() {
        await this.props.getTeacherList()
        console.log('Teachers List', this.props.teachers)

    }

    async handleDelete(id){
        await this.props.deleteTeacher(id)
        this.props.getTeacherList()
    }

    async handleEdit(id, name, course_name, grade){
        await this.props.editTeacher(id, name, course_name, grade)
        this.props.getTeacherList()
    }

    toggleModal() {
        this.setState({
            editModalIsActive:!this.state.editModalIsActive,  
        })
    }

    render(){
        //1. click teacher tab, rows render => 2. call get teacher info, editmodals render => 3. render modal on a state change
        const { teachers } = this.props
        
        const itemElements = teachers.map((item, index) => {
            
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.class_size}</td>
                    
                    <EditModal className="teachersEditModal" teacherInfo={item} isOpen={this.state.editModalIsActive} onRequestClose={this.toggleModal}/>

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