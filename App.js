import React from 'react';
import SplashScreen from './src/components/splashScreen/SplashScreen';
import LoginScreen from './src/components/login/login';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigation from './src/navigators/Router';
export default class Application extends React.Component {
  state = {
    fontLoaded: false,
    view: null
  };
  componentWillMount() {
    this.state = {
        view : <SplashScreen />
    };
    setTimeout(() => {
        //IF FALSE NAVIGATE TO ERROR
        if(true) {
            this.setState({
                view : <AppNavigation />
            });
        } else {
            this.setState({
               //  view : <Error/>
            })
        }
    }, 5000) //TIME OF WAITING
  }
  async componentDidMount() {
    await Font.loadAsync({
      'VoltaireRegular': require('./src/assets/fonts/Voltaire-Regular.ttf'),
      'UTMSeagull': require('./src/assets/fonts/UTM-SeagullBold.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        this.state.view
        // <AppNavigation/>
      );
    }
    else {
      return (
      <AppLoading/>
      )
    }
  }
}