import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getList } from '../components/actions'

class Header extends Component {

    render(){
        let gradeTotal = 0
        let gradeAverage = 0
        const { students } = this.props
        
        students.map((item, index) => {
            gradeTotal += item.grade
        })

        gradeAverage = gradeTotal/students.length

        return (
            <div>
                <p>Grade Average: {gradeAverage} </p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getList})(Header);