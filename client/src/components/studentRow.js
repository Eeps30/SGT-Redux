import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getList, deleteItem } from '../components/actions'

class StudentRow extends Component {
    
    componentDidMount() {
        this.props.getList()
    }

    handleDelete(id){
        this.props.deleteItem(id)
    }

    render(){

        console.log('Student List', this.props)
        const { students } = this.props
        
        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course_name}</td>
                    <td>{item.grade}</td>
                    <td><button onClick={this.handleDelete.bind(this, item.id)}>Delete</button></td>
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

export default connect(mapStateToProps, {getList, deleteItem})(StudentRow);