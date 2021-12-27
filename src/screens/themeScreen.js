import React from 'react';
import {StyleSheet, TouchableOpacityComponent} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {LIGHT_THEME, DARK_THEME} from '../redux/actions/themeActions';

export const ThemeScreen = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <View style={{...styles.mainContainer, backgroundColor :  theme.backgroundColor}}>
      <Text style ={{color: theme.textColor}}>App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(LIGHT_THEME())}>
        <Text style ={{color: theme.textColor}}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(DARK_THEME())}>
        <Text style ={{color: theme.textColor}}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: 'skyblue',
    borderRadius: 10,
    borderWidth: 3,
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
