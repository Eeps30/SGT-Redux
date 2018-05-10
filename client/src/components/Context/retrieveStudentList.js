import React from 'react'

export const retrieveStudentList = () => {
    axios.get('http://localhost:8000/students')
        .then(response => {
            console.log(response.data.data);
            this.setState({
                students: response.data.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const RetrieveStudentList = React.createContext({
    
})