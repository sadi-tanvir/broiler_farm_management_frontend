import {
  OTHERS_EXPENSE_UPDATE_ID,
  OTHERS_EXPENSE_UPDATE_ID_2,
  OTHERS_EXPENSE_UPDATE_NAME,
  OTHERS_EXPENSE_UPDATE_DESCRIPTION,
  OTHERS_EXPENSE_UPDATE_CATEGORY,
  OTHERS_EXPENSE_UPDATE_PRICE,
  OTHERS_EXPENSE_UPDATE_DATE
} from "../actions/types";

const initialState = {
  _id: "",
  id2: "",
  name: "",
  description: "",
  category: "",
  price: "",
  date: ""
};

const othersExpenseReducer = (state = initialState, action) => {
  if (action.type === OTHERS_EXPENSE_UPDATE_ID) {
    return {
      ...state,
      _id: action.payload,
    };
  } else if (action.type === OTHERS_EXPENSE_UPDATE_ID_2) {
    return {
      ...state,
      id2: action.payload,
    };
  } else if (action.type === OTHERS_EXPENSE_UPDATE_NAME) {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === OTHERS_EXPENSE_UPDATE_DESCRIPTION) {
    return {
      ...state,
      description: action.payload,
    };
  } else if (action.type === OTHERS_EXPENSE_UPDATE_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  } else if (action.type === OTHERS_EXPENSE_UPDATE_PRICE) {
    return {
      ...state,
      price: action.payload,
    };
  }else if (action.type === OTHERS_EXPENSE_UPDATE_DATE) {
    return {
      ...state,
      date: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default othersExpenseReducer;
