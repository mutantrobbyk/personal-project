const initialState = {
    email: '', 
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
    const {email} = payload
    return {...state, email}
    default: return state
  }
}