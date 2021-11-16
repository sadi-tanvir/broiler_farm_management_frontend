import {
    LOGIN_REQUEST,
    SET_LOGIN_USER,
    LOGIN_RESPONSE,
    LOGIN_ERROR,
    LOGIN_ERROR_CLEAR
} from "./types"

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const setLoginUser = (payload) => {
    return {
        type: SET_LOGIN_USER,
        payload
    }
}

export const loginResponse = (payload) => {
    return {
        type: LOGIN_RESPONSE,
        payload
    }
}

export const loginError = (payload) => {
    return {
        type: LOGIN_ERROR,
        payload
    }
}

export const loginErrorClear = () => {
    return {
        type: LOGIN_ERROR_CLEAR
    }
}
