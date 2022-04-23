import {
    GET_USERS,
    CREATE_USER,
    DELETE_USER,
    GET_USER_BY_ID,
    GET_USER_BY_PROFILE,
    UPDATE_USER
} from "../../Actions/UsersActions";

const UsersReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.users;
        case GET_USER_BY_PROFILE:
            return action.user;
        case GET_USER_BY_ID:
            return action.user;
        case UPDATE_USER:
            return state.map(user => user._id === action.user._id ? action.user : user);
        case CREATE_USER:
            return [action.user, ...state];
        case DELETE_USER:
            return state.filter(user => user._id !== action.user_id);
        default:
            return state;
    }
};

export default UsersReducer;