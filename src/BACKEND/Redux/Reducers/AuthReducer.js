import {GET_USER_SESSION, SIGNIN, SIGNUP, SIGNOUT, UPDATE_SESSION} from "../../Actions/AuthActions";
const AuthReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USER_SESSION:
            return {...action.user}
        case UPDATE_SESSION:
            return {...state, ...action.user}
        case SIGNOUT:
            return {}
        case SIGNUP:
            return {...action.user}
        case SIGNIN:
            return {...action.user}
        default:
            return state
    }

}

export default AuthReducer;