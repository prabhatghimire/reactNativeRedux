const themes = {
  dark: {
    backgroundColor: 'black',
    textColor: 'white',
  },
  light: {
    backgroundColor: 'white',
    textColor: 'black',
  },
};

const initalState = {
    backgroundColor: 'white',
    textColor: 'black',
};

export const themeReducer = (state=initalState, action) => {
  switch (action.type) {
    case 'DARK':
      return {...state, ...themes.dark};
    case 'LIGHT':
      return {...state, ...themes.light};
    default:
      return state;
  }
};
