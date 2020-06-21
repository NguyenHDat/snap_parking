import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../containers/login/login';
import Register from '../containers/register/register';
import HomePage from '../containers/homepage/homepage';
import CarParking from '../containers/homepage/carparking';
import NearParkingPlace from '../containers/homepage/nearParkingPlace';
import ParkingPlace from '../containers/homepage/parkingPlace';
import Direction from '../components/mapView/mapView';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false,
        },
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false
        }
    },
    CarParking: {
        screen: CarParking,
        navigationOptions: {
            headerShown: false
        }
    },
    NearParkingPlace: {
        screen: NearParkingPlace,
        navigationOptions: {
            headerShown: false
        }
    },
    ParkingPlace: {
        screen: ParkingPlace,
        navigationOptions: {
            headerShown: false
        }
    },
    Direction: {
        screen: Direction,
        navigationOptions: {
            headerShown: false
        }
    }
};
const stack = createStackNavigator(screens);
export default createAppContainer(stack);