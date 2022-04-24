import * as users_services from "../Services/UsersServices";

export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_USER_BY_USERNAME = "GET_USER_BY_USERNAME";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const getUsers = async (dispatch) => {
    const users = await users_services.getUsers();
    dispatch({
        type: GET_USERS,
        users: users
    });
};

export const getUserById = async (dispatch, user_id) => {
    const user = await users_services.getUserById(user_id);
    dispatch({
        type: GET_USER_BY_ID,
        user: user
    });
    return user
};

export const getUserByUsername = async (dispatch, username) => {
    const user = await users_services.getUserByUsername(username);
    dispatch({
        type: GET_USER_BY_USERNAME,
        user: user
    });
    return user
};


export const createUser = async (dispatch, new_user) => {
    const user = await users_services.createUser(new_user);
    dispatch({
        type: CREATE_USER,
        user: user
    });
};

export const updateUser = async (dispatch, user) => {
    const status = await users_services.updateUser(user);
    dispatch({
        type: UPDATE_USER,
        user: user
    });
};

export const deleteUser = async (dispatch, user_id) => {
    const res = await users_services.deleteUser(user_id);
    dispatch({
        type: DELETE_USER,
        user_id
    });
};
