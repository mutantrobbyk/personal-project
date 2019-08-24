const initialState = {
    email: '',
    user_id: 0,
    is_admin: false 
}

const SET_USER = 'SET_USER'
const IS_ADMIN = 'IS_ADMIN'

export function setUser (user) {
  return {
    type: SET_USER,
    payload: user
  }
}
export function isAdmin (boolean) {
  return {
    type: IS_ADMIN,
    payload: boolean
  }
}
export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_USER: 
    const {email, user_id, is_admin} = payload
    return {...state, email, user_id, is_admin}
    case IS_ADMIN:
      return {...state, is_admin}
    default: return state
  }
}