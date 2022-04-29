import {GET_USER_SESSION, SIGNIN, SIGNUP, SIGNOUT, UPDATE_SESSION} from "../../Actions/AuthActions";
const AuthReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USER_SESSION:
            return state = {...action.user}
        case UPDATE_SESSION:
            return state = {...state, ...action.user}
        case SIGNOUT:
            return state = {}
        case SIGNUP:
            return state = {...action.user}
        case SIGNIN:
            return state = {...action.user}
        default:
            return state
    }

}

export default AuthReducer;