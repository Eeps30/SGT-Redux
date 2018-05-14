import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList } from '../components/actions'

class Header extends Component {

    render(){
        let gradeTotal = 0
        let gradeAverage = 0
        const { students } = this.props
        
        students.map((item, index) => {
            gradeTotal += item.grade
        })

        gradeAverage = parseInt(gradeTotal/students.length)

        return (
            <div>
                <div className="headerTitle">
                    <h1 className="title">Student Grade Table</h1>
                </div>
                <div className="studentHeader">
                    <p>Grade Average: {gradeAverage} </p>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getStudentList})(Header);