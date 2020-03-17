import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/login/login';
import Register from '../components/register/register';
import SplashScreen from '../components/splashScreen/SplashScreen';

const screen = {
    // SlashScreen: {
    //     screen: SplashScreen,
    //     navigationOptions: {
    //         header: null,
    //       },
    // },
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
    }
};
const stack = createStackNavigator(screen);
export default createAppContainer(stack);