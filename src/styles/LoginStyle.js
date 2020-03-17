const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1
},
loginScreenContainer: {
  flex: 1,
  backgroundColor: '#008080',
},
logoImageContainer: {
  alignItems: 'center',
},
logoImage : {
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
  color: '#fff'
},
subText: {
  fontSize: 26,
  textAlign: 'center',
  fontFamily: 'UTMSeagull',
  color: '#fff',
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
  backgroundColor: '#008080',
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
  marginTop: 50,
  alignItems: 'center'
},
loginButton: {
  backgroundColor: '#fff',
  borderRadius: 50,
  height: 60,
  width: 60,
  marginBottom: 25
},
newUser: {
  fontSize: 16,
  color: '#9a9696',
  fontFamily: 'UTMSeagull'
},
signUp: {
  fontSize: 16,
  fontFamily: 'UTMSeagull',
  color: '#fff'
}
};