import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            gradeAverage: 0
        }
    }

    render(){
        return (
            <div>
                <div>Student Grade Table</div>
                <div>Grade Average: {this.state.gradeAverage}</div>
            </div>
        )
    }
}

export default Header