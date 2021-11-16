import { SIDEBAR_OPEN, SIDEBAR_COLLAPSE } from "../actions/types"


const initialstate = {
    sidebar: false
}

const othersReducer = (state = initialstate, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return {
            ...state,
            sidebar: true
        }
    } else if (action.type === SIDEBAR_COLLAPSE) {
        return {
            ...state,
            sidebar: false
        }
    } else {
        return state
    }
}

export default othersReducer