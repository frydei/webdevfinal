import users from "../../../Data/users.json"

const UsersReducer = (state = users, action) => {
    switch(action.type) {
        default:
            return users;
    }
}

export default UsersReducer;