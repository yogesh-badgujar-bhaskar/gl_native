import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import {Account, lock} from '../../../../../common/icons';
import styles from './styles/signin';
import {
  EMAIL,
  EMAIL_LABLE,
  FORGOT_PASSWORD,
  PASSWORD_ERROR,
  PASSWORD_LABLE,
} from '../../../../../common/CommonMsg';

/***********************SIGN_IN PAGE DESIGN ***************************************************/

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      isError: false,
      errorMsg: false,
      mode: 'outlined',
      loginScreenBackground: require('../../../../assets/login_screen_background.jpg'),
    };
  }

  /* here the validation function were validate inputs */

  validation() {
    const {email, password} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    if (reg.test(email) == '') {
      this.setState({isError: true, errorMsg: EMAIL});
      return false;
    } else if (strongRegex.test(password) == '') {
      this.setState({isError: true, errorMsg: PASSWORD_ERROR});
      return false;
    } else {
      this.setState({isError: false, errorMsg: false});
      return true;
    }
  }

  /* API Call for login */

  signInUser = async () => {
    if (this.validation()) {
      const {navigation} = this.props.navigation;

      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(res => res.json())

        .then(async data => {
          try {
            await AsyncStorage.setItem('token', data.token);
            //console.log('Login SuccessFully', this.props);
            // this.props.navigation.navigate('Home');
            RNRestart.Restart();
          } catch (e) {
            console.log('Error', e);
          }
        });
    }
  };

  /* Email validation when user put it blank */

  emailValidator = () => {
    const {email} = this.state;
    if (email == '') {
      this.setState({emailError: email_error});
    } else {
      this.setState({emailError: ''});
    }
  };

  passwordValidator = () => {
    const {password} = this.state;
    if (password == '') {
      this.setState({passwordError: PASSWORD_ERROR});
    } else {
      this.setState({passwordError: ''});
    }
  };

  render() {
    const {
      isError,
      errorMsg,
      loginScreenBackground,
      email,
      emailError,
      passwordError,
      mode,
    } = this.state;
    return (
      <View>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Image source={loginScreenBackground} style={styles.topImage} />
          </View>

          <View>
            <Text style={styles.welcome_text}> W E L C O M E </Text>
            <View style={styles.textinput}>
              <TextInput
                label={EMAIL_LABLE}
                mode={mode}
                onChangeText={email => this.setState({email: email})}
                value={email}
                style={styles.textinput_style}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={Account} />}
                onBlur={() => this.emailValidator()}
              />

              <Text style={{color: 'red'}}> {emailError} </Text>

              <TextInput
                label={PASSWORD_LABLE}
                mode={mode}
                onChangeText={password => this.setState({password: password})}
                value={this.state.password}
                style={styles.textinput_style}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={lock} />}
                secureTextEntry
                // right={<TextInput.Icon name="eye-outline" />}
                onBlur={() => this.passwordValidator()}
              />

              <Text style={{color: 'red'}}> {passwordError} </Text>

              {
                // here we describe if email include condition and password condition validation
                (this.state.isError = true && (
                  <HelperText type="error" visible={isError}>
                    {errorMsg}
                  </HelperText>
                ))
              }

              <View style={styles.signInButtonView}>
                <Button
                  mode="contained"
                  onPress={() => {
                    this.signInUser();
                  }}
                  style={styles.signinButton}
                  theme={{colors: {primary: '#00b7eb'}}}>
                  <Text style={styles.signin_text}> SignIn </Text>
                </Button>
              </View>

              <View style={styles.signupButtonView}>
                <Button
                  mode="contained"
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={styles.signupButton}
                  theme={{colors: {primary: '#1E90FF'}}}>
                  SignUp
                </Button>
              </View>

              <View style={styles.forgotpassword}>
                <Text style={styles.forgotPassword}>{FORGOT_PASSWORD}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
