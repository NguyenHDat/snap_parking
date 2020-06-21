import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/ParkingPlace';

export default class ParkingPlace extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.block}>
                    <Image style={styles.icon} source={require('../../assets/img/P-icon.png')}/>
                </View>
            </View>
        );
    }
}