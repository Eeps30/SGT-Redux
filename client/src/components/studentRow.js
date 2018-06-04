import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList, deleteStudent, editStudent, getSelectedStudentData } from '../components/actions'
import StudentModal from './studentModal'
import axios from 'axios'


class StudentRow extends Component {
    
    async componentDidMount() {
        console.log(this.props.studentInfo);
    }

    async handleDelete(id){
        const url = 'http://localhost:8080/lfz/sgt-react/client/src/assets/php/deleteStudent.php'
        const params = {
            id
        }
        
        await axios({
            url: url,
            method: 'post',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resp => {            
            console.log('Axios response: ', resp)
        }).catch(err => {
            console.log('Error is: ', err);                
        }
    );
        this.props.getStudentList()
    }

    editClicked = (id) => {
        this.props.editClickHandler(id);
    }

    render(){

        const students = this.props.studentInfo

        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.grade}</td>
                    <button className="editButtonModal" onClick={this.editClicked.bind(this, item.id)}>Edit</button>
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

export default connect(mapStateToProps, {getStudentList, deleteStudent, editStudent, getSelectedStudentData})(StudentRow);