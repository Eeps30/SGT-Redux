import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTeacherList, editTeacher } from '../components/actions'
import AddTeacherForm from '../components/addTeacherForm'
import TeacherRow from './teacherRow'
import TeacherHeader from '../components/teacherHeader'
import EditTeacherModal from '../components/editTeacherModal'
import '../css/teacherTable.css'
import '../css/mediaQueryTeachers.css'

class TeacherTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            editModalIsActive: false,
            teachersArray: [], 
            modalProps: {
                name: '',
                course_name: '',
                class_size: '',
                id: ''
            }
        }

        this.editClicked = this.editClicked.bind(this)
    }

    async componentDidMount() {
        await this.props.getTeacherList()
        const { teachers } = this.props
        this.setState({
            teachersArray: teachers
        })
    }

    toggleModal() {
        this.setState({
            editModalIsActive:!this.state.editModalIsActive,  
        })
    }

    async editClicked(id) {
        let newModalProps = this.state.teachersArray.find( function(teacher){
            return teacher.id===id
        })

        await this.setState({
            modalProps: {
                name: newModalProps.name,
                course_name: newModalProps.course_name,
                class_size: newModalProps.class_size,
                id: newModalProps.id
            }
        })

        this.toggleModal();
    }

    async handleEdit(id, name, course_name, class_size){
        await this.props.editTeacher(id, name, course_name, class_size)
        this.props.getTeacherList()
    }

    render(){

        const { id } = this.state.modalProps

        return(
            <React.Fragment>
            <div className="teacherContainer">
                <TeacherHeader/>
                <table className="teacherTable">
                    <tbody>
                        <tr className="teacherColumnLabels">
                            <td>Teacher Name</td>
                            <td>Course</td>
                            <td>Class Size</td>
                            <td>Operations</td>
                        </tr>
                        <TeacherRow editClickHandler={this.editClicked}/>
                    </tbody>
                </table>
                <AddTeacherForm/>
                <Link className="btn viewStudentsButton" to="/">Students</Link>
                <Link className="btn viewTeachersTab" to="/teacherTable">Teachers</Link>
            </div>
            <EditTeacherModal className="teachersEditModal" handleEdit={this.handleEdit.bind(this)} teacherInfo={this.state.modalProps} editIsOpen={this.state.editModalIsActive} toggleModal={this.toggleModal.bind(this)}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        teachers: state.list.items
    }
}

export default connect(mapStateToProps, { getTeacherList, editTeacher })(TeacherTable)


    //1. have here a state with the teachers array
    //2. render an edit button for each row, each with an id matching the teacher in the array
    //3. when edit button is clicked, it renders the modal and passes in the props it needs
    //4. that modal contains the function from redux that will pass the new edited information to the db