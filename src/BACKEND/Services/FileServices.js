import axios from "axios";

const API_BASE = process.env.FR_APP_API_BASE || 'http://localhost:4000/fr/api';
const UPLOAD = `${API_BASE}/upload`

export const uploadFile = async (data) => {
    const res = await axios.post(UPLOAD, data)
    console.log(res.data)
    return res.data
}