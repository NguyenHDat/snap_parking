import React from 'react';
import styles from '../../styles/SplashScreen';
import {
    Easing,
    StyleSheet,
    Text,
    View,
    Image,
    Animated
  } from 'react-native';

import CircleTransition from 'react-native-expanding-circle-transition';
const ANIMATION_DURATION = 1200
const INITIAL_VIEW_BACKGROUND_COLOR = '#fff'
const CIRCLE_COLOR1 = '#00B8D4'
// const CIRCLE_COLOR1 = '#008080'
const TRANSITION_BUFFER = 10
const POSITON = 'topLeft'

const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin';

export default class SplashScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          viewBackgroundColor: INITIAL_VIEW_BACKGROUND_COLOR,
          circleColor: CIRCLE_COLOR1,
          customLeftMargin: 0,
          customTopMargin: 0,
          counter: 0,
          logoStatus: 'none',
          opacity: new Animated.Value(0),
        }
        this.handlePress = this.handlePress.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    componentDidMount(){
        this.handlePress(),
        this.onLoad()
    }
    handlePress () {
        this.setState({
          customLeftMargin: 0,
          customTopMargin: 0
        }, this.circleTransition.start(this.changeColor))
    }
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
    changeColor () {
        const { circleColor, counter } = this.state
        let newCounter = counter < 3 ? counter + 1 : 0
        let newCircleColor = this.getColor(newCounter)
        this.setState({
          viewBackgroundColor: circleColor,
          counter: newCounter
        })
        this.changeCircleColor(newCircleColor)
    }
    changeCircleColor (newCircleColor) {
        this.setTimeout(() => {
          this.setState({
            circleColor: newCircleColor,
            logoStatus: 'flex'
          })
        }, TRANSITION_BUFFER + 5)
    }
    getColor (counter) {
        return CIRCLE_COLOR1
    }
    render() {
        let {
            circleColor,
            viewBackgroundColor,
            customTopMargin,
            customLeftMargin,
            logoStatus
        } = this.state
        return (
          <View style={[styles.container,
              {
                backgroundColor: viewBackgroundColor
              }]}>
              <View style={[styles.containerLogo, {display: logoStatus}]}>
                  <Animated.Image
                    // onLoad={this.onLoad}
                    source = {require('../../assets/img/ic_launcher.png')}
                    style={[
                      {
                        opacity: this.state.opacity,
                        transform: [
                          {
                            scale: this.state.opacity.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.85, 1],
                            })
                          },
                        ],
                      },
                      this.props.style,
                    ]}
                  />
              </View>
              <View style={[styles.title, {display: logoStatus}]}>
                <Animated.Text
                    style={[
                      {
                        fontFamily:'VoltaireRegular',
                        opacity: this.state.opacity,
                        transform: [
                          {
                            scale: this.state.opacity.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.85, 1],
                            })
                          },
                        ],
                      },
                      this.props.style,
                      styles.titleText
                    ]}
                    ><Text>SNAP PARKING</Text></Animated.Text>
              </View>
              <CircleTransition
                ref={(circle) => { this.circleTransition = circle }}
                color={circleColor}
                expand
                customTopMargin={customTopMargin}
                customLeftMargin={customLeftMargin}
                transitionBuffer={TRANSITION_BUFFER}
                duration={ANIMATION_DURATION}
                easing={Easing.linear}
                position={POSITON}
              />
          </View>
        )
    }
}
reactMixin(SplashScreen.prototype, TimerMixin)