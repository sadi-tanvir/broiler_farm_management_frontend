import {
    MEDICINE_UPDATE_ID,
    MEDICINE_UPDATE_ID_2,
    MEDICINE_UPDATE_NAME,
    MEDICINE_UPDATE_QUANTITY,
    MEDICINE_UPDATE_COMPANY,
    MEDICINE_UPDATE_GROUP,
    MEDICINE_UPDATE_PRICE,
    MEDICINE_UPDATE_DATE,
} from "../actions/types"




const initialState = {
    _id: "",
    id2: "",
    name: "",
    quantity: "",
    company: "",
    group: "",
    price: "",
    date: "",
}

const medicineReducer = (state = initialState, action) => {
    if (action.type === MEDICINE_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_NAME) {
        return {
            ...state,
            name: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_QUANTITY) {
        return {
            ...state,
            quantity: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_COMPANY) {
        return {
            ...state,
            company: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_GROUP) {
        return {
            ...state,
            group: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_PRICE) {
        return {
            ...state,
            price: action.payload
        }
    }
    else if (action.type === MEDICINE_UPDATE_DATE) {
        return {
            ...state,
            date: action.payload
        }
    }

    else {
        return {
            ...state
        }
    }
}

export default medicineReducer
