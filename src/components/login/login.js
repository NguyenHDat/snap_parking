import React, { Component } from "react";

import styles from "../../styles/LoginStyle";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Image, TouchableOpacity} from 'react-native';

const appId = "1047121222092614"

export default function LoginScreen({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Register');
  }

  // render() {
    return (
      <View style={styles.containerView} behavior="padding">
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style={styles.logoImageContainer}>
              <Image 
                style= {styles.logoImage}
                source={require('../../assets/img/ic_launcher.png')}/>
            </View>
            <View>
              <Text style={styles.logoText}>Welcome!</Text>
              <Text style={styles.subText}>Join us for easy parking</Text>
              <TextInput placeholder="Username" placeholderColor="#fff" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#fff" style={styles.loginFormTextInput} secureTextEntry={true}/>
            </View>
            <View style={styles.loginButtonView}>
              <TouchableOpacity onPress={() => this.onLoginPress()}>
              <Image 
                style= {styles.loginButton}
                source={require('../../assets/img/arrow.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={pressHandler}>
              <Text style={styles.newUser}>
                New user? <Text style={styles.signUp}>Register now </Text>
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </View>
    );
  // }
  // async onFbLoginPress() {
  //   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
  //     permissions: ['public_profile', 'email'],
  //   });
  //   if (type === 'success') {
  //     const response = await fetch(
  //       `https://graph.facebook.com/me?access_token=${token}`);
  //     Alert.alert(
  //       'Logged in!',
  //       `Hi ${(await response.json()).name}!`,
  //     );
  //   }
  // }
}
