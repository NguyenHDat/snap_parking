import React from 'react';
import SplashScreen from './src/components/splashScreen/SplashScreen';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigation from './src/navigators/Router';
export default class Application extends React.Component {
  state = {
    fontLoaded: false,
    view: null,
  };
  componentWillMount() {
    this.setState({
        view : <SplashScreen />
    });
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
    }, 3000) //TIME OF WAITING
  }
  async componentDidMount() {
    await Font.loadAsync({
      'VoltaireRegular': require('./src/assets/fonts/Voltaire-Regular.ttf'),
      'UTMSeagull': require('./src/assets/fonts/UTM-SeagullBold.ttf'),
      'UTM-Swiss-Condensed': require('./src/assets/fonts/UTM-Swiss-Condensed.ttf'),
      'UTM-Swiss-CondensedBold': require('./src/assets/fonts/UTM-Swiss-CondensedBold.ttf'),
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