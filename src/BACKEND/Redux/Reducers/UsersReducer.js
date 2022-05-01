import {
    GET_USERS,
    CREATE_USER,
    DELETE_USER,
    GET_USER_BY_ID,
    UPDATE_USER,
    GET_USER_BY_USERNAME,
    GET_USER_BY_EMAIL,
    GET_USER_BY_CREDS,
    UPDATE_PROFILE
} from "../../Actions/UsersActions";

const UsersReducer = (state =  [], action) => {
    switch (action.type) {
        case GET_USERS:
            return state = [...action.users];
        case GET_USER_BY_USERNAME:
            return action.user;
        case GET_USER_BY_ID:
            return action.user;
        case GET_USER_BY_EMAIL:
            return action.user;
        case GET_USER_BY_CREDS:
            return action.user;
        case UPDATE_USER:
            console.log(state)
            return state.map(user => user._id === action.user._id ? action.user : user);
        case CREATE_USER:
            return [action.user, ...state];
        case DELETE_USER:
            return state.filter(user => user._id !== action.user_id);
        case UPDATE_PROFILE:
            // console.log(state)
            return { ...state, ...action.profileData }
        default:
            return state;
    }
};

export default UsersReducer;