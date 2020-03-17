const React = require("react-native");
import { Dimensions } from "react-native";

const { StyleSheet } = React;
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default {
    containerView: {
        flex: 1,
    },
    topView: {
        backgroundColor: '#008080',
        height: deviceHeight/3,
        paddingLeft: 16,
        paddingRight: 16
    },
    bottomView: {
        backgroundColor: '#2c3e50',
        height: deviceHeight*2/3,
        paddingLeft: 16,
        paddingRight: 16
    },
    imageLogoView: {
        alignItems: 'center',
        marginTop: 30
    },
    imageLogo: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    txt1: {
        color: '#fff',
        fontFamily: 'VoltaireRegular',
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16
    },
    txt2: {
        color: '#fff',
        fontFamily: 'VoltaireRegular',
        fontSize: 32,
        marginLeft: 16,
        marginRight: 16
    },
    txt3: {
        color: '#fff',
        fontFamily: 'UTMSeagull',
        fontSize: 28,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16
    },
    registerFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 1,
        borderBottomWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#2c3e50',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 5,
        color: '#fff',
        fontFamily: 'VoltaireRegular',
        paddingLeft: 0
    },
    checkbox: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 5
    },
    txt4: {
        marginTop: 10,
        color: '#fff',
        fontFamily: 'VoltaireRegular',
    },
    signUpView: {
        flexDirection: 'row'
    },
    signUpBtn: {
        backgroundColor: '#008080',
        width: deviceWidth/3,
        alignItems: 'center',
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 16,
        marginTop: 16
    },
    signUpTxt: {
        color: '#fff',
        fontFamily: 'VoltaireRegular',
    },
    reLoginBtn: {
        width: deviceWidth*2/3,
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 16,
        marginTop: 16
    },
    reLoginTxt: {
        color: '#6a6a6a',
        fontFamily: 'VoltaireRegular',
    }
}