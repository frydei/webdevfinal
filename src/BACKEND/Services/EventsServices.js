import axios from "axios";

const API_BASE = process.env.FR_APP_API_BASE || 'http://localhost:4000/fr/api';
const EVENTS = `${API_BASE}/events`

export const getEvents = async () => {
    const res = await axios.get(EVENTS)
    //console.log(res.data)
    return res.data;
}

export const getEventsById = async (event_id) => {
    const res = await axios.get(`${EVENTS}/${event_id}`)
    return res.data;
}

export const createEvent = async (event) => {
    const res = await axios.post(EVENTS, event)
    return res.data;
}

export const deleteEvent = async (event_id) => {
    const res = await axios.delete(`${EVENTS}/${event_id}`)
    return res.data;
}

export const updateEvent = async (event) => {
    const res = await axios.put(`${EVENTS}/${event._id}`, event)
    return res.data;
}

