import React from 'react';
import styles from "../../styles/RegisterStyle";
import {Keyboard, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Checkbox} from 'react-native-paper';
import { createStackNavigation} from 'react-navigation';
import * as Constants from '../../common/constants';

export default class Register extends React.Component {
    state = {
        ischecked: false,
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        re_password: '',
        email: ''
    };


    render() {
        const { ischecked } = this.state;
        return (
            <View style={styles.containerView}>
                <View style={styles.topView}>
                    <View style={styles.imageLogoView}>
                        <Image style={styles.imageLogo} source = {require('../../assets/img/ic_launcher.png')} />   
                    </View>
                    <Text style={styles.txt1}>
                        Don't have an account
                    </Text>
                    <Text style={styles.txt2}>
                        New user
                    </Text>
                </View>
                <ScrollView style={styles.bottomView}>
                    <Text style={styles.txt3}>
                        Sign up
                    </Text>
                    <TextInput 
                        value={this.state.username}
                        onChangeText={(username) => this.setState({username})}
                        placeholder="Username" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} />
                    <TextInput 
                        value={this.state.firstname}
                        onChangeText={(firstname) => this.setState({firstname})}
                        placeholder="First name" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} />
                    <TextInput 
                        value={this.state.lastname}
                        onChangeText={(lastname) => this.setState({lastname})}
                        placeholder="Last name" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} />
                    <TextInput 
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        placeholder="Password" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} 
                        secureTextEntry={true}/>
                    <TextInput 
                        value={this.state.re_password}
                        onChangeText={(re_password) => this.setState({re_password})}
                        placeholder="Confirm Password" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} 
                        secureTextEntry={true}/>
                    <TextInput 
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        placeholder="Email" 
                        placeholderColor="#fff" 
                        style={styles.registerFormTextInput} />
                    <View style={styles.checkbox}>
                        <Checkbox
                            title='checkbox'
                            status={ischecked ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ ischecked: !ischecked }); }}
                        />
                        <Text style={styles.txt4}>I agree to the Terms of Service and Privacy Policy.</Text>
                    </View>
                    <View style={styles.signUpView}>
                        <TouchableOpacity style={styles.signUpBtn} onPress={() => this.register()}>
                            <Text style={styles.signUpTxt}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.reLoginBtn}>
                            <Text style={styles.reLoginTxt}>
                                I'm already member
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    register() {
        fetch( Constants.BASE_URL + '/account/register/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                re_password: this.state.re_password,
                email: this.state.email,
                first_name: this.state.firstname,
                last_name: this.state.lastname
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            this.setState(
            {
                isLoading: false,
                dataSource: responseJson,
            },
                function() {
                // if (this.state.dataSource.token){
                //     this.props.navigation.navigate('HomePage');
                    if(this.state.dataSource.message){
                        this.props.navigation.navigate('Login');
                    }
                    console.log(this.state.dataSource);
                // }
                }
            );
        })
        .catch(error => {
            console.error(error);
        })
    }
}