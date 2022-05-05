import {getCurrentUser} from "../../Services/AuthServices";

let init = localStorage.getItem("user_logged_in") ? JSON.parse(localStorage.getItem("CURRENT_USER")) : {}


const UserReducer = (state = init, action) => {
    switch(action.type) {
        case "GET_CURRENT_USER":
            return state;
        case "LOG_OUT":
            return state = {};
        case "UPDATE_CURRENT_USER":
            return {...state, ...action.user}
        default:
            return state
    }

}
export default UserReducer;