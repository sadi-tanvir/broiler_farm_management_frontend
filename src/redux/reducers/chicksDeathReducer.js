import {
    CHICKS_DEATH_UPDATE_ID,
    CHICKS_DEATH_UPDATE_ID_2,
    CHICKS_DEATH_UPDATE_REASON,
    CHICKS_DEATH_UPDATE_DATE,
    CHICKS_DEATH_UPDATE_TIME,
    CHICKS_DEATH_UPDATE_DEATH,
} from "../actions/types"


const initialState = {
    _id: "",
    id2: "",
    reason: "",
    date: "",
    time: "",
    death: ""
}

const chicksDeathReducer = (state = initialState, action) => {
    if (action.type === CHICKS_DEATH_UPDATE_ID) {
        return {
            ...state,
            _id: action.payload
        }
    }
    else if (action.type === CHICKS_DEATH_UPDATE_ID_2) {
        return {
            ...state,
            id2: action.payload
        }
    }
    else if (action.type === CHICKS_DEATH_UPDATE_REASON) {
        return {
            ...state,
            reason: action.payload
        }
    }
    else if (action.type === CHICKS_DEATH_UPDATE_DATE) {
        return {
            ...state,
            date: action.payload
        }
    }
    else if (action.type === CHICKS_DEATH_UPDATE_TIME) {
        return {
            ...state,
            time: action.payload
        }
    }
    else if (action.type === CHICKS_DEATH_UPDATE_DEATH) {
        return {
            ...state,
            death: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default chicksDeathReducer
