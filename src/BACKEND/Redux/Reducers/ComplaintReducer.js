import {GET_COMPLAINTS, GET_COMPLAINT_BY_ID, CREATE_COMPLAINT, DELETE_COMPLAINT, UPDATE_COMPLAINT} from "../../Actions/ComplaintsAction"

const ComplaintReducer = (state = [], action) => {
    switch(action.type) {
        case GET_COMPLAINTS:
            return state =[...action.complaints];
        case GET_COMPLAINT_BY_ID:
            return action.complaint;
        case UPDATE_COMPLAINT:
            return state.map(c => c._id === action.complaint._id ? action.complaint : c);
        case CREATE_COMPLAINT:
            return [action.complaint, ...state];
        case DELETE_COMPLAINT:
            return state.filter(c => c._id !== action.complaint_id);
        default:
            return state;
    }

}

export default ComplaintReducer;