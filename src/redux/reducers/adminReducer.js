import {
  USERS_ID,
  USERS_USERID,
  USERS_NAME,
  USERS_EMAIL,
  USERS_PASSWORD,
  USERS_PHONE,
  USERS_ROLE,
  USERS_ACCOUNT_STATUS,
  USERS_ACCOUNT_CREATE_DATE
} from "../actions/types";

const initialState = {
  _id: "",
  userId: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  role:"",
  account_Confirmed: "",
  createdAt: ""
};

const othersExpenseReducer = (state = initialState, action) => {
  if (action.type === USERS_ID) {
    return {
      ...state,
      _id: action.payload,
    };
  } else if (action.type === USERS_USERID) {
    return {
      ...state,
      userId: action.payload,
    };
  } else if (action.type === USERS_NAME) {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === USERS_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  } else if (action.type === USERS_PASSWORD) {
    return {
      ...state,
      password: action.payload,
    };
  } else if (action.type === USERS_PHONE) {
    return {
      ...state,
      phone: action.payload,
    };
  }else if (action.type === USERS_ROLE) {
    return {
      ...state,
      role: action.payload,
    };
  } else if (action.type === USERS_ACCOUNT_STATUS) {
    return {
      ...state,
      account_Confirmed: action.payload,
    };
  }else if (action.type === USERS_ACCOUNT_CREATE_DATE) {
    return {
      ...state,
      createdAt: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default othersExpenseReducer;
