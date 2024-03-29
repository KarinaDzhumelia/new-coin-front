import React from 'react';

import {View, Image, KeyboardAvoidingView, StyleSheet} from 'react-native';

import InputField from '../reusable/InputField';

import ButtonComponent from '../reusable/ButtonComponent';

import LinkComponent from '../reusable/LinkComponent';

const SignIn = ({ navigation }) => {
  return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <InputField title="Email" placeholder="Enter email"/>
            <InputField title="Password" placeholder="Enter password"/>
        </View>
        <ButtonComponent value="Enter" link="Favorites"/>
        <LinkComponent textValue="Don't have an account yet? " link="SignUp" value="Register here"/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
});


export default SignIn;