const React = require('react-native');
const { SheetStyle } = React;
import { Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default {
    container: {
        // backgroundColor: '#2c3e50',
        // flexGrow : 1, 
        justifyContent : 'center',
        alignItems: 'center',
        flex: 1,
    },
    mainBlock_Row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: 16,
        justifyContent: 'center',
        marginBottom: 8
    },
    mainBlock_Column: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        marginTop: 16,
        // marginLeft: 16,
        justifyContent: 'center',
    },
    leftBlock: {
        backgroundColor: 'rgba(0, 173, 181, 0.8)',
        width: deviceWidth*0.35,
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 16,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    rightBlock: {
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 16,
        backgroundColor: 'rgba(57, 62, 70, 0.7)',
        width: deviceWidth*0.55,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    whiteText: {
        color: '#fff',
        fontFamily: 'UTM-Swiss-Condensed',
    },
    text: {
        fontFamily: 'UTM-Swiss-Condensed',
    },
    expandedInfo: {
        alignItems: 'center',
        marginTop: 16,
    },
    imageParking: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: deviceWidth*0.9,
        height: 130,
        resizeMode: 'cover',
        opacity: 0.2
    },
    name: {
        position: 'absolute',
        top: 8,
        color: '#393e46',
        fontFamily: 'UTM-Swiss-CondensedBold',
        marginLeft: 16, 
        fontSize: 32
    },
    carText: {
        position: 'absolute',
        top: 8,
        right: 8, 
        color: '#393e46',
        fontFamily: 'UTM-Swiss-CondensedBold',
        marginLeft: 16, 
        fontSize: 16
    },
    carNumber: {
        position: 'absolute',
        top: 32,
        right: 8,
        color: '#393e46',
        fontFamily: 'UTM-Swiss-Condensed',
        marginLeft: 16, 
        fontSize: 16
    },
    // addText: {
    //     position: 'absolute',
    //     bottom: 48, 
    //     color: '#fff',
    //     fontFamily: 'VoltaireRegular',
    //     marginLeft: 16, 
    //     fontSize: 16
    // },
    add: {
        position: 'absolute',
        bottom: 16, 
        color: '#393e46',
        fontFamily: 'UTM-Swiss-Condensed',
        marginLeft: 16, 
        marginRight: 8,
        flexWrap: 'wrap',
        flex: 0.85,
        width: deviceWidth*0.85,
        fontSize: 16
    },
    subBlock: {
        width: deviceWidth*0.9,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    owner: {
        marginTop: 8,
        marginLeft: 16,
        marginBottom: 8,
        fontFamily: 'UTM-Swiss-CondensedBold',
    },
    ownerName: {
        marginLeft: 16,
        marginBottom: 8,
        fontFamily: 'UTM-Swiss-Condensed',
    },
    bookingBtn: {
        backgroundColor: 'rgba(0, 173, 181, 0.8)',
        marginTop: 8,
        marginBottom: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 5,
    },
    bookingTxt: {
        fontFamily: 'VoltaireRegular',
        color: '#fff',
        fontSize: 24
    },
    noParking: {
        backgroundColor: '#008080',
        // justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    noParkingTxt: {
        color: '#fff',
        fontFamily: 'VoltaireRegular',
        fontSize: 16
    }
}