import { normalize } from "react-native-elements";

const React = require("react-native");

const { StyleSheet } = React;

export default {

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    containerLogo: {
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: normalize(40),
        color: '#fff'
    },
    touchableView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 45,
        fontWeight: '400',
        color: '#253039'
    },
    touchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};