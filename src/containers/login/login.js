import React from "react";

import styles from "../../styles/LoginStyle";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import * as Constants from '../../common/constants';

const appId = "1047121222092614"

export default class LoginScreen extends React.Component {
  state = {
    // token: '',
    username: '',
    password: '',
    mess: '',
  }
  render() {
    return (
      <View style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <View style={styles.logoImageContainer}>
                <Image
                  style={styles.logoImage}
                  source={require('../../assets/img/ic_launcher.png')} />
                <Text style={styles.logoText}>Welcome!</Text>
                <Text style={styles.subText}>Join us for easy parking</Text>
              </View>
              <View style={styles.bottomView}>
                <TextInput placeholder="Username"
                  value={this.state.username}
                  selectionColor='#eeeeee'
                  onChangeText={(username) => this.setState({ username })}
                  placeholderColor="#fff"
                  style={styles.loginFormTextInput} />
                <TextInput placeholder="Password"
                  value={this.state.password}
                  selectionColor='#eeeeee'
                  onChangeText={(password) => this.setState({ password })}
                  placeholderColor="#fff"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true} />
              </View>
              <View style={styles.loginButtonView}>
                <TouchableOpacity onPress={() => this.logIn()}>
                  <Image
                    style={styles.loginButton}
                    source={require('../../assets/img/arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register', { BASE_URL: this.state.BASE_URL })}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.newUser}>
                      New user?
                    </Text>
                    <Text style={styles.signUp}>Register now </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  logIn = async => {
    fetch(Constants.BASE_URL + '/account/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Nguyenhuandat',
        password: 'Nguyenhuandat1234',
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            token: responseJson.token || ''
          },
          function () {
            if (this.state.dataSource.token) {
              this.props.navigation.navigate('HomePage', { token: this.state.token });
              console.log(this.state.token);
            }
            else if (this.state.dataSource.non_field_errors) {
              this.setState({ mess: this.state.dataSource.non_field_errors })
            }
            console.log(this.state.dataSource);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
}
