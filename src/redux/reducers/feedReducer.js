import {
    FEED_UPDATE_ID,
    FEED_UPDATE_ID_2,
    FEED_UPDATE_NAME,
    FEED_UPDATE_DESCRIPTION,
    FEED_UPDATE_CATEGORY,
    FEED_UPDATE_BAG,
    FEED_UPDATE_PRICE,
    FEED_UPDATE_DATE
} from "../actions/types"




const initialState = {
    _id: "",
    id2: "",
    name: "",
    description: "",
    category: "",
    bag: "",
    price: "",
    date: "",
}

const feedReducer = (state = initialState, action) => {
    if (action.type === FEED_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_NAME) {
        return {
            ...state,
            name: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_DESCRIPTION) {
        return {
            ...state,
            description: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_CATEGORY) {
        return {
            ...state,
            category: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_BAG) {
        return {
            ...state,
            bag: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_PRICE) {
        return {
            ...state,
            price: action.payload
        }
    }
    else if (action.type === FEED_UPDATE_DATE) {
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

export default feedReducer
