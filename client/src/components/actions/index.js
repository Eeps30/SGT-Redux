import types from './types';
import axios from 'axios';

export function getStudentList(){
    const response = axios.get('http://localhost:8000/students')

    return {
        type: types.GET_STUDENT_LIST_DATA,
        payload: response
    }
}

export function getTeacherList(){
    const response = axios.get('http://localhost:8000/teachers')

    return {
        type: types.GET_TEACHER_LIST_DATA,
        payload: response
    }
}

export function deleteStudent(id){
    const response = axios.post('http://localhost:8000/students/delete', {
            id
        })

    return {
        type: types.DELETE_SINGLE_STUDENT,
        payload: response
    }
}

export function deleteTeacher(id){
    const response = axios.post('http://localhost:8000/teachers/delete', {
            id
        })

    return {
        type: types.DELETE_SINGLE_TEACHER,
        payload: response
    }
}