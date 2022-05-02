import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/fr/api';
const AUTH = `${API_BASE}/users/auth`;

const api = axios.create({
    withCredentials: true
})

export const signIn = async (user) => {
    //console.log(user)
    const res = await api.post(`${AUTH}/signin`, user)
    return res.data
    //console.log(res.data)
}

export const signInWithGoogle = async (idToken) => {
    console.log("idToken: ")
    console.log(idToken)
    const res = await api.post(`${AUTH}/googleLogIn`, idToken)
    return res.data
}

export const updateSession = async (user) => {
    //console.log(user)
    const res = await api.post(`${AUTH}/update`, user)
    return res.data
    //console.log(res.data)
}

export const signUp = async (user) => {
    const res = await api.post(`${AUTH}/signup`, user)

    return res.data

}

export const signOut = async () => {
    const res = await api.post(`${AUTH}/signout`)
    return res.data

}

export const getCurrentUser = async () => {
    const res = await api.post(`${AUTH}/user`)
    return res.data

}

