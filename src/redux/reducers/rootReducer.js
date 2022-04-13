import { combineReducers } from "redux"
import adminReducer from "./adminReducer"
import othersReducer from "./othersReducer"
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer"
import feedReducer from "./feedReducer"
import feedFinishReducer from "./feedFinishReducer"
import medicineReducer from "./medicineReducer"
import chicksReducer from "./chicksReducer"
import chicksDeathReducer from "./chicksDeathReducer"
import othersExpenseReducer from "./othersExpensesReducer"

const rootReducer = combineReducers({
    adminReducer,
    othersReducer,
    registerReducer,
    loginReducer,
    feedReducer,
    feedFinishReducer,
    medicineReducer,
    chicksReducer,
    chicksDeathReducer,
    othersExpenseReducer
})

export default rootReducer;