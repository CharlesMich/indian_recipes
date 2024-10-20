import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { email, password } = user;

  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// export const checkEmail = (email, OTP) => async (dispatch) => {
//   
//   const response = await csrfFetch("/api/session/check", {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//       OTP
//     }),
//   })
//   const data = await response.json();

//   return data;
// }

export const signup = (user) => async (dispatch) => {
  const { username, first_name, last_name, resident_code, email, password, captchaValue} = user;
  
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      resident_code,
      verified:"pending",
      type:"owner",
      email,
      password,
      captchaValue
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const updateProfile = (newInfo) => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method: "PUT",
    body:JSON.stringify(newInfo)
  })
  return response;
}

export const updateProfile1 = (newInfo) => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method:"PATCH",
    body:JSON.stringify(newInfo)
  })
  const data = await response.json();
  dispatch(setUser(data.user));
  return data;
}

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return data;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;