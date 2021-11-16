import { combineReducers } from "redux"
import othersReducer from "./othersReducer"
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer"
import feedReducer from "./feedReducer"
import feedFinishReducer from "./feedFinishReducer"
import medicineReducer from "./medicineReducer"
import chicksReducer from "./chicksReducer"
import chicksDeathReducer from "./chicksDeathReducer"

const rootReducer = combineReducers({
    othersReducer,
    registerReducer,
    loginReducer,
    feedReducer,
    feedFinishReducer,
    medicineReducer,
    chicksReducer,
    chicksDeathReducer
})

export default rootReducer;