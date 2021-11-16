import {
    FEED_FINISH_UPDATE_ID,
    FEED_FINISH_UPDATE_ID_2,
    FEED_FINISH_UPDATE_NAME,
    FEED_FINISH_UPDATE_CATEGORY,
    FEED_FINISH_UPDATE_BAG,
    FEED_FINISH_UPDATE_DATE

} from "../actions/types"




const initialState = {
    _id: "",
    id2: "",
    name: "",
    category: "",
    bag: "",
    date: ""
}

const feedFinishReducer = (state = initialState, action) => {
    if (action.type === FEED_FINISH_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === FEED_FINISH_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === FEED_FINISH_UPDATE_NAME) {
        return {
            ...state,
            name: action.payload
        }
    }
    else if (action.type === FEED_FINISH_UPDATE_CATEGORY) {
        return {
            ...state,
            category: action.payload
        }
    }
    else if (action.type === FEED_FINISH_UPDATE_BAG) {
        return {
            ...state,
            bag: action.payload
        }
    }
    else if (action.type === FEED_FINISH_UPDATE_DATE) {
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

export default feedFinishReducer
