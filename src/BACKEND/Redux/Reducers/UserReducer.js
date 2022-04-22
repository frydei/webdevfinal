import user from "../../../Data/user.json"

const UserReducer = (state = user, action) => {
    switch(action.type) {
        default:
            return user;
    }
}

export default UserReducer;