import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/fr/api';
const USERS = `${API_BASE}/users`

export const getUsers = async () => {
    const res = await axios.get(USERS)
    return res.data;
}

export const getUserById = async (user_id) => {
    const res = await axios.get(`${USERS}/${user_id}`)
    return res.data;
}


export const getUserByUsername = async (username) => {
    const res = await axios.get(`${USERS}/username/${username}`)
    return res.data;
}

export const getUserByEmail  = async (email) => {
    const res = await axios.get(`${USERS}/email/${email}`)
    return res.data;
}

export const getUserByCredentials = async (username, password) => {
    const creds = {
        username: username,
        password: password
    }
    const res = await axios.post(`${USERS}/credentials`, creds)
    return res.data;
}


export const createUser = async (user) => {
    const res = await axios.post(USERS, user)
    return res.data;
}

export const deleteUser = async (user_id) => {
    const res = await axios.delete(`${USERS}/${user_id}`)
    return res.data;
}

export const deleteUserByUsername = async (username) => {
    const res = await axios.delete(`${USERS}/delete/${username}`)
    return res.data;
}

export const updateUser = async (user) => {
    const res = await axios.put(`${USERS}/${user._id}`, user)
    return res.data;
}



