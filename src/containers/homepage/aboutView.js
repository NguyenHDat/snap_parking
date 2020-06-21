import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "../../styles/Homepage";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function About() {
    return (
        <View style={styles.scene}>
            <ImageBackground source={require('../../assets/img/abstract_background_5.jpg')} style={{ flex: 1, resizeMode: 'contain' }}>
                <View style={styles.logoBlock}>
                    <Image style={styles.roundLogo} source={(require('../../assets/img/ic_launcher_round.png'))} />
                    <View>
                        <Text style={[styles.aboutTxt, { paddingBottom: 16 }]}>Snap Parking</Text>
                        <Text style={styles.aboutTxt}>Version</Text>
                        <Text style={styles.version}>1.0</Text>
                    </View>
                </View>
                <View style={styles.authorBlock}>

                </View>
            </ImageBackground>
        </View>
    )
}