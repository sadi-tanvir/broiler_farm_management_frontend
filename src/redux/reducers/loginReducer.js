import {
    SET_LOGIN_USER,
    LOGOUT_USER,
    SET_ADMIN,
    BUY_CHICKEN,
    DEATH_CHICKENS,
    BUY_FEED,
    FINISH_FEED,
    BUY_MEDICINE,
    OTHERS_COST,
    ALL_USER_DATA
} from '../actions/types'


const initialState = {
    user: {},
    buyChicken: {},
    deathChickens: [],
    buyFeed: [],
    finishFeed: [],
    buyMedicine: [],
    othersCost: [],
    isAuthenticated: false,
    isAdmin: false,
    users: []
}

const loginReducer = (state = initialState, action) => {
    if (action.type === SET_LOGIN_USER) {
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true
        }
    } else if (action.type === LOGOUT_USER) {
        return {
            ...state,
            user: {},
            buyChicken: {},
            deathChickens: [],
            buyFeed: [],
            finishFeed: [],
            buyMedicine: [],
            othersCost: [],
            isAuthenticated: false,
            isAdmin: false,
            users: []
        }
    } else if (action.type === SET_ADMIN) {
        return {
            ...state,
            isAdmin: true
        }
    } else if (action.type === BUY_CHICKEN) {
        return {
            ...state,
            buyChicken: action.payload
        }
    } else if (action.type === DEATH_CHICKENS) {
        return {
            ...state,
            deathChickens: action.payload
        }
    } else if (action.type === BUY_FEED) {
        return {
            ...state,
            buyFeed: action.payload
        }
    } else if (action.type === FINISH_FEED) {
        return {
            ...state,
            finishFeed: action.payload
        }
    } else if (action.type === BUY_MEDICINE) {
        return {
            ...state,
            buyMedicine: action.payload
        }
    } else if (action.type === OTHERS_COST) {
        return {
            ...state,
            othersCost: action.payload
        }
    } else if (action.type === ALL_USER_DATA) {
        return {
            ...state,
            users: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default loginReducer
