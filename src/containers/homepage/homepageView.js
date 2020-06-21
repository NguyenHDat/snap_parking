import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "../../styles/Homepage";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default class CarParking extends React.Component {
    render() {
        return (
            <View style={styles.scene}>
                <ImageBackground source={require('../../assets/img/abstract_background_2.jpg')} style={{ flex: 1, resizeMode: 'contain'}}>
                    {/* <LinearGradient colors={['#2c3e50', '#008080', '#fff']} */}
                    {/* style={{ flex: 1 }}>  */}
                    <View style={styles.logoView}>
                        <Image style={styles.logo} source={require("../../assets/img/ic_launcher.png")} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <View style={styles.centerRow}>
                            <TouchableOpacity style={styles.carParkingBtn}
                                onPress={() => this.props.navigation.navigate('CarParking')}>
                                <Image style={styles.carParkingImg} source={require('../../assets/img/white_carparking_ic.png')} />
                                <Text style={styles.carParkingTxt}>Car Parking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.parkingPlaceBtn}
                                onPress={() => this.props.navigation.navigate('ParkingPlace')}>
                                <Image style={styles.parkingPlaceImg} source={require('../../assets/img/white_location_ic.png')} />
                                <Text style={styles.parkingPlaceTxt}>Parking Place</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.centerRow}>
                            <TouchableOpacity style={styles.supportBtn}>
                                <Image style={styles.supportImg} source={require('../../assets/img/white_support_ic.png')} />
                                <Text style={styles.supportTxt}>Support</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* </LinearGradient> */}
                </ImageBackground>
            </View>
        )
    }
}