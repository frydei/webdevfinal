const UserReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_USER":
            return state;
        case "UPDATE_USER":
            return {...state, ...action.user}
        default:
            return state
    }

}
export default UserReducer;