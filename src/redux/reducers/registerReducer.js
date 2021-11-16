import {
    REGISTER_ERROR,
    REGISTER_ERROR_CLEAR,
    REGISTER_RESPONSE
} from "../actions/types"


const initialState = {
    error: {},
    success: {}
}


const registerReducer = (state = initialState, action) => {
    if (action.type === REGISTER_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    } else if (action.type === REGISTER_ERROR_CLEAR) {
        return {
            ...state,
            error: {}
        }
    } else if (action.type === REGISTER_RESPONSE) {
        return {
            ...state,
            success: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default registerReducer
