const React = require("react-native");
import { Dimensions } from "react-native";
// import RadioButtonGroup from "react-native-paper/lib/typescript/src/components/RadioButton/RadioButtonGroup";

const { StyleSheet } = React;
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default {
    scene: {
        flex: 1,
        // backgroundColor: '#2c3e50'
    },
    noLabel: {
        display: 'none',
        height: 0,
    },
    bubble: {
        backgroundColor: '#2c3e50',
        paddingHorizontal: 18,
        paddingVertical: 12,
        // borderRadius: 10,
    },


    // ------------------------- Home page View -------------------------------

    logoView: {
        alignItems: 'center',
        paddingTop: 24,
        // position: 'absolute',
        // top: 24
        // paddingBottom: 24,
        

    },
    logo: {
        width: 100, 
        height: 100,
    },

    centerRow: {
        flexDirection: 'row',
        width: deviceWidth,
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
    },
    carParkingBtn: {
        backgroundColor: 'rgba(0, 173, 181, 0.4)',
        width: deviceWidth/3,
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        marginRight: 16,
        // marginTop: 48,
        borderRadius: 20,
        // borderColor: '#008080',
        // borderWidth: 2
    },
    carParkingImg: {
        width: 60, 
        height: 60
    },
    carParkingTxt: {
        fontFamily: 'VoltaireRegular',
        marginTop: 8,
        fontSize: 20,
        color: '#fff'
    },

    parkingPlaceBtn: {
        backgroundColor: 'rgba(0, 173, 181, 0.4)',
        width: deviceWidth/3,
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        marginLeft: 16,
        // marginTop: 48,
        borderRadius: 20,
        // borderColor: '#008080',
        // borderWidth: 2
    },
    parkingPlaceImg: {
        width: 60, 
        height: 60
    },
    parkingPlaceTxt: {
        fontFamily: 'VoltaireRegular',
        fontSize: 20,
        marginTop: 8,
        color: '#fff',
        // fontWeight: 'bold'
    },

    supportBtn: {
        backgroundColor: 'rgba(0, 173, 181, 0.4)',
        width: deviceWidth/3,
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        // marginLeft: 16,
        marginTop: 32,
        borderRadius: 20,
        // borderColor: '#008080',
        // borderWidth: 2
    },
    supportImg: {
        width: 60, 
        height: 60
    },
    supportTxt: {
        fontFamily: 'VoltaireRegular',
        marginTop: 8,
        fontSize: 20,
        color: '#fff',
        // fontWeight: 'bold'
    },



    // ------------------------- Profile View -------------------------------

    profileBlock: {
        flexDirection: 'row',
        marginTop: 48,
        marginLeft: 16
    },
    avt: {
        width: 100,
        height: 100
    },
    info: {
        paddingLeft: 32
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    name: {
        color: '#eeeeee',
        fontFamily: 'UTM-Swiss-CondensedBold',
        fontSize: 32,
        marginBottom: 16
    },
    icon: {
        color: '#eeeeee' 
    },
    infoTxt: {
        color: '#eeeeee',
        fontFamily: 'UTM-Swiss-Condensed',
        fontSize: 20,
        marginLeft: 16
    },
    manageProfileBtn: {
        width: deviceWidth*2/3,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(57, 62, 70, 0.5)',
        borderRadius: 20,
        marginBottom: 32,
        marginTop: 32
    },
    changePasswordBtn: {
        width: deviceWidth*2/3,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(57, 62, 70, 0.5)',
        borderRadius: 20,
    },
    btnLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    txt: {
        fontFamily: 'VoltaireRegular',
        marginLeft: 16,
        color: '#eeeeee',
        fontSize: 24, 
        
    },


    // ------------------------- Profile View -------------------------------

    roundLogo: {
        width: 50,
        height: 50
    },
    logoBlock: {
        flexDirection: 'row',
        marginTop: 48,
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 5,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        backgroundColor: 'rgba(57, 62, 70, 0.4)',
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#353b48'
    },
    aboutTxt: {
        paddingTop: 8,
        paddingLeft: 16,
        fontFamily: 'VoltaireRegular',
        fontSize: 16,
        color: '#eeeeee'
    },
    version: {
        paddingTop: 4,
        paddingLeft: 16,
        paddingBottom: 16,
        fontFamily: 'VoltaireRegular',
        fontSize: 12,
        color: '#eeeeee'
    }

}





