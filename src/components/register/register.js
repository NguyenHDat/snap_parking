import React from 'react';
import styles from "../../styles/RegisterStyle";
import {Keyboard, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';

export default class Register extends React.Component {
    state = {
        ischecked: false,
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
                <View style={styles.bottomView}>
                    <Text style={styles.txt3}>
                        Sign up
                    </Text>
                    <TextInput placeholder="Username" placeholderColor="#fff" style={styles.registerFormTextInput} />
                    <TextInput placeholder="Password" placeholderColor="#fff" style={styles.registerFormTextInput} secureTextEntry={true}/>
                    <TextInput placeholder="Confirm Password" placeholderColor="#fff" style={styles.registerFormTextInput} secureTextEntry={true}/>
                    <TextInput placeholder="Email" placeholderColor="#fff" style={styles.registerFormTextInput} />
                    <View style={styles.checkbox}>
                        <Checkbox
                            title='checkbox'
                            status={ischecked ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ ischecked: !ischecked }); }}
                        />
                        <Text style={styles.txt4}>I agree to the Terms of Service and Privacy Policy.</Text>
                    </View>
                    <View style={styles.signUpView}>
                        <TouchableOpacity style={styles.signUpBtn}>
                            <Text style={styles.signUpTxt}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.reLoginBtn}>
                            <Text style={styles.reLoginTxt}>
                                I'm already member
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}