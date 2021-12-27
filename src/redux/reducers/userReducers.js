const initialState = { UID : 0};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, ...{UID: 1}};
    case 'SIGN_UP':
      return {...state, ...{UID: 1}};
    case 'SIGN_OUT':
      return {...state, ...{UID: 0}};
    default:
      return state;
  }
};
