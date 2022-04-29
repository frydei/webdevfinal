import * as auth_service from "../Services/AuthServices"

export const GET_USER_SESSION = "GET_USER_SESSION";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";


export const getUserSession = async (dispatch) => {
    const user = await auth_service.getCurrentUser()
    dispatch({
        type: GET_USER_SESSION,
        user: user
    })

}

export const updateSession = async (dispatch, new_user) => {
    const user = await auth_service.updateSession(new_user)
    dispatch({
        type: UPDATE_SESSION,
        user: new_user
    })

}

export const signUp = async (dispatch, new_user) => {
    const user = await auth_service.signUp(new_user)
    dispatch({
        type: SIGNUP,
        user: user
    })

}

export const signIn = async (dispatch, creds) => {
    const user = await auth_service.signIn(creds)
    dispatch({
        type: SIGNIN,
        user: user
    })

}

export const signOut = async (dispatch) => {
    const user = await auth_service.signOut()
    dispatch({
        type: SIGNOUT
    })

}
