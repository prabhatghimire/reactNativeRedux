import React, { useState } from "react";
import {View, TextInput, Pressable, Text} from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { signIn } from "../redux/actions/userActions";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        dispatch(signIn({email, password}))
    }

    return(
        <View style={{justifyContent:'center', alignItems : 'center'}}>
            <TextInput placeholder="username" value={email} onChangeText={(text)=>{setEmail(text)}}/>
            <TextInput placeholder="username" value={password} onChangeText={(text)=>{setPassword(text)}} secureTextEntry/>
            <Pressable onPress={onLogin}><Text>Login</Text></Pressable>
        </View>
    )
}