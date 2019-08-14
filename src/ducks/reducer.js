const initialState = {
    email: '',
    user_id: 0,
    is_admin: false 
}

const SET_USER = 'SET_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    payload: user
  }
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_USER: 
    const {email, user_id, is_admin} = payload
    return {...state, email, user_id, is_admin}
    default: return state
  }
}