import {
    CHICKS_UPDATE_ID,
    CHICKS_UPDATE_ID_2,
    CHICKS_UPDATE_COMPANY,
    CHICKS_UPDATE_QUANTITY,
    CHICKS_UPDATE_PRICE,
    CHICKS_UPDATE_DATE,
    CHICKS_UPDATE_SALES
} from "../actions/types"


const initialState = {
    _id: "",
    id2: "",
    company: "",
    quantity: "",
    price: "",
    date: "",
    salesDate: "",
}

const chicksReducer = (state = initialState, action) => {
    if (action.type === CHICKS_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_COMPANY) {
        return {
            ...state,
            company: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_QUANTITY) {
        return {
            ...state,
            quantity: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_PRICE) {
        return {
            ...state,
            price: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_DATE) {
        return {
            ...state,
            date: action.payload
        }
    }
    else if (action.type === CHICKS_UPDATE_SALES) {
        return {
            ...state,
            salesDate: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default chicksReducer
