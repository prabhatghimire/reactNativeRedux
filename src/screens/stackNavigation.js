import React from 'react';
import {ThemeScreen} from './themeScreen';
import {LoginScreen} from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {Pressable, Text, View} from 'react-native';
import {signOut} from '../redux/actions/userActions';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const Logout = () => {
    const onLogout = () => {
      dispatch(signOut());
    };
    return (
      <View>
        <Pressable onPress={onLogout}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Stack.Navigator>
      {user.UID ? (
        <>
          <Stack.Screen
            name="Theme"
            component={ThemeScreen}
            options={{
              headerRight: () => <Logout />,
              headerTitleAlign: 'center',
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
