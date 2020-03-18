const initialState = {
  email: "",
  user_id: 0,
  is_admin: false
};

const SET_USER = "SET_USER";
const IS_ADMIN = "IS_ADMIN";
const CLEAR_USER_INFO = "CLEAR_USER_INFO";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
export function isAdmin(boolean) {
  return {
    type: IS_ADMIN,
    payload: boolean
  };
}
export function clearUserInfo() {
  return {
    type: CLEAR_USER_INFO
  };
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      const { email, user_id, is_admin } = payload;
      return { ...state, email, user_id, is_admin };
    case IS_ADMIN:
      return { ...state, is_admin };
    case CLEAR_USER_INFO:
      return { ...state, email: "", user_id: 0, is_admin: false };
    default:
      return state;
  }
};
