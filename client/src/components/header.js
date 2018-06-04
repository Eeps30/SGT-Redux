import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList } from '../components/actions'

class Header extends Component {

    render(){
        this.props.getStudentList();

        let gradeTotal = 0
        let gradeAverage = 0
        const { students } = this.props
        
        students.map((item, index) => {
            gradeTotal += parseInt(item.grade)
        })

        gradeAverage = parseInt(gradeTotal/students.length)
        if(isNaN(gradeAverage)){
            gradeAverage = 0;
        }

        return (
            <React.Fragment>
                <div className="headerTitle">
                    <h1 className="studentTitle">Student Grade Table</h1>
                </div>
                <div className="studentGradeAverage">
                    <p>Grade Average: {gradeAverage} </p>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getStudentList})(Header);