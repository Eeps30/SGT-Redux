import React, { Component } from 'react'
import { GradeAverage, gradeAverage } from './Context/gradeAverage'

class Header extends Component {

    render(){
        return (
            <GradeAverage.Consumer>
                {average => (
                    <div>
                        <div>Student Grade Table</div>
                        <div>Grade Average: {gradeAverage.average}</div>
                    </div>
                )}
            </GradeAverage.Consumer>
        )
    }
}

export default Header