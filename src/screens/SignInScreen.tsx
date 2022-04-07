import React, {useState} from 'react'
import { StyleSheet, Text, View , Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../assets/images/wtw.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButon/CustomButton';

const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    
    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    const onCreateAccountPressed = () => {
        console.warn("CreateAccount");
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.5}]}
            resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Sign In" 
                onPress={onSignInPressed}
            />

            <CustomButton text="Forgot password?" 
                onPress={onForgotPasswordPressed} 
                type= "TERTIARY"
            />

            <CustomButton text="Don't have an account? Create one here" 
                onPress={onCreateAccountPressed} 
                type= "TERTIARY"/>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
       alignItems: 'center',
       padding: 20, 
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        height: 500,
    },
});

export default SignInScreen