import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL = 'https://ems-backend-1aad3a55bedc.herokuapp.com/api/departments';

export const getAllDepartments = () => {
    return axios.get(DEPARTMENT_REST_API_BASE_URL);
}

export const createDepartment = (department) => {
    return axios.post(DEPARTMENT_REST_API_BASE_URL, department);
}

export const getDepartmentByID = (departmentID) => {
    return axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentID);
}

export const updateDepartment = (departmentID, department) => {
    return axios.put(DEPARTMENT_REST_API_BASE_URL + '/' + departmentID, department)
}

export const deleteDepartment = (departmentID) => {
    return axios.delete(DEPARTMENT_REST_API_BASE_URL + '/' + departmentID);
}

axios({
    method: 'get',
    url: DEPARTMENT_REST_API_BASE_URL
})