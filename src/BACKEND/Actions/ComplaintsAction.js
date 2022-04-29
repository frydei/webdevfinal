import axios from "axios";
import * as complaint_services from "../Services/ComplaintsServices"

export const GET_COMPLAINTS = "GET_COMPLAINTS";
export const GET_COMPLAINT_BY_ID = "GET_COMPLAINT_BY_ID";
export const CREATE_COMPLAINT = "CREATE_COMPLAINT";
export const DELETE_COMPLAINT= "DELETE_COMPLAINT";
export const UPDATE_COMPLAINT = "UPDATE_COMPLAINT";

export const getComplaints = async (dispatch) => {
    const complaints = await complaint_services.getComplaints()
   dispatch({
       type: GET_COMPLAINTS,
       complaints: complaints
   })
}

export const getComplaintById = async (dispatch, complaint_id) => {
    const complaint = await complaint_services.getComplaintById(complaint_id)
    dispatch({
        type: GET_COMPLAINT_BY_ID,
        complaint: complaint
    })
}

export const createComplaint = async (dispatch, new_complaint) => {
    const complaint = await complaint_services.createComplaint(new_complaint)
    dispatch({
        type: CREATE_COMPLAINT,
        complaint: complaint
    })
}

export const deleteComplaint = async (dispatch, complaint_id) => {
    const status = await complaint_services.deleteComplaint(complaint_id)
    dispatch({
        type: DELETE_COMPLAINT,
        complaint_id: complaint_id
    })
}

export const updateComplaint = async (dispatch, complaint) => {
    const status = await complaint_services.updateComplaint(complaint)
    dispatch({
        type: UPDATE_COMPLAINT,
        complaint: complaint
    })
}

