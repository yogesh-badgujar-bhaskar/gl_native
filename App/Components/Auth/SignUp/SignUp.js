import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {
  CONFIRM_PASSWORD,
  EMAIL,
  email_error,
  FIRSTNAME,
  FIRSTNAME_ERROR,
  LASTNAME,
  LASTNAME_ERROR,
  MOBILE_NO,
  PASSWORD,
} from '../../../../common/CommonMsg';
import {
  Account,
  Email_icons,
  eye_outline_icon,
  lock,
  phone_icon,
} from '../../../../common/icons';
import styles from './styles/styles';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'outlined',
      backgroundImage: require('../../../assets/sign_up_bg_screen.png'),
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPASSWORD: '',
      isError: false,
      emailError: '',
      firstNameError: '',
      lastNameError: '',
    };
  }
  firstNameValidator = () => {
    const {firstName} = this.state;
    if (firstName == '') {
      this.setState({firstNameError: FIRSTNAME_ERROR});
    } else {
      this.setState({firstNameError: '', lastNameError: ''});
    }
  };

  lastNameValidator = () => {
    const {lastName} = this.state;
    if (lastName == '') {
      this.setState({lastNameError: LASTNAME_ERROR});
    } else {
      this.setState({la});
    }
  };
  render() {
    const {
      mode,
      backgroundImage,
      emailError,
      firstNameError,
      lastNameError,
    } = this.state;
    return (
      <View style={styles.View_container}>
        <ScrollView>
          <View style={styles.image_view}>
            <Image source={backgroundImage} style={styles.image_style} />
          </View>

          <View>
            <View style={styles.textinput}>
              <TextInput
                label={FIRSTNAME}
                mode={mode}
                onChangeText={firstname =>
                  this.setState({firstName: firstname})
                }
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={Account} />}
                onBlur={() => this.firstNameValidator()}
              />

              <Text style={{color: 'red'}}> {firstNameError} </Text>

              <TextInput
                label={LASTNAME}
                mode={mode}
                onChangeText={lastname => this.setState({lastName: lastname})}
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={Account} />}
                onBlur={() => this.lastNameValidator()}
              />

              <Text style={{color: 'red'}}> {firstNameError} </Text>

              <TextInput
                label={EMAIL}
                mode={mode}
                onChangeText={email => this.setState({email: email})}
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={Email_icons} />}
              />

              <TextInput
                label={MOBILE_NO}
                mode={mode}
                onChangeText={phonenumber =>
                  this.setState({phoneNumber: phonenumber})
                }
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={phone_icon} />}
              />

              <TextInput
                label={PASSWORD}
                mode={mode}
                onChangeText={password => this.setState({password: password})}
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={lock} />}
                right={<TextInput.Icon name={eye_outline_icon} />}
              />

              <TextInput
                label={CONFIRM_PASSWORD}
                mode={mode}
                onChangeText={con_password =>
                  this.setState({confirmPASSWORD: con_password})
                }
                style={styles.input_common}
                theme={{colors: {primary: '#1E90FF'}}}
                left={<TextInput.Icon name={lock} />}
              />

              <View style={styles.action_view}>
                <Button
                  mode="contained"
                  style={styles.SignUp_styles}
                  onPress={() => this.props.navigation.navigate('Home')}
                  theme={{colors: {primary: '#4682B4'}}}>
                  SignUp
                </Button>
              </View>
              <TouchableOpacity>
                <Text
                  style={styles.backtologin_styles}
                  onPress={() => this.props.navigation.navigate('SignIn')}>
                  {' '}
                  Back to Login{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
