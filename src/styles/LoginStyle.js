const React = require("react-native");

const { StyleSheet } = React;

export default {

  containerView: {
    flex: 1
  },
  loginScreenContainer: {
    flex: 1,
    // backgroundColor: '#008080',
  },
  logoImageContainer: {
    alignItems: 'center',

  },
  logoImage: {
    marginTop: 50,
    height: 100,
    width: 100
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 0,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'UTMSeagull',
    // color: '#fff'
  },
  subText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'UTMSeagull',
    // color: '#fff',
    marginBottom: 48
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',
    fontFamily: 'UTMSeagull',
  },
  loginButtonView: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#00adb5',
  },
  loginButton: {
    backgroundColor: '#eeeeee',
    borderRadius: 50,
    height: 60,
    width: 60,
    marginBottom: 25
  },
  newUser: {
    fontSize: 16,
    color: '#393e46',
    fontFamily: 'UTMSeagull'
  },
  signUp: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'UTMSeagull',
    color: '#fff'
  },
  bottomView: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#00adb5',
    paddingTop: 16
  }
};