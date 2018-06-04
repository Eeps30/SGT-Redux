import types from './types';
import axios from 'axios';

export function getStudentList(){
    const response = axios.get('http://localhost:8080/lfz/sgt-react/client/src/assets/php/getStudentsList.php')

    return {
        type: types.GET_STUDENT_LIST_DATA,
        payload: response
    }
}

export function getSelectedStudentData(id){
    const response = axios.get('http://localhost:8000/selectedStudent',{
        id
    })

    return {
        type: types.GET_SELECTED_STUDENT_DATA,
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
    const response = axios.post('http://localhost:8080/lfz/sgt-react/client/src/assets/php/deleteStudent.php', {
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

export function editStudent(id, name, grade, course_name){
    const response = axios.post('http://localhost:8000/students/edit', {
        id, name, grade, course_name
    })

    return {
        type: types.EDIT_SINGLE_STUDENT,
        payload: response
    }
}

export function editTeacher(id, name, course_name, class_size){
    const response = axios.post('http://localhost:8000/teachers/edit', {
        id, name, course_name, class_size
    })

    return {
        type: types.EDIT_SINGLE_TEACHER,
        payload: response
    }
}