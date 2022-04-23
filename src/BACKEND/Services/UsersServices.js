import axios from "axios";

const API_BASE = process.env.FR_APP_API_BASE || 'http://localhost:4000/fr/api';
const USERS = `${API_BASE}/users`

export const getUsers = async () => {
    const res = await axios.get(USERS)
    console.log(USERS)
    return res.data;
}

export const getUserById = async (user_id) => {
    const res = await axios.get(`${USERS}/${user_id}`)
    return res.data;
}

export const getUserByProfile = async (profile) => {
    const res = await axios.get(`${USERS}/profile/${profile}`)
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

export const updateUser = async (user) => {
    const res = await axios.put(`${USERS}/${user._id}`, user)
    return res.data;
}

