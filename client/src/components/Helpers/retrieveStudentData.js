import axios from 'axios';

export function retrieveStudentData() {
    axios.get('http://localhost:8000/students')
            .then(function (response) {
                console.log(response.data.data);
                return response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
}