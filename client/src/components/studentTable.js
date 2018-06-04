import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList, editStudent } from '../components/actions'
import StudentRow from './studentRow'
import Header from '../components/header'
import AddStudentForm from '../components/addStudentForm'
import { Link } from 'react-router-dom'
import '../css/studentTable.css'
import '../css/mediaQueryStudent.css'
import EditStudentModal from '../components/editStudentModal'
import axios from 'axios'

class StudentTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            editModalIsActive: false,
            studentsArray: [], 
            modalProps: {
                id: '',
                name: '',
                grade: '',
                course_name: ''
            }
        }

        this.editClicked = this.editClicked.bind(this)
    }

    async componentDidMount(){
        await this.props.getStudentList();
        const { students } = this.props;

        this.setState({
            studentsArray: students
        })
    }

    toggleModal() {
        this.setState({
            editModalIsActive:!this.state.editModalIsActive,  
        })
    }

    async editClicked(id) {
        await this.props.getStudentList();
        const { students } = this.props

        let newModalProps = this.props.students.find( function(student){
            return student.id===id
        })

        await this.setState({
            modalProps: {
                id: newModalProps.id,
                name: newModalProps.name,
                grade: newModalProps.grade,
                course_name: newModalProps.course_name
            }
        })

        this.toggleModal();
    }

    async handleEdit(id, name, grade, course_name){
        await this.props.editStudent(id, name, grade, course_name)
        this.props.getStudentList()
    }

    render(){

        return(
            <React.Fragment>
            <div className="studentContainer">
                <Header studentArray={this.props}/>
                <table className="studentTable">
                    <tbody>
                        <tr className="studentColumnLabels">
                            <td>Student Name</td>
                            <td>Course</td>
                            <td>Grade</td>
                            <td>Operations</td>
                        </tr>
                        <StudentRow studentInfo={this.state.studentsArray} editClickHandler={this.editClicked}/>
                    </tbody>
                </table>
                <AddStudentForm/>
                <Link className="btn viewStudentsButton" to="/">Students</Link>
                <Link className="btn viewTeachersTab" to="/teacherTable">Teachers</Link>
            </div>
            <EditStudentModal className="studentsEditModal" handleEdit={this.handleEdit.bind(this)} studentInfo={this.state.modalProps} editIsOpen={this.state.editModalIsActive} toggleModal={this.toggleModal.bind(this)}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, { getStudentList, editStudent })(StudentTable)