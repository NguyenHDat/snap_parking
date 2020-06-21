import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import styles from "../../styles/Homepage";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Constants from '../../common/constants';

export default class Account extends React.Component {
    state = {
        token: 'Token ' + this.props.navigation.state.params.token,
        isLoading: true,
    }
    componentDidMount() {
        this.getInfo();
    }
    getInfo() {
        fetch(Constants.BASE_URL + '/account/userinfo/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.state.token
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson,
                    },
                    function () {

                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.scene}>
                <ImageBackground source={require('../../assets/img/abstract_background_5.jpg')} style={{ flex: 1, resizeMode: 'contain' }}>
                    <View style={styles.profileBlock}>
                        <View>
                            <Image style={styles.avt} source={require("../../assets/img/account.png")} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>{this.state.dataSource.first_name + ' ' + this.state.dataSource.last_name}</Text>
                            <View style={styles.infoItem}>
                                <Icon name='place' style={styles.icon} size={24} />
                                <Text style={styles.infoTxt}>HCMC, Vietnam</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Icon name='mail' style={styles.icon} size={24} />
                                <Text style={styles.infoTxt}>{this.state.dataSource.email}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Icon name='smartphone' style={styles.icon} size={24} />
                                <Text style={styles.infoTxt}>096758358</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row, {alignSelf: 'center'}}>
                        <TouchableOpacity style={styles.manageProfileBtn}>
                            <Image style={styles.btnLogo} source={require('../../assets/img/white_manage-profile.png')} />
                            <Text style={styles.txt}>Manage Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row, {alignSelf: 'center'}}>
                        <TouchableOpacity style={styles.changePasswordBtn}>
                            <Image style={styles.btnLogo} source={require('../../assets/img/white_change-password.png')} />
                            <Text style={styles.txt}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}