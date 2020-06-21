import Dimension, { Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default {
    mapView: {
        height: deviceHeight,
        width: deviceWidth
    }
}