const React = require("react-native");

import { Dimensions } from "react-native";

const { StyleSheet } = React; 

export default {
    mapView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 30,

    },
    searchView: {
        width: Dimensions.get('window').width -48,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 173, 181, 0.7)',
        // marginTop: 60,
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 50,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        marginRight: 8,
        // position: 'absolute',
    },
    searchTxt: {
        color: '#fff',
        marginLeft: 16, 
        fontSize: 22,
        maxWidth: Dimensions.get('window').width -108,
        // maxWidth: 100,
        fontFamily: 'UTM-Swiss-Condensed',
        
    },
    bottomView: {
        height: 125,
        bottom: 0,
        alignItems: 'center',
    },
    parkingPlaceBtn: {
        bottom: 25,
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50
    },
    filter: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center',
    },
    filterItem: {
        backgroundColor: 'rgba(0, 173, 181, 0.7)',
        padding: 8,
        width: Dimensions.get('window').width*0.2,
        alignItems: 'center',
        borderRadius: 5
    },
    filterTxt: {
        fontFamily: 'UTM-Swiss-CondensedBold',
        color: '#eeeeee'
    }
}