import {
    SALES_SUMMARY_UPDATE_ID,
    SALES_SUMMARY_UPDATE_ID_2,
    SALES_SUMMARY_UPDATE_CUSTOMER,
    SALES_SUMMARY_UPDATE_DESCRIPTION,
    SALES_SUMMARY_UPDATE_PCS,
    SALES_SUMMARY_UPDATE_KG,
    SALES_SUMMARY_UPDATE_PRICE,
    SALES_SUMMARY_UPDATE_DATE
} from "../actions/types"




const initialState = {
    _id: "",
    id2: "",
    customer: "",
    description: "",
    pcs: "",
    kg: "",
    price: "",
    date: ""
}

const salesSummaryReducer = (state = initialState, action) => {
    if (action.type === SALES_SUMMARY_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_CUSTOMER) {
        return {
            ...state,
            customer: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_DESCRIPTION) {
        return {
            ...state,
            description: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_PCS) {
        return {
            ...state,
            pcs: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_KG) {
        return {
            ...state,
            kg: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_PRICE) {
        return {
            ...state,
            price: action.payload
        }
    }
    else if (action.type === SALES_SUMMARY_UPDATE_DATE) {
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

export default salesSummaryReducer
