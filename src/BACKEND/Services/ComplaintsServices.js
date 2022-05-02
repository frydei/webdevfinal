import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/fr/api';
const COMPLAINTS = `${API_BASE}/complaints`

export const getComplaints = async () => {
    const res = await axios.get(COMPLAINTS)
    return res.data;
}

export const getComplaintById = async (complaint_id) => {
    const res = await axios.get(`${COMPLAINTS}/${complaint_id}`)
    return res.data;
}

export const createComplaint = async (complaint) => {
    const res = await axios.post(COMPLAINTS, complaint)
    return res.data;
}

export const deleteComplaint = async (complaint_id) => {
    const res = await axios.delete(`${COMPLAINTS}/${complaint_id}`)
    return res.data;
}

export const updateComplaint = async (complaint) => {
    const res = await axios.put(`${COMPLAINTS}/${complaint._id}`, complaint)
    return res.data;
}

